module.exports = {
    usage: '<ARG>',
    args: true,
    aliases: ['c', 'cal'],
    name: 'calendar',
    description: 'Creates and displays calendar events',
    execute(message, args, app) {
        message.channel.send('This will return a link to create/list a calendar event');
    },
};