import { useState } from 'react';
import Header from './Header';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

function App() {
  const [ todos, setTodos ] = useState([]);
  return (
    <div className="App">
      <Header />
      <TodoList todos={todos} />
      <TodoInput todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
