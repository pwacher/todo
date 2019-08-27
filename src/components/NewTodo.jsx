import React from "react";
import List from "./List";

class NewTodo extends React.Component {
  state = {
    newItem: "",
    items: []
  };

  removeItem = index => {
    const { items } = this.state;
    this.setState({
      // Uses the filter method on the items array, iterates thru the array, 
      // compares the index of the current array item against the index(id) if the item clicked.
      // Only items that return true are returned and the state is updated.
      items: items.filter((item, i) => {
        return i !== index;
      })
    });
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({ newItem: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.setState({
      newItem: "",
      // uses the rest parameter (...) to add newItem to the existing items list
      items: [...this.state.items, this.state.newItem]
    });

    //console.log("current state: " + this.state.newItem);
    //const { value } = event.target;
    //this.setState({ items: value });
  };

  render() {
    return (
      <div className="formArea">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.newItem}
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
        <hr />

        <List items={this.state.items} removeItem={this.removeItem} />
      </div>
    );
  }
}

export default NewTodo;
