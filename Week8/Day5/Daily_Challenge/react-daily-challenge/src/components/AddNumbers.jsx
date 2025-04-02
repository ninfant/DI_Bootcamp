import { useState } from "react";

const AddNumbers = () => {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [result, setResult] = useState(null);
  const [operation, setOperation] = useState("");

  const calculate = () => {
    const a = parseFloat(firstNumber);
    const b = parseFloat(secondNumber);

    if (isNaN(a) || isNaN(b)) {
      setResult("Invalid input");
      return;
    }

    let res;
    switch (operation) {
      case "add":
        res = a + b;
        break;
      case "sub":
        res = a - b;
        break;
      case "mul":
        res = a * b;
        break;
      case "div":
        res = b !== 0 ? a / b : "Cannot divide by 0";
        break;
      default:
        res = "Choose operation";
    }
    setResult(res);
  };

  return (
    <div className="add">
      <h2>Universal Calculator</h2>

      <input
        value={firstNumber}
        type="number"
        onChange={(e) => setFirstNumber(e.target.value)}
      />

      <input
        value={secondNumber}
        type="number"
        onChange={(e) => setSecondNumber(e.target.value)}
      />

      <br />

      <select value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option value="">Select an operation</option>
        <option value="add">Addition</option>
        <option value="sub">Subtraction</option>
        <option value="mul">Multiplication</option>
        <option value="div">Division</option>
      </select>

      <br />
      <button onClick={calculate}>Calculate</button>

      {result !== null && <h3>{result}</h3>}
    </div>
  );
};

export default AddNumbers;
