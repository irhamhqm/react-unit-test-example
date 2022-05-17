import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from './Header';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

function App() {
  const [ todos, setTodos ] = useState([]);
  const [ error, setError ] = useState('');

  useEffect(() => {
    fetchTodos();
  }, [])

  const fetchTodos = async () => {
    try {
      const response = await axios.get('https://my-json-server.typicode.com/irhamhqm/todo-json-placeholder/todos');
      setTodos(response.data);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div className="App">
      <Header />
      {!!error && <div role="alert">{error}</div>}
      <TodoList todos={todos} />
      <TodoInput todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
