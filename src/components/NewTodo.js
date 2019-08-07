import React from "react";

class NewTodo extends React.Component {
  state = {
    todo: null
  };

  handleChange = event => {
    //event.preventDefault();
    console.log(this.state.todo);
    const { value } = event.target;
    this.setState({ todo: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("current state: " + this.state.todo);
    //const { value } = event.target;
    //this.setState({ todo: value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.todo}
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit" />
        </form>

        <ul>
          <li>{this.state.todo}</li>
        </ul>
      </div>
    );
  }
}

export default NewTodo;
