import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ClassApp />
    </div>
  );
}
class ClassApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      fruit: "",
      fruits: ["Apple", "Banana", "Mango", "Papaya"],
      person: {}
    };

    this.changeCounter = this.changeCounter.bind(this);
  }

  changeCounter() {
    console.log(this.state.fruits);

    if (this.state.counter >= this.state.fruits.length - 1)
      this.setState({ counter: 0 });
    else this.setState({ counter: this.state.counter + 1 });
  }
  changeFruit = () => {
    if (this.state.message) {
      this.setState({ message: "" });
    } else {
      this.setState({});
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.fruit === "") {
      alert("field cannot be empty");
      return;
    }
    let fruits = this.state.fruits;
    console.log(this.state.fruits);

    fruits.push(this.state.fruit);
    console.log(this.state.fruits);
  };

  render() {
    return (
      <div>
        <button onClick={this.changeCounter}>
          counter: {this.state.counter}
        </button>
        <br />
        <br />
        <button>Fruit:{this.state.fruits[this.state.counter]}</button>
        <br />
        <br />
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={(e) => this.setState({ fruit: e.target.value })}
          />
          <br />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
