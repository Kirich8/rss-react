import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import * as reduxHooks from 'react-redux';
import CardsCountSelector from './CardsCountSelector';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

jest.mock('react-redux');

const mockInitialState = {
  search: { searchValue: '' },
  itemsPerPage: {
    itemsPerPage: 12,
    itemsPerPageCount: [],
  },
  loadingFlags: {
    main: {
      isFetching: false,
      isLoading: false,
      isSuccess: false,
    },
    details: {
      isFetching: false,
      isLoading: false,
      isSuccess: false,
    },
  },
};

const setLimitItemsMock = jest.fn();
const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch');
const mockedSelector = jest.spyOn(reduxHooks, 'useSelector');

describe('Tests for the CardsCountSelector component', () => {
  it('Calls setLimitItemsMock twice when the selector value changes', () => {
    mockedSelector.mockReturnValue(mockInitialState);
    mockedDispatch.mockReturnValue(setLimitItemsMock);

    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<CardsCountSelector />} />
        </Routes>
      </MemoryRouter>
    );

    const selectorSelect = screen.getByRole('combobox');

    fireEvent.change(selectorSelect, { target: { value: '24' } });
    expect(setLimitItemsMock).toHaveBeenCalledTimes(2);
  });
});
