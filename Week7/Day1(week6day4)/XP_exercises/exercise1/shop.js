const products = require("../exercise1/products.js");
// Multiple Exports And Import Using CommonJS Syntax
// Create another file named shop.js.
// In shop.js, require the product objects from the products.js module.
// Create a function that takes a product name as a parameter and searches for the corresponding product object.

function search(myProducts, productName) {
  // .find() method to locate the product object with the given name
  return myProducts.find((product) => product.name === productName);
  // returns the product object, or undefined if not found
}

console.log(search(products, "Laptop"));
console.log(search(products, "Headphones"));
console.log(search(products, "lol")); //undefined
