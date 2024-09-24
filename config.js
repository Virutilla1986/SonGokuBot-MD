import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 


        let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, 'd ', h, 'h ', m, 'm ', s, 's '].map(v => v.toString().padStart(2, 0)).join('')
}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.owner = [
  ['34636445091', 'administrador 🌀', true],
  ['51907376960'],
  ['51907376960'],
  ['51907376960'],
  ['51907376960'],
  ['5492215034412']
]

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.mods = []
global.prems = []
   
//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.packname = ``
global.author = `{\n "bot": {\n   "name": "🐉孫ՏᴏɴᏀᴏᴋᴜ孫🐉",\n     "author": "YerTX2",\n   "status_bot": ${muptime}\n }\n}`
global.wait = '*🐉孫ՏᴏɴᏀᴏᴋᴜ孫🐉*'
global.botname = '🐉孫ՏᴏɴᏀᴏᴋᴜ孫🐉 '
global.textbot = `🐉孫ՏᴏɴᏀᴏᴋᴜ孫🐉`
global.listo = '*⚔️ Aqui tiene*'
global.namechannel = '【✗🐉孫ՏᴏɴᏀᴏᴋᴜ孫🐉✗】'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*
global.fantasyVid = ['./media/menus/Menuvid1.mp4', './media/menus/Menuvid2.mp4', './media/menus/Menuvid3.mp4']
global.catalogo = fs.readFileSync('./storage/img/catalogo.png')
//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*
global.group = 'https://chat.whatsapp.com/BR4uITM6xeR8GAd8b2VXN6'

global.gp1 = 'https://chat.whatsapp.com/L2vpoClRqYC6wsmGC0gFqS' //🌍📱🎮🐉 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 𝕃𝕖𝕘𝕖𝕟𝕕𝕤 🐉 🎮📱🌍
global.gp2 = 'https://chat.whatsapp.com/LmDvJZWd0eQCzhR8lwJ5B4' //🌍🐉👨‍👩‍👧‍👧 𝔽𝕒𝕞𝕚𝕝𝕚𝕒 𝕊𝕒𝕚𝕪𝕒𝕟 👨‍👩‍👧‍👧🐉🌍 
global.gp3 = 'https://chat.whatsapp.com/KJcE87Yb8ZP7WDiww8UDkY' //🐉 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 𝔽𝕠𝕣𝕥𝕟𝕚𝕥𝕖 🐉
global.gp4 = 'https://chat.whatsapp.com/JXVf0iaQhuvE7uQCE8QSym' //🌍🐉🐲 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 ℝ𝕠𝕝 🐲🐉🌍
global.gp5 = 'https://chat.whatsapp.com/EJFl28xgwLeEhIQxriWiuZ' //🌍🐉 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 𝔸𝔽 🐉🌍
global.gp6 = 'https://chat.whatsapp.com/LCF5v7bb9dN8lGOrY9OlFR' //🌍🐉🦹‍♂️ 𝕍𝕚𝕝𝕝𝕒𝕟𝕠𝕤 𝕕𝕖 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 🐉🦹‍♂️🌍
global.gp7 = 'https://chat.whatsapp.com/Hq0VCaXqGaU40P89HmPuni' //🐉 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 𝕏𝕖𝕟𝕠𝕧𝕖𝕣𝕤𝕖 🐉
global.gp8 = 'https://chat.whatsapp.com/EaTmnGSAX3pH06Dl7MRzmV' //🌍🐉📹 𝕍𝕚𝕕𝕖𝕠𝕤 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 📹🐉🌍
global.gp9 = 'https://chat.whatsapp.com/K1FSWdgwuzTL1z08NVYJNw' //🌍🐲🐉𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 𝕊𝕥𝕚𝕔𝕜𝕖𝕣𝕤🐉🐲🌍
global.gp10 = 'https://chat.whatsapp.com/LddDN9xDXcg15IuOirylqZ' //🌍🐉🎨 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 𝕕𝕚𝕓𝕦𝕛𝕠𝕤 🎨🐉🌍
global.gp11 = 'https://chat.whatsapp.com/ELy0mvOw5JyLnHmwFY7j1K' //🌍🐉 ℙ𝕠𝕨𝕖𝕣 𝕆𝕗 𝔾𝕠𝕕𝕤 🐉🌍
global.gp12 = 'https://chat.whatsapp.com/GX6QQjlGEcYAGz823ZUpfI' //🌍📊🐉 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 𝕖𝕟𝕔𝕦𝕖𝕤𝕥𝕒𝕤 🐉📊🌍
global.gp13 = 'https://chat.whatsapp.com/JbIgLHQuvue7hItxhng9nN' //🌍🎮🐉 𝔻𝕣𝕒𝕘𝕠𝕟 𝕓𝕒𝕝𝕝 𝕜𝕒𝕜𝕒𝕣𝕠𝕥 🐉🎮🌍
global.gp14 = 'https://chat.whatsapp.com/GEj9B5TlTvoIC6wBLJ71UU' //🌍🎮🐉 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 ℤ 𝔻𝕠𝕜𝕜𝕒𝕟 𝕓𝕒𝕥𝕥𝕝𝕖 🐉🎮🌍
global.gp15 = 'https://chat.whatsapp.com/KljiSB549Xc7HXXIzVPFat' //🐲🅳𝗥𝗔𝗚𝗢𝗡 🅱𝗔𝗟𝗟𝗦 🆉🐲🔥 🅵𝗔𝗡𝗦 🎥
global.gp16 = 'https://chat.whatsapp.com/BhXwjZVP0Ae9VU4pHqXATS' //🌍🐉🐲 𝔽𝕒𝕟𝕤 𝔻𝕖 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 ℤ 𝕂𝕒𝕚 🐲🐉🌍
global.gp17 = 'https://chat.whatsapp.com/LUKhODoKfqrC0uVKqMdfu4' //🐉🎮𝔻ℝ𝔸𝔾𝕆ℕ 𝔹𝔸𝕃𝕃 𝔽𝕀𝔾𝕋ℍ𝔼ℝℤ🎮🐉
global.comunidad1 = 'https://chat.whatsapp.com/BR4uITM6xeR8GAd8b2VXN6' //Comunidad Goku
global.comunidad2 = 'https://chat.whatsapp.com/BR4uITM6xeR8GAd8b2VXN6' //Comunidad de Moonligth
global.canal = 'https://whatsapp.com/channel/0029VaSZsS14Y9lhQYCFvO0w' //noticias dragón ball 
global.canal2 = 'https://whatsapp.com/channel/0029VaQghZyAInPcWuTHOR3V' //curiosidad dragón ball
global.canal3 = 'https://whatsapp.com/channel/0029VaQkf7T0rGiORXhKqR0R' //Dragón ball juegos


global.DragonBallLegends = '🌍📱🎮🐉 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 𝕃𝕖𝕘𝕖𝕟𝕕𝕤 🐉 🎮📱🌍'
global.FamiliaSaiyan = '🌍🐉👨‍👩‍👧‍👧 𝔽𝕒𝕞𝕚𝕝𝕚𝕒 𝕊𝕒𝕚𝕪𝕒𝕟 👨‍👩‍👧‍👧🐉🌍'
global.DragonBallFornite = '🐉 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 𝔽𝕠𝕣𝕥𝕟𝕚𝕥𝕖 🐉'
global.DragonBallRol = '🌍🐉🐲 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 ℝ𝕠𝕝 🐲🐉🌍'
global.DragonBallAF = '🌍🐉 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 𝔸𝔽 🐉🌍'
global.VillanoDragonBall = '🌍🐉🦹‍♂️ 𝕍𝕚𝕝𝕝𝕒𝕟𝕠𝕤 𝕕𝕖 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 🐉🦹‍♂️🌍'
global.DragonBallXenoverse = '🐉 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 𝕏𝕖𝕟𝕠𝕧𝕖𝕣𝕤𝕖 🐉'
global.VideosDragonBall = '🌍🐉📹 𝕍𝕚𝕕𝕖𝕠𝕤 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 📹🐉🌍'
global.DragonBallStickers = '🌍🐲🐉𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 𝕊𝕥𝕚𝕔𝕜𝕖𝕣𝕤🐉🐲🌍'
global.DragonBallDibujos = '🌍🐉🎨 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 𝕕𝕚𝕓𝕦𝕛𝕠𝕤 🎨🐉🌍'
global.PowerOfGods = '🌍🐉 ℙ𝕠𝕨𝕖𝕣 𝕆𝕗 𝔾𝕠𝕕𝕤 🐉🌍'
global.DragonBallEncuestas = '🌍📊🐉 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 𝕖𝕟𝕔𝕦𝕖𝕤𝕥𝕒𝕤 🐉📊🌍'
global.DragonBallKakarot = '🌍🎮🐉 𝔻𝕣𝕒𝕘𝕠𝕟 𝕓𝕒𝕝𝕝 𝕜𝕒𝕜𝕒𝕣𝕠𝕥 🐉🎮🌍'
global.DragonBallZDokkanBattle = '🌍🎮🐉 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 ℤ 𝔻𝕠𝕜𝕜𝕒𝕟 𝕓𝕒𝕥𝕥𝕝𝕖 🐉🎮🌍'
global.DragonBallZFans = '🐲🅳𝗥𝗔𝗚𝗢𝗡 🅱𝗔𝗟𝗟𝗦 🆉🐲🔥 🅵𝗔𝗡𝗦 🎥'
global.FansDragonBallZKai = '🌍🐉🐲 𝔽𝕒𝕟𝕤 𝔻𝕖 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 ℤ 𝕂𝕒𝕚 🐲🐉🌍'
global.DragonBallFigtherz = '🐉🎮𝔻ℝ𝔸𝔾𝕆ℕ 𝔹𝔸𝕃𝕃 𝔽𝕀𝔾𝕋ℍ𝔼ℝℤ🎮🐉'
global.Noticiasdragonball = '🌍🐉🐲 Noticias dragón ball 🐲🐉🌍'
global.Curiosidaddragonball = '🌍🐉🐲 Curiosidad dragón ball 🐲🐉🌍'
global.Dragonballjuegos = '🌍🐉🐲 Dragón ball juegos 🐲🐉🌍'


//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: botname, orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment	

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
