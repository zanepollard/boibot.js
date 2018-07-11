const nickNameProperties = {
    usage: '<Tag> <nickname>',
    args: true,
    aliases: ['n', 'nickname'],
    name: 'name',
    description: 'Changes tagged user\'s nickname',
};

const change = (message, args) => {
    [, ...newNickname] = args;
    newNickname = newNickname.join(' ');

    if (!message.mentions.users.size){
        return message.reply('please tag a user in order to name them!');
    }
    if (!args) {
        return message.reply('please enter a nickname for them!');
    }
    
    const taggedUser = message.mentions.users.first();
    message.channel.send(`Setting ${taggedUser.username} to \"${newNickname}\"`);
    message.guild.members.get(taggedUser.id).setNickname(newNickname);
    console.log(`${taggedUser.username} set to \"${newNickname}\"`);
    return newNickname;
}


module.exports = {
    properties: nickNameProperties,
    change: change
};