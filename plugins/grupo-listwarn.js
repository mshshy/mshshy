let handler = async (m, { conn, isOwner }) => {
let adv = Object.entries(global.db.data.users).filter(user => user[1].warn)
let warns = global.db.data.users.warn
let user = global.db.data.users
let imagewarn = './src/warn.jpg'
let caption = `⚠️قائمة الانذارات\n 
*╔═══════════════════·•*
║ *المجموع : ${adv.length} المستخدمين* ${adv ? '\n' + adv.map(([jid, user], i) => `
║
║ 1.- ${isOwner ? '@' + jid.split`@`[0] : jid} *(${user.warn}/3)*\n║\n║ - - - - - - - - -`.trim()).join('\n') : ''}
*╚═══════════════════·•*`
await conn.sendButton(m.chat, caption, wm, imagewarn, [['الاوامر 🌠', '#menu']], m, {mentions: await conn.parseMention(caption)})}
handler.command = /^(المخالفين|التحذيرات)$/i 
handler.group = true
handler.admin = true
export default handler
