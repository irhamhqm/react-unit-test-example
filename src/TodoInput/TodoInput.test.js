import { fireEvent, render, screen, within } from '@testing-library/react';
import TodoInput from './TodoInput';

const mockTodos = [
  'bangun',
  'mandi',
  'sarapan'
];

describe('Todo Input', () => {
  it('should change input value on user input', () => {
    render(<TodoInput todos={mockTodos} />);
    const inputElement = screen.getByPlaceholderText(/new todo/i);

    fireEvent.change(inputElement, { target: { value: 'berangkat kerja' } });
    expect(inputElement.value).toBe('berangkat kerja');
  })
})