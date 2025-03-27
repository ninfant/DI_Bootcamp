import { useState } from "react";

const Phone = () => {
  const [brand, setBrand] = useState("Samsung");
  const [model, setModel] = useState("Galaxy S20");
  const [color, setColor] = useState("black");
  const [year, setYear] = useState(2020);

  const changeColor = () => {
    setColor("Blue");
  };
  return (
    <div>
      <h1>Phone Information</h1>
      <p>
        <strong>My Phone is a </strong> {brand}
      </p>
      <p>
        <strong>It is a </strong> {color} {model} from {year}
      </p>
      <button onClick={changeColor}>Change color</button>
    </div>
  );
};

export default Phone;
