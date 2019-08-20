import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import NewTodo from "./components/NewTodo";
import Header from "./components/Header";

class App extends React.Component {
  render() {
    return (
      <div className="centerpage">
        <Header myTitle="UberCoolToDos"/>
        <NewTodo />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
