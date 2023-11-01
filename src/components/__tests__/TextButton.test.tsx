import { render, screen } from '@testing-library/react';
import ConvertButton from '../TextButton';
import userEvent from '@testing-library/user-event';

describe('The conversion button', () => {
  const mockConvert = jest.fn();

  it('renders the correct button text', () => {
    render(<ConvertButton>TestButton</ConvertButton>); // Arrange
    const buttonWithChildren = screen.getByText(/TestButton/i); // Act
    expect(buttonWithChildren).toBeInTheDocument(); // Assert
  });

  // it('calls the correct function when clicked', () => {
  //   // You will need to mock a function for this to work
  //   render(<ConvertButton>Convert</ConvertButton>); // Arrange
  //   const button = screen.getByText(/Convert/i); // Act
  //   userEvent.click(button); // Act
  //   // Assert
  //   expect(mockConvert).toHaveBeenCalled();
  // });
});
