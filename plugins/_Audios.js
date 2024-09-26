//Código creador por matias-crypto colaborador De SonGoku 
//Audio puesto por YerTX2
//si usa el audio para su bot deje los créditos 

import fs from 'fs';

let handler = async (m, { conn }) => {
  let text = m.text.toLowerCase(); 
  let user = global.db.data.users[m.sender];

  const audioMap = {
    'linda': './SonGoku/hdpta.mp3',
    'sin sentimiento': './SonGoku/elcorazon.mp3',
    'elcorazone': './SonGoku/elcorazon.mp3',
    'ayuda': './SonGoku/ayuda.mp3',
    'gey': './SonGoku/gey.mp3', 
    'negra': './SonGoku/negra.mp3', 
    'callate': './SonGoku/callate.mp3', 
    'super albañil': './SonGoku/super albañil.mp3', 
    'peruano': './SonGoku/peruano.mp3', 
    'viva venezuela': './SonGoku/viva venezuela.mp3', 
    'que me importa': './SonGoku/que me importa.mp3', 
    'mondongo': './SonGoku/mondongo.mp3',
    'bebitofiufiu': './SonGoku/bebitofiufiu.mp3',
    'lala': './SonGoku/lala.mp3',
    'dios': './SonGoku/dios.mp3', 
    'sad': './SonGoku/sad.mp3', 
    'risa': './SonGoku/jaja.mp3',
    'goku eta vaina e seria': './SonGoku/goku eta vaina e seria.mp3',
    'motivar': './SonGoku/motivar.mp3', 
    'calculadora': './SonGoku/calculadora.mp3', 
    'tengo novia': './SonGoku/tengo novia.mp3',
    'hay alguien': './SonGoku/Hay alguien en el grupo.mp3'
    
    
  };

  for (let key in audioMap) {
    if (text.includes(key)) {
      try {
        if (fs.existsSync(audioMap[key])) {
          await conn.sendFile(m.chat, audioMap[key], `${key}.mp3`, '', m, false, { mimetype: 'audio/mpeg', asDocument: user.useDocument });
        } else {
          m.reply('El audio correspondiente no se encontró.');
        }
      } catch (err) {
        console.error(err);
        m.reply('Ocurrió un error al intentar enviar el audio.');
      }
      break;
    }
  }
};

handler.help = ['ayuda', 'gey', 'ayuda', 'elcorazon', 'sin sentimiento', 'linda','negra', 'callate', 'super albañil', 'que me importa', 'mondongo', 'bebitofiufiu', 'lala', 'dios', 'risa', 'tengo novia', 'calculadora', 'motivar',
'peruano', 'viva venezuela', 'sad', 'goku eta vaina e seria', 'hay alguien']
handler.customPrefix = /^(hola|hay alguien|goku eta vaina e seria|cómo estás|goku|gey|si te mueves|ayuda|sin sentimiento|linda|negra|eres tu|callate|super albañil|peruano|viva venezuela|que me importa|mondongo|bebitofiufiu|lala|dios|sad|jaja|motivar|calculadora|tengo novia)/i;
handler.command = new RegExp;
handler.tags = ['Audios Dbz'] 
export default handler;
