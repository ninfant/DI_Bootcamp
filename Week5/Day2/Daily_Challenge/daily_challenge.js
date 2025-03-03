// ex1
let client = "John";


const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "35$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}
// Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method.
const displayGroceries = () => {
    groceries.fruits.forEach(fruta => {
        console.log("Fruts:", fruta)

    })
}
displayGroceries()


// Create another arrow function named cloneGroceries.
// In the function, create a variable named user that is a copy of the client variable. (Tip : make the user variable equal to the client variable)
// Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
const cloneGroceries = () => {
    let user = client
    client = "Betty"
    console.log(user)
    let shopping = groceries
     console.log(shopping.totalPrice)
    shopping.totalPrice = "35$"
       // Modify paid status
    shopping.other.paid = false

console.log("Shopping Object:", shopping)
console.log("Groceries Object:", groceries)
}
cloneGroceries()

// still "John" because strings are passed by value
// Since shopping is assigned by reference to groceries, modifying shopping affects groceries as well.
// totalPrice was changed to "35$", and paid was changed to false, and these changes appear in both shopping and groceries.


