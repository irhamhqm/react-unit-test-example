
export default function TodoList({ todos = [] }) {
  return (
    <ol>
      {todos.map((todo, index) => (
        <li key={index} data-testid="test-todo">{todo}</li>
      ))}
    </ol>
  )
}