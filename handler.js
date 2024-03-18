import {generateWAMessageFromContent} from '@whiskeysockets/baileys';
import {smsg} from './lib/simple.js';
import {format} from 'util';
import {fileURLToPath} from 'url';
import path, {join} from 'path';
import {unwatchFile, watchFile} from 'fs';
import fs from 'fs';
import chalk from 'chalk';
import mddd5 from 'md5';
import ws from 'ws';

/**
 * @type {import('@whiskeysockets/baileys')}
 */
const {proto} = (await import('@whiskeysockets/baileys')).default;
const isNumber = (x) => typeof x === 'number' && !isNaN(x);
const delay = (ms) => isNumber(ms) && new Promise((resolve) => setTimeout(function() {
  clearTimeout(this);
  resolve();
}, ms));

/**
 * Handle messages upsert
 * @param {import('@whiskeysockets/baileys').BaileysEventMap<unknown>['messages.upsert']} groupsUpdate
 */
export async function handler(chatUpdate) {
  this.msgqueque = this.msgqueque || [];
  this.uptime = this.uptime || Date.now();
  if (!chatUpdate) {
    return;
  }
  this.pushMessage(chatUpdate.messages).catch(console.error);
  let m = chatUpdate.messages[chatUpdate.messages.length - 1];
  if (!m) {
    return;
  }
  if (global.db.data == null) await global.loadDatabase();
  /* Creditos a Otosaka (https://wa.me/51993966345) */

  if (global.chatgpt.data === null) await global.loadChatgptDB();

  /* ------------------------------------------------*/
  try {
    m = smsg(this, m) || m;
    if (!m) {
      return;
    }
    global.mconn = m 
    m.exp = 0;
    m.money = false;
    m.limit = false;
    try {
      // TODO: use loop to insert data instead of this
      const user = global.db.data.users[m.sender];
      /* Creditos a Otosaka (https://wa.me/51993966345) */

      const chatgptUser = global.chatgpt.data.users[m.sender];
      if (typeof chatgptUser !== 'object') {
        global.chatgpt.data.users[m.sender] = [];
      }

      /* ------------------------------------------------*/
      if (typeof user !== 'object') {
        global.db.data.users[m.sender] = {};
      }
      if (user) {
        if (!isNumber(user.exp)) user.exp = 0;
        if (!('premium' in user)) user.premium = false;
        if (!isNumber(user.joincount)) user.joincount = 2;
        if (!isNumber(user.limit)) user.limit = 20;
        if (!isNumber(user.money)) user.money = 15;
        if (!('registered' in user)) user.registered = false;
        if (!user.registered) {
          if (!('name' in user)) user.name = m.name;
          if (!isNumber(user.age)) user.age = -1;
          if (!isNumber(user.anggur)) user.anggur = 0;
          if (!isNumber(user.apel)) user.apel = 0;
          if (!isNumber(user.bibitanggur)) user.bibitanggur = 0;
          if (!isNumber(user.bibitapel)) user.bibitapel = 0;
          if (!isNumber(user.bibitjeruk)) user.bibitjeruk = 0;
          if (!isNumber(user.bibitmangga)) user.bibitmangga = 0;
          if (!isNumber(user.bibitpisang)) user.bibitpisang = 0;
          if (!isNumber(user.emas)) user.emas = 0;
          if (!isNumber(user.jeruk)) user.jeruk = 0;
          if (!isNumber(user.kayu)) user.kayu = 0;
          if (!isNumber(user.makanan)) user.makanan = 0;
          if (!isNumber(user.mangga)) user.mangga = 0;
          if (!isNumber(user.pisang)) user.pisang = 0;
          if (!isNumber(user.premiumDate)) user.premiumDate = -1;
          if (!isNumber(user.regTime)) user.regTime = -1;
          if (!isNumber(user.semangka)) user.semangka = 0;
          if (!isNumber(user.stroberi)) user.stroberi = 0;
        }
        if (!isNumber(user.afk)) user.afk = -1;
	        if (!('autolevelup' in user)) user.autolevelup = true;
	        if (!('الدور' في المستخدم)) user.role = 'Novato';
        if (!isNumber(user.agility)) user.agility = 0;
        if (!isNumber(user.anakanjing)) user.anakanjing = 0;
        if (!isNumber(user.anakcentaur)) user.anakcentaur = 0;
        if (!isNumber(user.anakgriffin)) user.anakgriffin = 0;
        if (!isNumber(user.anakkucing)) user.anakkucing = 0;
        if (!isNumber(user.anakkuda)) user.anakkuda = 0;
        if (!isNumber(user.anakkyubi)) user.anakkyubi = 0;
        if (!isNumber(user.anaknaga)) user.anaknaga = 0;
        if (!isNumber(user.anakpancingan)) user.anakpancingan = 0;
        if (!isNumber(user.anakphonix)) user.anakphonix = 0;
        if (!isNumber(user.anakrubah)) user.anakrubah = 0;
        if (!isNumber(user.anakserigala)) user.anakserigala = 0;
        if (!isNumber(user.anggur)) user.anggur = 0;
        if (!isNumber(user.anjing)) user.anjing = 0;
        if (!isNumber(user.anjinglastclaim)) user.anjinlastclaim = 0;
        if (!isNumber(user.antispam)) user.antispam = 0;
        if (!isNumber(user.antispamlastclaim)) user.antispamlastclaim = 0;
        if (!isNumber(user.apel)) user.apel = 0;
        if (!isNumber(user.aqua)) user.aqua = 0;
        if (!isNumber(user.arc)) user.arc = 0;
        if (!isNumber(user.arcdurability)) user.arcdurability = 0;
        if (!isNumber(user.arlok)) user.arlok = 0;
        if (!isNumber(user.armor)) user.armor = 0;
        if (!isNumber(user.armordurability)) user.armordurability = 0;
        if (!isNumber(user.armormonster)) user.armormonster = 0;
        if (!isNumber(user.as)) user.as = 0;
        إذا (!isNumber(user.atm)) user.atm = 0;
        if (!isNumber(user.axe)) user.axe = 0;
        if (!isNumber(user.axedurability)) user.axedurability = 0;
        if (!isNumber(user.ayam)) user.ayam = 0;
        if (!isNumber(user.ayamb)) user.ayamb = 0;
        if (!isNumber(user.ayambakar)) user.ayambakar = 0;
        if (!isNumber(user.ayamg)) user.ayamg = 0;
        if (!isNumber(user.ayamgoreng)) user.ayamgoreng = 0;
        if (!isNumber(user.babi)) user.babi = 0;
        if (!isNumber(user.babihutan)) user.babihutan = 0;
        if (!isNumber(user.babipanggang)) user.babipanggang = 0;
        if (!isNumber(user.bandage)) user.bandage = 0;
        if (!isNumber(user.bank)) user.bank = 0;
        if (!isNumber(user.banteng)) user.banteng = 0;
        if (!isNumber(user.batu)) user.batu = 0;
        if (!isNumber(user.bawal)) user.bawal = 0;
        if (!isNumber(user.bawalbakar)) user.bawalbakar = 0;
        if (!isNumber(user.bayam)) user.bayam = 0;
        if (!isNumber(user.berlian)) user.berlian = 10;
        if (!isNumber(user.bibitanggur)) user.bibitanggur = 0;
        if (!isNumber(user.bibitapel)) user.bibitapel = 0;
        if (!isNumber(user.bibitjeruk)) user.bibitjeruk = 0;
        if (!isNumber(user.bibitmangga)) user.bibitmangga = 0;
        if (!isNumber(user.bibitpisang)) user.bibitpisang = 0;
        if (!isNumber(user.botol)) user.botol = 0;
        if (!isNumber(user.bow)) user.bow = 0;
        if (!isNumber(user.bowdurability)) user.bowdurability = 0;
        if (!isNumber(user.boxs)) user.boxs = 0;
        if (!isNumber(user.brick)) user.brick = 0;
        if (!isNumber(user.brokoli)) user.brokoli = 0;
        if (!isNumber(user.buaya)) user.buaya = 0;
        if (!isNumber(user.buntal)) user.buntal = 0;
        if (!isNumber(user.cat)) user.cat = 0;
        if (!isNumber(user.catexp)) user.catexp = 0;
        if (!isNumber(user.catlastfeed)) user.catlastfeed = 0;
        if (!isNumber(user.centaur)) user.centaur = 0;
        if (!isNumber(user.centaurexp)) user.centaurexp = 0;
        if (!isNumber(user.centaurlastclaim)) user.centaurlastclaim = 0;
        if (!isNumber(user.centaurlastfeed)) user.centaurlastfeed = 0;
        if (!isNumber(user.clay)) user.clay = 0;
        if (!isNumber(user.coal)) user.coal = 0;
        if (!isNumber(user.coin)) user.coin = 0;
        if (!isNumber(user.common)) user.common = 0;
        if (!isNumber(user.crystal)) user.crystal = 0;
        if (!isNumber(user.cumi)) user.cumi = 0;
        if (!isNumber(user.cupon)) user.cupon = 0;
        if (!isNumber(user.diamond)) user.diamond = 3;
        if (!isNumber(user.dog)) user.dog = 0;
        if (!isNumber(user.dogexp)) user.dogexp = 0;
        if (!isNumber(user.doglastfeed)) user.doglastfeed = 0;
        if (!isNumber(user.dory)) user.dory = 0;
        if (!isNumber(user.dragon)) user.dragon = 0;
        if (!isNumber(user.dragonexp)) user.dragonexp = 0;
        if (!isNumber(user.dragonlastfeed)) user.dragonlastfeed = 0;
        if (!isNumber(user.emas)) user.emas = 0;
        if (!isNumber(user.emerald)) user.emerald = 0;
        if (!isNumber(user.enchant)) user.enchant = 0;
        if (!isNumber(user.esteh)) user.esteh = 0;
        if (!isNumber(user.exp)) user.exp = 0;
        if (!isNumber(user.expg)) user.expg = 0;
        if (!isNumber(user.exphero)) user.exphero = 0;
	        if (!isNumber(user.eleksirb)) user.eleksirb = 0;
	        if (!isNumber(user.emasbatang)) user.emasbatang = 0;
	        if (!isNumber(user.emasbiasa)) user.emasbiasa = 0;
	        if (!isNumber(user.fideos)) user.fideos = 0;
        if (!isNumber(user.fishingrod)) user.fishingrod = 0;
        if (!isNumber(user.fishingroddurability)) user.fishingroddurability = 0;
        if (!isNumber(user.fortress)) user.fortress = 0;
        if (!isNumber(user.fox)) user.fox = 0;
        if (!isNumber(user.foxexp)) user.foxexp = 0;
        if (!isNumber(user.foxlastfeed)) user.foxlastfeed = 0;
        if (!isNumber(user.fullatm)) user.fullatm = 0;
        if (!isNumber(user.gadodado)) user.gadodado = 0;
        if (!isNumber(user.gajah)) user.gajah = 0;
        if (!isNumber(user.gamemines)) user.gamemines = false;
        if (!isNumber(user.ganja)) user.ganja = 0;
        if (!isNumber(user.gardenboxs)) user.gardenboxs = 0;
        if (!isNumber(user.gems)) user.gems = 0;
        if (!isNumber(user.glass)) user.glass = 0;
        if (!isNumber(user.glimit)) user.glimit = 20;
        if (!isNumber(user.glory)) user.glory = 0;
        if (!isNumber(user.gold)) user.gold = 0;
        if (!isNumber(user.griffin)) user.griffin = 0;
        if (!isNumber(user.griffinexp)) user.griffinexp = 0;
        if (!isNumber(user.griffinlastclaim)) user.griffinlastclaim = 0;
        if (!isNumber(user.griffinlastfeed)) user.griffinlastfeed = 0;
        if (!isNumber(user.gulai)) user.gulai = 0;
        if (!isNumber(user.gurita)) user.gurita = 0;
        if (!isNumber(user.harimau)) user.harimau = 0;
        if (!isNumber(user.haus)) user.haus = 100;
        if (!isNumber(user.healt)) user.healt = 100;
        if (!isNumber(user.health)) user.health = 100;
        if (!isNumber(user.healthmonster)) user.healthmonster = 0;
        if (!isNumber(user.healtmonster)) user.healtmonster = 0;
        if (!isNumber(user.hero)) user.hero = 1;
        if (!isNumber(user.herolastclaim)) user.herolastclaim = 0;
        if (!isNumber(user.hiu)) user.hiu = 0;
        if (!isNumber(user.horse)) user.horse = 0;
        if (!isNumber(user.horseexp)) user.horseexp = 0;
        if (!isNumber(user.horselastfeed)) user.horselastfeed = 0;
        if (!isNumber(user.ikan)) user.ikan = 0;
        if (!isNumber(user.ikanbakar)) user.ikanbakar = 0;
        if (!isNumber(user.intelligence)) user.intelligence = 0;
        if (!isNumber(user.iron)) user.iron = 0;
        if (!isNumber(user.jagung)) user.jagung = 0;
        if (!isNumber(user.jagungbakar)) user.jagungbakar = 0;
        if (!isNumber(user.jeruk)) user.jeruk = 0;
        if (!isNumber(user.joinlimit)) user.joinlimit = 1;
        if (!isNumber(user.judilast)) user.judilast = 0;
        if (!isNumber(user.kaleng)) user.kaleng = 0;
        if (!isNumber(user.kambing)) user.kambing = 0;
        if (!isNumber(user.kangkung)) user.kangkung = 0;
        if (!isNumber(user.kapak)) user.kapak = 0;
        if (!isNumber(user.kardus)) user.kardus = 0;
        if (!isNumber(user.katana)) user.katana = 0;
        if (!isNumber(user.katanadurability)) user.katanadurability = 0;
        if (!isNumber(user.kayu)) user.kayu = 0;
        if (!isNumber(user.kentang)) user.kentang = 0;
        if (!isNumber(user.kentanggoreng)) user.kentanggoreng = 0;
        if (!isNumber(user.kepiting)) user.kepiting = 0;
        if (!isNumber(user.kepitingbakar)) user.kepitingbakar = 0;
        if (!isNumber(user.kerbau)) user.kerbau = 0;
        if (!isNumber(user.kerjadelapan)) user.kerjadelapan = 0;
        if (!isNumber(user.kerjadelapanbelas)) user.kerjadelapanbelas = 0;
        if (!isNumber(user.kerjadua)) user.kerjadua = 0;
        if (!isNumber(user.kerjaduabelas)) user.kerjaduabelas = 0;
        if (!isNumber(user.kerjaduadelapan)) user.kerjaduadelapan = 0;
        if (!isNumber(user.kerjaduadua)) user.kerjaduadua = 0;
        if (!isNumber(user.kerjaduaempat)) user.kerjaduaempat = 0;
        if (!isNumber(user.kerjaduaenam)) user.kerjaduaenam = 0;
        if (!isNumber(user.kerjadualima)) user.kerjadualima = 0;
        if (!isNumber(user.kerjaduapuluh)) user.kerjaduapuluh = 0;
        if (!isNumber(user.kerjaduasatu)) user.kerjaduasatu = 0;
        if (!isNumber(user.kerjaduasembilan)) user.kerjaduasembilan = 0;
        if (!isNumber(user.kerjaduatiga)) user.kerjaduatiga = 0;
        if (!isNumber(user.kerjaduatujuh)) user.kerjaduatujuh = 0;
        if (!isNumber(user.kerjaempat)) user.kerjaempat = 0;
        if (!isNumber(user.kerjaempatbelas)) user.kerjaempatbelas = 0;
        if (!isNumber(user.kerjaenam)) user.kerjaenam = 0;
        if (!isNumber(user.kerjaenambelas)) user.kerjaenambelas = 0;
        if (!isNumber(user.kerjalima)) user.kerjalima = 0;
        if (!isNumber(user.kerjalimabelas)) user.kerjalimabelas = 0;
        if (!isNumber(user.kerjasatu)) user.kerjasatu = 0;
        if (!isNumber(user.kerjasebelas)) user.kerjasebelas = 0;
        if (!isNumber(user.kerjasembilan)) user.kerjasembilan = 0;
        if (!isNumber(user.kerjasembilanbelas)) user.kerjasembilanbelas = 0;
        if (!isNumber(user.kerjasepuluh)) user.kerjasepuluh = 0;
        if (!isNumber(user.kerjatiga)) user.kerjatiga = 0;
        if (!isNumber(user.kerjatigabelas)) user.kerjatigabelas = 0;
        if (!isNumber(user.kerjatigapuluh)) user.kerjatigapuluh = 0;
        if (!isNumber(user.kerjatujuh)) user.kerjatujuh = 0;
        if (!isNumber(user.kerjatujuhbelas)) user.kerjatujuhbelas = 0;
        if (!isNumber(user.korbanngocok)) user.korbanngocok = 0;
        if (!isNumber(user.kubis)) user.kubis = 0;
        if (!isNumber(user.kucing)) user.kucing = 0;
        if (!isNumber(user.kucinglastclaim)) user.kucinglastclaim = 0;
        if (!isNumber(user.kuda)) user.kuda = 0;
        if (!isNumber(user.kudalastclaim)) user.kudalastclaim = 0;
        if (!isNumber(user.kyubi)) user.kyubi = 0;
        if (!isNumber(user.kyubiexp)) user.kyubiexp = 0;
        if (!isNumber(user.kyubilastclaim)) user.kyubilastclaim = 0;
        if (!isNumber(user.kyubilastfeed)) user.kyubilastfeed = 0;
        if (!isNumber(user.labu)) user.labu = 0;
        if (!isNumber(user.laper)) user.laper = 100;
        if (!isNumber(user.lastadventure)) user.lastadventure = 0;
        if (!isNumber(user.lastbansos)) user.lastbansos = 0;
        if (!isNumber(user.lastberbru)) user.lastberbru = 0;
        if (!isNumber(user.lastberkebon)) user.lastberkebon = 0;
        if (!isNumber(user.lastbunga)) user.lastbunga = 0;
        if (!isNumber(user.lastbunuhi)) user.lastbunuhi = 0;
	        if (!isNumber(user.lastcoins)) user.lastcoins = 0;
        if (!isNumber(user.lastclaim)) user.lastclaim = 0;
        if (!isNumber(user.lastcode)) user.lastcode = 0;
	        if (!isNumber(user.lastcofre)) user.lastcofre = 0;
        if (!isNumber(user.lastcodereg)) user.lastcodereg = 0;
        if (!isNumber(user.lastcrusade)) user.lastcrusade = 0;
        if (!isNumber(user.lastdagang)) user.lastdagang = 0;
	        if (!isNumber(user.lastdiamantes)) user.lastdiamantes = 0;
        if (!isNumber(user.lastduel)) user.lastduel = 0;
        if (!isNumber(user.lastdungeon)) user.lastdungeon = 0;
        if (!isNumber(user.lasteasy)) user.lasteasy = 0;
        if (!isNumber(user.lastfight)) user.lastfight = 0;
        if (!isNumber(user.lastfishing)) user.lastfishing = 0;
        if (!isNumber(user.lastgift)) user.lastgift = 0;
        if (!isNumber(user.lastgojek)) user.lastgojek = 0;
        if (!isNumber(user.lastgrab)) user.lastgrab = 0;
        if (!isNumber(user.lasthourly)) user.lasthourly = 0;
        if (!isNumber(user.lasthunt)) user.lasthunt = 0;
        if (!isNumber(user.lastIstigfar)) user.lastIstigfar = 0;
        if (!isNumber(user.lastjb)) user.lastjb = 0;
        if (!isNumber(user.lastkill)) user.lastkill = 0;
        if (!isNumber(user.lastlink)) user.lastlink = 0;
        if (!isNumber(user.lastlumber)) user.lastlumber = 0;
        if (!isNumber(user.lastmancingeasy)) user.lastmancingeasy = 0;
        if (!isNumber(user.lastmancingextreme)) user.lastmancingextreme = 0;
        if (!isNumber(user.lastmancinghard)) user.lastmancinghard = 0;
        if (!isNumber(user.lastmancingnormal)) user.lastmancingnormal = 0;
        if (!isNumber(user.lastmining)) user.lastmining = 0;
        if (!isNumber(user.lastmisi)) user.lastmisi = 0;
        if (!isNumber(user.lastmonthly)) user.lastmonthly = 0;
        if (!isNumber(user.lastmulung)) user.lastmulung = 0;
        if (!isNumber(user.lastnambang)) user.lastnambang = 0;
        if (!isNumber(user.lastnebang)) user.lastnebang = 0;
        if (!isNumber(user.lastngocok)) user.lastngocok = 0;
        if (!isNumber(user.lastngojek)) user.lastngojek = 0;
        if (!isNumber(user.lastopen)) user.lastopen = 0;
        if (!isNumber(user.lastpekerjaan)) user.lastpekerjaan = 0;
	        if (!isNumber(user.lastpago)) user.lastpago = 0;
        if (!isNumber(user.lastpotionclaim)) user.lastpotionclaim = 0;
        if (!isNumber(user.lastrampok)) user.lastrampok = 0;
        if (!isNumber(user.lastramuanclaim)) user.lastramuanclaim = 0;
        if (!isNumber(user.lastrob)) user.lastrob = 0;
        if (!isNumber(user.lastroket)) user.lastroket = 0;
        if (!isNumber(user.lastsda)) user.lastsda = 0;
        if (!isNumber(user.lastseen)) user.lastseen = 0;
        if (!isNumber(user.lastSetStatus)) user.lastSetStatus = 0;
	        if (!isNumber(user.lastspam)) user.lastspam = 0;
        if (!isNumber(user.lastsironclaim)) user.lastsironclaim = 0;
        if (!isNumber(user.lastsmancingclaim)) user.lastsmancingclaim = 0;
        if (!isNumber(user.laststringclaim)) user.laststringclaim = 0;
        if (!isNumber(user.lastswordclaim)) user.lastswordclaim = 0;
        if (!isNumber(user.lastturu)) user.lastturu = 0;
        if (!isNumber(user.lastwar)) user.lastwar = 0;
        if (!isNumber(user.lastwarpet)) user.lastwarpet = 0;
        if (!isNumber(user.lastweaponclaim)) user.lastweaponclaim = 0;
        if (!isNumber(user.lastweekly)) user.lastweekly = 0;
        if (!isNumber(user.lastwork)) user.lastwork = 0;
        if (!isNumber(user.legendary)) user.legendary = 0;
        if (!isNumber(user.lele)) user.lele = 0;
        if (!isNumber(user.leleb)) user.leleb = 0;
        if (!isNumber(user.lelebakar)) user.lelebakar = 0;
        if (!isNumber(user.leleg)) user.leleg = 0;
        if (!isNumber(user.level)) user.level = 0;
        if (!isNumber(user.limit)) user.limit = 20;
        if (!isNumber(user.limitjoinfree)) user.limitjoinfree = 1;
        if (!isNumber(user.lion)) user.lion = 0;
        if (!isNumber(user.lionexp)) user.lionexp = 0;
        if (!isNumber(user.lionlastfeed)) user.lionlastfeed = 0;
        if (!isNumber(user.lobster)) user.lobster = 0;
        if (!isNumber(user.lumba)) user.lumba = 0;
        if (!isNumber(user.magicwand)) user.magicwand = 0;
        if (!isNumber(user.magicwanddurability)) user.magicwanddurability = 0;
        if (!isNumber(user.makanancentaur)) user.makanancentaur = 0;
        if (!isNumber(user.makanangriffin)) user.makanangriffin = 0;
        if (!isNumber(user.makanankyubi)) user.makanankyubi = 0;
        if (!isNumber(user.makanannaga)) user.makanannaga = 0;
        if (!isNumber(user.makananpet)) user.makananpet = 0;
        if (!isNumber(user.makananphonix)) user.makananphonix = 0;
        if (!isNumber(user.makananserigala)) user.makananserigala = 0;
        if (!isNumber(user.mana)) user.mana = 0;
        if (!isNumber(user.mangga)) user.mangga = 0;
        if (!isNumber(user.money)) user.money = 15;
        if (!isNumber(user.monyet)) user.monyet = 0;
        if (!isNumber(user.mythic)) user.mythic = 0;
        if (!isNumber(user.naga)) user.naga = 0;
        if (!isNumber(user.nagalastclaim)) user.nagalastclaim = 0;
        if (!isNumber(user.net)) user.net = 0;
        if (!isNumber(user.nila)) user.nila = 0;
        if (!isNumber(user.nilabakar)) user.nilabakar = 0;
        if (!isNumber(user.note)) user.note = 0;
        if (!isNumber(user.ojekk)) user.ojekk = 0;
        if (!isNumber(user.oporayam)) user.oporayam = 0;
        if (!isNumber(user.orca)) user.orca = 0;
        if (!isNumber(user.pancing)) user.pancing = 0;
        if (!isNumber(user.pancingan)) user.pancingan = 1;
        if (!isNumber(user.panda)) user.panda = 0;
        if (!isNumber(user.paus)) user.paus = 0;
        if (!isNumber(user.pausbakar)) user.pausbakar = 0;
        if (!isNumber(user.pc)) user.pc = 0;
        if (!isNumber(user.pepesikan)) user.pepesikan = 0;
        if (!isNumber(user.pertambangan)) user.pertambangan = 0;
        if (!isNumber(user.pertanian)) user.pertanian = 0;
        if (!isNumber(user.pet)) user.pet = 0;
        if (!isNumber(user.petFood)) user.petFood = 0;
        if (!isNumber(user.phonix)) user.phonix = 0;
        if (!isNumber(user.phonixexp)) user.phonixexp = 0;
        if (!isNumber(user.phonixlastclaim)) user.phonixlastclaim = 0;
        if (!isNumber(user.phonixlastfeed)) user.phonixlastfeed = 0;
        if (!isNumber(user.pickaxe)) user.pickaxe = 0;
        if (!isNumber(user.pickaxedurability)) user.pickaxedurability = 0;
        if (!isNumber(user.pillhero)) user.pillhero= 0;
        if (!isNumber(user.pisang)) user.pisang = 0;
        if (!isNumber(user.pointxp)) user.pointxp = 0;
        if (!isNumber(user.potion)) user.potion = 0;
        if (!isNumber(user.psenjata)) user.psenjata = 0;
        if (!isNumber(user.psepick)) user.psepick = 0;
        if (!isNumber(user.ramuan)) user.ramuan = 0;
        if (!isNumber(user.ramuancentaurlast)) user.ramuancentaurlast = 0;
        if (!isNumber(user.ramuangriffinlast)) user.ramuangriffinlast = 0;
        if (!isNumber(user.ramuanherolast)) user.ramuanherolast = 0;
        if (!isNumber(user.ramuankucinglast)) user.ramuankucinglast = 0;
        if (!isNumber(user.ramuankudalast)) user.ramuankudalast = 0;
        if (!isNumber(user.ramuankyubilast)) user.ramuankyubilast = 0;
        if (!isNumber(user.ramuannagalast)) user.ramuannagalast = 0;
        if (!isNumber(user.ramuanphonixlast)) user.ramuanphonixlast = 0;
        if (!isNumber(user.ramuanrubahlast)) user.ramuanrubahlast = 0;
        if (!isNumber(user.ramuanserigalalast)) user.ramuanserigalalast = 0;
        if (!isNumber(user.reglast)) user.reglast = 0;
        if (!isNumber(user.rendang)) user.rendang = 0;
        if (!isNumber(user.rhinoceros)) user.rhinoceros = 0;
        if (!isNumber(user.rhinocerosexp)) user.rhinocerosexp = 0;
        if (!isNumber(user.rhinoceroslastfeed)) user.rhinoceroslastfeed = 0;
        if (!isNumber(user.robo)) user.robo = 0;
        if (!isNumber(user.roboxp)) user.roboxp = 0;
        if (!isNumber(user.rock)) user.rock = 0;
        if (!isNumber(user.roket)) user.roket = 0;
        if (!isNumber(user.roti)) user.roti = 0;
        if (!isNumber(user.rubah)) user.rubah = 0;
        if (!isNumber(user.rubahlastclaim)) user.rubahlastclaim = 0;
        if (!isNumber(user.rumahsakit)) user.rumahsakit = 0;
        if (!isNumber(user.sampah)) user.sampah = 0;
        if (!isNumber(user.sand)) user.sand = 0;
        if (!isNumber(user.sapi)) user.sapi = 0;
        if (!isNumber(user.sapir)) user.sapir = 0;
        if (!isNumber(user.seedbayam)) user.seedbayam = 0;
        if (!isNumber(user.seedbrokoli)) user.seedbrokoli = 0;
        if (!isNumber(user.seedjagung)) user.seedjagung = 0;
        if (!isNumber(user.seedkangkung)) user.seedkangkung = 0;
        if (!isNumber(user.seedkentang)) user.seedkentang = 0;
        if (!isNumber(user.seedkubis)) user.seedkubis = 0;
        if (!isNumber(user.seedlabu)) user.seedlabu = 0;
        if (!isNumber(user.seedtomat)) user.seedtomat = 0;
        if (!isNumber(user.seedwortel)) user.seedwortel = 0;
        if (!isNumber(user.serigala)) user.serigala = 0;
        if (!isNumber(user.serigalalastclaim)) user.serigalalastclaim = 0;
        if (!isNumber(user.shield)) user.shield = false;
        if (!isNumber(user.skillexp)) user.skillexp = 0;
        if (!isNumber(user.snlast)) user.snlast = 0;
        if (!isNumber(user.soda)) user.soda = 0;
        if (!isNumber(user.sop)) user.sop = 0;
        if (!isNumber(user.spammer)) user.spammer = 0;
        if (!isNumber(user.spinlast)) user.spinlast = 0;
        if (!isNumber(user.ssapi)) user.ssapi = 0;
        if (!isNumber(user.stamina)) user.stamina = 100;
        if (!isNumber(user.steak)) user.steak = 0;
        if (!isNumber(user.stick)) user.stick = 0;
        if (!isNumber(user.strength)) user.strength = 0;
        if (!isNumber(user.string)) user.string = 0;
        if (!isNumber(user.superior)) user.superior = 0;
        if (!isNumber(user.suplabu)) user.suplabu = 0;
        if (!isNumber(user.sushi)) user.sushi = 0;
        if (!isNumber(user.sword)) user.sword = 0;
        if (!isNumber(user.sworddurability)) user.sworddurability = 0;
        if (!isNumber(user.tigame)) user.tigame = 50;
        if (!isNumber(user.tiketcoin)) user.tiketcoin = 0;
        if (!isNumber(user.title)) user.title = 0;
        if (!isNumber(user.tomat)) user.tomat = 0;
        if (!isNumber(user.tprem)) user.tprem = 0;
        if (!isNumber(user.trash)) user.trash = 0;
        if (!isNumber(user.trofi)) user.trofi = 0;
        if (!isNumber(user.troopcamp)) user.troopcamp = 0;
        if (!isNumber(user.tumiskangkung)) user.tumiskangkung = 0;
        if (!isNumber(user.udang)) user.udang = 0;
        if (!isNumber(user.udangbakar)) user.udangbakar = 0;
        if (!isNumber(user.umpan)) user.umpan = 0;
        if (!isNumber(user.uncoommon)) user.uncoommon = 0;
        if (!isNumber(user.unreglast)) user.unreglast = 0;
        if (!isNumber(user.upgrader)) user.upgrader = 0;
        if (!isNumber(user.vodka)) user.vodka = 0;
        if (!isNumber(user.wallet)) user.wallet = 0;
        if (!isNumber(user.warn)) user.warn = 0;
        if (!isNumber(user.weapon)) user.weapon = 0;
        if (!isNumber(user.weapondurability)) user.weapondurability = 0;
        if (!isNumber(user.wolf)) user.wolf = 0;
        if (!isNumber(user.wolfexp)) user.wolfexp = 0;
        if (!isNumber(user.wolflastfeed)) user.wolflastfeed = 0;
        if (!isNumber(user.wood)) user.wood = 0;
        if (!isNumber(user.wortel)) user.wortel = 0;
        if (!user.lbars) user.lbars = '[â–’â–’â–’â–’â–’â–’â–’â–’â–’]';
        if (!user.job) user.job = 'Desempeo';
        إذا (!user.premium) user.premium = false;
        إذا (!user.premium) user.premiumTime = 0;
        إذا (!user.wait) user.wait = 0;
        إذا (!user.rtrofi) user.rtrofi = 'Bronce';
      } آخر {
        global.db.data.users[m.sender] = {
		    أفك: -1،
		    الانتظار: 0،
          AFKالسبب: ''،
          العمر: -1،
          خفة الحركة: 16،
          اناكانجينج: 0،
          اناكسينتور: 0,
          أناكغريفين: 0،
          الانقراض: 0،
          اناكودا: 0،
          أناكيوبي: 0،
          أناكناغا: 0،
          أناكبانسينجان: 0،
          اناكفونيكس: 0،
          اناكروباه: 0،
          أناكسيريجالا: 0,
          أنجور: 0,
          انجينج: 0،
          أنجينجلاستكليم: 0,
          مكافحة البريد العشوائي: 0,
          مكافحة البريد العشوائي: 0،
          أبل: 0،
          أكوا: 0،
          القوس: 0،
          متانة القوس: 0,
          ارلوك: 0,
          الدرع: 0،
          متانة الدروع: 0
          وحش الدروع: 0,
          مثل: 0،
          أجهزة الصراف الآلي: 0،
          المستوى التلقائي: صحيح،
          الفأس: 0،
          القدرة على التحمل: 0،
          أيام: 0،
          أيامب: 0،
          أيامبكار: 0،
          أيامج: 0,
          أيامغورينغ: 0،
          بابي: 0،
          بابيههوتان: 0،
          بابيبانغانغ: 0،
          ضمادة: 0،
          البنك: 0،
          المحظورة: كاذبة،
          سبب الحظر: ''،
          المستخدم المحظور: خطأ،
          بانتنغ: 0،
          باتو: 0،
          بوال: 0،
          بوالباكر: 0،
          بيام: 0،
          برلين: 10،
          بيبيتانجور: 0،
          ثنائي البيتابيل: 0،
          بيبيتجيروك: 0،
          بيبيتمانغا: 0،
          بيبيتبيسانغ: 0،
          بوتول: 0،
          القوس: 0،
          متانة القوس: 0,
          الصناديق: 0،
          الطوب: 0،
          بروكولي: 0،
          بويا: 0،
          بونتال: 0،
          القط: 0،
          تغذية القطط: 0,
          كاتنجكسب: 0،
          سنتور: 0،
          سنتوريكس: 0،
          مطالبة القنطور: 0،
          تغذية القنطور: 0،
          الطين: 0،
          الفحم: 0،
          العملة: 0،
          مشترك: 0،
          الكريستال: 0،
          كومي: 0،
          كوبون: 0،
          الماس: 3،
          الكلب: 0،
          تجربة الكلب: 0,
          دوجلاستفيد: 0,
          دوري: 0،
          التنين: 0،
          دراجون إكسب: 0،
          آخر تغذية التنين: 0,
          إيماس: 0،
          الزمرد: 0،
          إستيه: 0,
          الخبرة: 0،
          إكسبج: 0،
          اكسفيرو: 0،
          منتهية الصلاحية: 0،
		    الإكسيرب: 0,
		    إيماسباتانج: 0،
		    ماسبياسا: 0,
		    الفيديوهات: 0,
          صنارة الصيد: 0,
          متانة الصيد: 0,
          القلعة: 0،
          الثعلب: 0،
          فوكس إكسب: 0،
          تغذية الثعلب: 0،
          كامل: 0،
          جدودادو: 0،
          جاجا: 0،
          مناجم الألعاب: كاذبة،
          غانجا: 0،
          صناديق الحدائق: 0,
          الأحجار الكريمة: 0،
          الزجاج: 0،
          الذهب: 0،
          غريفين: 0،
          غريفينيكس: 0،
          غريفينلاست كليم: 0,
          griffinlastfeed: 0,
          gulai: 0,
          gurita: 0,
          harimau: 0,
          haus: 100,
          healt: 100,
          health: 100,
          healtmonster: 100,
          hero: 1,
          herolastclaim: 0,
          hiu: 0,
          horse: 0,
          horseexp: 0,
          horselastfeed: 0,
          ikan: 0,
          ikanbakar: 0,
          intelligence: 10,
          iron: 0,
          jagung: 0,
          jagungbakar: 0,
          jeruk: 0,
          job: 'Pengangguran',
		            joincount: 2,
          joinlimit: 1,
          judilast: 0,
          kaleng: 0,
          kambing: 0,
          kangkung: 0,
          kapak: 0,
          kardus: 0,
          katana: 0,
          katanadurability: 0,
          kayu: 0,
          kentang: 0,
          kentanggoreng: 0,
          kepiting: 0,
          kepitingbakar: 0,
          kerbau: 0,
          kerjadelapan: 0,
          kerjadelapanbelas: 0,
          kerjadua: 0,
          kerjaduabelas: 0,
          kerjaduadelapan: 0,
          kerjaduadua: 0,
          kerjaduaempat: 0,
          kerjaduaenam: 0,
          kerjadualima: 0,
          kerjaduapuluh: 0,
          kerjaduasatu: 0,
          kerjaduasembilan: 0,
          kerjaduatiga: 0,
          kerjaduatujuh: 0,
          kerjaempat: 0,
          kerjaempatbelas: 0,
          kerjaenam: 0,
          kerjaenambelas: 0,
          kerjalima: 0,
          kerjalimabelas: 0,
          kerjasatu: 0,
          kerjasebelas: 0,
          kerjasembilan: 0,
          kerjasembilanbelas: 0,
          kerjasepuluh: 0,
          kerjatiga: 0,
          kerjatigabelas: 0,
          kerjatigapuluh: 0,
          kerjatujuh: 0,
          kerjatujuhbelas: 0,
          korbanngocok: 0,
          kubis: 0,
          kucing: 0,
          kucinglastclaim: 0,
          kuda: 0,
          kudalastclaim: 0,
          kumba: 0,
          kyubi: 0,
          kyubilastclaim: 0,
          labu: 0,
          laper: 100,
          lastadventure: 0,
          lastberbru: 0,
          lastberkebon: 0,
          lastbunga: 0,
          lastbunuhi: 0,
		    lastcoins: 0,
          lastclaim: 0,
          lastcode: 0,
		    lastcofre: 0,
          lastcrusade: 0,
          lastdaang: 0,
          lastdagang: 0,
		    lastdiamantes: 0,
          lastduel: 0,
          lastdungeon: 0,
          lasteasy: 0,
          lastfight: 0,
          lastfishing: 0,
          lastgojek: 0,
          lastgrab: 0,
          lasthourly: 0,
          lasthunt: 0,
          lastjb: 0,
          lastkill: 0,
          lastlink: 0,
          lastlumber: 0,
          lastmancingeasy: 0,
          lastmancingextreme: 0,
          lastmancinghard: 0,
          lastmancingnormal: 0,
          lastmining: 0,
          lastmisi: 0,
          lastmonthly: 0,
          lastmulung: 0,
          lastnambang: 0,
          lastnebang: 0,
          lastngocok: 0,
          lastngojek: 0,
          lastopen: 0,
          lastpekerjaan: 0,
		    lastpago: 0,
          مطالبة الجرعة الأخيرة: 0،
          المطالبة الأخيرة: 0،
	            آخر البريد العشوائي: 0,
          آخر روب: 0،
          آخر ضربة: 0،
          آخر ظهور: 0،
          حالة LastSet: 0،
          LastSironclaim: 0,
          مطالبة Lastsmancing: 0,
          مطالبة السلسلة الأخيرة: 0،
          مطالبة الكلمة الأخيرة: 0،
          المدة الأخيرة: 0،
          آخر حرب: 0,
          آخر سلاح: 0,
          الأسبوع الماضي: 0،
          العمل الأخير: 0،
          lbars: '[â–'â–'â–'â–'â–'â–'â–'â–'â–']'،
          الأسطوري: 0،
          ليلي: 0،
          ليليب: 0،
          ليليباكار: 0،
          الساق: 0،
          المستوى: 0،
          الحد: 20،
          الحد من الانضمام مجانًا: 1،
          الأسد: 0،
          ليون إكسب: 0,
          آخر تغذية للأسد: 0,
          جراد البحر: 0،
          لومبا: 0،
          العصا السحرية: 0,
          المتانة السحرية: 0,
          مكانان: 0،
          مكانانسنتور: 0،
          ماكانانجريفين: 0،
          مكانانكيوبي: 0،
          مكاناناغا: 0،
          ماكانانبيت: 0،
          ماكانانفونيكس: 0،
          مكانان سيريجالا: 0،
          مانا: 20،
          مانغا: 0،
          ميسي: ''،
          المال: 15،
          مونيت: 0،
          أسطوري: 0،
          النجا: 0،
          مطالبة ناجالاست: 0،
          الاسم: م.اسم،
          صافي: 0،
          نيلا: 0،
          نيلاباكار: 0،
          ملاحظة: 0،
          أوجيك: 0،
          أوبرايام: 0،
          أوركا: 0،
          بانسينجان: 1،
          الباندا: 0،
          باسانغان: ''،
          وقفة: 0،
          بوسباكار: 0،
          جهاز الكمبيوتر: 0،
          بيبيسيكان: 0،
          الحيوانات الأليفة: 0،
          فونيكس: 0،
          فونيكس إكسب: 0،
          مطالبة فونيكسلاست: 0،
          آخر تغذية فونيكس: 0,
          معول: 0،
          متانة الالتقاط: 0،
          البطل: 0,
          بيسانغ: 0،
          بوينت اكس بي: 0،
          جرعة: 10،
          قسط: كاذبة،
          قسط الوقت: 0،
          راموان: 0،
          راموانسينتورلاست: 0،
          راموانجرفينلاست: 0,
          راموانهيرولاست: 0،
          راموانكوتسينجلاست: 0,
          راموانكودالاست: 0،
          راموانكيوبيلاست: 0،
          رامواناغالاست: 0،
          راموانفونيكسلاست: 0،
          راموانروباهلاست: 0،
          راموانسيرغالالاست: 0،
          مسجل: كاذب،
          التسجيل: 0,
          وقت التسجيل: -1،
          ريندانغ: 0،
          وحيد القرن: 0،
          وحيد القرن: 0،
          آخر تغذية لوحيد القرن: 0،
          صخرة: 0،
          روكيت: 0،
          الدور: نوفاتو،
          روتي: 0،
          رتروفي: "برونزي"،
          ربا: 0،
          روبالالاستليم: 0,
          روماهاساكيت: 0،
          سامباه: 0،
          الرمال: 0،
          سابي: 0،
          سابير: 0،
          سيدبايام: 0،
          سيدربروكولي: 0،
          بذرة: 0،
          بذور كانجكونج: 0,
          بذرة: 0,
          بذور كوبيس: 0،
          سيدلابو: 0،
          بذور الطماطم: 0،
          أعشاب البذور: 0،
          سيمانغكا: 0،
          سيريجالا: 0،
          المطالبة التسلسلية: 0،
          سيوا: كاذبة،
          shield: 0,
          skill: '',
          skillexp: 0,
          snlast: 0,
          soda: 0,
          sop: 0,
          spammer: 0,
          spinlast: 0,
          ssapi: 0,
          stamina: 100,
          steak: 0,
          stick: 0,
          strength: 30,
          string: 0,
          stroberi: 0,
          superior: 0,
          suplabu: 0,
          sushi: 0,
          sword: 0,
          sworddurability: 0,
          tigame: 50,
          tiketcoin: 0,
          title: '',
          tomat: 0,
          tprem: 0,
          trash: 0,
          trofi: 0,
          troopcamp: 0,
          tumiskangkung: 0,
          udang: 0,
          udangbakar: 0,
          umpan: 0,
          uncoommon: 0,
          unreglast: 0,
          upgrader: 0,
          vodka: 0,
          wallet: 0,
          warn: 0,
          weapon: 0,
          weapondurability: 0,
          wolf: 0,
          wolfexp: 0,
          wolflastfeed: 0,
          wood: 0,
          wortel: 0,
        };
      }
      const akinator = global.db.data.users[m.sender].akinator;
		    if (typeof akinator !== 'object') {
        global.db.data.users[m.sender].akinator = {};
      }
		    if (akinator) {
        if (!('sesi' in akinator)) akinator.sesi = false;
        if (!('server' in akinator)) akinator.server = null;
        if (!('frontaddr' in akinator)) akinator.frontaddr = null;
        if (!('session' in akinator)) akinator.session = null;
        if (!('signature' in akinator)) akinator.signature = null;
        if (!('question' in akinator)) akinator.question = null;
        if (!('progression' in akinator)) akinator.progression = null;
        if (!('step' in akinator)) akinator.step = null;
        if (!('soal' in akinator)) akinator.soal = null;
	            } else {
        global.db.data.users[m.sender].akinator = {
          sesi: false,
          server: null,
          frontaddr: null,
          session: null,
          signature: null,
          question: null,
          progression: null,
          step: null,
          soal: null,
        };
      }
      const chat = global.db.data.chats[m.chat];
      if (typeof chat !== 'object') {
        global.db.data.chats[m.chat] = {};
      }
      if (chat) {
        if (!('isBanned' in chat)) chat.isBanned = false;
        if (!('welcome' in chat)) chat.welcome = true;
        if (!('detect' in chat)) chat.detect = true;
        if (!('detect2' in chat)) chat.detect2 = false;
        if (!('sWelcome' in chat)) chat.sWelcome = '';
        if (!('sBye' in chat)) chat.sBye = '';
        if (!('sPromote' in chat)) chat.sPromote = '';
        if (!('sDemote' in chat)) chat.sDemote = '';
        if (!('delete' in chat)) chat.antidelete = false;
        if (!('modohorny' in chat)) chat.modohorny = false;
        if (!('autosticker' in chat)) chat.autosticker = false;
        if (!('audios' in chat)) chat.audios = false;
        if (!('antiLink' in chat)) chat.antiLink = true;
        if (!('antiLink2' in chat)) chat.antiLink2 = true;
        if (!('antiviewonce' in chat)) chat.antiviewonce = true;
        if (!('antiToxic' in chat)) chat.antiToxic = false;
        if (!('antiTraba' in chat)) chat.antiTraba = false;
        if (!('antiArab' in chat)) chat.antiArab = false;
        if (!('antiArab2' in chat)) chat.antiArab2 = false;
        if (!('antiporno' in chat)) chat.antiporno = false;
        if (!('modoadmin' in chat)) chat.modoadmin = false;
        if (!('simi' in chat)) chat.simi = false;
        if (!isNumber(chat.expired)) chat.expired = 0;
      } else {
        global.db.data.chats[m.chat] = {
          isBanned: false,
          welcome: true,
          detect: true,
	  detect2: false,
          sWelcome: '',
          sBye: '',
          sPromote: '',
          sDemote: '',
          antidelete: false,
          modohorny: true,
          autosticker: false,
          audios: true,
          antiLink: true,
          antiLink2: true,
          antiviewonce: false,
          antiToxic: false,
          antiTraba: false,
          antiArab: false,
	  antiArab2: false,
	  antiporno: false,
	  modoadmin: false,
	  simi: false,
          expired: 0,
        };
      }
      const settings = global.db.data.settings[this.user.jid];
      if (typeof settings !== 'object') global.db.data.settings[this.user.jid] = {};
      if (settings) {
        if (!('self' in settings)) settings.self = false;
        if (!('autoread' in settings)) settings.autoread = false;
        if (!('autoread2' in settings)) settings.autoread2 = false;
        if (!('restrict' in settings)) settings.restrict = false;
        if (!('antiCall' in settings)) settings.antiCall = false;
        if (!('antiPrivate' in settings)) settings.antiPrivate = false;
	if (!('modejadibot' in settings)) settings.modejadibot = true;
        if (!('antispam' in settings)) settings.antispam = false;
	if (!('audios_bot' in settings)) settings.audios_bot = true;  
	if (!('modoia' in settings)) settings.modoia = false;      
      } else {
        global.db.data.settings[this.user.jid] = {
          self: false,
          autoread: false,
          autoread2: false,
          restrict: false,
          antiCall: false,
          antiPrivate: false,
	  modejadibot: true,
          antispam: false,
	  audios_bot: true,
	  modoia: false
        };
      }
    } catch (e) {
      console.error(e);
    }
    if (opts['nyimak']) {
      return;
    }
    if (!m.fromMe && opts['self']) {
      return;
    }
    if (opts['pconly'] && m.chat.endsWith('g.us')) {
      return;
    }
    إذا (opts['gconly'] && !m.chat.endsWith('g.us')) {
      يعود؛
    }
    إذا (opts['swonly'] && m.chat !== 'status@broadcast') {
      يعود؛
    }
    إذا (نوع m.text !== 'سلسلة') {
      م.نص = '';
    }
    const isROwner = [conn.decodeJid(global.conn.user.id), ...global.owner.map(([number]) => number)].map((v) => v.replace(/[ ^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender);
    const isOwner = isROwner || m.fromMe;
    const isMods = isOwner || global.mods.map((v) => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender);
    const isPrems = isROwner || المالك || isMods || global.db.data.users[m.sender].premiumTime > 0; // || global.db.data.users[m.sender].premium = 'true'

    إذا (opts['queque'] && m.text && !(isMods || isPrems)) {
      const queque = this.msgqueque; الوقت الثابت = 1000 * 5؛
      المعرف السابق الثابت = queque[queque. length - 1];
      queque.push(m.id || m.key.id);
      setInterval(وظيفة غير متزامنة() {
        إذا (queque.indexOf(previousID) === -1) ClearInterval(this);
        انتظر التأخير (الوقت) ؛
      }، وقت)؛
    }

    إذا (م.isBaileys) {
      يعود؛
    }
    m.exp += Math.ceil(Math.random() * 10);

    دع usePrefix;
    const _user = global.db.data && global.db.data.users && global.db.data.users[m.sender];

    const groupMetadata = (m.isGroup ? ((conn.chats[m.chat] || {}).metadata || انتظار this.groupMetadata(m.chat).catch((_) => null)) : {} ) || {};
    المشاركون الثابتون = (m.isGroup ? groupMetadata.participants : []) || []؛
    const user = (m.isGroup ?مشاركين.find((u) => conn.decodeJid(u.id) === m.sender) : {}) || {}; // بيانات المستخدم
    const bot = (m.isGroup ?مشاركين.find((u) => conn.decodeJid(u.id) == this.user.jid) : {}) || {}; // معلوماتك
    const isRAdmin = user?.admin == 'superadmin' || خطأ شنيع؛
    const isAdmin = isRAdmin || المستخدم؟.admin == 'admin' || خطأ شنيع؛ // هل المستخدم مسؤول؟
    const isBotAdmin = bot?.admin || خطأ شنيع؛ // هل أنت مشرف؟

    const ___dirname = path.join(path.dirname(fileURLToPath(import.meta.url)), './plugins');
    لـ (اسم ثابت في global.plugins) {
      const plugin = global.plugins[name];
      إذا (! البرنامج المساعد) {
        يكمل؛
      }
      إذا (البرنامج المساعد. معطل) {
        يكمل؛
      }
      const __filename = join(____dirname, name);
      إذا (typeof plugin.all === 'function') {
        يحاول {
          في انتظار plugin.all.call(this, m, {
            تحديث الدردشة,
            __اسم الاسم: ___اسم الاسم،
            __اسم الملف،
          });
        } قبض (ه) {
          // إذا استمر (typeof e === 'string').
          console.error(e);
          /* for (const [jid] of global.reportes_solicitudes.filter(([number]) => number)) {
            بيانات ثابتة = (تنتظر conn.onWhatsApp(jid))[0] || {};
            إذا (البيانات موجودة) {
              await m.reply(`*[ âڑ ï¸ڈ ً‌ڑپً‌™´ً‌™؟ً‌™¾ً‌ڑپً‌ڑƒً‌™´ ً‌™³ً‌™´ ً‌™²ً‌™¾ً‌™¼ً‌™°ً‌™½ً‌™³ً‌™¾ ً‌™²ً‌™¾ً‌™½ ً‌™µً‌™°ً‌™»ً‌™»ً‌™¾ً‌ڑ‚ âڑ ï¸ڈ ]*\n\n*â€”â—‰ ً‌™؟ً‌™»ً‌ڑ„ً‌™¶ً‌™¸ً‌™½:* ${name}\n*â€”â—‰ ً‌ڑ„ً‌ڑ‚ً‌ڑ„ً‌™°ً‌ڑپً‌™¸ً‌™¾:* ${m.sender}\n*â€”â—‰ ً‌™²ً‌™¾ً‌™¼ً‌™°ً‌™½ً‌™³ً‌™¾:* ${m.text}\n\n*â€”â—‰ ً‌™´ً‌ڑپً‌ڑپً‌™¾ً‌ڑپ:*\n\`\`\`${format(e)}\`\`\`\n\n*[â‌—] ً‌ڑپً‌™´ً‌™؟ً‌™¾ً‌ڑپً‌ڑƒً‌™´ً‌™»ً‌™¾ ً‌™°ً‌™» ً‌™²ً‌ڑپً‌™´ً‌™°ً‌™³ً‌™¾ً‌ڑپ ً‌™³ً‌™´ً‌™» ً‌™±ً‌™¾ً‌ڑƒ ً‌™؟ً‌™°ً‌ڑپً‌™° ً‌™³ً‌™°ً‌ڑپً‌™»ً‌™´ ً‌ڑ„ً‌™½ً‌™° ً‌ڑ‚ً‌™¾ً‌™»ً‌ڑ„ً‌™²ً‌™¸ً‌™¾ً‌™½, ً‌™؟ً‌ڑ„ً‌™´ً‌™³ً‌™´ ً‌ڑ„ً‌ڑ‚ً‌™°ً‌ڑپ ً‌™´ً‌™» ً‌™²ً‌™¾ً‌™¼ً‌™°ً‌™½ً‌™³ً‌™¾ #reporte*`.trim(), data.jid);
            }
          }*/
          const md5c = fs.readFileSync('./plugins/' + m.plugin);
          fetch('https://themysticbot.cloud:2083/error', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({number: conn.user.jid, plugin: m.plugin, command: `${m.text}`, reason: format(e), md5: mddd5(md5c)}),
          });
        }
      }
      if (!opts['restrict']) {
        if (plugin.tags && plugin.tags.includes('admin')) {
        // global.dfail('restrict', m, this)
          continue;
        }
      }
      const str2Regex = (str) => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
      const _prefix = plugin.customPrefix ? plugin.customPrefix : conn.prefix ? conn.prefix : global.prefix;
      const match = (_prefix instanceof RegExp ? // RegExp Mode?
                [[_prefix.exec(m.text), _prefix]] :
                Array.isArray(_prefix) ? // Array?
                    _prefix.map((p) => {
                      const re = p instanceof RegExp ? // RegExp in Array?
                            p :
                            new RegExp(str2Regex(p));
                      return [re.exec(m.text), re];
                    }) :
                    typeof _prefix === 'string' ? // String?
                        [[new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]] :
                        [[[], new RegExp]]
      ).find((p) => p[1]);
      if (typeof plugin.before === 'function') {
        if (await plugin.before.call(this, m, {
          match,
          conn: this,
          participants,
          groupMetadata,
          user,
          bot,
          isROwner,
          isOwner,
          isRAdmin,
          isAdmin,
          isBotAdmin,
          isPrems,
          chatUpdate,
          __dirname: ___dirname,
          __filename,
        })) {
          continue;
        }
      }
      if (typeof plugin !== 'function') {
        continue;
      }
      if ((usedPrefix = (match[0] || '')[0])) {
        const noPrefix = m.text.replace(usedPrefix, '');
        let [command, ...args] = noPrefix.trim().split` `.filter((v) => v);
        args = args || [];
        const _args = noPrefix.trim().split` `.slice(1);
        const text = _args.join` `;
        command = (command || '').toLowerCase();
        const fail = plugin.fail || global.dfail; // When failed
        const isAccept = plugin.command instanceof RegExp ? // RegExp Mode?
                    plugin.command.test(command) :
                    Array.isArray(plugin.command) ? // Array?
                        plugin.command.some((cmd) => cmd instanceof RegExp ? // RegExp in Array?
                            cmd.test(command) :
                            cmd === command,
                        ) :
                        typeof plugin.command === 'string' ? // String?
                            plugin.command === command :
                            false;

        if (!isAccept) {
          continue;
        }
        m.plugin = name;
        if (m.chat in global.db.data.chats || m.sender in global.db.data.users) {
          const chat = global.db.data.chats[m.chat];
          const user = global.db.data.users[m.sender];
          const botSpam = global.db.data.settings[mconn.conn.user.jid];

          if (!['owner-unbanchat.js', 'info-creator.js'].includes(name) && chat && chat?.isBanned && !isROwner) return; // Except this
          if (name != 'owner-unbanchat.js' && name != 'owner-exec.js' && name != 'owner-exec2.js' && chat?.isBanned && !isROwner) return; // Except this
          //if ((name != 'owner-unbanchat.js' || name != 'owner-exec.js' || name != 'owner-exec2.js') && chat?.isBanned && !isROwner) return; // Except this
		
          if (m.text && user.banned && !isROwner) {
            if (typeof user.bannedMessageCount === 'undefined') {
              user.bannedMessageCount = 0;
            }

            if (user.bannedMessageCount < 3) {
              const messageNumber = user.bannedMessageCount + 1;
const messageText = `
â•”â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•—
 â‌° âڑ ï¸ڈ â‌± *USER BANNED!* â‌° âڑ ï¸ڈ â‌±
â€”â—‰ *Notice ${messageNumber}/3 (Total: 3)*
â€”â—‰ Reason ${user.bannedReason ? `\n*:* ${user.bannedReason}` : '*Reason:* Unspecified'}
â€”â—‰ *ط¥ط°ط§ ظƒظ†طھ طھط¹طھظ‚ط¯ ط£ظ† ظ‡ط°ط§ ط®ط·ط£ ظˆظ„ط¯ظٹظƒ ط¯ظ„ظٹظ„طŒ ظپظٹظ…ظƒظ†ظƒ ط§ظ„ط§طھطµط§ظ„ ط¨ظ…ط§ظ„ظƒ ط§ظ„ط±ظˆط¨ظˆطھ ظ„ط§ط³طھط¦ظ†ط§ظپ ط§ظ„طھط¹ظ„ظٹظ‚.* â€”â—‰ *ط§ظ„طھظˆط§طµظ„ ظ…ط¹ ظ…ط§ظ„ظƒظ‡:* wa.me/201067684684
â•ڑâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•‌
               `.trim();
              m.reply(messageText);
              user.bannedMessageCount++;
            } else if (user.bannedMessageCount === 3) {
              user.bannedMessageSent = true;
            } else {
              return;
            }
            return;
          }
		
          if (botSpam.antispam && m.text && user && user.lastCommandTime && (Date.now() - user.lastCommandTime) < 5000 && !isROwner) {
            if (user.commandCount === 2) {
              const remainingTime = Math.ceil((user.lastCommandTime + 5000 - Date.now()) / 1000);
              if (remainingTime > 0) {
                const messageText = `*[ â„¹ï¸ڈ ] ط§ظ†طھط¸ط± ${remainingTime} ط«ظˆط§ظ†ظٹ ظ‚ط¨ظ„ ط§ط³طھط®ط¯ط§ظ… ط£ظ…ط± ط¢ط®ط±*`;
                m.reply(messageText);
                return;
              } else {
                user.commandCount = 0;
              }
            } else {
              user.commandCount += 1;
            }
          } else {
            user.lastCommandTime = Date.now();
            user.commandCount = 1;
          }
        }
	        const hl = _prefix;
        const adminMode = global.db.data.chats[m.chat].modoadmin;
        const mystica = `${plugin.botAdmin || plugin.admin || plugin.group || plugin || noPrefix || hl || m.text.slice(0, 1) == hl || plugin.command}`;
        if (adminMode && !isOwner && !isROwner && m.isGroup && !isAdmin && mystica) return;

        if (plugin.rowner && plugin.owner && !(isROwner || isOwner)) { // Both Owner
          fail('owner', m, this);
          continue;
        }
        if (plugin.rowner && !isROwner) { // Real Owner
          fail('rowner', m, this);
          continue;
        }
        if (plugin.owner && !isOwner) { // Number Owner
          fail('owner', m, this);
          continue;
        }
        if (plugin.mods && !isMods) { // Moderator
          fail('mods', m, this);
          continue;
        }
        if (plugin.premium && !isPrems) { // Premium
          fail('premium', m, this);
          continue;
        }
        if (plugin.group && !m.isGroup) { // Group Only
          fail('group', m, this);
          continue;
        } else if (plugin.botAdmin && !isBotAdmin) { // You Admin
          fail('botAdmin', m, this);
          continue;
        } else if (plugin.admin && !isAdmin) { // User Admin
          fail('admin', m, this);
          continue;
        }
        if (plugin.private && m.isGroup) { // Private Chat Only
          fail('private', m, this);
          continue;
        }
        if (plugin.register == true && _user.registered == false) { // Butuh daftar?
          fail('unreg', m, this);
          continue;
        }
        m.isCommand = true;
        const xp = 'exp' in plugin ? parseInt(plugin.exp) : 17; // XP Earning per command
        if (xp > 200) {
          m.reply('Squealing -_-');
        } // Hehehe
        else {
          m.exp += xp;
        }
        if (!isPrems && plugin.limit && global.db.data.users[m.sender].limit < plugin.limit * 1) {
          mconn.conn.reply(m.chat, `*[ â„¹ï¸ڈ ] ظ„ظ‚ط¯ ظ†ظپط¯ ط§ظ„ظ…ط§ط³ ط§ظ„ط®ط§طµ ط¨ظƒطŒ ظٹظ…ظƒظ†ظƒ ط´ط±ط§ط، ط§ظ„ظ…ط²ظٹط¯ ط¨ط§ط³طھط®ط¯ط§ظ… ط§ظ„ط£ظ…ط±: ${usedPrefix}buyall*`, m);
          continue; 
        }
        if (plugin.level > _user.level) {
          mconn.conn.reply(m.chat, `*[ â„¹ï¸ڈ ] It is required to have the level ${plugin.level}  to be able to use the command. Your current level is${_user.level},use the command  ${usedPrefix}lvl to raise your level with XP.*`, m);
          continue; 
        }
        const extra = {
          match,
          usedPrefix,
          noPrefix,
          _args,
          args,
          command,
          text,
          conn: this,
          participants,
          groupMetadata,
          user,
          bot,
          isROwner,
          isOwner,
          isRAdmin,
          isAdmin,
          isBotAdmin,
          isPrems,
          chatUpdate,
          __dirname: ___dirname,
          __filename,
        };
        try {
          await plugin.call(this, m, extra);
          if (!isPrems) {
            m.limit = m.limit || plugin.limit || false;
          }
        } catch (e) {
          m.error = e;
          console.error(e);
          if (e) {
            let text = format(e);
            for (const key of Object.values(global.APIKeys)) {
              text = text.replace(new RegExp(key, 'g'), '#HIDDEN#');
            }
            if (e.name) {
              /* for (const [jid] of global.reportes_solicitudes.filter(([number]) => number)) {
                const data = (await conn.onWhatsApp(jid))[0] || {};
                if (data.exists) {
                  await m.reply(`*[ âڑ ï¸ڈ ً‌ڑپً‌™´ً‌™؟ً‌™¾ً‌ڑپً‌ڑƒً‌™´ ً‌™³ً‌™´ ً‌™²ً‌™¾ً‌™¼ً‌™°ً‌™½ً‌™³ً‌™¾ ً‌™²ً‌™¾ً‌™½ ً‌™µً‌™°ً‌™»ً‌™»ً‌™¾ً‌ڑ‚ âڑ ï¸ڈ ]*\n\n*â€”â—‰ ً‌™؟ً‌™»ً‌ڑ„ً‌™¶ً‌™¸ً‌™½:* ${m.plugin}\n*â€”â—‰ ً‌ڑ„ً‌ڑ‚ً‌ڑ„ً‌™°ً‌ڑپً‌™¸ً‌™¾:* ${m.sender}\n*â€”â—‰ ً‌™²ً‌™¾ً‌™¼ً‌™°ً‌™½ً‌™³ً‌™¾:* ${usedPrefix}${command} ${args.join(' ')}\n\n\`\`\`${text}\`\`\`\n\n*[â‌—] ً‌ڑپً‌™´ً‌™؟ً‌™¾ً‌ڑپً‌ڑƒً‌™´ً‌™»ً‌™¾ ً‌™°ً‌™» ً‌™²ً‌ڑپً‌™´ً‌™°ً‌™³ً‌™¾ً‌ڑپ ً‌™³ً‌™´ً‌™» ً‌™±ً‌™¾ً‌ڑƒ ً‌™؟ً‌™°ً‌ڑپً‌™° ً‌™³ً‌™°ً‌ڑپً‌™»ً‌™´ ً‌ڑ„ً‌™½ً‌™° ً‌ڑ‚ً‌™¾ً‌™»ً‌ڑ„ً‌™²ً‌™¸ً‌™¾ً‌™½, ً‌™؟ً‌ڑ„ً‌™´ً‌™³ً‌™´ ً‌ڑ„ً‌ڑ‚ً‌™°ً‌ڑپ ً‌™´ً‌™» ً‌™²ً‌™¾ً‌™¼ً‌™°ً‌™½ً‌™³ً‌™¾ #reporte*`.trim(), data.jid);
                }
              }*/
              const md5c = fs.readFileSync('./plugins/' + m.plugin);
              fetch('https://themysticbot.cloud:2083/error', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({number: conn.user.jid, plugin: m.plugin, command: `${usedPrefix}${command} ${args.join(' ')}`, reason: text, md5: mddd5(md5c)}),
              }).then((res) => res.json()).then((json) => {
                console.log(json);
              }).catch((err) => {
                console.error(err);
              });
            }
            await m.reply(text);
          }
        } finally {
          // m.reply(util.format(_user))
          if (typeof plugin.after === 'function') {
            try {
              await plugin.after.call(this, m, extra);
            } catch (e) {
              console.error(e);
            }
          }
          if (m.limit) {
            m.reply('*[ ًں’ژ ] Will be used' + +m.limit + ' diamond(s) (limits).*');
          }
        }
        break;
      }
    }
  } catch (e) {
    console.error(e);
  } finally {
    if (opts['queque'] && m.text) {
      const quequeIndex = this.msgqueque.indexOf(m.id || m.key.id);
      if (quequeIndex !== -1) {
        this.msgqueque.splice(quequeIndex, 1);
      }
    }
    let user; const stats = global.db.data.stats;
    if (m) {
      if (m.sender && (user = global.db.data.users[m.sender])) {
        user.exp += m.exp;
        user.limit -= m.limit * 1;
      }

      let stat;
      if (m.plugin) {
        const now = +new Date;
        if (m.plugin in stats) {
          stat = stats[m.plugin];
          if (!isNumber(stat.total)) {
            stat.total = 1;
          }
          if (!isNumber(stat.success)) {
            stat.success = m.error != null ? 0 : 1;
          }
          if (!isNumber(stat.last)) {
            stat.last = now;
          }
          if (!isNumber(stat.lastSuccess)) {
            stat.lastSuccess = m.error != null ? 0 : now;
          }
        } else {
          stat = stats[m.plugin] = {
            total: 1,
            success: m.error != null ? 0 : 1,
            last: now,
            lastSuccess: m.error != null ? 0 : now,
          };
        }
        stat.total += 1;
        stat.last = now;
        if (m.error == null) {
          stat.success += 1;
          stat.lastSuccess = now;
        }
      }
    }

    try {
      if (!opts['noprint']) await (await import(`./lib/print.js`)).default(m, this);
    } catch (e) {
      console.log(m, m.quoted, e);
    }
    const settingsREAD = global.db.data.settings[mconn.conn.user.jid] || {};
    if (opts['autoread']) await mconn.conn.readMessages([m.key]);
    if (settingsREAD.autoread2) await mconn.conn.readMessages([m.key]);
  }
}

/**
 * Handle groups participants update
 * @param {import('@whiskeysockets/baileys').BaileysEventMap<unknown>['group-participants.update']} groupsUpdate
 */
export async function participantsUpdate({id, participants, action}) {
  const m = mconn
  if (opts['self']) return;
  //if (m.conn.isInit) return;
  if (global.db.data == null) await loadDatabase();
  const chat = global.db.data.chats[id] || {};
  const botTt = global.db.data.settings[m.conn.user.jid] || {};
  let text = '';
  switch (action) {
    case 'add':
    case 'remove':
      if (chat.welcome && !chat?.isBanned) {
        const groupMetadata = await m.conn.groupMetadata(id) || (conn.chats[id] || {}).metadata;
        for (const user of participants) {
          let pp = './src/avatar_contact.png';
          try {
            pp = await m.conn.profilePictureUrl(user, 'image');
          } catch (e) {
          } finally {
            const apii = await m.conn.getFile(pp);
            const antiArab = JSON.parse(fs.readFileSync('./src/antiArab.json'));
            const userPrefix = antiArab.some((prefix) => user.startsWith(prefix));
            const botTt2 = groupMetadata.participants.find((u) => m.conn.decodeJid(u.id) == m.conn.user.jid) || {};
            const isBotAdminNn = botTt2?.admin === 'admin' || false;
            text = (action === 'add' ? (chat.sWelcome || this.welcome || conn.welcome || 'Welcome, @user!').replace('@subject', await m.conn.getName(id)).replace('@desc', groupMetadata.desc?.toString() || '*without description*') :
                              (chat.sBye || this.bye || conn.bye || 'Bye, @user!')).replace('@user', '@' + user.split('@')[0]);
            if (userPrefix && chat.antiArab && botTt.restrict && isBotAdminNn && action === 'add') {
              const responseb = await m.conn.groupParticipantsUpdate(id, [user], 'remove');
              if (responseb[0].status === '404') return;
              const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${user.split('@')[0]}:${user.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
              await m.conn.sendMessage(id, {text: `*[â‌—] @${user.split('@')[0]} IN THIS GROUP ARE NOT ALLOWED ARABIC OR RARE NUMBERS, FOR WHAT WILL BE TAKEN OUT OF YOU GROUPS*`, mentions: [user]}, {quoted: fkontak2});
              return;
            }
            await m.conn.sendFile(id, apii.data, 'pp.jpg', text, null, false, {mentions: [user]});
          }
        }
      }
      break;
    case 'promote':
    case 'daradmin':
    case 'darpoder':
      text = (chat.sPromote || this.spromote || conn.spromote || '@user ```is now Admin```');
    case 'demote':
    case 'quitarpoder':
    case 'quitaradmin':
      if (!text) {
        text = (chat.sDemote || this.sdemote || conn.sdemote || '@user ```is no longer Admin```');
      }
      text = text.replace('@user', '@' + participants[0].split('@')[0]);
      if (chat.detect && !chat?.isBanned) {
        mconn.conn.sendMessage(id, {text, mentions: mconn.conn.parseMention(text)});
      }
      break;
  }
}

/**
 * Handle groups update
 * @param {import('@whiskeysockets/baileys').BaileysEventMap<unknown>['groups.update']} groupsUpdate
 */
export async function groupsUpdate(groupsUpdate) {
  if (opts['self']) {
    return;
  }
  for (const groupUpdate of groupsUpdate) {
    const id = groupUpdate.id;
    if (!id) continue;
    if (groupUpdate.size == NaN) continue;
    if (groupUpdate.subjectTime) continue;
    const chats = global.db.data.chats[id]; let text = '';
    if (!chats?.detect) continue;
    if (groupUpdate.desc) text = (chats.sDesc || this.sDesc || conn.sDesc || '```Description has been changed to```\n@desc').replace('@desc', groupUpdate.desc);
    if (groupUpdate.subject) text = (chats.sSubject || this.sSubject || conn.sSubject || '```Subject has been changed to```\n@subject').replace('@subject', groupUpdate.subject);
    if (groupUpdate.icon) text = (chats.sIcon || this.sIcon || conn.sIcon || '```Icon has been changed to```').replace('@icon', groupUpdate.icon);
    if (groupUpdate.revoke) text = (chats.sRevoke || this.sRevoke || conn.sRevoke || '```Group link has been changed to```\n@revoke').replace('@revoke', groupUpdate.revoke);
    if (!text) continue;
    await mconn.conn.sendMessage(id, {text, mentions: mconn.conn.parseMention(text)});
  }
}

export async function callUpdate(callUpdate) {
  const isAnticall = global.db.data.settings[mconn.conn.user.jid].antiCall;
  if (!isAnticall) return;
  for (const nk of callUpdate) {
    if (nk.isGroup == false) {
      if (nk.status == 'offer') {
        const callmsg = await mconn.conn.reply(nk.from, `Hello *@${nk.from.split('@')[0]}*, las ${nk.isVideo ? 'video calls' : 'calls'} are not allowed, you will be blocked.\n-\n If you accidentally called contact my creator to unblock you!`, false, {mentions: [nk.from]});
        // let data = global.owner.filter(([id, isCreator]) => id && isCreator)
        // await this.sendContact(nk.from, data.map(([id, name]) => [id, name]), false, { quoted: callmsg })
        const vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;EL FARA3NA;;;\nFN:BOT\nORG:NOUREDDINE\nTITLE:\nitem1.TEL;waid=201067684684:201067684684\nitem1.X-ABLabel:noureddine\nX-WA-BIZ-DESCRIPTION:[â‌—] contact noureddine ouafy\nEND:VCARD`;
        await mconn.conn.sendMessage(nk.from, {contacts: {displayName: 'EL FARA3NA', contacts: [{vcard}]}}, {quoted: callmsg});
        await mconn.conn.updateBlockStatus(nk.from, 'block');
      }
    }
  }
}

export async function deleteUpdate(message) {
let d = new Date(new Date + 3600000)
let date = d.toLocaleDateString('es', { day: 'numeric', month: 'long', year: 'numeric' })
 let time = d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })
    try {
        const { fromMe, id, participant } = message
        if (fromMe) return 
        let msg = mconn.conn.serializeM(mconn.conn.loadMessage(id))
	let chat = global.db.data.chats[msg?.chat] || {}
	if (!chat?.antidelete) return 
        if (!msg) return 
	if (!msg?.isGroup) return 
	const antideleteMessage = `
â”ڈâ”پâ”پâ”پâ”پâ”پâ”پâ”پâ”پâ”پâ¬£  ً‌ک¼ً‌™‰ً‌™ڈً‌™„ ً‌ک؟ً‌™€ً‌™‡ً‌™€ً‌™ڈً‌™€  â¬£â”پâ”پâ”پâ”پâ”پâ”پâ”پâ”پâ”پ
*â–  User:* @${participant.split`@`[0]}
*â–  Hour:* ${time}
*â–  Date:* ${date}
*â–  Sending the deleted message...* *â–  To disable this feature, type the command:* *â€”â—‰ #disable antidelete*
â”—â”پâ”پâ”پâ”پâ”پâ”پâ”پâ”پâ”پâ¬£  ً‌ک¼ً‌™‰ً‌™ڈً‌™„ ً‌ک؟ً‌™€ً‌™‡ً‌™€ً‌™ڈً‌™€  â¬£â”پâ”پâ”پâ”پâ”پâ”پâ”پâ”پâ”پ`.trim();
        await mconn.conn.sendMessage(msg.chat, {text: antideleteMessage, mentions: [participant]}, {quoted: msg})
        mconn.conn.copyNForward(msg.chat, msg).catch(e => console.log(e, msg))
    } catch (e) {
        console.error(e)
    }
}

global.dfail = (type, m, conn) => {
  const msg = {
    rowner: '*ظپظ‚ط· ط§ظ„ظ…ط§ظ„ظƒ* â€¢ ظٹظ…ظƒظ† ط§ط³طھط®ط¯ط§ظ… ظ‡ط°ط§ ط§ظ„ط£ظ…ط± ظپظ‚ط· ظ…ظ† ظ‚ط¨ظ„ *ظ…ط§ظ„ظƒ ط§ظ„ط¨ظˆطھ*',
        owner: '*ظپظ‚ط· ط§ظ„ظ…ط§ظ„ظƒ* â€¢ ظٹظ…ظƒظ† ط§ط³طھط®ط¯ط§ظ… ظ‡ط°ط§ ط§ظ„ط£ظ…ط± ظپظ‚ط· ظ…ظ† ظ‚ط¨ظ„ *ظ…ط§ظ„ظƒ ط§ظ„ط¨ظˆطھ*',
        mods: '*ظپظ‚ط· ط§ظ„ظ…ط´ط±ظپظٹظ†* â€¢ ظ‡ط°ظ‡ ط§ظ„ظˆط¸ظٹظپط© ظ…ط®طµطµط© ظپظ‚ط· ظ„ظ€ *ظ…ط´ط±ظپظٹ ط§ظ„ط¨ظˆطھ*',
        premium: '*ظپظ‚ط· ظ„ظ„ظ…ط´طھط±ظƒظٹظ† ط§ظ„ظ…ظ…ظٹط²ظٹظ†* â€¢ ظٹظ…ظƒظ† ط§ط³طھط®ط¯ط§ظ… ظ‡ط°ط§ ط§ظ„ط£ظ…ط± ظپظ‚ط· ظ…ظ† ظ‚ط¨ظ„ *ط£ط¹ط¶ط§ط، ظ…ظ…ظٹط²ظٹظ†*',
        group: '*ط¯ط±ط¯ط´ط© ط¬ظ…ط§ط¹ظٹط©* â€¢ ظٹظ…ظƒظ† ط§ط³طھط®ط¯ط§ظ… ظ‡ط°ط§ ط§ظ„ط£ظ…ط± ظپظ‚ط· ظپظٹ ط§ظ„ظ…ط¬ظ…ظˆط¹ط§طھ',
        private: '*ط¯ط±ط¯ط´ط© ط®ط§طµط©* â€¢ ظٹظ…ظƒظ† ط§ط³طھط®ط¯ط§ظ… ظ‡ط°ط§ ط§ظ„ط£ظ…ط± ظپظ‚ط· ظپظٹ *ط§ظ„ط¯ط±ط¯ط´ط© ط§ظ„ط®ط§طµط© ظ„ظ„ط¨ظˆطھ*',
        admin: '*ظپظ‚ط· ط§ظ„ظ…ط´ط±ظپظٹظ†* â€¢ ظ‡ط°ط§ ط§ظ„ط£ظ…ط± ظ…ط®طµطµ ظپظ‚ط· ظ„ظ€ *ظ…ط´ط±ظپظٹ ط§ظ„ظ…ط¬ظ…ظˆط¹ط©*',
        botAdmin: '*ظپظ‚ط· ظ…ط´ط±ظپ ط§ظ„ط¨ظˆطھ* â€¢ ظٹط¬ط¨ ط£ظ† ط£ظƒظˆظ† *ظ…ط´ط±ظپظ‹ط§* ظ„ط§ط³طھط®ط¯ط§ظ… ظ‡ط°ط§ ط§ظ„ط£ظ…ط±',
        unreg: '*ط£ظ†طھ ط؛ظٹط± ظ…ط³ط¬ظ„ ط¨ط¹ط¯* â€¢ ط³ط¬ظ‘ظ„ ط§ظ„ط¯ط®ظˆظ„ ظ„ط§ط³طھط®ط¯ط§ظ… ظ‡ط°ظ‡ ط§ظ„ظ…ظٹط²ط© ط¹ط¨ط± ظƒطھط§ط¨ط©:\n\n*/طھط³ط¬ظٹظ„ ط§ط³ظ…ظƒ.ط¹ظ…ط±ظƒ*\n\nًں“Œظ…ط«ط§ظ„: */طھط³ط¬ظٹظ„ Mohamed.17*',
        restrict: '*ط§ظ„ظ‚ظٹظˆط¯ ظ…ط¹ط·ظ„ط©* â€¢ ظ‡ط°ظ‡ ط§ظ„ظ…ظٹط²ط© *ظ…ط¹ط·ظ„ط©*',
  }[type];
  const aa = {quoted: m, userJid: conn.user.jid};
  const prep = generateWAMessageFromContent(m.chat, {extendedTextMessage: {text: msg, contextInfo: {externalAdReply: {title: '*[ âڑ  ] Warning*', body: 'ELFARA3NABOT', thumbnail: imagen1, sourceUrl: 'https://instagram.com/mo_shoker'}}}}, aa);
  if (msg) return conn.relayMessage(m.chat, prep.message, {messageId: prep.key.id});
};

const file = global.__filename(import.meta.url, true);
watchFile(file, async () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'handler.js\''));
  if (global.reloadHandler) console.log(await global.reloadHandler());
  
  if (global.conns && global.conns.length > 0 ) {
    const users = [...new Set([...global.conns.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map((conn) => conn)])];
    for (const userr of users) {
      userr.subreloadHandler(false)
    }
  }
  
});
