import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix, command }) => {
let img = await (await fetch(`https://telegra.ph/file/0dbf7b27644e8dfa8baa4.jpg`)).buffer()
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
let txt = `*Hola!, te invito a formar parte de nuestros grupos.* 

*◜🐉 GRUPOS OFICIALES 🐉◞*

*Buscas una comunidad de anime? aqui tienes los enlaces de la comunidad frikilandia de WhatsApp, si queréis ver los grupos de Facebook y Telegram pon:*

*.grupos*
*.Facebook*
*.Telegram*

*➤ Comunidad frikilandia*

*亀🇪🇸 𝔽𝕒𝕟𝕤 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 🇪🇸亀*
https://chat.whatsapp.com/ChQubdKdYav2XpohU8Vs3R

*🌍🦸‍♂️🖖 Bola de drac català 🖖🦸‍♂️🌍*
...

*🌍 Bola de drac en Valencià 🌍*
https://chat.whatsapp.com/IhWTZM7Wu36AiiXE7mfXak

*🌍🤖 𝑫𝒆𝒔𝒄𝒂𝒓𝒈𝒂 𝒃𝒐𝒕𝒔 - 𝑹𝒆𝒅𝒆𝒔 𝒔𝒐𝒄𝒊𝒂𝒍𝒆𝒔 🤖🌍*
https://chat.whatsapp.com/EGR7UJ4mvjMD0hc0ZoAxwI

*🌍⚡🔥 𝑭𝒂𝒏𝒔 𝒅𝒆 𝑷𝒐𝒌𝒆𝒎𝒐𝒏 🔥⚡🌍*
https://chat.whatsapp.com/KfMhKx6jRUR8jzZB13M2hB

*🌍🍥🍜 𝑭𝒂𝒏𝒔 𝒅𝒆 𝑵𝒂𝒓𝒖𝒕𝒐 🍜🍥🌍*
https://chat.whatsapp.com/CIsIuOpJoEX72KsLMHpMHz

*🌍 👒⛩️ 𝑭𝒂𝒏𝒔 𝒅𝒆 𝑶𝒏𝒆 𝒑𝒊𝒆𝒄𝒆 ⛩️👒🌍*
https://chat.whatsapp.com/KkanOPfYmn2DE0oErnxdKf

*🌍🛡️👊 𝑺𝒂𝒊𝒏𝒕 𝑺𝒆𝒊𝒚𝒂 - 𝑳𝒐𝒔 𝑪𝒂𝒃𝒂𝒍𝒍𝒆𝒓𝒐𝒔 𝒅𝒆𝒍 𝒁𝒐𝒅𝒊𝒂𝒄𝒐 👊🛡️🌍*
https://chat.whatsapp.com/G0ZqsFR5ZLAHDWPEuPXAEG

*🌍🦾🦿 𝑭𝒂𝒏𝒔 𝒅𝒆 𝑴𝒂𝒛𝒊𝒏𝒈𝒆𝒓 𝒁 🦿🦾🌍*
https://chat.whatsapp.com/CtZOjnEVUEBHuaEnsNoo7H

*🌍😺🐼 𝑭𝒂𝒏𝒔 𝒅𝒆 𝑹𝒂𝒏𝒎𝒂 ½ 🐼😺🌍*
https://chat.whatsapp.com/CRYP316MujxKFYiIHe9ZEx

*🌍⚔️🛡️ 𝑭𝒂𝒏𝒔 𝒅𝒆 𝒂𝒕𝒂𝒒𝒖𝒆 𝒂 𝒍𝒐𝒔 𝒕𝒊𝒕𝒂𝒏𝒆𝒔 ⚔️🛡️🌍*
https://chat.whatsapp.com/Bjf43ZD8ZlZBCWE0Yv3jIX

*🌍🌟🌌 𝑭𝒂𝒏𝒔 𝒅𝒆 𝒍𝒂 𝒑𝒂𝒕𝒓𝒖𝒍𝒍𝒂 𝒈𝒂𝒍á𝒄𝒕𝒊𝒄𝒂 "𝑮𝒂𝒍𝒂𝒙𝒚 𝑹𝒂𝒏𝒈𝒆𝒓𝒔" 🌌🌟🌍*
https://chat.whatsapp.com/IYoPm45egDQJ5yBOsHxBpc

*🌍🃏♣️ 𝑭𝒂𝒏𝒔 𝒅𝒆 𝑲𝒂𝒌𝒆𝒈𝒖𝒓𝒖𝒊 ♣️🃏🌍*
https://chat.whatsapp.com/By1GlKQ5yLQAYYxhTR8t9N

*🌍🪚🗡️ 𝑪𝒉𝒂𝒊𝒏𝒔𝒂𝒘 𝑴𝒂𝒏 🗡️🪚🌍*
https://chat.whatsapp.com/JmDT04P5aSfJoIfCAmh40A

*🌍⚔️🗡️ 𝑲𝒊𝒍𝒍 𝒍𝒂 𝒌𝒊𝒍𝒍 🗡️⚔️🌍*
https://chat.whatsapp.com/IIH75WjAuzhBSrd05wFsgV

*🌍🔩🦾 𝑭𝒂𝒏𝒔 𝑮𝒉𝒐𝒔𝒕 𝒊𝒏 𝒕𝒉𝒆 𝑺𝒉𝒆𝒍𝒍 🦾🔩🌍*
https://chat.whatsapp.com/HAnxvpAirb4AsXBsDAGn6E

*🌍🎭🐻 𝑩𝒍𝒆𝒂𝒄𝒉 🐻🎭🌍*
https://chat.whatsapp.com/J0vzttZbKXqKeUZPj0fUYa

*🌍💪🦲 𝑶𝒏𝒆 𝒑𝒖𝒏𝒄𝒉 𝒎𝒂𝒏 🦲💪🌍*
https://chat.whatsapp.com/CjPAAmdWQzO07yzPoypr6O

*Ayudanos con el gasto del servidor http://paypal.me/GokuBotyJuan1986*

*Actualizado 22/09/2024.*

> 🚩 ${textbot}`
await conn.sendFile(m.chat, img, "Thumbnail.jpg", txt, m, null, rcanal)
}
handler.help = ['grupos']
handler.tags = ['main']
handler.command = /^(gruposfrikis)$/i
export default handler
