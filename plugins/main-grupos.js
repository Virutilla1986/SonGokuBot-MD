import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix, command }) => {
let img = await (await fetch(`https://telegra.ph/file/0dbf7b27644e8dfa8baa4.jpg`)).buffer()
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
let txt = `*Hola!, te invito a formar parte de nuestros grupis de dragón ball.* 

*Grupos dragón ball*

${DragonBallLegends}
${gp1}

*◆━━━━━━━▣✦▣━━━━━━━━◆ *

> ⚠️ Enlace anulado? entre aquí! 

Canal :
*🪐* ${canal} 


> 🚩 ${textbot}`
await conn.sendFile(m.chat, img, "Thumbnail.jpg", txt, m, null, rcanal)
}
handler.help = ['grupos']
handler.tags = ['main']
handler.command = /^(grupos)$/i
export default handler
