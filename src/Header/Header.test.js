import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders title from props', () => {
  render(<Header title={'test title'} />);
  const headerElement = screen.getByText(/test title/i);
  // const headerElement = screen.getByRole('banner', { value: /test title/i });

  expect(headerElement).toBeInTheDocument();
});
