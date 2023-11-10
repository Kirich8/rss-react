import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ErrorButton from './ErrorButton';

describe('Test for the ErrorButton component', () => {
  test('ErrorButton renders correctly', () => {
    render(<ErrorButton />);

    const errorButton = screen.getByText('Error');
    expect(errorButton).toBeInTheDocument();
    expect(errorButton).toHaveClass('button');
  });
});
