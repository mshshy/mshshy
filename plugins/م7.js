let handler = async (m, { conn, command, text }) => {
let love = `
*✥━─━⌬〘👾〙⌬━─━✥*

⬪  ࣪    ࣭     ࣪     ࣭   𝅦𝅦   ࣭     ࣪     ࣭    ࣪  ⬫
⬪  ࣪    ࣭     ࣪     ࣭   𝅦𝅦   ࣭     ࣪     ࣭    ࣪  ⬫
⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪▭̷໋̟  ۫ 𝑾𝑬𝑳𝑪𝑶𝑴𝑬 ۫  ▭̷໋̟۪۬໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪
   ‏

*✥━─━⌬〘👾〙⌬━─━✥*

𝚳𝛉  𝛅𝚮𝛉𝚱𝛶 ❉্᭄͜͡

+20 106 768 4684

𝚮𝚨𝚭𝛦𝚳❉্᭄͜͡

+20 102 554 0749

*اذا واجهتك مشكله فلا تتردد في طلب المساعده🪀*

*✥━─━⌬〘👾〙⌬━─━✥*

*⌬〘 مرحبا بك في بوت الفراعنة 〙⌬*

*⌬〘 اليك قائمه تحويل ريك البوت 〙⌬*

*✥━─━⌬〘👾〙⌬━─━✥*

*❬👾❭↜ 〚 .سنجاب 〛*
*❬👾❭↜ 〚 .سلس 〛*
*❬👾❭↜ 〚 .بطئ 〛*
*❬👾❭↜ 〚 .الي 〛*
*❬👾❭↜ 〚 .عكس 〛*
*❬👾❭↜ 〚 .تسريع-بسيط 〛*
*❬👾❭↜ 〚 .سريع 〛*
*❬👾❭↜ 〚 .تحسين 〛*
*❬👾❭↜ 〚 .منفوخ 〛*
*❬👾❭↜ 〚 .عميق 〛*
*❬👾❭↜ 〚 .عميق2 〛*
*❬👾❭↜ 〚 صوت (1-7) 〛*
*❬👾❭↜ 〚 صوت انمي (1-10) 〛*

*✥━─━⌬〘👾〙⌬━─━✥*
 `.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(م٧|م7)$/i
export default handler
