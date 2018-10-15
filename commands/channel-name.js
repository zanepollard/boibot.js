const chNameProperties = {
    usage: "<New Channel Name>",
    args: true,
    aliases: ["channelname", "ch"],
    name: "channelname",
    description: "Changes current channel name"
  };
  
  const changeName = (message, args) => {
    [...newName] = args;
    newName = newName.join(" ");
    if (newName.length > 0) {
        if (message.channel.type === "text"){
            message.channel.setName(newName);
        }
    }
  };
  
  module.exports = {
    properties: chNameProperties,
    changeName: changeName
  };