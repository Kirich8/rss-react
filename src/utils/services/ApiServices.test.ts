import { apiService } from './ApiServices';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

describe('ApiService', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  describe('getCharacters', () => {
    test('should fetch characters with given limit and offset', async () => {
      const mockResponse = {
        data: {
          total: 2,
          results: [
            { id: '1', name: 'Spider-Man' },
            { id: '2', name: 'Hulk' },
          ],
        },
      };

      fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

      const limit = 10;
      const offset = 0;

      const response = await apiService.getCharacters(limit, offset);

      expect(response).toBeDefined();
      expect(response.total).toBe(2);
      expect(response.results.length).toBe(2);
    });

    test('should throw an error when fetch fails', async () => {
      jest.spyOn(global, 'fetch').mockRejectedValue(new Error(''));

      const limit = 10;
      const offset = 0;

      await expect(
        apiService.getCharacters(limit, offset)
      ).rejects.toThrowError('');
    });
  });

  describe('getCharactersByName', () => {
    test('should fetch characters with given name, limit, and offset', async () => {
      const mockResponse = {
        data: {
          total: 2,
          results: [
            { id: '1', name: 'Spider-Man' },
            { id: '2', name: 'Hulk' },
          ],
        },
      };

      fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

      const limit = 10;
      const offset = 0;
      const characterName = 'Spider';

      const response = await apiService.getCharactersByName(
        limit,
        offset,
        characterName
      );

      expect(response).toBeDefined();
      expect(response.total).toBe(2);
      expect(response.results.length).toBe(2);
      expect(response.results[0].name).toContain('Spider');
      expect(response.results[1].name).toContain('Hulk');
    });

    test('should throw an error when fetch fails', async () => {
      jest.spyOn(global, 'fetch').mockRejectedValue(new Error(''));

      const limit = 10;
      const offset = 0;
      const name = 'Spider-Man';

      await expect(
        apiService.getCharactersByName(limit, offset, name)
      ).rejects.toThrowError('');
    });
  });

  describe('getCharacterById', () => {
    test('should fetch character by ID', async () => {
      const mockResponse = {
        data: {
          total: 1,
          results: [{ id: '123', name: 'Hulk' }],
        },
      };

      fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

      const characterId = '123';

      const response = await apiService.getCharacterById(characterId);

      expect(response).toBeDefined();
      expect(response.total).toBe(1);
      expect(response.results.length).toBe(1);
      expect(response.results[0].id).toBe(characterId);
      expect(response.results[0].name).toBe('Hulk');
    });

    test('should throw an error when fetch fails', async () => {
      jest.spyOn(global, 'fetch').mockRejectedValue(new Error(''));

      const id = '12345';

      await expect(apiService.getCharacterById(id)).rejects.toThrowError('');
    });
  });
});
