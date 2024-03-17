let handler = async (m, { conn, command, text }) => {
let support = `
*لدعم البوت تستطيع ان تتابعني:-*

*https://www.instagram.com/mo_shoker?r=nametag* 

*وشكرا لكم يا افضل مستخدمين ❤️😍*
`.trim()
m.reply(support, null, { mentions: conn.parseMention(support) })}
handler.help = ['support']
handler.tags = ['support']
handler.command = /^(الدعم|دعم)$/i
export default handler
