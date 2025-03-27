import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import Carinfo from "./Components/Car";
import Events from "./Components/Events";
import Phone from "./Components/Phone";
import Color from "./Components/Color";

function App() {
  const carinfo = { name: "Ford", model: "Mustang" };

  return (
    <>
      <Carinfo model={carinfo.model} />
      <Events />
      <Phone />
      <Color />
    </>
  );
}
export default App;
