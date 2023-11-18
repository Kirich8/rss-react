import { HttpResponse, http } from 'msw';
import { mockCharacters } from '../../utils/tests/mock-characters';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import '@testing-library/jest-dom';
import { render, waitFor, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { server } from '../../mocks/node';
import CardList from './CardList';

server.use(
  http.get('https://gateway.marvel.com/v1/public/*', () => {
    return HttpResponse.json({
      data: {
        total: 1,
        results: mockCharacters,
      },
    });
  })
);

describe('5. "Tests for the Card List component"', () => {
  test('5.1 "Verify that the component renders the specified number of cards"', async () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/?details=1009610']}>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<CardList />} />
          </Routes>
        </Provider>
      </MemoryRouter>
    );

    await waitFor(() => {
      waitFor(() => {
        const cards = container.getElementsByClassName('herocard');

        expect(cards.length).toBe(mockCharacters.length);
        expect(container).toHaveTextContent(mockCharacters[0].name);
        expect(container).toHaveTextContent(mockCharacters[1].name);
        expect(container).toHaveTextContent(mockCharacters[2].name);
      });
    });
  });

  test('5.2 "Check that an appropriate message is displayed if no cards are present"', async () => {
    const {} = render(
      <MemoryRouter initialEntries={['/?details=1009610']}>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<CardList />} />
          </Routes>
        </Provider>
      </MemoryRouter>
    );

    await waitFor(() => {
      waitFor(() => {
        const cardNotFoundElement = screen.getByText('nothing found');
        expect(cardNotFoundElement).toBeInTheDocument();
      });
    });
  });
});
