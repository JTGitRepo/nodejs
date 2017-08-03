var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);


// add new cat to the database

// var george = new Cat({
//     name: "George",
//     age: 11,
//     temperament: "Grouchy"
// })

// george.save(function(err, cat){
//     if(err){
//         console.log("SOMETHING WENT WRONG!!!");
//     } else {
//         console.log("We added a cat to the db:")
//         console.log(cat);
//     }
// })

Cat.create({
    name: "garfield",
    age: 9,
    temperament: "hates mondays"
}, function(err, cat){
    if(err){
        console.log(err);
    } else {
        console.log(cat)
    }
})

Cat.find({}, function(err, cats){
    if(err){
        console.log("OH NO, ERROR!")
        console.log(err);
    } else {
        console.log("ALL THE CATS...")
        console.log(cats)
    }
    
});

// retirieve all cats from the database and console.log each one

