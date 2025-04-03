import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Cambiar a modo {theme === "light" ? "oscuro" : "claro"}
    </button>
  );
};

export default ThemeSwitcher;
