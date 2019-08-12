import React from "react";

class NewTodo extends React.Component {
  state = {
    items: null,
    key: null
  };

  handleChange = event => {
    //console.log(this.state.items);
    const itemDate = Date.now();
    const { value } = event.target;
    this.setState({ items: value, key: itemDate });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("current state: " + this.state.items);
    //const { value } = event.target;
    //this.setState({ items: value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.items}
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit" />
        </form>

        <ul>{this.state.items != null && <li>{this.state.items}</li>}</ul>
      </div>
    );
  }
}

export default NewTodo;
