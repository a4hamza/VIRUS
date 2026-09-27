const antiDelete = require('../../lib/antiDelete');
const safety = require('../../lib/safety');

module.exports = {
  name: 'antidelete',
  aliases: ['antidelet', 'antidel', 'antirevoke'],
  category: 'admin',
  description: 'Enable, disable or check stealth Anti-Delete for Private DMs (and view group status)',
  usage: '.antidelete [on/off/status] | .antidelgroup [on/off]',
  async execute({ sock, msg, from, sender, args }) {
    const isOwner = safety.isOwner(sender) || msg.key.fromMe;
    const firstArg = args[0]?.toLowerCase();
    const secondArg = args[1]?.toLowerCase();

    // Handle .antidelete group on / off
    if (firstArg === 'group' || firstArg === 'gc') {
      if (!isOwner) {
        return sock.sendMessage(from, {
          text: '⛔ *Access Denied!*\nOnly the bot owner or group admin can configure Group Anti-Delete.'
        }, { quoted: msg });
      }
      if (secondArg === 'on' || secondArg === 'enable' || secondArg === '1') {
        antiDelete.setGroupEnabled(true);
        return sock.sendMessage(from, {
          text: '🛡️ *Group Anti-Delete Enabled!* 🟢\nDeleted messages in group chats will be forwarded directly to your private DM.'
        }, { quoted: msg });
      } else if (secondArg === 'off' || secondArg === 'disable' || secondArg === '0') {
        antiDelete.setGroupEnabled(false);
        return sock.sendMessage(from, {
          text: '⚠️ *Group Anti-Delete Disabled!* 🔴\nGroup deleted messages will not be recovered.'
        }, { quoted: msg });
      }
    }

    if (firstArg === 'on' || firstArg === 'enable' || firstArg === '1') {
      if (!isOwner) {
        return sock.sendMessage(from, {
          text: '⛔ *Access Denied!*\nOnly the bot owner can configure Anti-Delete.'
        }, { quoted: msg });
      }
      antiDelete.setPrivateEnabled(true);
      return sock.sendMessage(from, {
        text: '🛡️ *Private Chat Anti-Delete Enabled!* 🟢\n\nAll deleted messages in private chats (DMs) will be caught stealthily and sent directly to your inbox.\n_Note: For group chats, use `.antidelgroup on`._'
      }, { quoted: msg });
    }

    if (firstArg === 'off' || firstArg === 'disable' || firstArg === '0') {
      if (!isOwner) {
        return sock.sendMessage(from, {
          text: '⛔ *Access Denied!*\nOnly the bot owner can configure Anti-Delete.'
        }, { quoted: msg });
      }
      antiDelete.setPrivateEnabled(false);
      return sock.sendMessage(from, {
        text: '⚠️ *Private Chat Anti-Delete Disabled!* 🔴\nDeleted messages from private DMs will not be recovered.'
      }, { quoted: msg });
    }

    if (firstArg === 'toggle') {
      if (!isOwner) {
        return sock.sendMessage(from, {
          text: '⛔ *Access Denied!*\nOnly the bot owner can configure Anti-Delete.'
        }, { quoted: msg });
      }
      antiDelete.setPrivateEnabled(!antiDelete.isPrivateEnabled());
      const newStatus = antiDelete.isPrivateEnabled() ? '🟢 *ENABLED*' : '🔴 *DISABLED*';
      return sock.sendMessage(from, {
        text: `🛡️ *Private Anti-Delete Status:* ${newStatus}`
      }, { quoted: msg });
    }

    // Default: Show full status for both Private DM and Group
    const privStatus = antiDelete.isPrivateEnabled() ? '🟢 *ENABLED* (Private DM)' : '🔴 *DISABLED*';
    const grpStatus = antiDelete.isGroupEnabled() ? '🟢 *ENABLED* (Sent to DM)' : '🔴 *DISABLED*';

    await sock.sendMessage(from, {
      text: `🛡️ *VIRUS ANTI-DELETE STATUS:*\n\n` +
            `• *Private Chats (DM):* ${privStatus}\n` +
            `• *Group Chats (GC):* ${grpStatus}\n\n` +
            `_Control Commands:_\n` +
            `• \`.antidelete on / off\` - Toggle for private messages\n` +
            `• \`.antidelgroup on / off\` - Toggle for group messages\n\n` +
            `📌 _All recovered deleted messages arrive directly in your private DM inbox without alerting other users._`
    }, { quoted: msg });
  }
};
