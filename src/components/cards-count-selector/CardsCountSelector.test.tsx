import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '@/store';
import CardsCountSelector from './CardsCountSelector';
import mockRouter from 'next-router-mock';

jest.mock('next/router', () => jest.requireActual('next-router-mock'));

describe('Tests for the CardsCountSelector component', () => {
  test('selects the correct item count based on the "limit" URL parameter', () => {
    mockRouter.push('/?page=1&limit=4');

    render(
      <Provider store={store}>
        <CardsCountSelector />
      </Provider>
    );

    const selectorSelect = screen.getByRole('combobox');

    expect(selectorSelect).toHaveValue('4');

    fireEvent.change(selectorSelect, { target: { value: '24' } });

    expect(localStorage.getItem('marvel:items-per-page')).toBe('24');
  });

  test('defaults to a specific item count when the "limit" parameter is missing', () => {
    mockRouter.push('/?page=1');

    render(
      <Provider store={store}>
        <CardsCountSelector />
      </Provider>
    );

    const selectorSelect = screen.getByRole('combobox');

    expect(selectorSelect).toHaveValue('12');
  });
});
