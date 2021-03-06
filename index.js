const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
var config = require('./config.json');

client.on('ready', () => {
  setOofCount(client, config['oof-count']);
  console.log('Connected to discord!');
});

client.on('reconnecting', () => {
  console.log('Disconnected from discord, reconnecting...');
});

client.on('message', message => {
  if (!isOof(message.content)) {
    return;
  }

  if (message.deletable) {
    message.delete()
      .then(msg => console.log(`Deleted message from ${msg.author}: ${msg.content}`))
      .catch(console.error);

      setOofCount(client, ++config['oof-count']);
      fs.writeFile("config.json", JSON.stringify(config), 'binary', (err)=>{
        if(err) {
          console.log(err)
        }
      });
  } else {
    if (message.channel.type == "text") {
      replyMsg = "Bot doesn't have permission to delete messages!";
    } else {
      replyMsg = "Bot can't delete messages in DMs!";
    }
    reply = message.reply(replyMsg).then(msg => setTimeout(function() {
      if (msg.deletable) {
        msg.delete();
      }
    }, 3000));
  }
});

client.login(config.token).catch(err => {
  console.error('Unable to log in to discord:', err);
  process.exit(1);
});

function setOofCount(client, count) {
  client.user.setPresence({
    status: 'online',
    afk: false,
    game: {
      name: `${count} oofs prevented!`
    }
  });
}

function isOof(line) {
  return /\b([o0] ?)+[o0] ?f(ie)?\b/i.test(line);
}

module.exports = isOof;
