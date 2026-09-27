# ⚡ VIRUS WhatsApp Bot

A fast, lightweight, and anti-ban safe Multi-Device WhatsApp Bot optimized for free hosting on **HYEHOST** and cloud containers.

---

## 🌟 Key Features

### 1. 🎮 Mobile Legends Account Checker (`.ml`)
- **Accurate In-Game Info:** Real Moonton verification fetching in-game nickname, server ID, country name, and exact country flag emoji (e.g. 🇮🇩 Indonesia, 🇵🇰 Pakistan, 🇵🇭 Philippines).
- **Flexible Syntax:** Supports `.ml 1114917746 13486`, `.ml 1114917746(13486)`, and auto-detects if the server/zone ID and account ID are entered in reverse.
- **Clean & Fast:** Zero simulated clutter or hallucinated ranks.

```text
╭───『 MOBILE LEGENDS PLAYER INFO 』───╮
🎮 MOBILE LEGENDS: BANG BANG
━━━━━━━━━━━━━━━━━━━━━━━
• Nickname: Outrageous Dominance
• Player ID: 1114917746
• Server ID: 13486
• Country: 🇮🇩 Indonesia
• Region: Southeast Asia (SEA)
• Account Status: ✅ Verified & Active
━━━━━━━━━━━━━━━━━━━━━━━
📌 Verified via Official Moonton Gateway
╰───『 VIRUS • GAME CHECKER 』───╯
```

---

### 2. 🎙️ Ben 10 Classic Hero Voice & Multilingual Anime TTS
- **⌚ Ben Tennyson (Classic 2005):**
  - Soundboard Line: Type `.ben10` (or `.ben`, `.omnitrix`) without arguments to play Ben's signature voice line (*"It's hero time! I'm Ben Tennyson and I've got the Omnitrix!"*).
  - Custom Speech: Type `.ben10 <your message>` to speak anything in classic 10-year-old boy hero voice (Tara Strong style).
- **🇵🇰 Authentic Pakistani Urdu & English Voices:**
  - `.sara <msg>`: Sweet, authentic Pakistani Urdu & English girl voice.
  - `.gul <msg>`: Soft, expressive Urdu female voice.
  - `.asad <msg>`: Deep Pakistani Urdu male voice.
- **🌸 Cute Anime Loli Voice:**
  - `.loli <msg>`: Anya / Chibi kawaii girl voice (*Waku waku!*).
- **💥 20+ Iconic Anime Voices:**
  - Goku (`.goku`), Gojo (`.gojo`), Sukuna (`.sukuna`), Naruto (`.naruto`), Luffy (`.luffy`), Zoro (`.zoro`), Levi (`.levi`), Eren (`.eren`), Makima (`.makima`), Saitama (`.saitama`), Dio (`.dio`), and more.
- **Group Controls:** `.tts on` / `.tts off` (Admin only).

---

### 3. 🛡️ Group Chat Moderation & Strict Anti-Spam Auto-Kick
- **Message Spam Rules:**
  - **5th Repeated Message:** Warning issued to member ⚠️
  - **6th Repeated Message:** Member is **automatically kicked** from group 🚫
- **Sticker Spam Rules:**
  - **5th Rapid Sticker:** Warning issued to member ⚠️
  - **6th Rapid Sticker:** Member is **automatically kicked** from group 🚫
- **🛡️ Admin Immunity & Protection:**
  - Group Admins and the Bot Owner are **permanently immune** from anti-spam warnings and auto-kicks.
  - Admins cannot be kicked by the bot.
- **Moderation Commands:**
  - `.warn @user [reason]`: Issue official admin warning with admin attribution (auto-kicks at 6th warning).
  - `.warn reset @user`: Clear user warnings.
  - `.resetspam @user` (or `.resert spam @user`): Reset member's sticker spam, message spam, and warning limits.
  - `.kick @user`: Remove member from group.
  - `.mute` / `.unmute`: Close/open group chat for members.

---

### 4. 👋 Auto-Welcome & Goodbye with Real Phone Numbers
- **Accurate Phone Attribution:** Mentions and greets members using their exact international WhatsApp phone number (e.g. `+92 300 1234567`), never raw cryptic WhatsApp LIDs or internal JIDs.
- **Zero Ghost-Tagging:** Mentions **only** the joining or departing user. Never secretly tags or pings group participants in the background!
- **Roster Memory Cache:** Maintains participant history so departing or kicked members are correctly resolved even after leaving.

---

### 5. 👁️ Stealth Anti-Delete & View Once (Direct to Owner DM)
- **Separate Group vs Private Anti-Delete:**
  - `.antidelgroup on` / `.antidelgroup off`: Control group chat recovery.
  - `.antidelete on` / `.antidelete off`: Control private chat (DM) recovery.
  - Status check: `.antidelete status` or `.antidelgroup status` displays active states.
  - Recovered messages (text, photos, videos, voice notes, stickers, documents) are delivered **stealthily and exclusively to the bot owner's private DM**. Never alerts the chat or other members!
- **View-Once Media Downloader (`.viewonce`, `.vv`):**
  - Reply to any view-once photo, video, or voice note with `.viewonce`.
  - Automatically deletes your command message so other chat members don't notice.
  - Unlocks and delivers the media directly to your private DM inbox.

---

### 6. 🌐 Web Pairing Portal & Multi-Device Support
- **Dynamic Web Pairing Dashboard:** Visit `http://localhost:8080` (or your host port) in any web browser.
- **Universal Multi-User Support:** Anyone can enter their phone number to receive an 8-character pairing code without QR code scanning.
- **Automatic Ownership:** Whoever pairs the bot automatically becomes recognized as the bot owner (`msg.key.fromMe` and owner commands work seamlessly).
- **Anti-Ban Architecture:** Outgoing pacing delays, human presence simulation (`composing`/`recording`), low query timeouts, and conflict protection (detects status 440 multi-instance session collisions).

---

## 🚀 Quick Setup & Deployment

### 1. Clone & Install
```bash
git clone https://github.com/s4killer66-afk/VIRUS.git
cd VIRUS
npm install
```

### 2. Configure Environment (Optional)
Create a `.env` file or set environment variables on your host:
```ini
PORT=8080
BOT_NAME=VIRUS
OWNER_NAME=VIRUS
OWNER_NUMBER=923116469820
```

### 3. Start the Bot
```bash
npm start
```

### 4. Link via Pairing Code
1. Open `http://localhost:8080` (or your Hye Host / VPS URL) in your browser.
2. Enter your WhatsApp number with country code (e.g. `923116469820`).
3. Click **Get Pairing Code**.
4. In WhatsApp on your phone: Tap **Settings** (or 3 dots) > **Linked Devices** > **Link a device** > **Link with phone number instead** and enter the 8-digit code.
5. The bot connects instantly and begins working!

---

## 📋 Commands Summary

| Command | Category | Description | Access |
| :--- | :--- | :--- | :--- |
| `.menu` | General | Display the full bot command menu | Public |
| `.ml <id> <zone>` | Games | Check MLBB player info, server & country flag | Public |
| `.ben10 [msg]` | TTS | Ben Tennyson classic voice note / TTS | Public |
| `.sara <msg>` | TTS | Authentic Pakistani Urdu & English female voice | Public |
| `.gul <msg>` | TTS | Soft expressive Urdu female voice | Public |
| `.asad <msg>` | TTS | Authentic Pakistani Urdu male voice | Public |
| `.loli <msg>` | TTS | Cute Anya / chibi anime voice | Public |
| `.goku <msg>` | TTS | Son Goku anime voice note / speech | Public |
| `.tts list` | TTS | View all 20+ anime voice styles | Public |
| `.tts [on/off]` | TTS | Toggle TTS generation in group | Admins |
| `.warn @user [reason]` | Group | Warn member (Auto-kick at 6th warning) | Admins |
| `.resetspam @user` | Group | Reset user's spam limits & warnings | Admins |
| `.kick @user` | Group | Remove member from group | Admins |
| `.mute` / `.unmute` | Group | Close / open group chat | Admins |
| `.welcome [on/off]` | Group | Toggle auto-welcome & goodbye | Admins |
| `.groupinfo` | Group | View active group moderation settings | Public |
| `.viewonce` (or `.vv`) | General | Silently unlock view-once media to DM | Public |
| `.antidelgroup [on/off]` | Admin | Toggle deleted message capture for groups | Owner / Admin |
| `.antidelete [on/off]` | Admin | Toggle deleted message capture for DMs | Owner |
| `.bot [on/off]` | Admin | Master bot switch for this group | Owner / Admin |
| `.ping` | General | Check bot latency and response speed | Public |
| `.info` | General | View bot memory & system status | Public |

---

## 🛡️ License & Credits
- **Identity:** VIRUS
- **Owner:** VIRUS
- Built with **Baileys Multi-Device** & Express.
