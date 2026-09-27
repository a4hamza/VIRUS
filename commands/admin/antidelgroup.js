const antiDelete = require('../../lib/antiDelete');
const safety = require('../../lib/safety');
const moderator = require('../../lib/groupModerator');

module.exports = {
  name: 'antidelgroup',
  aliases: ['antideletegroup', 'antidelgrp', 'antirevokegroup'],
  category: 'admin',
  description: 'Enable, disable or check stealth Anti-Delete for Group chats (deleted messages sent directly to owner DM)',
  usage: '.antidelgroup [on/off/status]',
  async execute({ sock, msg, from, sender, isGroup, groupMetadata, args }) {
    const isOwner = safety.isOwner(sender) || msg.key.fromMe;
    const isAdmin = isGroup && moderator.isGroupAdmin(sender, groupMetadata, msg);

    if (!isOwner && !isAdmin) {
      return sock.sendMessage(from, {
        text: '⛔ *Access Denied!*\nOnly the Bot Owner or Group Admins can configure Group Anti-Delete.'
      }, { quoted: msg });
    }

    const action = args[0]?.toLowerCase();

    if (action === 'on' || action === 'enable' || action === '1') {
      antiDelete.setGroupEnabled(true);
      return sock.sendMessage(from, {
        text: '🛡️ *Group Anti-Delete Enabled!* 🟢\n\nAll deleted messages from group chats will be recovered stealthily and delivered directly to the bot owner\'s private inbox (DM).\n_No notifications or alerts are sent into the group._'
      }, { quoted: msg });
    }

    if (action === 'off' || action === 'disable' || action === '0') {
      antiDelete.setGroupEnabled(false);
      return sock.sendMessage(from, {
        text: '⚠️ *Group Anti-Delete Disabled!* 🔴\nDeleted messages from group chats will not be captured.'
      }, { quoted: msg });
    }

    if (action === 'toggle') {
      antiDelete.setGroupEnabled(!antiDelete.isGroupEnabled());
      const newStatus = antiDelete.isGroupEnabled() ? '🟢 *ENABLED* (Sent to Private DM)' : '🔴 *DISABLED*';
      return sock.sendMessage(from, {
        text: `🛡️ *Group Anti-Delete Status:* ${newStatus}`
      }, { quoted: msg });
    }

    // Default: Show status
    const status = antiDelete.isGroupEnabled() ? '🟢 *ENABLED* (Stealth Owner DM)' : '🔴 *DISABLED*';
    await sock.sendMessage(from, {
      text: `🛡️ *Group Anti-Delete Status:* ${status}\n\n• Use \`.antidelgroup on\` to activate for groups.\n• Use \`.antidelgroup off\` to deactivate for groups.\n\n_Note: For private direct messages, use \`.antidelete on/off\`._`
    }, { quoted: msg });
  }
};
