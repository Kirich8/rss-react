import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from './Pagination';
import mockRouter from 'next-router-mock';

jest.mock('next/router', () => jest.requireActual('next-router-mock'));

const totalPage = 50;

describe('Tests for the Pagination component', () => {
  test('changes page number and updates query parameters when clicking on a different page', () => {
    mockRouter.push(`/?limit=12`);

    render(<Pagination totalPage={totalPage} />);

    expect(screen.getByText('1')).toBeDefined();
    expect(screen.getByText('2')).toBeDefined();
    expect(screen.getByText('3')).toBeDefined();
    expect(screen.getByText('...')).toBeDefined();
    expect(screen.getByText(`${totalPage}`)).toBeDefined();

    fireEvent.click(screen.getByText('2'));

    expect(mockRouter.query).toStrictEqual({ page: '2', limit: '12' });
  });

  test('displays appropriate page numbers when already on a specific page', () => {
    mockRouter.push(`/?page=30&limit=12`);

    render(<Pagination totalPage={totalPage} />);

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
});
