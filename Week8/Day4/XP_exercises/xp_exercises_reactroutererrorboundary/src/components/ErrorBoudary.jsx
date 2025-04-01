import React from "react";
class ErrorBoudary extends React.Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateError = (error) => {
    return { hasError: true };
  };

  componentDidCatch = (error, erroInfo) => {
    console.log("error=> ", error);
    console.log("erroInfo=> ", erroInfo);
    this.setState({ hasError: true });
  };

  render() {
    if (this.state.hasError)
      return <h1>An error has occured {this.props.message}</h1>;
    return this.props.children;
  }
}
export default ErrorBoudary;
