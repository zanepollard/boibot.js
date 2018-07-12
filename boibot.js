var path = require('path');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
<<<<<<< HEAD

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
=======
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

var path = require('path');

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.on('ready', () => {
  console.log('I am ready!');
});


client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
>>>>>>> 728c43682ac833d4d7b9a596298fe5aadc3a0d85

  addEventHandlers() {
    this.client
          .on('ready', this.onReady)
          .on('message', this.onMessage);
  }

  logIn() {
    this.client.login(this.token);
  }
<<<<<<< HEAD

  onReady() {
    this.ready = true;
  }

  onMessage( message ) {
    if (!message.content.startsWith(prefix) || message.author.bot) return null;
    
    this.userCommand = message.content.split(' ')[0].slice(prefix.length);
    [, ... this.userArguments] = message.content.split(' ')
    
    switch(this.userCommand) {
      case "n":
      case "nickname":
        nickName.change(message, this.userArguments);
        break;
      default:
        if(this.userCommand !== 'help') {
          this.messageToUser = `I'm a huge dipshit and can't understand that command :'(\n`;
          message.channel.send(this.messageToUser).catch(console.error);
        }
        help.get(message, [help.properties, nickName.properties], this.userArguments);
        break;
    }
  }
}
module.exports = BoiBot;
=======
    try {
      command.execute(message, args);
    }
    catch (error) {
      console.error(error);
      message.reply('there was an error trying to execute that command!');
    }
  
});


client.login(token);
>>>>>>> 728c43682ac833d4d7b9a596298fe5aadc3a0d85
