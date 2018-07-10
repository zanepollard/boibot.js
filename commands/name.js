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
        var nName = "";
        for(i = 1; args[i]!== undefined; i++){
            nName = nName + args[i] + " ";
        }
        const taggedUser = message.mentions.users.first();
        message.channel.send(`Setting ${taggedUser.username} to \"${nName}\"`);
        message.guild.members.get(taggedUser.id).setNickname(nName);
        console.log(`${taggedUser.username} set to \"${nName}\"`);
    },
};