import React from "react";
import { useSelector } from "react-redux";
import reactLogo from "../assets/react.svg"; // usa el logo como spinner

const AgeDisplay = () => {
  const age = useSelector((state) => state.age.age);
  const loading = useSelector((state) => state.age.loading);

  return (
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <h3>Current age: {age}</h3>
      {loading && (
        <div>
          <p>Loading...</p>
          <img src={reactLogo} className="spinner" alt="loading" width={50} />
        </div>
      )}
    </div>
  );
};

export default AgeDisplay;
