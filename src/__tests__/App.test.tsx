import { render, screen } from '@testing-library/react';
import App from '../App';

// Put your integration tests here

describe('Initial text', () => {
  it('renders the correct title text', () => {
    render(<App />); // Arrange
    const linkElement = screen.getByText(/Temperature converter/i); // Act
    expect(linkElement).toBeInTheDocument(); // Assert
  });
});
