import '@testing-library/jest-dom';
import NotFoundPage from '@/pages/404';
import { render, screen, fireEvent } from '@testing-library/react';
import ErrorPage from './_error';
import MainPage from '.';
import { mockCharacters } from '@/utils/tests/mock-characters';
import mockRouter from 'next-router-mock';
import { Provider } from 'react-redux';
import { store } from '@/store';

jest.mock('next/router', () => jest.requireActual('next-router-mock'));
mockRouter.push('/?page=1&limit=12');

describe('Tests pages', () => {
  test('404', () => {
    render(<NotFoundPage />);

    const imageElement = screen.getByRole('img');
    expect(imageElement).toBeTruthy();

    const errorMessageHeader = screen.getByText(
      /You have found a secret place./i
    );
    expect(errorMessageHeader).toBeTruthy();
  });

  test('Error page', () => {
    render(<ErrorPage />);

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

  test('Index page', () => {
    const { container } = render(
      <Provider store={store}>
        <MainPage character={[]} characters={mockCharacters} totalPage={50} />
      </Provider>
    );

    const cards = container.getElementsByClassName('herocard');

    expect(cards.length).toBe(mockCharacters.length);
  });

  test('Index page', () => {
    mockRouter.push(`/?page=1&limit=3&details=${mockCharacters[0].id}`);

    const { container } = render(
      <Provider store={store}>
        <MainPage
          character={[mockCharacters[0]]}
          characters={mockCharacters}
          totalPage={50}
        />
      </Provider>
    );

    const catalog = container.getElementsByClassName('catalog__content')[0];

    fireEvent.click(catalog);

    expect(mockRouter.query).toStrictEqual({ page: '1', limit: '3' });
  });
});
