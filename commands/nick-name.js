const nickNameProperties = {
  usage: "<Tag> <nickname>",
  args: true,
  aliases: ["n", "nickname"],
  name: "name",
  description: "Changes tagged user's nickname"
};

const change = (message, args) => {
  [, ...newNickname] = args;
  newNickname = newNickname.join(" ");

  if (!message.mentions.users.size) {
    return message.reply("please tag a user in order to name them!");
  }

  const taggedUser = message.mentions.users.first();

  if (newNickname.length > 0) {
    message.channel.send(`Setting ${taggedUser.username}'s nickname to \"${newNickname}\"`);
    message.guild.members.get(taggedUser.id).setNickname(newNickname);
    return newNickname;
  } else {
    message.reply(
      `${taggedUser.username}, you didn't add a nickname to your message.
      Format your message like this: \`!n ${taggedUser.username} A New Nickname\``
    );
    return taggedUser.username;
  }
};

module.exports = {
  properties: nickNameProperties,
  change: change
};
