/* Creditos a FG de Dylux-fg (Bot) */

import fg from 'api-dylux' 
import { generateWAMessageFromContent } from '@adiwajshing/baileys'
import { tiktokdl, tiktokdlv2, tiktokdlv3 } from '@bochilteam/scraper'
let handler = async (m, { conn, text, args, usedPrefix, command}) => {
if (!text) throw `*ارجو ان تعطيني رابط الفيديو المطلوب حتا يتم تنزيله🥱📖؛!!! 
مثال: :*\n*${usedPrefix + command}* https://vm.tiktok.com/ZMFb4BXVd/`
if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(text)) throw `*ارجو ان تعطيني رابط الفيديو المطلوب حتا يتم تنزيله🥱📖؛!!! 
مثال: *\n*${usedPrefix + command}* https://vm.tiktok.com/ZMFb4BXVd/`
let texto = `*[❗] @${m.sender.split`@`[0]} ارجو منك ان تنتظر بعض دقايق حتا الجد الفيديو المطلوب! 😐📖*`
try {
let aa = { quoted: m, userJid: conn.user.jid }
let prep = generateWAMessageFromContent(m.chat, { extendedTextMessage: { text: texto, contextInfo: { externalAdReply: { title: 'تابعني في الانستجرام', body: null, thumbnail: imagen1, sourceUrl: 'https://www.instagram.com/mo_shoker?igsh=MTRqa2t0aGNkenM2MQ==' }, mentionedJid: [m.sender]}}}, aa)    
conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id, mentions: [m.sender] })
let p = await fg.tiktok(args[0]) 
let buttons = [{ buttonText: { displayText: 'صوت' }, buttonId: `${usedPrefix}tomp3` }]
let te = `*اسم المستخدم:* ${p.author || 'Indefinido'}`
await conn.sendMessage(m.chat, { video: { url: p.nowm}, caption: te, footer: wm, buttons }, { quoted: m })  
} catch {  	
try { 
let aa2 = { quoted: m, userJid: conn.user.jid }
let prep = generateWAMessageFromContent(m.chat, { extendedTextMessage: { text: texto, contextInfo: { externalAdReply: { title: '『👑┇EL FARA3NA┇🤖┇BOT┇👑』', body: null, thumbnail: imagen1, sourceUrl: 'https://chat.whatsapp.com/BzJhdxwVlte1unMYgieoYQ' }, mentionedJid: [m.sender]}}}, aa2)    
conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id, mentions: [m.sender] })
const { author: { nickname }, video, description } = await tiktokdl(args[0]).catch(async _ => await tiktokdlv2(args[0])).catch(async _ => await tiktokdlv3(args[0]))
const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
let buttons = [{ buttonText: { displayText: '♫ صوتي ♫' }, buttonId: `${usedPrefix}tomp3` }]
let cap = `*الاسم:* ${nickname || 'Indefinido'}`
await conn.sendMessage(m.chat, { video: { url: url}, caption: cap, footer: wm, buttons }, { quoted: m })  
} catch {
throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙾 𝙻𝙰𝙼𝙴𝙽𝚃𝙾, 𝙾𝙲𝚄𝚁𝚁𝙸𝙾 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝙰𝙻 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚁 𝚂𝚄 𝚅𝙸𝙳𝙴𝙾, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*`
}}}  
handler.command = /^(tiktok|تيك|تيكتوك|tiktoknowm|tt|ttnowm|tiktokaudio)$/i
export default handler
