'use strict';
const products = require('./products.interface');
class Products {
	constructor() {
		displayProducts();
		getNewProducts();
		leastPriceWithThisName("Stamps and Flower - Sage");
	}
}

function displayProducts() {
	console.log('products', products);
}

function getNewProducts(){
let newProducts=[];
products.filter(product=>{
	let newProduct={
		productName:product.productName,
		productPrice:product.productPrice
	}
	newProducts.push(newProduct);
})
return console.log(newProducts);
}

function leastPriceWithThisName(name){
	var newProducts =	products.filter(product=>{
	return product.productName==name;
});

var min = Math.min.apply(Math, newProducts.map(function(o) { return o.productPrice; }));

var newProduct=newProducts.find(prod=>{
return	prod.productPrice==min;
})
console.log("New Array is",newProduct);
return newProduct;
}

// Do not edit below this line
const product = new Products();
