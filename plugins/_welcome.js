import {WAMessageStubType} from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, {conn, participants, groupMetadata}) {
  if (!m.messageStubType || !m.isGroup) return !0;
  let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => 'https://telegra.ph/file/1a77b4e332ab7afba9f0a.jpg')
  let img = await (await fetch(`${pp}`)).buffer()
  let chat = global.db.data.chats[m.chat]

  if (chat.bienvenida && m.messageStubType == 27) {
    let bienvenida = `*╔═════════════*
*║* *Hola soy GokuBot un*
*║* *robot que da la*
*║* *bienvenida a los*
*║* *nuevos usuarios.*
*║* *Bienvenido*
*║* *saiyan「 @${m.messageStubParameters[0].split`@`[0]} 」*
*║* *al grupo, ${groupMetadata.subject}*
*║* *siéntete libre de hablar*
*║* *y subir videos e*
*║* *imágenes....*
*║*
*╚══════════════*`
    
await conn.sendAi(m.chat, botname, textbot, bienvenida, img, img, canal, estilo)
  }
  
  if (chat.bienvenida && m.messageStubType == 28) {
    let bye = `✗ *${botname}* \n│「 Chau 」\n└┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │✗  Se fue\n   │👋 insecto \n   ﹏﹏﹏﹏﹏✪✭✪﹏﹏﹏﹏﹏ ⳹`
await conn.sendAi(m.chat, botname, textbot, bye, img, img, canal, estilo)
  }
  
  if (chat.bienvenida && m.messageStubType == 32) {
    let kick = `✗ *${botname}* \n│「 Chau  」\n└┬ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │👋  insecto \n te eliminó un admi \n    ﹏﹏﹏﹏﹏✪✭✪﹏﹏﹏﹏﹏⳹`
await conn.sendAi(m.chat, botname, textbot, kick, img, img, canal, estilo)
}}
