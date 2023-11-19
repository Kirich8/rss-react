import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import CardNotFound from './CardNotFound';

describe('CardNotFound component', () => {
  test('renders "nothing found" text', () => {
    const { getByText } = render(<CardNotFound />);
    const nothingFoundText = getByText('nothing found');
    expect(nothingFoundText).toBeInTheDocument();
  });

  test('renders the image with alt text "Not found"', () => {
    const { getByAltText } = render(<CardNotFound />);
    const image = getByAltText('Not found');
    expect(image).toBeInTheDocument();
  });

  test('renders the component with correct CSS class', () => {
    const { container } = render(<CardNotFound />);
    const component = container.firstChild;
    expect(component).toHaveClass('not-found');
  });
});
