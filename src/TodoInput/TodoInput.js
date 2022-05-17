import { useState } from "react"

export default function TodoInput({ todos, setTodos }) {
  const [ value, setValue ]  = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([ ...todos, value ]);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        add new Todo
        <input value={value} onChange={(e) => setValue(e.target.value)}/>
      </label> 
      <button type="submit">add</button>
    </form>
  )
}