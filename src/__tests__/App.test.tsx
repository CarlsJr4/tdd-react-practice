import { render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

// Put your integration tests here

describe('Initial text', () => {
  it('renders the correct title text', () => {
    render(<App />); // Arrange
    const linkElement = screen.getByText(/Temperature converter/i); // Act
    expect(linkElement).toBeInTheDocument(); // Assert
  });

  it('renders the initial temp properly', () => {
    render(<App />);
    const initialTemp = screen.getByText(/90/);
    expect(initialTemp).toBeInTheDocument();
  });

  it('renders Fahrenheit initially', () => {
    render(<App />);
    const unit = screen.getByTestId('tempUnit');
    expect(unit.textContent).toBe('F');
  });
});

describe('State changes', () => {
  it('properly toggles display units from F to C', () => {
    render(<App />);
    const unit = screen.getByTestId('tempUnit');
    const button = screen.getByText(/Toggle Temperature/);
    userEvent.click(button);
    expect(unit.textContent).toBe('C');
  });

  it('properly toggles display units from C to F', () => {
    render(<App />);
    const unit = screen.getByTestId('tempUnit');
    const button = screen.getByText(/Toggle Temperature/);
    userEvent.dblClick(button);
    expect(unit.textContent).toBe('F');
  });
});
