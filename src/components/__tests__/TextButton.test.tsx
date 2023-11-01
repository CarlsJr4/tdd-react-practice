import { render, screen } from '@testing-library/react';
import TextButton from '../TextButton';
import userEvent from '@testing-library/user-event';

describe('The conversion button', () => {
  const mockHandleClick = jest.fn();

  it('renders the correct button text', () => {
    render(<TextButton handleClick={mockHandleClick}>TestButton</TextButton>); // Arrange
    const buttonWithChildren = screen.getByText(/TestButton/i); // Act
    expect(buttonWithChildren).toBeInTheDocument(); // Assert
  });

  it('calls the correct function when clicked', () => {
    render(
      <TextButton handleClick={mockHandleClick}>Convert to Celsius</TextButton>
    ); // Arrange
    const button = screen.getByText(/Convert to Celsius/i); // Act
    userEvent.click(button); // Act
    // Assert
    expect(mockHandleClick).toBeCalled();
  });
});
