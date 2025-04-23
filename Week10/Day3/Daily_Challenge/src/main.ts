/**
 * 2. Create a function handleData that accepts an array of User | Product | Order. Implement type guards to:
For User objects, return a greeting message with the user’s name and age.
For Product objects, return a message with the product ID and its price.
For Order objects, return a summary of the order with its ID and amount.
3. Ensure your function handles unexpected cases gracefully.
 */
type User = {
  type: "user";
  name: string;
  age: number;
};

type Product = {
  type: "product";
  id: number;
  price: number;
};

type Order = {
  type: "order";
  orderId: string;
  amount: number;
};

type Student = {
  type: "student";
  orderId: string;
  amount: number;
};

type DataItem = User | Product | Order;
/** type guards */
const isUser = (item: DataItem): boolean => {
  return item.type === "user";
};

const isProduct = (item: DataItem): boolean => {
  return item.type === "product";
};

const isOrder = (item: DataItem): boolean => {
  return item.type === "order";
};
const handleData = (data: DataItem[]): string[] => {
  return data.map((item) => {
    if (isUser(item)) {
      const user = item as User;
      return `Hi, ${user.name}, age: ${user.age}`;
    } else if (isProduct(item)) {
      const product = item as Product;
      return `${product.id}, price: ${product.price}`;
    } else if (isOrder(item)) {
      const order = item as Order;
      return `${order.orderId}, amount: ${order.amount}`;
    } else {
      return "Unknown type";
    }
  });
};

const dataArr: DataItem[] = [
  { type: "user", name: "Alice", age: 30 },
  { type: "order", orderId: "1q2w3e", amount: 10 },
  { type: "product", id: 123, price: 999 },
  { type: "product", id: 444, price: 444 },
];

console.log(handleData(dataArr));
