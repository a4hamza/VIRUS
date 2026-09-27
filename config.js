/**
 * VIRUS WhatsApp Bot Configuration
 */

module.exports = {
  // Bot Information & Identity
  botName: process.env.BOT_NAME || 'VIRUS',
  ownerName: process.env.OWNER_NAME || 'VIRUS',
  ownerNumbers: process.env.OWNER_NUMBER 
    ? [process.env.OWNER_NUMBER.replace(/[^0-9]/g, '')] 
    : ['923116469820'], // Default owner phone number (also dynamically auto-assigned when paired)
  prefix: '.', // Default prefix
  prefixes: ['.', ',', '!', '#', '/'], // Supported prefixes: .menu, ,menu, !menu, #menu, /menu
  sessionDir: './auth_info_baileys',

  // Web Dashboard Settings (HYEHOST compatibility)
  port: process.env.PORT || 8080,

  // Group Moderation & Anti-Spam Thresholds
  antiSpam: {
    enabled: true,
    
    // Sticker Spam Rules:
    // 5th rapid sticker = Warning
    // 6th rapid sticker = Auto-Kick
    stickerWarningThreshold: 5,
    stickerKickThreshold: 6,
    stickerTimeWindowMs: 12000, // 12 seconds window

    // Message Spam Rules:
    // 5th rapid/repeated message = Warning
    // 6th rapid/repeated message = Auto-Kick
    messageWarningThreshold: 5,
    messageKickThreshold: 6,
    messageTimeWindowMs: 10000, // 10 seconds window

    // Admins and Bot Owner are permanently immune
    adminImmunity: true,
  },

  // Game Checker Settings
  gameChecker: {
    cacheTtlSeconds: 300, // Cache account lookups for 5 minutes to avoid rate limits
  },

  // Group Welcome & Goodbye Notifications
  welcome: {
    enabled: true, // Enabled by default
  },

  // Anti-Delete Defaults
  antiDelete: {
    groupEnabled: true,   // Controlled by .antidelgroup on/off
    privateEnabled: true  // Controlled by .antidelete on/off
  }
};
