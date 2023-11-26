import '@testing-library/jest-dom';
import { mockCharacters } from '../../utils/tests/mock-characters';
import { render } from '@testing-library/react';
import CardList from './CardList';
import mockRouter from 'next-router-mock';

jest.mock('next/router', () => jest.requireActual('next-router-mock'));
mockRouter.push('/?page=1');

describe('Tests for the Card List component', () => {
  test('renders cards for each character in the list', () => {
    const { container } = render(<CardList characters={mockCharacters} />);

    const cards = container.getElementsByClassName('herocard');

    expect(cards.length).toBe(mockCharacters.length);
    expect(container).toHaveTextContent(mockCharacters[0].name);
    expect(container).toHaveTextContent(mockCharacters[1].name);
    expect(container).toHaveTextContent(mockCharacters[2].name);
  });

  test('displays a message when no characters are provided', () => {
    const { container } = render(<CardList characters={[]} />);

    const cards = container.getElementsByClassName('herocard');
    expect(cards.length).toBe(0);
    expect(container).toHaveTextContent('nothing found');
  });
});
