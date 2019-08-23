import React from "react";
import List from "./List";

class NewTodo extends React.Component {
  state = {
    newItem: "",
    items: []
  };

  removeItem = index => {
    const { items } = this.state;
    console.log(items);
    console.log(index);
    // this.setState({
    //   items: items.filter((item, i) => {
    //     return i !== index;
    //   })
    //});
  };

  handleChange = event => {
    //console.log(this.state.items);
    //const itemDate = Date.now();
    const { value } = event.target;
    this.setState({ newItem: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.setState({
      newItem: "",
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
