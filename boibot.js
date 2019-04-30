const Discord = require("discord.js");
const { prefix, token } = require("./config.json");

const help = require("./commands/help");
const nickName = require("./commands/nick-name");
const say = require("./commands/say")
const eightball = require("./commands/eightball")
const chan = require("./commands/channel-name")
const topic = require("./commands/channel-topic")

class BoiBot {
  constructor() {
    this.token = token;
    this.ready = false;
    this.client = new Discord.Client();
    this.onReady = this.onReady.bind(this);
    this.onMessage = this.onMessage.bind(this);
    this.onVoiceStateUpdate = this.onVoiceStateUpdate.bind(this);
    this.addEventHandlers();
  }

  destructor() {
    return this.client.destroy();
  }

  /**
   * Assigns event handlers to Discord Client events
   */
  addEventHandlers() {
    this.client.on("ready", this.onReady).on("message", this.onMessage).on("channelUpdate", this.onChannelUpdate).on("voiceStateUpdate", this.onVoiceStateUpdate);
  }

  logIn() {
    this.client.login(this.token);
  }

  onReady() {
    this.ready = true;
    if(this.client.user != null){
      this.client.user.setActivity('Message !h for help!', {type: 'WATCHING'})
      .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
      .catch(console.error);
    }
  }

  /**
   * Extracts the command from the user's message
   * and assigns it to the object's this.userCommand property.
   *
   * @param {String} messageContent content of the user's message
   */
  setUserCommand(messageContent) {
    this.userCommand = messageContent.split(" ")[0].slice(prefix.length);
  }

  /**
   * Extracts the arguments after the user's command
   * and assigns it to the object's this.userArguments property as an array.
   *
   * @param {String} messageContent content of the user's message
   */
  setUserArguments(messageContent) {
    [, ...this.userArguments] = messageContent.split(" ");
  }

  /**
   * Handles incoming messages by extracting the message's command and arguments
   * then calling the appropriate method on the arguments.
   *
   * @param {Object} message message object from the Discord.js library
   */
  onMessage(message) {
    if (!message.content.startsWith(prefix) || message.author.bot) return null;

    this.setUserCommand(message.content);
    this.setUserArguments(message.content);
    switch (this.userCommand) {
      case "n":
      case "nickname":
        nickName.change(message, this.userArguments);
        message.delete();
        break;
      case "s":  
      case "say":
        say.sendMessage(message,this.userArguments);
        message.delete();
        break;
      case "8ball":
        eightball.divine(message,this.userArguments);
        break;
      case "ch":
      case "channelname":
        chan.changeName(message,this.userArguments);
        message.delete();
        break;
      case "tp":
      case "topic":
        topic.changeTopic(message,this.userArguments)
        message.delete();
        break;
      case "h":
      case "help":
        help.get(
          message,
          [help.properties, nickName.properties,say.properties,eightball.properties,chan.properties,topic.properties],
          this.userArguments
        );
        message.delete();
        break;
    }
  }

  /**
   * Handles users entering voice channels and messages main chat channel.
   *
   * @param {Object} oldMember User object before entering new voice channel
   * @param {Object} newMember User object after entering new voice channel
   */
  onVoiceStateUpdate(oldMember, newMember) {
    let channelID;
    let channels = newMember.guild.channels;
    channelLoop:
    for (let c of channels) {
        let channelType = c[1].type;
        if (channelType === "text") {
            channelID = c[0];
            break channelLoop;
        }
    }

    //417075362686828556
    //417075362686828556
    console.log(newMember.guild.id)
    if(newMember.voiceChannel == null){
      console.log("out")
    }
    else if (newMember.voiceChannel != oldMember.voiceChannel) {
      if(newMember.nickname == null){
        newMember.guild.channels.get(channelID).send(`${newMember.displayName} joined ${newMember.voiceChannel.name}`)
      }
      else{
        newMember.guild.channels.get(channelID).send(`${newMember.nickname} joined ${newMember.voiceChannel.name}`)
      }
    }
  }

  onChannelUpdate(oldMember,newMember){
    if(oldMember.name != newMember.name){
      newMember.send(`Channel **${oldMember.name}**'s name has been changed to **${newMember.name}**.`)
    }
    if(oldMember.topic != newMember.topic){
      newMember.send(`This channel has a new topic: \n**${newMember.topic}**`)
    }
  }
}
module.exports = BoiBot;
