import React, { useRef, useState } from "react";

const CharacterCounter = () => {
  const inputRef = useRef(null); // referencia al input
  const [characterCount, setCharacterCount] = useState(0); // contador (para renderizar)

  const handleInput = () => {
    const length = inputRef.current.value.length;
    setCharacterCount(length); // actualiza el contador
  };

  return (
    <div>
      <input
        type="text"
        ref={inputRef} // por aqui se lee el valor en el input, es como decir mira "guárdame una referencia directa al DOM del input y no me molestes con re-renders cada vez que cambie su valor"
        onInput={handleInput} // ojo q se usa onInput
        placeholder="text something..."
        style={{
          padding: "5px",
          fontSize: "16px",
          width: "200px",
          marginBottom: "10px",
        }}
      />
      <div>Caracteres: {characterCount}</div>
    </div>
  );
};

export default CharacterCounter;
