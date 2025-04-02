import React, { Component } from "react";
import Forms from "./Forms";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
class App extends Component {
  constructor() {
    super();
    this.state = {
      message: "",
    };
  }

  async componentDidMount() {
    //
    try {
      const response = await fetch(`${BASE_URL}/api/hello`); // Asume que estás usando proxy
      const data = await response.json();
      this.setState({ message: data.message });
    } catch (error) {
      console.error("Error fetching message:", error);
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <Forms />
      </div>
    );
  }
}

export default App;
