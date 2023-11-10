import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { CharactersContext } from '../../utils/context/CharactersContext';
import CardList from './CardList';
import { ICharacter } from '../../utils/types/ICharacter';

describe('5. "Tests for the Card List component"', () => {
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
