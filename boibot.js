var path = require('path');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const help = require('./commands/help');
const nickName = require('./commands/nick-name');

class BoiBot {
  constructor() {
    this.client = new Discord.Client();
    this.token = token;
    this.ready = false;
    this.addEventHandlers();
  }

  destructor() {
    return this.client.destroy();
  }

  get messageToUser () {
    return this._messageToUser;
  }

  set messageToUser (messageToUser) {
    this._messageToUser = messageToUser;
    this.message.channel.send(messageToUser).catch(console.error);
  }

  get userCommand () {
    return this._userCommand;
  }

  set userCommand (messageContent) {
    this._userCommand = messageContent.split(' ')[0].slice(prefix.length);
  }

  get userArguments () {
    return this._currentArguments;
  }

  set userArguments (messageContent) {
    [, ... this._currentArguments] = messageContent.split(' ')
  }

  addEventHandlers() {
    this.client
          .on('ready', this.onReady)
          .on('message', this.onMessage);
  }

  logIn() {
    this.client.login(this.token);
  }

  onReady() {
    this.ready = true;
  }

  onMessage( message ) {
    this.message = message;
    if (!this.message.content.startsWith(prefix) || this.message.author.bot) return null;
    
    this.userCommand = this.message.content;
    this.userArguments = this.message.content;

    switch(this.userCommand) {
      case "n":
      case "nickname":
        nickName.change(this.message, this.userArguments);
        break;
      default:
        if(this.userCommand !== 'help') {
          this.messageToUser = `I'm a huge dipshit and can't understand that command :'(\n`;
        }
        help.get(this.message, [help.properties, nickName.properties], this.userArguments);
        break;
    }
  }
}
module.exports = BoiBot;