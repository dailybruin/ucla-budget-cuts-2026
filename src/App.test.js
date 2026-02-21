import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello daily bruin text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello Daily Bruin!/i);
  expect(linkElement).toBeInTheDocument();
});
