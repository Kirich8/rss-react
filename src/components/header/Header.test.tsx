import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import Header from './Header';
import mockRouter from 'next-router-mock';

jest.mock('next/router', () => jest.requireActual('next-router-mock'));
mockRouter.push(`/?page=1&limit=3`);

describe('Tests for the Search component', () => {
  test('Verify that clicking the Search button saves the entered value to the local storage', () => {
    const mockSearchValue = 'Spider-Man';

    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    const searchInput = screen.getByPlaceholderText('name starts with');
    const searchButton = screen.getByText('Search');

    fireEvent.change(searchInput, { target: { value: mockSearchValue } });

    fireEvent.click(searchButton);

    expect(localStorage.getItem('marvel:search-value')).toBe(mockSearchValue);
  });

  test('Check that the component retrieves the value from the local storage upon mounting', () => {
    const mockSearchValue = 'Spider-Man';

    localStorage.setItem('marvel:search-value', mockSearchValue);

    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    const searchInput = screen.getByPlaceholderText(
      'name starts with'
    ) as HTMLInputElement;
    expect(searchInput.value).toBe(localStorage.getItem('marvel:search-value'));
  });
});
