import { useState } from "react";
const Counter = () => {
  const [counter, setCounter] = useState<number>(0);
  // Estado para la última acción, tipado como string
  const [lastAction, setLastAction] = useState<string>("None");

  const increment = () => {
    setCounter((prev) => prev + 1);
    setLastAction("Incremented");
  };

  const decrement = () => {
    setCounter((prev) => prev - 1);
    setLastAction("Decremented");
  };
  return (
    <div>
      <h2>Counter: {counter}</h2>
      <p>Last Action: {lastAction}</p>
      <button onClick={increment}> + </button>
      <button onClick={decrement}> - </button>
    </div>
  );
};

export default Counter;

/**Create a new Counter.tsx component
Implement state management for counter value
Add increment and decrement functionality
Track last action performed
Add proper TypeScript types for all state variables */
