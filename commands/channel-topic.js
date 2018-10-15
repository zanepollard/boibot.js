const topicProperties = {
    usage: "<New Channel Topic>",
    args: true,
    aliases: ["topic", "tp"],
    name: "topic",
    description: "Changes current channel topic"
  };
  
  const changeTopic = (message, args) => {
    [...newTopic] = args;
    newTopic = newTopic.join(" ");
    if (newTopic.length > 0) {
        if (message.channel.type === "text"){
            message.channel.setTopic(newTopic);
        }
    }
  };
  
  module.exports = {
    properties: topicProperties,
    changeTopic: changeTopic
  };