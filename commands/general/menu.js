const { atlasBox } = require('../../lib/utils');
const config = require('../../config');

module.exports = {
  name: 'menu',
  aliases: ['help', 'commands', 'meni', 'menú', 'list', 'alive'],
  category: 'general',
  description: 'Show full bot menu and list of available commands',
  usage: '.menu',
  async execute({ sock, msg, from }) {
    const p = config.prefix;

    const body = `
👋 *Welcome to VIRUS WhatsApp Bot*
⚡ Lightweight • Fast • Anti-Ban Safe
Prefixes: \`${p}\` (also supports \`,\` \`!\` \`#\` \`/\`)

🎮 *MOBILE LEGENDS CHECKER:*
• \`${p}ml <account_id> <zone_id>\` - Live MLBB account info (Nickname, Server, exact Country flag & Region)

🎙️ *TTS & BEN 10 HERO VOICES (FOR EVERYONE):*
• \`${p}ben10 <msg>\` - Ben Tennyson (Classic 2005 Ben 10 ⌚)
• \`${p}sara <msg>\` - Sara (Pakistani Urdu Girl 🧕)
• \`${p}gul <msg>\` - Gul (Soft Urdu Girl 🌸)
• \`${p}asad <msg>\` - Asad (Pakistani Urdu Male 🧔)
• \`${p}loli <msg>\` - Anya / Loli (Waku waku chibi girl 🌸)
• \`${p}goku <msg>\` - Son Goku (Super Saiyan 💥)
• \`${p}gojo <msg>\` - Satoru Gojo (The Honored One 🤞)
• \`${p}sukuna <msg>\` - Ryomen Sukuna (King of Curses 🩸)
• \`${p}naruto <msg>\` - Naruto Uzumaki (Seventh Hokage 🍥)
• \`${p}tts <character> <msg>\` - Speak in any character voice
• \`${p}tts random <msg>\` - Random anime voice 🎲
• \`${p}tts list\` - View all 20+ voice styles
• \`${p}tts [on/off]\` - Toggle TTS in group (Admins only)

🛡️ *GROUP MODERATION (Admins Only):*
• \`${p}warn @user [reason]\` - Official warning (6 warns = Auto-Kick)
• \`${p}warn reset @user\` - Clear user warnings
• \`${p}resetspam @user\` - Reset user's spam counts & limits
• \`${p}kick @user\` - Remove member (Admins protected)
• \`${p}mute\` - Close group chat (admins only)
• \`${p}unmute\` - Open group chat for everyone
• \`${p}welcome [on/off]\` - Toggle auto welcome & goodbye
• \`${p}groupinfo\` - View group settings & active thresholds

⚙️ *AUTOMATIC ANTI-SPAM (Strict GC Protection):*
• *Sticker Spam:* 5th sticker = Warn ⚠️ | 6th sticker = Auto-Kick 🚫
• *Message Spam:* 5th repeat = Warn ⚠️ | 6th repeat = Auto-Kick 🚫
• *Admins:* 100% Protected (Never warned or kicked)

👁️ *STEALTH INBOX & PRIVATE RECOVERY:*
• \`${p}viewonce\` (or \`${p}vv\`) - Revealing View-Once media sent directly to your private DM
• \`${p}antidelgroup [on/off]\` - Capture deleted group messages secretly to owner DM
• \`${p}antidelete [on/off]\` - Capture deleted private messages secretly to owner DM

ℹ️ *BOT UTILITIES:*
• \`${p}bot [on/off]\` - Turn bot on/off in this group
• \`${p}ping\` - Check bot response speed & latency
• \`${p}info\` - Bot status and host information
• \`${p}menu\` - Open this command list
`.trim();

    const output = atlasBox('VIRUS MAIN MENU', body, 'VIRUS • WHATSAPP BOT');
    await sock.sendMessage(from, { text: output }, { quoted: msg });
  }
};
