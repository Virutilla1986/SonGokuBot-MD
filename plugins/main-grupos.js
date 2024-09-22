import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix, command }) => {
let img = await (await fetch(`https://telegra.ph/file/0dbf7b27644e8dfa8baa4.jpg`)).buffer()
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
let txt = `*Hola!, te invito a formar parte de nuestros grupis de dragón ball.* 

*◜🐉 GRUPOS OFICIALES 🐉◞*

${DragonBallLegends}
${gp1}

${FamiliaSaiyan}
${gp2}

${DragonBallFornite}
${gp3}

${DragonBallRol}
${gp4}

${DragonBallAF}
${gp5}

${VillanoDragonBall}
${gp6}

${DragonBallXenoverse}
${gp7}

${VideosDragonBall}
${gp8}

${DragonBallStickers}
${gp9}

${DragonBallDibujos}
${gp10}

${PowerOfGods}
${gp11}

${DragonBallEncuestas}
${gp12}

${DragonBallKakarot}
${gp13}

${DragonBallZDokkanBattle}
${gp14}

${DragonBallZFans}
${gp15}

${FansDragonBallZKai}
${gp16}

*◆━━━━━━━▣✦▣━━━━━━━━◆ *

*◜💦 CANALES OFICIALES 💦◞* 

${FansDragonBallZKai}
${canal} 


> 🚩 ${textbot}`
await conn.sendFile(m.chat, img, "Thumbnail.jpg", txt, m, null, rcanal)
}
handler.help = ['grupos']
handler.tags = ['main']
handler.command = /^(grupos)$/i
export default handler
