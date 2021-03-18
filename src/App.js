import react from 'react';

import Todoitem from './Todoitem';
import todosData from './todosData';

const App = () => {

  const todoItems = todosData.map(item => <Todoitem key={item.id} item={item} />);

  return (

    <div className="todo-list">
      {todoItems}

    </div>
  );
};

export default App;