import { useState, createContext } from "react";
import Counter from "./Counter";
import CounterButton from "./CounterButton";

export const CounterContext = createContext();
export const MyContext = createContext();

// console.log(CounterContext);
const CounterHolder = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <CounterContext.Provider
        value={{ count, setCount, title: "My Amazing Counter" }}
      >
        <Counter />
        <MyContext value={{buttonTitle:"Plus One"}}>
          <CounterButton />
        </MyContext>
        
      </CounterContext.Provider>
    </>
  );
};
export default CounterHolder;
