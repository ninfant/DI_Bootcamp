import { createContext, useState } from "react";

// primero crear el contexto
export const ThemeContext = createContext();

// luego creo un componente que envuelve y da acceso al contexto
export function ThemeProvider(props) {
  const [theme, setTheme] = useState("light"); // estado que guarda el tema actual


  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light")); // función para alternar el tema
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
