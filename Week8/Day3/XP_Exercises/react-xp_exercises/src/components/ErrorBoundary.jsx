import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error, errorInfo) {
    // Update state to display the error message
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }

    return this.props.children; // if there's no error, render children
  }
}

export default ErrorBoundary;

// React Error Boundary Simulation:::::::::::::
// Create the ErrorBoundary Class Component
// We'll define an ErrorBoundary component that:
// Has an error property in the state, starting as null.
// Uses componentDidCatch to catch JavaScript errors.
// Displays an error message with some details when an error is caught.
