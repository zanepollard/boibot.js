var path = require("path");
const Discord = require("discord.js");
const { prefix, token } = require("./config.json");

const help = require("./commands/help");
const nickName = require("./commands/nick-name");

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

  addEventHandlers() {
    this.client.on("ready", this.onReady).on("message", this.onMessage);
  }

  logIn() {
    this.client.login(this.token);
  }

  onReady() {
    this.ready = true;
  }

  setUserCommand(messageContent) {
    this.userCommand = messageContent.split(" ")[0].slice(prefix.length);
  }

  setUserArguments(messageContent) {
    [, ...this.userArguments] = messageContent.split(" ");
  }

  onMessage(message) {
    if (!message.content.startsWith(prefix) || message.author.bot) return null;

    this.setUserCommand(message.content);
    this.setUserArguments(message.content);

    switch (this.userCommand) {
      case "n":
      case "nickname":
        nickName.change(message, this.userArguments);
        break;
      default:
        if (this.userCommand !== "help") {
          this.messageToUser = `I'm a huge dipshit and can't understand that command :'(\n`;
          message.channel.send(this.messageToUser).catch(console.error);
        }
        help.get(
          message,
          [help.properties, nickName.properties],
          this.userArguments
        );
        break;
    }
  }
}
module.exports = BoiBot;
