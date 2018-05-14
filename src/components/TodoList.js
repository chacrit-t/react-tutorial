import React, { Component } from 'react';

class TodoList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      items: Array(10).fill("item")
    }
  }

  addItem = () => {
    var items = this.state.items.slice();
    items.push("item");
    this.setState({
      items
    })
  }

  render() {
    const { items } = this.state;

    return (<div>
      <button onClick={this.addItem}>Add Item</button>
      <ol>
      {
        items.map((item) =>
          <li>{item}</li>
        )
      }
    </ol></div>)
  }
}

export default TodoList;