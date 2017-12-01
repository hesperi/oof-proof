const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'oof') {
    if (message.deletable) {
      message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author}`))
        .catch(console.error);
    } else {
      message.reply("Bot doesn't have permissions to delete message!");
    }
  }
});

client.login(config.token);
