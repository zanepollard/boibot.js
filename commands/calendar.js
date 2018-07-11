var bodyParser = require('body-parser');
const fs = require('fs');
var path = require('path');
var express = require('express');
const readline = require('readline');


module.exports = {
    usage: '<!calendar> <args>',
    args: false,
    aliases: ['c', 'cal'],
    name: 'calendar',
    description: 'Creates and displays calendar events',
    execute(message, args) {
        var app = express();

        app.set('view engine', 'ejs');
        app.set('views', path.join(__dirname, 'views'));

        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended: false}));

        app.use(express.static(path.join(__dirname, 'public')))

        app.get('/', function(req, res){
            res.render('index.ejs');
        })

        app.listen(3000, function(){
            console.log('Server started on port 3000...');
        })
        //temporary
        var events = [
            {
                  
            }
        ]
        
        message.channel.send('http://localhost:3000');
    },
};