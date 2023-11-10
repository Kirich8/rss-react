import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { CharactersContext } from '../../utils/context/CharactersContext';
import { ICharacter } from '../../utils/types/ICharacter';
import { mockCharacters } from '../../utils/tests/mock-characters';
import { BrowserRouter } from 'react-router-dom';
import CardList from './CardList';

describe('5. "Tests for the Card List component"', () => {
  test('5.1 "Verify that the component renders the specified number of cards"', () => {
    const { container } = render(
      <BrowserRouter>
        <CharactersContext.Provider
          value={{ characters: mockCharacters, setCharacters: jest.fn() }}
        >
          <CardList isLoading={false} />
        </CharactersContext.Provider>
      </BrowserRouter>
    );

    const cards = container.getElementsByClassName('herocard');
    expect(cards.length).toBe(mockCharacters.length);
  });

  test('5.2 "Check that an appropriate message is displayed if no cards are present"', () => {
    const mockEmptyCharacters: ICharacter[] = [];

    render(
      <CharactersContext.Provider
        value={{ characters: mockEmptyCharacters, setCharacters: jest.fn() }}
      >
        <CardList isLoading={false} />
      </CharactersContext.Provider>
    );

    const cardNotFoundElement = screen.getByText('nothing found');
    expect(cardNotFoundElement).toBeInTheDocument();
  });
});
