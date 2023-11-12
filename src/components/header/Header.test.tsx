import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SearchContextProvider from '../../utils/context/SearchContext';
import Header from './Header';

describe('9. "Tests for the Search component"', () => {
  it('9.1 "Verify that clicking the Search button saves the entered value to the local storage"', () => {
    const mockSearchValue = 'Spider-Man';
    const setCurrentPageMock = jest.fn();

    render(
      <BrowserRouter>
        <SearchContextProvider>
          <Header setCurrentPage={setCurrentPageMock} />
        </SearchContextProvider>
      </BrowserRouter>
    );

    const searchInput = screen.getByPlaceholderText('name starts with');
    const searchButton = screen.getByText('Search');

    fireEvent.change(searchInput, { target: { value: mockSearchValue } });

    fireEvent.click(searchButton);

    expect(localStorage.getItem('input_value')).toBe(mockSearchValue);
  });

  it('9.2 "Check that the component retrieves the value from the local storage upon mounting"', () => {
    const mockSearchValue = 'Spider-Man';

    localStorage.setItem('input_value', mockSearchValue);

    const setCurrentPageMock = jest.fn();

    render(
      <BrowserRouter>
        <SearchContextProvider>
          <Header setCurrentPage={setCurrentPageMock} />
        </SearchContextProvider>
      </BrowserRouter>
    );

    const searchInput = screen.getByPlaceholderText(
      'name starts with'
    ) as HTMLInputElement;
    expect(searchInput.value).toBe(localStorage.getItem('input_value'));
  });
});
