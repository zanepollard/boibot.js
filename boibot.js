var path = require('path');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const help = require('./commands/help');
const nickName = require('./commands/nickName');

class BoiBot {
  constructor() {
    this.token = token;
    this.ready = false;
    this.client = new Discord.Client();

    this.client
          .on('ready', this.onReady())
          .on('message', this.onMessage());

    this.client.login(this.token);
  }

  destructor() {
    return this.client.destroy();
  }

  onReady() {
    return ( _ => {
      console.log('this is boi bot. I am ready to submit!');
      this.ready = true;
    })
  }

  onMessage() {
    return ( message => {
      if (!message.content.startsWith(prefix) || message.author.bot) return;

      const messageContentArray = {...message}.content.split(' ');
      let [ command, ...args] = messageContentArray;
      command = command.slice(prefix.length);
      
      if (!args) {
        let reply = `You didn't provide any arguments, ${message.author}!`;
        message.channel.send(reply);
      }

      switch(command) {
        case "n":
        case "nickname":
          nickName.change(message, args);
          break;
        case "help":
          help.get(message, [help.properties, nickName.properties], args);
          break;
        default:
          let reply = `I'm a huge dipshit and can't understand that command, ${message.author} :'(\n`
          message.channel.send(reply);
          help.get(message, [help.properties, nickName.properties], args);
          break;
      }
    });
  }
}
module.exports = BoiBot;