import { render, screen, fireEvent } from '@testing-library/react';
import SearchInput from './SearchInput';
import { MemoryRouter } from 'react-router-dom';
import SearchContextProvider from '../../utils/context/SearchContext';

describe('Tests for the SearchInput component', () => {
  it('Calls setCurrentPage and updates URL on Enter key press with a non-empty searchValue', () => {
    const setCurrentPageMock = jest.fn();

    render(
      <MemoryRouter>
        <SearchContextProvider>
          <SearchInput setCurrentPage={setCurrentPageMock} />
        </SearchContextProvider>
      </MemoryRouter>
    );

    const inputElement = screen.getByPlaceholderText('name starts with');

    fireEvent.change(inputElement, { target: { value: 'testValue' } });
    fireEvent.keyUp(inputElement, { code: 'Enter' });

    expect(setCurrentPageMock).toHaveBeenCalledWith(1);

    expect(localStorage.getItem('input_value')).toBe('testValue');
  });
});
