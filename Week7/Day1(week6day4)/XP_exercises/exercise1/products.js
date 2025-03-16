// Exercise 1: Multiple Exports And Import Using CommonJS Syntax
// Create a file named products.js.

// Inside products.js, create an array of objects, each representing a product with properties like name, price, and category.

// Export this array using the Common JS syntax.

const products = [
  { name: "Laptop", price: 999.99, category: "Electronics" },
  { name: "Coffee Mug", price: 12.99, category: "Kitchen" },
  { name: "Notebook", price: 4.99, category: "Stationery" },
  { name: "Headphones", price: 79.99, category: "Electronics" },
];

module.exports = products;

//MyNotes:in the package.json i had to changed  and write "type": "commonjs",
//so i can use Common JS syntax
