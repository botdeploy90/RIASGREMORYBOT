//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "https://telegra.ph/file/48b817eb24798cd8da013.mp4";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "obidikechikadibia@gmail.com";
global.location = "Ondo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Toxic1239/RIASGREMORYBOT";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/e07fa9dfd176ce3a2886a.jpg";
global.devs = "2348086541281";
global.sudo = process.env.SUDO || "916260273863";
global.owner = process.env.OWNER_NUMBER || "916260273863";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/992c9028b72db147b61ac.jpg";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://toxic-session-id.onrender.com/pair";
global.scan = "https://riasgremorybot-xcqv.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUV5aXJJZ0VRQ1dzSTVMR25ZM25TTzFFaEJ2UndJdjlPVWRtZmk1aFBWdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT2ZhRHhSVkoyaDkrUVZ0d1JpRlRseHJNQ0dJT0tlMTZnQXJLUVJWQWRoYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzS3BsYUVXcEQrRDdDREdZc2hBcXZ4R0djL2ZJMXpUcjBMVXFtN21nVkZRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrOXBRMWJRSDJMNm5hRW5SVWJXN3hCdUdmZzlBeVlNclJuNjJhbTd6RkRBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhDTXZlbXNLY1ZhWlNNVDJzOGxXaG5MQjJvZHpxUkZPN1hEYjVwTW9iMmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhKQVNucldEVlZ0Tk95YWN6c1grZ2x5OENjL2thYTFTYis4SmQzeUpTaHM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUVLQjFscWduWE01K3YxeDNRcHAvOHBjTlBiZU5sZW5PeXBtVGtDVDAxRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRzI1N1lNaVY0eVBram1CNFZPMzgwYzJOQWEzZWdLditoaEhUTUNmaFZHRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdJSDkrdFZDSXhvZFVYeUhac290WmhSdU1hTk9VNCtSenExYzBUVlo1SDNFS3RQemVOUG44bys1MnRSWlJnWVo5UHNBVWl5cmY0c29jMHlqUzYyQ0NnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU1LCJhZHZTZWNyZXRLZXkiOiJKME4rWXE4WERFQXV4UENBdU8yVHdDVHEzSjcvNVlBOUk1N0l4NG1RVG9ZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIzWWVJYWgyd1RhVzMwQU90d2ZFRjR3IiwicGhvbmVJZCI6ImJmY2M3NzllLWM1MjUtNGMxMC05OGQzLTc4MTZkM2QxOWIwMiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5MmE2czhJQXdrUTVycGt3RjNXTEpQZWZOS289In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOE8wRHNkd05NSlVBMlNhTTR3TVpjc1RDM0VRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ikc5MVJaRUZGIiwibWUiOnsiaWQiOiI5MTYyNjAyNzM4NjM6NDNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2as/Cdmqog8J2QkvCdmq7wnZCU8J2aqfCdmq7wnZqr8J2asyDwnZCK8J2QlPCdmrPwnZqr8J2aqiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSU9CNFBRREVMNjR4clVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiQVczQWJLOVhjNTV2UFYyL3VkdkRoMkwwWklJV3NFQktud0E4TEo4Sm4wUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiYUhPTHJkNURaVXNINnpVeVdmajNwczZUbmUrTHAwbDh2YXcyMzlTbHh0Tmo2NnN5VjlPTTA2MXZHZkdRbjhFN0haVGxXMWQxZjRXNWNBS0RkeTNCQ1E9PSIsImRldmljZVNpZ25hdHVyZSI6IituTlBoeFptdTIvVnZ4NjlFVEQ4bmxmQmhocWJnNkNtRlYrR092YU00cHJLelRHOXNwYm5ocmxTSnF1MjdnUHVoZWpDZDJ0N1pxVGR6alhmRW9kVEN3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTE2MjYwMjczODYzOjQzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlFGdHdHeXZWM09lYnoxZHY3bmJ3NGRpOUdTQ0ZyQkFTcDhBUEN5ZkNaOUUifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjI5MTU5MTV9"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.1",
  caption: process.env.CAPTION || "𝐵𝑌 𝛭𝛪𝑆𝑇𝛯𝑅 𝑆𝛨𝑈𝐵𝛨𝛥𝛭 🐾",
  author: process.env.PACK_AUTHER || "𝛭𝛪𝑆𝑇𝛯𝑅 𝑆𝛨𝑈𝐵𝛨𝛥𝛭",
  packname: process.env.PACK_NAME || "𝛭𝛪𝑆𝑇𝛯𝑅 𝑆𝛨𝑈𝐵𝛨𝛥𝛭",
  botname: process.env.BOT_NAME || "𝚳𝚪 𝐂𝚯𝐃𝚵𝚪",
  ownername: process.env.OWNER_NAME || "𝛭𝛪𝑆𝑇𝛯𝑅_𝑆𝛨𝑈𝐵𝛨𝛥𝛭",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-pBksWDImP6VuvvJTvqDsT3BlbkFJ2E8GhbpzjyRFkFaBI9Aj",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-2fc4d785-535b-4113-8291-84c5d3d6d2c3",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "toxicmd12",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "RIAS").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
