import { fireEvent, render, screen } from '@testing-library/react';
import mockTodos from '../test/todos';
import TodoInput from './TodoInput';

describe('Todo Input', () => {
  it('should change input value on user input', () => {
    render(<TodoInput todos={mockTodos} />);
    const inputElement = screen.getByPlaceholderText(/new todo/i);

    fireEvent.change(inputElement, { target: { value: 'berangkat kerja' } });
    expect(inputElement.value).toBe('berangkat kerja');
  })
})