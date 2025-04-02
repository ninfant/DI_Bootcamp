import React, { useState } from "react";
const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
function App() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}/api/world`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json(); // respuesta del backend
      setResponse(data.message);
    } catch (err) {
      console.error("Error sending message:", err);
    }
  };

  return (
    <div>
      <h2>Post to Server</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)} // setInput se actuliza con el valor del input
          placeholder="Write something"
        />
        <button type="submit">Send</button>
      </form>

      {response && <p>Server response: {response}</p>}
    </div>
  );
}

export default App;
