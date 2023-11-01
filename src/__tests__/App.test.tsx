import { render, screen } from '@testing-library/react';
import App from '../App';

// Put your integration tests here

it('renders the correct title text', () => {
  render(<App />); // Arrange
  const linkElement = screen.getByText(/Fahrenheit to Celsius/i); // Act
  expect(linkElement).toBeInTheDocument(); // Assert
});
