import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Loader from './Loader';

describe('Loader Component', () => {
  test('renders Loader component with loading text', () => {
    const { getByText, getByTestId } = render(<Loader />);

    const loadingText = getByText('Loading...');
    expect(loadingText).toBeInTheDocument();

    const loaderImage = getByTestId('loader-image');
    expect(loaderImage).toBeInTheDocument();
    expect(loaderImage).toHaveAttribute('alt', 'Loading');
  });
});
