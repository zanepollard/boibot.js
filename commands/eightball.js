const eightballProperties = {
    usage: "<Question to ask magic 8 ball>",
    args: true,
    aliases: ["8ball"],
    name: "8ball",
    description: "Answers your questions magically!!"
  };
  
  const divine = (message, args) => {
    [...theQuestion] = args;
    theQuestion = theQuestion.join(" ");
    var answers = ["It is Certain.", "It is decidedly so.","Without a doubt.","Yes - Definitely","You may rely on it","As I see it, Yes.",
                  "Most likely","Outlook good","Yes.","Signs point to yes","Reply hazy, try again.","Ask again later","Better not tell you now",
                  "Cannot tell you now", "Cannot predict now","Concentrate and ask again","Don't count on it","My reply is no","My sources say no.",
                  "Outlook not so good", "Very doubtful"]
    if (theQuestion.length > 0) {
      item = Math.floor((Math.random() * answers.length));
      message.channel.send(`The Magic 8 Ball says:\n***${answers[item]}***`);
    }else{
      message.reply(" Please ask a question!\nUsage: !8ball <Question Here>")
    }
  };
  
  module.exports = {
    properties: eightballProperties,
    divine: divine
  };