import '@testing-library/jest-dom';
import { mockCharacters } from '../../utils/tests/mock-characters';
import { render, fireEvent } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import HeroCard from './HeroCard';

jest.mock('next/router', () => jest.requireActual('next-router-mock'));

describe('Tests for the Card component', () => {
  test('updates search parameters on card click', () => {
    mockRouter.push(`/?page=1&limit=3`);
    const { container } = render(<HeroCard character={mockCharacters[0]} />);

    const card = container.getElementsByClassName('herocard')[0];

    fireEvent.click(card);

    expect(mockRouter.query).toStrictEqual({
      page: '1',
      limit: '3',
      details: `${mockCharacters[0].id}`,
    });
  });
});
