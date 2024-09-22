let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:Juan1986;;\nFN:YerTX2 \nORG:juan1986 🌟\nTITLE:\nitem1.TEL;waid=34636445091:34636445091\nitem1.X-ABLabel:Juan1986 🌟\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:Juan1986  🌟\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'Juan1986.xyz⁩', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
