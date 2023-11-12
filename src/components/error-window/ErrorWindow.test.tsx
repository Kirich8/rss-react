import { fireEvent, render, screen } from '@testing-library/react';
import ErrorWindow from './ErrorWindow';

describe('Tests for the ErrorWindow component', () => {
  it('Renders error window with correct content', () => {
    render(<ErrorWindow />);

    const imageElement = screen.getByRole('img');
    expect(imageElement).toBeTruthy();

    const errorMessageElement = screen.getByText(
      /Oops... an error has occurred!/i
    );
    expect(errorMessageElement).toBeTruthy();

    const reloadButtonElement = screen.getByRole('button', {
      name: /Reload Page/i,
    });
    expect(reloadButtonElement).toBeTruthy();
  });

  it('Should reload the page when the reload button is clicked', () => {
    render(<ErrorWindow />);

    const reloadMock = jest.fn();

    Object.defineProperty(window, 'location', {
      value: { reload: reloadMock },
      writable: true,
    });

    const reloadButton = screen.getByRole('button', { name: /Reload Page/i });
    fireEvent.click(reloadButton);

    expect(reloadMock).toHaveBeenCalled();
  });
});
