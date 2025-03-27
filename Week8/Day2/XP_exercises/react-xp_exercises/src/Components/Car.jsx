import { useState } from "react";
import Garage from "./Garage";

const Carinfo = ({ model }) => {
  const [color, setColor] = useState("red");

  const addColor = () => {
    setColor("blue");
    // Cambia a azul si yo quiera llamar a esta funcion en un onlick o algo de eso (el color incial era rojo)
  };

  return (
    <>
      <h1>
        This car is {color} {model}
      </h1>
      <Garage size="small" />
    </>
  );
};

export default Carinfo;
