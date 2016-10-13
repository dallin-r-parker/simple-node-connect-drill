var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var chatCtrl = require('./controllers/chatCtrl');
var keys = require('./secretkeys')
var port = 3737;

// TODO server front end files with static
app.use(express.static('../public'));
app.use(bodyParser.json());
app.use(session({secret: keys.expressSecret}));
// TODO Initialize Session

app.post("/api/screenname", function(req, res){
      console.log('got screenname: ' + req.body.name);
      req.session.screenname = req.body.name;
});

app.get("/api/chats", chatCtrl.getChats);
app.post("/api/chats", chatCtrl.postChats);
app.delete("/api/chats", chatCtrl.deleteChats);



app.listen(port, function(){
  console.log("Listeing on port ", port, " INSERT-WITTY-STATEMENT-HERE");
});
