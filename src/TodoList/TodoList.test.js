import { render, screen, within } from '@testing-library/react';
import mockTodos from '../test/todos';
import TodoList from './TodoList';

describe('TodoList', () => {
  it('renders todos', () => {
    render(<TodoList todos={mockTodos} />);
    const todosElement = screen.getAllByTestId(/test-todo/i);

    todosElement.forEach((todo, index) => {
      const { getByText } = within(todo);
      const text = mockTodos[index];
      expect(getByText(text)).toBeInTheDocument();
    })
  });

  it('renders correct amount of todos', () => {
    render(<TodoList todos={mockTodos} />);
    const todosElement = screen.getAllByTestId(/test-todo/i);

    expect(todosElement.length).toBe(4);
  })
})
