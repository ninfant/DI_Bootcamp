import React from "react";

interface GreetingProps {
  name: string;
  messageCount: number;
}

const Greeting = ({ name, messageCount }: GreetingProps) => {
  return (
    <>
      <h1>Hello, {name}</h1>
      <p>
        You have {messageCount} new{" "}
        {messageCount === 1 ? "message" : "messages"}.
      </p>
    </>
  );
};
export default Greeting;


/**Create a new Greeting.tsx component file
Define an interface for props including name and messageCount
Create the component using the defined props
Implement the component in App.tsx */