import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { apiService } from '../../utils/services/ApiServices';
import HeroCard from './HeroCard';
import { mockCharacters } from '../../utils/tests/mock-characters';

jest.mock('../../utils/services/ApiServices');

describe('6. "Tests for the Card component"', () => {
  test('6.1 "Ensure that the card component renders the relevant card data"', () => {
    mockCharacters.forEach((character) => {
      render(
        <MemoryRouter>
          <HeroCard character={character} />
        </MemoryRouter>
      );

      const heroName = screen.getByText((text) => {
        const normalizedText = text?.toLowerCase();
        const characterName = character.name.toLowerCase();
        return normalizedText?.includes(characterName);
      });

      expect(heroName).toBeDefined();

      const heroImageUrl = `${character.thumbnail.path}.${character.thumbnail.extension}`;
      const imageElement = screen.getByTestId(
        `${character.id}-img`
      ) as HTMLImageElement;

      expect(imageElement.src).toBe(heroImageUrl);
    });
  });

  test('6.2 "Validate that clicking on a card opens a detailed card component"', () => {
    render(
      <MemoryRouter>
        <HeroCard character={mockCharacters[0]} />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByAltText('Hero'));

    waitFor(() => {
      expect(screen.getByText(mockCharacters[0].description)).toBeDefined();
    });
  });

  test('6.3 "Check that clicking triggers an additional API call to fetch detailed information"', async () => {
    render(
      <MemoryRouter>
        <HeroCard character={mockCharacters[0]} />
      </MemoryRouter>
    );

    fireEvent.click(screen.getAllByTestId('herocard')[0]);

    await waitFor(() => {
      expect(apiService.getCharacterById).toHaveBeenCalledWith(
        `${mockCharacters[0].id}`
      );
    });
  });
});
