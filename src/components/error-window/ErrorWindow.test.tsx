import { render, screen } from '@testing-library/react';
import ErrorWindow from './ErrorWindow';

test('renders error window with correct content', () => {
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
