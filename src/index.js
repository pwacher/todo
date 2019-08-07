import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import NewTodo from "./components/NewTodo.js";

class Header extends React.Component {
  render() {
    return <h1>My Todo App</h1>;
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <NewTodo />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
