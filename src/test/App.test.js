import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from '../App';

test('renders input', () => {
  render(<App />);
  const inputElement = screen.getByLabelText('Digite uma cor:');
  expect(inputElement).toBeInTheDocument();
});

test('renders colors in a list', () => {
  render(<App />);
  const red = screen.getAllByTestId('color');
  expect(red).toHaveLength(7);
});

test('renders color during the filter', () => {
  render(<App />);
  const inputElement = screen.getByLabelText('Digite uma cor:');
  expect(inputElement).toBeInTheDocument();

  userEvent.type(inputElement, 'green');
  const colorList = screen.getByTestId('color');
  expect(colorList).toBeInTheDocument();
});
