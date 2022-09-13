import React from 'react'; import { render, screen } from '@testing-library/react'; import App from './App';

test('Должен быть правильный заголовок', () => {
  render(<App />);
  const linkElement = screen.getByText(/tdd - игра/i);
  expect(linkElement).toBeInTheDocument();
});
