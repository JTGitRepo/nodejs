var express = require("express");
var app = express();
var bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

 var campgrounds = [
       {name: "salmon Creek", image: "https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg"},
       {name: "Granite Hill", image: "https://farm3.staticflickr.com/2353/2069978635_2eb8b33cd4.jpg"},
       {name: "Mountain Goats Rest", image: "https://farm9.staticflickr.com/8673/15989950903_8185ed97c3.jpg"},
       {name: "salmon Creek", image: "https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg"},
       {name: "Granite Hill", image: "https://farm3.staticflickr.com/2353/2069978635_2eb8b33cd4.jpg"},
       {name: "Mountain Goats Rest", image: "https://farm9.staticflickr.com/8673/15989950903_8185ed97c3.jpg"},
       {name: "salmon Creek", image: "https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg"},
       {name: "Granite Hill", image: "https://farm3.staticflickr.com/2353/2069978635_2eb8b33cd4.jpg"},
       {name: "Mountain Goats Rest", image: "https://farm9.staticflickr.com/8673/15989950903_8185ed97c3.jpg"},
       {name: "salmon Creek", image: "https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg"},
       {name: "Granite Hill", image: "https://farm3.staticflickr.com/2353/2069978635_2eb8b33cd4.jpg"},
       {name: "Mountain Goats Rest", image: "https://farm9.staticflickr.com/8673/15989950903_8185ed97c3.jpg"}
    ]; 

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
   //get data from form and add to campgrounds array
   //redirect back to campgrounds page
   res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
   res.render("new") 
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp server has started!!!");
});