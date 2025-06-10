// goodnight.js

async function goodnightCommand(sock, chatId, message) {
    try {
        const goodnightMessages = [
            "🌙 Good night boss! Close eye make tomorrow no meet you dull 😴",
            "Sleep well oo! May your dreams no include NEPA wahala 😂💡",
            "Make you rest now, hustle continues tomorrow 💼🛌",
            "Oya na! Drop that phone. Time to sleep like king 👑💤",
            "Sweet dreams! No let TikTok carry you go midnight journey again 📱😅",
            "Good night! May tomorrow bring better alerts and zero stress 💰😌",
            "Night don show face. Lock your eye sharp-sharp 😴🌌",
            "Rest well boss. You don try for today 👏🏽👏🏽",
            "Make breeze blow you sleep well tonight 🌬️🛏️",
            "Good night oh! If you dream of jollof, just call me inside dream 🍛😂"
        ];

        const randomMsg = goodnightMessages[Math.floor(Math.random() * goodnightMessages.length)];

        await sock.sendMessage(chatId, { text: randomMsg }, { quoted: message });
    } catch (error) {
        console.error('❌ Error in goodnight command:', error);
        await sock.sendMessage(chatId, {
            text: '❌ Something go wrong for the night message. Try again later 🙏🏽',
        }, { quoted: message });
    }
}

module.exports = { goodnightCommand };
