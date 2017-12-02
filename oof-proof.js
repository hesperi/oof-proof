const Discord = require('discord.js');
const client = new Discord.Client();
var config = require('./config.json');

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  line = message.content.toLowerCase();
  line = " " + line + " ";
  line = line.replace(/[^a-z0-9 ]/gi, "");
  line = line.replace(/0/g, "o");
  if (line.indexOf(" oof ") >= 0) {
    if (message.deletable) {
      message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author}: ${msg.content}`))
        .catch(console.error);
    } else {
      message.reply("Bot doesn't have permissions to delete message!");
    }
  }
});

client.login(config.token);
