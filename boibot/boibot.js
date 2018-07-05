const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');

client.on('ready', () => {
    console.log('I am ready!');
  });

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(' ');
  const command = args.shift().toLowerCase();
  if (message.content.startsWith(`${prefix}test`)) {
    message.channel.send(`Responding to test\nHave a nice day ${message.author.username}.`);
  }
});

client.login(token);