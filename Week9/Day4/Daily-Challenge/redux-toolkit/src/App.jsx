// App.jsx
import React from "react";
import AgeDisplay from "./components/AgeDisplay";
import AgeControls from "./components/AgeControls";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h3>Age control with Redux Toolkit + Thunk</h3>
      <AgeDisplay />
      <AgeControls />
    </div>
  );
}

export default App;
