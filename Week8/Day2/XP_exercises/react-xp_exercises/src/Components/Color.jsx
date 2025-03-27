import { useState, useEffect } from "react";

const Color = () => {
  const [favoriteColor, setFavoriteColor] = useState("red");

  // useEffect se llama después del primer render o cuando cambia el estado
  useEffect(() => {
    alert("useEffect reached");
  }, [favoriteColor]); // Se ejecuta cada vez que favoriteColor cambia

  // Función que cambia el color al hacer clic
  const changeColor = () => {
    setFavoriteColor("blue");
  };

  return (
    <div>
      <h1>{favoriteColor}</h1>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};

export default Color;
