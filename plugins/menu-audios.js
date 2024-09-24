import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix, command }) => {
let img = await (await fetch(`https://qu.ax/uwKt.mp4`)).buffer()
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
let txt = `*Este es el menu de audios que dispone GokuBot, no estan todos aun disponibles, iremos añadiendo...*

╭┄〔 *Sonido GokuBot* 〕┄⊱
┊
┊ 🔊 *DB opening castellano* 🔊
┊
┊ ∘ *_DB opening castellano_*
┊ ∘ *_DB ending castellano_*
┊ ∘ *_DBZ opening castellano_*
┊ ∘ *_DBZ 2 opening castellano_*
┊ ∘
┊ ∘
┊ ∘
┊ ∘
┊
┊ 🔊 *DB opening Latino* 🔊
┊ ∘
┊ ∘
┊ ∘
┊ ∘
┊ ∘
┊ ∘
┊ ∘
┊ ∘
┊ 🔊 *DB opening japonés* 🔊
┊ 
┊ ∘ DBS opening japonés 
┊ ∘
┊ ∘
┊ ∘
┊ ∘
┊ ∘
┊ ∘
┊ ∘
┊ ∘
┊ ∘
┊ ∘
┊ 
┊ 🔊 *Memes DB latino* 🔊
┊
┊ ∘ 🆕 *_La fe de Cristo Rey_*
┊ ∘ 🆕 *_O my God_*
┊ ∘ 🆕 *_Espera Vegueta_*
┊ ∘ 🆕 *_Nappa su nivel_*
┊ ∘ 🆕 *_Cada dia mas basado_*
┊ ∘ 🆕 *_a mi que vergas me importa_*
┊ ∘ 🆕 *_y este quién porongas es_*
┊ ∘ 🆕 *_tu eres un cobarde_*
┊ ∘ 🆕 *_ya basta Freezer_*
┊ ∘ 🆕 *_eres un maltito_*
┊ ∘ 🆕 *_machete_*
┊ ∘ 🆕 *_se volvió canon_*
┊ ∘ 🆕 *_eres fuerte pero Cristo mas_*
┊ ∘ 🆕 *_yo soy el más perron de aqui_*
┊ ∘ 🆕 *_que lind estás_*
┊ ∘ 🆕 *_viejo sabroso_*
┊ ∘ 🆕 *_Traele una falda a la niña_*
┊ ∘ 🆕 *_Si la verdad es que sí_*
┊ ∘ 🆕 *_Insecto_*
┊ ∘ 🆕 *_celula sentio terror_*
┊ ∘ 🆕 *_Mi dinero disminuye_*
┊ ∘ 🆕 *_Goku esta vaina es seria_*
┊
┊ 🔊 *música y sonidos* 🔊
┊ ∘ *_dj dragón ball_*
┊ ∘ *_cumpleaños felis_*
┊ ∘ *_Silbido dragón ball_*
┊ ∘ *_Tapion_*
┊
┊ 🔊 *sonido latino* 🔊
┊ ∘ *_vete a tu casa_*
┊ ∘ *_carita empapada_*
┊ ∘ *_hay alguien en el grupo_*
┊
┊ 🔊 *GokuBot castellano* 🔊
┊ ∘ *_bienvenido_*
┊ ∘ *_kamehaa_*
┊
┊ 🔊 *GokuBot latino* 🔊
┊ ∘ *_bienvenido_*
┊ ∘ *_kame ha_*
╰┄┄┄┄〔🔊 *1.0.0 A* 🔊〕┄┄⊱


> 🚩 ${textbot}`
await conn.sendFile(m.chat, img, "Thumbnail.jpg", txt, m, null, rcanal)
}
handler.help = ['grupos']
handler.tags = ['main']
handler.command = /^(menuaudio)$/i
export default handler
