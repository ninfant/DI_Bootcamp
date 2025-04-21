// 1)
class Employee {
  private _name: string; //Private: solo accesible dentro de esta clase
  private _salary: number;
  public position: string; //Public: accesible desde cualquier parte
  protected _departament: string; //Protected: accesible dentro de esta clase y subclases

  constructor(
    name: string,
    salary: number,
    position: string,
    department: string
  ) {
    this._name = name;
    this._salary = salary;
    this.position = position;
    this._departament = department;
  }

  public getName(): string {
    return this._name;
  }

  public getSalary(): number {
    return this._salary;
  }
  getEmployeeInfo = (): string => {
    return `Name: ${employee1.getName()}, Position: ${employee1.position}`;
  };
}

const employee1 = new Employee("Anna", 1000, "FullStuck", "FullStuck");

console.log(employee1.getEmployeeInfo());

// 2)
class Product {
  readonly id: number; //This property can only be assigned a value once, typically in the constructor
  public name: string;
  public price: number;
  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
  public getProductInfo(): string {
    return `The product name is ${this.name} and the price is ${this.price}`;
  }
}

const product1 = new Product(12, "Macbook", 1200);

console.log(product1.getProductInfo());

product1.id = 100; /**This property can only be assigned a value once, typically in the constructor
Should throw a compile-time error */

// 3)
// object-oriented programming: inheritance and method overriding

// Create a base class Animal with a public property name and a method makeSound that returns a string. Create a subclass Dog that extends Animal and overrides the makeSound method to return the sound a dog makes (“bark”). Create an instance of the Dog class and call the makeSound method.
class Animal {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
  public makeSound(): string {
    return "Some animal sound";
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }
  // Method override
  public makeSound(): string {
    return "bark";
  }
}

const dog1 = new Dog("Buddy");
console.log(dog1.makeSound());

// 4)
/** Create a class Calculator with the following static methods:
add(a: number, b: number): number – returns the sum of two numbers.
subtract(a: number, b: number): number – returns the difference between two numbers.
Call these methods without creating an instance of the class. */

class Calculator {
  // static method to add numbers
  static add(a: number, b: number): number {
    return a + b;
  }

  //Static method to subtract numbers
  static subtract(a: number, b: number): number {
    return a - b;
  }
}

//using the static methods (no need for "new Calculator()")
console.log(Calculator.add(10, 5));
console.log(Calculator.subtract(10, 5));

// 5)
/** Create an interface User with properties id (readonly), name,and email.
 * Extend the User interface to create a PremiumUser interface with an additional optional property membershipLevel.
 * Create a function printUserDetails that accepts a PremiumUser and logs the details to the console. */

interface User {
  readonly id: number; // Cannot be changed once set
  name: string;
  email: string;
}
interface PremiumUser extends User {
  membershipLevel?: string; // Optional property (can be undefined)
}

function printUserDetails(user: PremiumUser): void {
  console.log(`ID: ${user.id}, Name: ${user.name}, Email: ${user.email} `);

  // Only print if membershipLevel exists cause is optional so i have to check
  if (user.membershipLevel) {
    console.log(`membership level: ${user.membershipLevel}`);
  } else {
    console.log(`membership level: Free`);
  }
}

const user1: PremiumUser = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
};

const user2: PremiumUser = {
  id: 2,
  name: "Bob",
  email: "bob@example.com",
  membershipLevel: "Gold",
};

printUserDetails(user1);
printUserDetails(user2);
