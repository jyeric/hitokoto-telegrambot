const TelegramBot = require('node-telegram-bot-api');
const request = require('request');

const token = '填入你的token';
const bot = new TelegramBot(token, {
  polling: true
});

bot.onText(/\/gethitokoto/, function onLoveText(msg) {
  const chatId = msg.chat.id;
  request('https://international.v1.hitokoto.cn/?encode=json', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      const result = JSON.parse(body);
      bot.sendMessage(chatId, 'hitokoto 一言 No:' + result.id + '\n' + result.hitokoto + '\n' + '—— by' + result.creator);
    } else {
      bot.sendMessage(chatId, '获取失败');
    }
  });
});
