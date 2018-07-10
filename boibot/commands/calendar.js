const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');

module.exports = {
    usage: '<!calendar> <args>',
    args: false,
    aliases: ['c', 'cal'],
    name: 'calendar',
    description: 'Creates and displays calendar events',
    execute(message, args, app) {
        //temporary
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