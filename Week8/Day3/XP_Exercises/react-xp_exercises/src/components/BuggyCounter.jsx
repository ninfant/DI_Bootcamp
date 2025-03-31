import { useState } from "react";
const BuggyCounter = () => {
  const [counter, setCounter] = useState(0);

  if (counter > 5) {
    throw new Error("I crashed");
  }
  const handleClick = () => {
    setCounter(counter + 1);
  };
  return (
    <>
      <p>{counter}</p>
      <button onClick={handleClick}>+1</button>
    </>
  );
};
export default BuggyCounter;
