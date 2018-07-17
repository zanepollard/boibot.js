var mongoose = require("mongoose");
var express = require("express");
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var server;

mongoose.connect('mongodb://localhost/test');

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
    //app.use(express.json());
    //app.use(express.urlencoded());

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
            var endD = req.body.endD;
            var startT = req.body.startT;
            var endT = req.body.endT;
            console.log(name,"\n",address,"\n",startD,"\n",endD,"\n",startT,"\n",endT);
            server.close(); 
            server = null; 
            console.log("server closed");    
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