const changeName = (message, args) => {
    if (!message.mentions.users.size){
        return message.reply('please tag a user in order to name them!');
    }
    if (!args) {
        return message.reply('please enter a nickname for them!');
    }
    
    const taggedUser = message.mentions.users.first();
    message.channel.send(`Setting ${taggedUser.username} to \"${args}\"`);
    message.guild.members.get(taggedUser.id).setNickname(args);
    console.log(`${taggedUser.username} set to \"${args}\"`);
    return args;
}


module.exports = changeName;