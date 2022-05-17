import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

const addTodo = (value) => {
  value.forEach((val) => {
    const inputElement = screen.getByPlaceholderText(/new todo/i);
    const formElement = screen.getByRole('form');
    fireEvent.change(inputElement, { target: { value: val } });
    fireEvent.submit(formElement);
  })
}

describe('App', () => {
  it('add new todo after submit', () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/new todo/i);
    const formElement = screen.getByRole('form');

    fireEvent.change(inputElement, { target: { value: 'bangun tidur' } });
    fireEvent.submit(formElement);
    expect(screen.getByText(/bangun tidur/i)).toBeInTheDocument();
  });

  it('add multiple todos', () => {
    render(<App />);
    addTodo(['bangun', 'mandi', 'makan']);

    const todosElement = screen.getAllByTestId(/test-todo/i)

    expect(todosElement.length).toBe(3);
  })
});
