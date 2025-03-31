import React from "react";
class Child extends React.Component {
  componentWillUnmount() {
    alert("The component named Header is about to be unmounted.");
  }

  render() {
    return <h1>Hello World!</h1>;
  }
}
class Color extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteColor: "red",
      show: true,
    };
  }

  componentDidMount() {
    alert("useEffect reached");

    // Temporizador para cambiar a "yellow" después de 1 segundo
    setTimeout(() => {
      this.setState({ favoriteColor: "yellow" });
    }, 3000);
  }

  // Permite o no actualizar el componente
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate → true");
    return true; // Podés poner false y ver que el botón no cambia nada
  }

  // Se ejecuta justo antes de actualizar el DOM
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(
      "getSnapshotBeforeUpdate → prevColor:",
      prevState.favoriteColor
    );
    return null;
  }

  // Se ejecuta justo después de actualizar el DOM
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate → currentColor:", this.state.favoriteColor);
  }

  // Botón para cambiar el color a "blue"
  changeColor = () => {
    this.setState({ favoriteColor: "blue" });
  };

  deleteHeader = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <h2>My favorite color is {this.state.favoriteColor}</h2>
        <button onClick={this.changeColor}>Change Color to Blue</button>
        <br />
        <br />
        {this.state.show && <Child />}
        <button onClick={this.deleteHeader}>Delete Header</button>
      </div>
    );
  }
}

export default Color;
// Updating phase:::::::
// Mostrar My favorite color is red
// Alertar "useEffect reached" (en clases se hace con componentDidMount)
// Cambiar el color a "blue" con un botón
// Usar shouldComponentUpdate() para controlar si el componente se actualiza

// Mostrar "My favorite color is blue" al inicio
// Después de montarse, un temporizador cambia el color a "yellow"
// Usar componentDidUpdate() para ver cuándo se actualiza
// Usar getSnapshotBeforeUpdate() para ver qué pasa justo antes de actualizar

// Unmounting phase::::::::
// Using the previous exercise (Exercise 2 : Lifecycle)

// Add a new property named show to the state object. Set the value of this property to true.

// Add a Class component named Child to the same file. This new component will render a ‘Hello World!’ message in a header tag.

// This new component uses the componentWillUnmount method to alert an unmounted message.

// Render the Child component in your App, only if the value of the show property is set to true.

// Create a “Delete” button that when clicked on (ie. onClick) will call a function that updates the value of the show property to false.
