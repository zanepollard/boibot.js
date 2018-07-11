const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');

module.exports = {
    usage: '<ARG>',
    args: true,
    aliases: ['c', 'cal'],
    name: 'calendar',
    description: 'Creates and displays calendar events',
    execute(message, args, app) {
        var events = [
            {
                  
            }
        ]
        app.get('/', function(req, res){
            res.render('index');
          })
        message.channel.send('http://localhost:3000');
    },
};