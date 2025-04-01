import React, { useState, useEffect } from "react";

const QuoteBox = ({ quotes }) => {
  const [index, setIndex] = useState(0);

  const nextQuote = () => {
    setIndex((prev) => (prev + 1) % quotes.length);
  };

  // genera color aleatorio
  const getRandomColor = () => {
    const colors = [
      "#7a5c63",
      "#e74c3c",
      "#3498db",
      "#16a085",
      "#9b59b6",
      "#f39c12",
    ];
    const random = Math.floor(Math.random() * colors.length);
    return colors[random];
  };

  // cambia el color cuando cambia la quote
  useEffect(() => {
    const newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
    document.documentElement.style.setProperty("--change-color", newColor);
  }, [index]);

  return (
    <div className="quote-box">
      <div className="quote-text">
        <h3>" {quotes[index].quote} "</h3>
      </div>

      <div className="quote-author">
        <p>- {quotes[index].author} -</p>
      </div>

      <div className="quote-btn-container">
        <button onClick={nextQuote}>New Quote</button>
      </div>
    </div>
  );
};

export default QuoteBox;
