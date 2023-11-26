import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Loader from './Loader';

describe('Loader Component', () => {
  test('renders Loader component with loading text', () => {
    const { getByText, getByAltText } = render(<Loader />);

    const loadingText = getByText('Loading...');
    expect(loadingText).toBeInTheDocument();

    const loaderImage = getByAltText('loading');
    expect(loaderImage).toBeInTheDocument();
  });
});
