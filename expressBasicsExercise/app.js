var express = require("express");
var app = express();

// Routes go here


app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!")
});

app.get("/speak/:animal", function(req, res){
    var sounds = {
        pig: 'Oink',
        cow: "Moo",
        dog: "woof woof!",
        cat: "I hate you human",
        goldfish: "bloop bloop..."
    };
    var animal = req.params.animal;
    var noise = sounds[animal];
    res.send("The " + animal + " says " + noise);
});

app.get("/repeat/:message/:times", function(req, res){
   var message = req.params.message;
   var times = Number(req.params.times);
   var result = '';
   for(var i = 0; i < times; i++){
       result += message + '<br>';
   }
   res.send(result);
   
   
});




app.get("*", function(req, res){
   res.send("Sorry, page not found... What are you doing with your life?"); 
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("sever has started!!!");
});