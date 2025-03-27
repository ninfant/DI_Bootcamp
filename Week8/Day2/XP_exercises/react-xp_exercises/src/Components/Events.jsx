import { useState } from "react";
const Events = () => {
  const [inputValue, setInputValue] = useState("");

  const clickMe = () => {
    alert("I was clicked");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      alert(`The enter key was pressed, your input is: ${inputValue}`);
    }
  };

  const [isToggleOn, setIsToggleOn] = useState(true);
  // Función que invierte el valor actual
  const handleToggle = () => {
    setIsToggleOn((prev) => !prev); // Cambia true <-> false
  };

  return (
    <>
      <button onClick={clickMe}>Click me </button>
      <input
        type="text"
        placeholder="Type something and press Enter"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleToggle}>{isToggleOn ? "ON" : "OFF"}</button>
    </>
  );
};

export default Events;
