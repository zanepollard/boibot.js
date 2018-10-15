const sayProperties = {
    usage: "<Message for Bot to say>",
    args: true,
    aliases: ["s", "say"],
    name: "say",
    description: "Makes the bot say what you enter"
  };
  
  const sendMessage = (message, args) => {
    [...theMessage] = args;
    theMessage = theMessage.join(" ");
    if (theMessage.length > 0) {
      message.channel.send(theMessage);
    }
  };
  
  module.exports = {
    properties: sayProperties,
    sendMessage: sendMessage
  };
  