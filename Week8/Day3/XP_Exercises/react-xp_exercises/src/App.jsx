import BuggyCounter from "./components/BuggyCounter";
import ErrorBoundary from "./components/ErrorBoundary";
import Color from "./components/Color";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      {/* <h3>Click on the numbers to increase the counters.</h3>
      <p>
        The counter is programmed to throw an error when it reaches 5. This
        simulates a JavaScript error in a component.
      </p> */}

      {/*BOTH BuggyCounters share the same ErrorBoundary */}
      {/* <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary> */}
      {/* <p>
        These two counters are each inside their own error boundary so if one
        crashes, the other is not affected
      </p>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>

      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary> */}

      {/* <BuggyCounter /> */}

      <Color />
    </div>
  );
}

export default App;
