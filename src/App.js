import react, { Component } from 'react';

import Todoitem from './Todoitem';
import todosData from './todosData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    };
  }
  render() {
    const todoItems = this.state.todos.map(item => <Todoitem key={item.id} item={item} />);

    return (

      <div className="todo-list">
        {todoItems}

      </div>
    );
  }

};

export default App;