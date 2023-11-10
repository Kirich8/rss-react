import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import Pagination from './Pagination';

const totalPage = 33;

describe('8. "Tests for the Pagination component"', () => {
  test('8.1 "Make sure the component updates URL query parameter when page changes"', async () => {
    const history = createMemoryHistory();
    const setCurrentPageMock = jest.fn();

    render(
      <MemoryRouter>
        <Pagination
          totalPage={totalPage}
          currentPage={3}
          setCurrentPage={setCurrentPageMock}
        />
      </MemoryRouter>
    );

    expect(screen.getByText('1')).toBeDefined();
    expect(screen.getByText('2')).toBeDefined();
    expect(screen.getByText('3')).toBeDefined();
    expect(screen.getByText('4')).toBeDefined();
    expect(screen.getByText('5')).toBeDefined();
    expect(screen.getByText('...')).toBeDefined();
    expect(screen.getByText(`${totalPage}`)).toBeDefined();

    userEvent.click(screen.getByText('2'));

    await waitFor(() => {
      expect(setCurrentPageMock).toHaveBeenCalledWith(2);

      waitFor(() => {
        const searchParams = new URLSearchParams(history.location.search);
        expect(searchParams.get('page')).toBe('2');
      });
    });
  });
});
