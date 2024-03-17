let handler = m => m
handler.all = async function (m) {
let chat = global.db.data.chats[m.chat]

if (/^hola$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './media/Hola.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}   

if (!chat.isBanned && chat.audios && m.text.match(/(anadieleimporta|a nadie le importa)/gi)) {
let vn = './media/dylan1.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(araara|ara ara)/gi)) {    
let vn = './media/Ara.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(miarda de bot|mierda de bot|mearda de bot|Miarda de Bot|Mierda de Bot|Mearda de Bot)/gi)) {    
let vn = './media/insultar.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
    
if (!chat.isBanned && chat.audios && m.text.match(/(bañate|Bañate)/gi)) {    
let vn = './media/Banate.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
    
if (!chat.isBanned && chat.audios && m.text.match(/(baneado|Baneado)/gi)) {    
let vn = './media/baneado.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}   
   
if (!chat.isBanned && chat.audios && m.text.match(/(bebito fiu fiu|bff|Bebito Fiu Fiu|Bff)/gi)) {    
let vn = './media/bff.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}  
    
if (!chat.isBanned && chat.audios && m.text.match(/(buenas noches|Buenas noches|Boanoite|boanoite)/gi)) {    
let vn = './media/boanoite.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(buenas tardes|Buenas tardes|boatarde|Boatarde)/gi)) {    
let vn = './media/boatarde.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(buenos dias|Buenos dias|buenos días|Buenos días)/gi)) {    
let vn = './media/Buenos-dias-2.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(chica lgante|Chica lgante|Chicalgante|chicalgante|chical gante|Chical gante)/gi)) {    
let vn = './media/chica lgante.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(giagnosticadocongay|diagnosticado con gay|diagnosticado gay|te diagnóstico con gay|diagnóstico gay|te diagnostico con gay|te diagnóstico con gay|te diagnosticó con gay|te diagnostico con gay)/gi)) {    
let vn = './media/DiagnosticadoConGay.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(es puto|eeesss putoo|es putoo|esputoo)/gi)) {    
let vn = './media/Es putoo.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(feliz cumpleaños|felizcumpleaños|happy birthday)/gi)) {    
let vn = './media/Feliz cumple.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(Fiesta del admin|fiesta del admin)/gi)) {    
let vn = './media/admin.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(fiesta del administrador)/gi)) {    
let vn = './media/fiesta.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(fiesta del admin 3|atención grupo|atencion grupo|aviso importante|fiestadeladmin3)/gi)) {    
let vn = './media/Fiesta1.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(gemidos|gemime|gime|gemime|gemi2)/gi)) {    
let vn = './media/gemi2.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(audio hentai|Audio hentai|audiohentai|Audiohentai)/gi)) {    
let vn = './media/hentai.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(sexo|Sexo|Hora de sexo|hora de sexo)/gi)) {    
let vn = './media/maau1.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(laoracion|La biblia|La oración|La biblia|La oración|la biblia|La Biblia)/gi)) {    
let vn = './media/ora.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(Marica tu|cancion1|Marica quien)/gi)) {    
let vn = './media/cancion.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(Murió el grupo|Murio el grupo|murio el grupo|murió el grupo|Grupo muerto|grupo muerto)/gi)) {    
let vn = './media/Murio.m4a'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(Feliz navidad|feliz navidad|Merry Christmas|merry chritmas)/gi)) {    
let vn = './media/navidad.m4a'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(noche de paz|Noche de paz|Noche de amor|noche de amor|Noche de Paz)/gi)) {    
let vn = './media/Noche.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(الحلم)/gi)) {    
let vn = './media/el7elm.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(صوت انمي6|صوت-انمي6)/gi)) {    
let vn = './media/vengo.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(صوت انمي5|صوت-انمي5)/gi)) {    
let vn = './media/Onichan.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(صوت انمي4|صوت-انمي4)/gi)) {    
let vn = './media/animevoice (4).mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(صوت انمي3|صوت-انمي3)/gi)) {    
let vn = './media/animevoice (3).mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(صوت انمي2|صوت-انمي2)/gi)) {    
let vn = './media/animevoice (2).mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(siu|siiuu|ssiiuu|siuuu|siiuuu|الدون|siuuuu|siiiiuuuuu|siu|سيي|سييي|سيييي)/gi)) {    
let vn = './media/siu.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(صوت انمي1|صوت-انمي1)/gi)) {    
let vn = './media/animevoice (1).mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(ديني7|صوت7)/gi)) {    
let vn = './media/deen (7).mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(ديني6|صوت6)/gi)) {    
let vn = './media/deen (6).mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(ديني5|صوت5)/gi)) {    
let vn = './media/deen (5).mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(ديني4|صوت4)/gi)) {    
let vn = './media/deen (4).mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(ديني3|صوت3)/gi)) {    
let vn = './media/deen (3).mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(ديني2|صوت2)/gi)) {    
let vn = './media/deen (2).mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(Yamete|yamete|Yamete kudasai|yamete kudasai)/gi)) {    
let vn = './media/Yamete-kudasai.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(صوت1|ديني1)/gi)) {    
let vn = './media/deen (1).mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(صحصحو|صحصحوا)/gi)) {    
let vn = './media/s7se70.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
   
return !0 }
export default handler
