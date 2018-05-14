import React, { Component } from 'react';

class TodoList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      items: Array(10).fill("item")
    }
  }

  render() {
    const { items } = this.state;

    return (<ul>
      {
        items.map((item) =>
          <li>{item}</li>
        )
      }
    </ul>)
  }
}

export default TodoList;