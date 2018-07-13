const fs = require('fs');
const readline = require('readline');

/*
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
*/

const calendarProperties = {
    usage: "<Tag>",
    args: false,
    aliases: ["c", "cal"],
    name: "calendar",
    description: "Initializes a web server in order to create a calendar event for the server"
  };

const add = (message) => {
    message.channel.send("TODO");

}

module.exports = {
    properties: calendarProperties,
    add: add
}