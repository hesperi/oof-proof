const Discord = require('discord.js');
const client = new Discord.Client();
var config = require('./config.json');

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'oof') {
    if (message.deletable) {
      message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author}`))
        .catch(console.error);
    }
  }
});

client.login(config.token);
