const Discord = require('discord.js');

const client = new Discord.Client();

//Bot token goes here
const config = require('./config.json');

client.on('ready', () => {
    console.log('I am ready!');
  });

client.on('message', message => {
    
  });

  client.login(token);