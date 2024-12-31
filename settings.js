const fs = require('node:fs');

const config = {
    owner: [6287701656619, 6285774305729],
    name: "- NekoBot - Simple WhatsApp bot",
    sessions: "sessions",
    sticker: {
      packname: "Made by ",
      author: "Agus"
    },
   messages: {
      wait: "> Data sedang memprosess...",
      owner: "> Khusus Owner bot ini mah",
      premium: "> Upgrade ke premium kalo mau akses, murah aja",
      group: "> Fitur khusus group chat",
      botAdmin: "> Lu siapa bukan Admin group",
      grootbotbup: "> Jadiin NekoBot admin dulu baru bisa akses",
   },
   database: "neko-db",
   tz: "Asia/Jakarta"
}

module.exports = config

let file = require.resolve(__filename);
fs.watchFile(file, () => {
   fs.unwatchFile(file);
  delete require.cache[file];
});
