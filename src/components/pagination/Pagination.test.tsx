import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import Pagination from './Pagination';

const totalPage = 50;

describe('8. "Tests for the Pagination component"', () => {
  it('8.1 "Make sure the component updates URL query parameter when page changes"', async () => {
    const history = createMemoryHistory();

    render(
      <MemoryRouter>
        <Pagination totalPage={totalPage} />
      </MemoryRouter>
    );

    expect(screen.getByText('1')).toBeDefined();
    expect(screen.getByText('2')).toBeDefined();
    expect(screen.getByText('3')).toBeDefined();
    expect(screen.getByText('...')).toBeDefined();
    expect(screen.getByText(`${totalPage}`)).toBeDefined();

    userEvent.click(screen.getByText('2'));

    await waitFor(() => {
      waitFor(() => {
        const searchParams = new URLSearchParams(history.location.search);
        expect(searchParams.get('page')).toBe('2');
      });
    });
  });

  it('Renders Pagination with ellipsis and correct page numbers', () => {
    const history = createMemoryHistory();

    render(
      <MemoryRouter initialEntries={['/?page=30']}>
        <Routes>
          <Route path="/" element={<Pagination totalPage={totalPage} />} />
        </Routes>
      </MemoryRouter>
    );

    waitFor(() => {
      expect(screen.getByText('1')).toBeDefined();
      expect(screen.getAllByText('...')[0]).toBeDefined();
      expect(screen.getByText('28')).toBeDefined();
      expect(screen.getByText('29')).toBeDefined();
      expect(screen.getByText('30')).toBeDefined();
      expect(screen.getByText('31')).toBeDefined();
      expect(screen.getByText('32')).toBeDefined();
      expect(screen.getAllByText('...')[1]).toBeDefined();
      expect(screen.getByText(`${totalPage}`)).toBeDefined();
    });

    userEvent.click(screen.getByText('32'));

    waitFor(() => {
      waitFor(() => {
        const searchParams = new URLSearchParams(history.location.search);
        expect(searchParams.get('page')).toBe('32');
      });
    });
  });
});
