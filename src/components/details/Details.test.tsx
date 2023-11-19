import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Details from './Details';
import { HttpResponse, http } from 'msw';
import { store } from '../../store';
import { Provider } from 'react-redux';
import { mockCharacters } from '../../utils/tests/mock-characters';
import { server } from '../../mocks/node';

server.use(
  http.get('https://gateway.marvel.com/v1/public/characters/*', () => {
    return HttpResponse.json({
      data: {
        total: 1,
        results: [
          {
            id: 1009610,
            name: 'Spider-Man (Peter Parker)',
            thumbnail: {
              extension: 'jpg',
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b',
            },
            description:
              'Bitten by a radioactive spider, high school student Peter Parker gained the speed, strength and powers of a spider. Adopting the name Spider-Man, Peter hoped to start a career using his new abilities. Taught that with great power comes great responsibility, Spidey has vowed to use his powers to help people.',
            urls: [
              {
                type: 'detail',
                url: 'http://marvel.com/characters/54/spider-man?utm_campaign=apiRef&utm_source=5d0df45aa191b39d4a309df439a4daac',
              },
              {
                type: 'wiki',
                url: 'http://marvel.com/universe/Spider-Man_(Peter_Parker)?utm_campaign=apiRef&utm_source=5d0df45aa191b39d4a309df439a4daac',
              },
              {
                type: 'comiclink',
                url: 'http://marvel.com/comics/characters/1009610/spider-man?utm_campaign=apiRef&utm_source=5d0df45aa191b39d4a309df439a4daac',
              },
            ],
          },
        ],
      },
    });
  })
);

describe('7. "Tests for the Detailed Card component"', () => {
  test('7.1 "Check that a loading indicator is displayed while fetching data"', () => {
    const {} = render(
      <MemoryRouter initialEntries={['/?details=1009610']}>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Details />} />
          </Routes>
        </Provider>
      </MemoryRouter>
    );

    waitFor(() => {
      const loaderElement = screen.getByTestId('loader-image');
      expect(loaderElement).toBeInTheDocument();
    });
  });

  it('7.2 "Make sure the detailed card component correctly displays the detailed card data"', async () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/?details=1009610']}>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Details />} />
          </Routes>
        </Provider>
      </MemoryRouter>
    );

    await waitFor(() => {
      waitFor(() => {
        expect(container).toHaveTextContent(mockCharacters[0].name);
        expect(container).toHaveTextContent(mockCharacters[0].description);
        expect(container).toHaveTextContent('Comics with a hero');
      });
    });
  });

  it('7.3 "Ensure that clicking the close button hides the component"', async () => {
    const {} = render(
      <MemoryRouter initialEntries={['/?details=1009610']}>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Details />} />
          </Routes>
        </Provider>
      </MemoryRouter>
    );

    await waitFor(() => {
      waitFor(() => {
        expect(screen.queryByTestId('close-button')).toBeNull();

        const closeButton = screen.getByTestId('close-button');
        fireEvent.click(closeButton);
      });

      expect(screen.queryByTestId('close-button')).toBeNull();
    });
  });
});
