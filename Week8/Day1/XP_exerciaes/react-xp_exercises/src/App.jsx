import React from "react";
import UserFavoriteAnimals from "./UserFavoriteAnimals";
import Exercise from "./Exercise3";

function App() {
  const myelement = <h1>I Love JSX!</h1>;
  const sum = 5 + 5;
  const user = {
    firstName: "Bob",
    lastName: "Dylan",
    favAnimals: ["Horse", "Turtle", "Elephant", "Monkey"],
  };
  return (
    <>
      <p>Hello World!</p>
      <div>{myelement}</div>
      {/* Renderizar esa constante dentro del componente App*/}
      <p>React is {sum} times better with JSX</p>
      <h3>{user.firstName}</h3>
      <h3>{user.lastName}</h3>
      <UserFavoriteAnimals fAnimals={user.favAnimals} />{" "}
      {/**  Aquí estás usando ese componente y pasándole un prop llamado favAnimals.*/}
      <Exercise exercise3 />
    </>
  );
}
//
export default App;
