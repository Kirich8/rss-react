import '@testing-library/jest-dom';
import { render } from '@testing-library/react/pure';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Details from './Details';
import { apiService } from '../../utils/services/ApiServices';
import { mockCharacters } from '../../utils/tests/mock-characters';

jest.mock('../../utils/services/ApiServices');

describe('7. "Tests for the Detailed Card component"', () => {
  it('7.1 "Check that a loading indicator is displayed while fetching data"', async () => {
    apiService.getCharacterById = jest.fn().mockResolvedValue({
      results: [mockCharacters[0]],
    });

    const mockSearchParams = new URLSearchParams();
    mockSearchParams.set('details', `${mockCharacters[0].id}`);

    render(
      <BrowserRouter>
        <Details />
      </BrowserRouter>
    );

    await waitFor(() => {
      const loaderElement = screen.getByTestId('loader-image');
      expect(loaderElement).toBeInTheDocument();
    });
  });

  it('7.2 "Make sure the detailed card component correctly displays the detailed card data"', async () => {
    apiService.getCharacterById = jest.fn().mockResolvedValue({
      results: [mockCharacters[0]],
    });

    const mockSearchParams = new URLSearchParams();
    mockSearchParams.set('details', `${mockCharacters[0].id}`);

    const { container } = render(
      <BrowserRouter>
        <Details />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(container).toHaveTextContent(mockCharacters[0].name);
      expect(container).toHaveTextContent(mockCharacters[0].description);
      expect(container).toHaveTextContent('Comics with a hero');
    });
  });

  it('7.3 "Ensure that clicking the close button hides the component"', async () => {
    apiService.getCharacterById = jest.fn().mockResolvedValue({
      results: [mockCharacters[0]],
    });

    const mockSearchParams = new URLSearchParams();
    mockSearchParams.set('details', `${mockCharacters[0].id}`);

    render(
      <BrowserRouter>
        <Details />
      </BrowserRouter>
    );

    expect(screen.queryByTestId('close-button')).toBeNull();

    await waitFor(() => {
      waitFor(() => {
        const closeButton = screen.getByTestId('close-button');
        fireEvent.click(closeButton);
      });

      expect(screen.queryByTestId('close-button')).toBeNull();
    });
  });
});
