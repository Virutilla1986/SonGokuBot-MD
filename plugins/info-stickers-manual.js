import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix, command }) => {
let img = await (await fetch(`https://qu.ax/Lsmy.mp4`)).buffer()
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
let txt = `*Buscas una comunidad de anime? aqui tienes los enlaces de la comunidad frikilandia de WhatsApp, si queréis ver los grupos de Facebook y Telegram pon:* 

*¿Te gustaría descargar todos los stickers de dragón ball y de otros animes? En este video tutorial te explicamos de una app llamada Sticker ly, aparte de los stickers que mostramos en el video hay muchos mas... descarga la app de tu tienda y danos a seguir nos ayudaras a seguir subiendo mas stickers*

_*PlayStore*_
*https://play.google.com/store/apps/details?id=com.snowcorp.stickerly.android*

_*AppStore*_
*https://apps.apple.com/es/app/sticker-ly-sticker-maker/id1458740001*

*_Descargate la app desde mediafire_ https://www.mediafire.com/file/ioed5yg1601knnd/Sticker.ly+-+Sticker+Maker.apk/file*


*Nota: esta app que subimos a MediaFire, es de la tienda oficial, para poder descargarla pon lo siguiente:*

*.mediafire https://www.mediafire.com/file/ioed5yg1601knnd/Sticker.ly+-+Sticker+Maker.apk/file*

*_Para mas información consulte con el administrador By Juan1986_*

*Esto a sido posible By Juan1986*

> 🚩 ${textbot}`
await conn.sendFile(m.chat, img, "Thumbnail.jpg", txt, m, null, rcanal)
}
handler.help = ['appstickers']
handler.tags = ['main']
handler.command = /^(appstickers)$/i
export default handler
