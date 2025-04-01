import QuoteBox from "./components/QuoteBox";
import quotes from "./components/quotes";
// import "./App.css";
import "./quotes.css";

function App() {
  return (
    <>
      <QuoteBox quotes={quotes} />
    </>
  );
}

export default App;
