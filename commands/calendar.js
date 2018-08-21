
var express = require("express");
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var fs = require("fs");
var server;



const calendarProperties = {
    usage: "<Tag>",
    args: false,
    aliases: ["c", "cal"],
    name: "calendar",
    description: "Initializes a web server in order to create a calendar event"
  };

const initServer = (message) => {
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, '../views'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(express.static(path.join(__dirname, '../public')))
    app.get("/", function(req, res){
        test = "this is a variable";
        req.test = test;
        res.render("index");
    });

    if(!server){
        server = app.listen(3000, function(){console.log('Server started on port 3000...');});
        message.channel.send("http://localhost:3000");
        app.post("/events", function(req, res){
            var name = req.body.name;
            var address = req.body.address;
            var startD = req.body.startD;
            var startT = req.body.startT;
            var duration = req.body.duration;
            console.log(name,"\n",address,"\n",startD,"\n",startT,"\n",duration);
            server.close(); 
            server = null; 
            console.log("server closed");
            fs.readFile('events.json', 'utf8', function readFileCallback(err, data){
                if (err){
                    console.log(err);
                } 
                else {
                obj = JSON.parse(data);
                obj.events.push({name: name, address: address, startDate: startD, startTime: startT, duration: duration, author: message.member.user.username, timestamp: message.createdAt});
                
                fs.writeFile('events.json', JSON.stringify(obj), (err) => {
                    if (err) console.log(error(err))
                }); 
                  
            }});
            fs.close(0);    
        });    
        if(!server){
            setTimeout(function(){server.close(); console.log("server closed"); server = null;}, 30000);    
        }    
    }
    else{
        return message.channel.send("Server already running!");
    } 
}

const add = (message) => {
    console.log("in !c");
    initServer(message);
}

module.exports = {
    properties: calendarProperties,
    add: add
}