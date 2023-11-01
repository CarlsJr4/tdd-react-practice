import { render, screen } from '@testing-library/react';
import ConvertButton from '../ConvertButton';

describe('the conversion button', () => {
  it('renders the correct button text', () => {
    render(<ConvertButton />);
    const button = screen.getByText('Button');
    expect(button).toBeInTheDocument();
  });
});
