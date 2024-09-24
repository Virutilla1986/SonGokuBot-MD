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
┊ 🔊 *La que se a vecina castellano* 🔊
┊ ∘ 🆕 *_Espartaco_*
┊ ∘ 🆕 *_Mandanga style_*
┊ ∘ 🆕 *_Asomate a mi salami_*
┊ ∘ 🆕 *_merengue merengue_*
┊ ∘ 🆕 *_mira la abuelita_*
┊ ∘ 🆕 *_No toques_*
┊ ∘ 🆕 *_Que viene_*
┊ ∘ 🆕 *_Hacia Maite va_*
┊ ∘ 🆕 *_Te voy a poner fina_*
┊ ∘ 🆕 *_Que bueno soy_*
┊ ∘ 🆕 *_huevón huevón huevón_*
┊ ∘ 🆕 *_meminas la moral_*
┊ ∘ 🆕 *_donde estabas_*
┊
┊ 🔊 *música y sonidos* 🔊
┊ ∘ *_Alarma_*
┊ ∘ *_dj dragón ball_*
┊ ∘ *_cumpleaños felis_*
┊ ∘ *_Silbido dragón ball_*
┊ ∘ *_jumanji_*
┊ ∘ *_Lobo_*
┊ ∘ *_Tapion_*
┊ ∘ *_psicosis_*
┊ ∘ *_jajaja_*
┊ ∘ *_soy un nomo_*
┊ ∘ *_Terminator_*
┊ ∘ *_un caracol fugaz_*
┊ ∘ *_Abogado_*
┊ ∘ *_multiplicase por cero_*
┊ ∘ *_cobarde_*
┊ ∘ *_cansino_*
┊ ∘ *_hijo de mil padres_*
┊ ∘ *_quiero mi bocadillo_*
┊ ∘ *_jo tio_*
┊ ∘ *_mosquis_*
┊ ∘ *_bidones rodarán_*
┊ ∘ *_hoy no... mañana_*
┊ ∘ *_La cabra_*
┊ ∘ *_la purga infinita_*
┊ ∘ *_la técnica de Piter pan_*
┊ ∘ *_los dioses del Olimpo_*
┊ ∘ *_liando porros_*
┊ ∘ *_sayonara baby_*
┊ ∘ *_todo el olimpo caera_*
┊ ∘ *_Soy tu padre_*
┊
┊ 🔊 *sonido latino* 🔊
┊ ∘ *_vete a tu casa_*
┊ ∘ *_carita empapada_*
┊ ∘ *_hay alguien en el grupo_*
┊ ∘ *_los pingüinos_*
┊ ∘ *_maldicion_*
┊ ∘ *_mangekyo_*
┊ ∘ *_Mary Jane_*
┊ ∘ *_depuracion infinita_*
┊ ∘ *_Que bendición_*
┊ ∘ *_ta bien_*
┊ ∘ *_tomboy_*
┊ ∘ *_ultra instinto_*
┊ ∘ *_ya vete del cyber_*
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
