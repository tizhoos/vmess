// telegramChannelReader.js
const axios = require('axios');
const cheerio = require('cheerio');

module.exports = {
    getRandomVmessURIs: async function(channels) {
        const channel = channels[Math.floor(Math.random() * channels.length)];
        try {
            const response = await axios.get('https://t.me/s/' + channel);
            const $ = cheerio.load(response.data);
            const dataList = [];
            const regex = /vmess:\/\/([a-zA-Z0-9+\/=]+)/gi;
            $('body').text().match(regex).slice(0, 5).forEach((match) => {
                dataList.push(match);
            });
            return {
                status: 200,
                result: dataList
            };
        } catch (error) {
            throw new Error(error);
        }
    }
};
