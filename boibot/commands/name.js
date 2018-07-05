module.exports = {
    usage: '<Tag> <nickname>',
    args: true,
    aliases: ['n', 'nickname'],
    name: 'name',
    description: 'Changes tagged user\'s nickname',
    execute(message, args) {
        if (!message.mentions.users.size){
            return message.reply('please tag a user in order to name them!');
        }
        if (!args[1]) {
            return message.reply('please enter a nickname for them!');
        }
        const taggedUser = message.mentions.users.first();
        message.channel.send(`Setting ${taggedUser.username} to ${args[1]}`);
        message.guild.members.get(taggedUser.id).setNickname(args[1])
        //message.member.setNickname(args[1])
    },
};