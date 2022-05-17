import { useState } from "react"

export default function TodoInput({ todos = [], setTodos = () => null }) {
  const [ value, setValue ]  = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([ ...todos, value ]);
    setValue('');
  }

  return (
    <form name="add todo" onSubmit={handleSubmit}>
      <label>
        add new Todo
        <input value={value} onChange={(e) => setValue(e.target.value)} placeholder="new todo"/>
      </label> 
      <button type="submit">add</button>
    </form>
  )
}