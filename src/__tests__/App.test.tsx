import { render, screen, waitFor } from '@testing-library/react';
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

  it('properly toggles temperature values from F to C and vice-versa', () => {
    render(<App />);
    const tempHolder = screen.getByText(/90/);
    const button = screen.getByText(/Toggle Temperature/);
    userEvent.click(button);
    expect(tempHolder.textContent).toBe('32°C');
    userEvent.click(button);
    expect(tempHolder.textContent).toBe('89°F');
  });
});

describe('API requests', () => {
  it('properly renders posts', async () => {
    render(<App />);
    const post = await screen.findByText(
      /sunt aut facere repellat provident occaecati excepturi optio reprehenderit/
    );
    expect(post).toBeInTheDocument();
  });
});
