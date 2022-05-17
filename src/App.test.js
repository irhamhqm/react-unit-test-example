import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

import {rest, server} from './test/server.js'

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const addTodo = (value) => {
  value.forEach((val) => {
    const inputElement = screen.getByPlaceholderText(/new todo/i);
    const formElement = screen.getByRole('form');
    fireEvent.change(inputElement, { target: { value: val } });
    fireEvent.submit(formElement);
  })
}

describe('App', () => {
  it('fetch todos from back-end', async () => {
    render(<App />);
    const todosElement = await screen.findAllByTestId(/test-todo/i);

    expect(todosElement.length).toBe(4);
  });

  it('shows error when failed to fetch data', async () => {
    server.use(
      rest.get('https://my-json-server.typicode.com/irhamhqm/todo-json-placeholder/todos', async (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    render(<App />);
    const alert = await screen.findByRole('alert');

    expect(alert).toBeInTheDocument();
  })

  it('add new todo after submit', () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/new todo/i);
    const formElement = screen.getByRole('form');

    fireEvent.change(inputElement, { target: { value: 'bangun tidur' } });
    fireEvent.submit(formElement);
    expect(screen.getByText(/bangun tidur/i)).toBeInTheDocument();
  });

  it('input should be cleared after submit', () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/new todo/i);
    const formElement = screen.getByRole('form');

    fireEvent.change(inputElement, { target: { value: 'bangun tidur' } });
    fireEvent.submit(formElement);

    expect(inputElement.value).toBe('');

  });

  it('add multiple todos', () => {
    render(<App />);
    addTodo(['bangun', 'mandi', 'makan']);

    const todosElement = screen.getAllByTestId(/test-todo/i)

    expect(todosElement.length).toBe(3);
  });
});
