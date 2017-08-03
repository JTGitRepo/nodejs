var faker = require('faker');

// var productName = faker.commerce.productName();


var fakeInventory = [];

for (var i = 0; i < 20; i++){
    var product = {product: faker.commerce.productName(), 
        price: faker.commerce.price()};
        fakeInventory[i] =  product;
}

for(var i = 0; i < fakeInventory.length; i++){
    console.log(fakeInventory[i].product + ': ' + '$' + fakeInventory[i].price);
}

console.log(fakeInventory[0].product);



