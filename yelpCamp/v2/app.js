var express = require("express");
var app = express();
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/yelp_camp")
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");



// SCHEMA SETUP

var campgroundSchema = new mongoose.Schema({
    name: String,
    image:String,
    description: String
})

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create({name: "Granite Hill", image: "https://farm3.staticflickr.com/2353/2069978635_2eb8b33cd4.jpg", description: "this is a huge granite hill. No bathrooms. No water."}, function(err, campground){
//         if(err){
//             console.log(err);
//         } else {
//             console.log("NEWLY CREATED CAMPGROUND: ");
//             console.log(campground)
//         }
//     });
    
   

app.get("/", function(req, res){
    res.render("landing");
});

//INDEX - show all campgrounds

app.get("/campgrounds", function(req, res){
        // Get all campgrounds from DB
         Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err)
        }else {
        res.render("index", {campgrounds: allCampgrounds});        }
    });
    
    
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.desc;
    var newCampground = {name: name, image: image, description :desc};
    //create a new campground and save to database
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err)
        } else {
            //redirect back to campgrounds page
            res.redirect("/campgrounds");
        }
    });
   
   
  
});

app.get("/campgrounds/new", function(req, res){
   res.render("new") 
});



// SHOW - show more info about one campground

app.get("/campgrounds/:id", function(req, res){
    //find the campground with provided ID
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err)
        } else{
            res.render("show", {campground:foundCampground})
        }
    })
    // req.params.id;
    //render show template with that campground
    // res.("show")
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp server has started!!!");
});














//  var campgrounds = [
//       {name: "salmon Creek", image: "https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg"},
//       {name: "Granite Hill", image: "https://farm3.staticflickr.com/2353/2069978635_2eb8b33cd4.jpg"},
//       {name: "Mountain Goats Rest", image: "https://farm9.staticflickr.com/8673/15989950903_8185ed97c3.jpg"},
//       {name: "salmon Creek", image: "https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg"},
//       {name: "Granite Hill", image: "https://farm3.staticflickr.com/2353/2069978635_2eb8b33cd4.jpg"},
//       {name: "Mountain Goats Rest", image: "https://farm9.staticflickr.com/8673/15989950903_8185ed97c3.jpg"},
//       {name: "salmon Creek", image: "https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg"},
//       {name: "Granite Hill", image: "https://farm3.staticflickr.com/2353/2069978635_2eb8b33cd4.jpg"},
//       {name: "Mountain Goats Rest", image: "https://farm9.staticflickr.com/8673/15989950903_8185ed97c3.jpg"},
//       {name: "salmon Creek", image: "https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg"},
//       {name: "Granite Hill", image: "https://farm3.staticflickr.com/2353/2069978635_2eb8b33cd4.jpg"},
//       {name: "Mountain Goats Rest", image: "https://farm9.staticflickr.com/8673/15989950903_8185ed97c3.jpg"}
//     ]; 