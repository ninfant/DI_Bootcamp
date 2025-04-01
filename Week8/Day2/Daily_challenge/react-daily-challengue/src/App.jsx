import { useState } from "react";
import "./App.css";

function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 },
  ]);

  const increaseVotes = (index) => {
    const updatedLanguages = [...languages];// hay q hacer una copia para q react sepa que ha cambiado ya sea arreglo u objeto 
    updatedLanguages[index].votes += 1;
    setLanguages(updatedLanguages);
  };

  return (
    <>
      {languages.map((language, index) => (
        <div key={index} className="card">
          <p>{language.votes}</p>
          <p>{language.name}</p>
          <button onClick={() => increaseVotes(index)}>Click Here</button>
        </div>
      ))}
    </>
  );
}

export default App;
