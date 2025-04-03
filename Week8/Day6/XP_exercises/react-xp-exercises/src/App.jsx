import { useContext } from "react";
import { ThemeContext } from "./components/ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher";
import CharacterCounter from "./components/CharacterCounter";

const App = () => {
  const { theme } = useContext(ThemeContext);

  const appStyle = {
    backgroundColor: theme === "light" ? "#ffffff" : "#1e1e1e",
    color: theme === "light" ? "#000000" : "#ffffff",
    minWidth: "100vw",
    minHeight: "50vh",
    padding: "20px",
    transition: "all 0.3s ease",
    textAlign: "center",
    placeItems: "center",
    display: "grid",
    // display: "grid" + placeItems: "center": centra todo el contenido tanto vertical como horizontalmente
  };

  return (
    <>
      <div style={appStyle}>
        <h1>React Theme Switcher</h1>
        <ThemeSwitcher />
        <p>El tema actual es: {theme}</p>
      </div>
      <div style={{ padding: "20px" }}>
        <h3>Contador de caracteres con useRef</h3>
        <CharacterCounter />
      </div>
    </>
  );
};

export default App;
