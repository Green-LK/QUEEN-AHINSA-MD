const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "eQNAEZjY#YsQLnCTuSUSKmT1_ZeB-Y60UwEEzCkrkP_66n1oxAb8",
ALIVE_IMG : process.env.ALIVE_IMG || "https://i.ibb.co/SR76mBh/Pu3-ZYHBS5139.jpg",
ALIVE_MSG : process.env.ALIVE_MSG || "*🤖𝐇𝐞𝐲 𝐈'𝐦 😳 QUEEN-AHINSA-MD 🤍 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐁𝐨𝐭⚡*\n\n*🔔𝐈'𝐦 𝐀𝐥𝐢𝐯𝐞 𝐍𝐨𝐰🎠*\n\n*⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - King Dilisha : Bot Name",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
};
