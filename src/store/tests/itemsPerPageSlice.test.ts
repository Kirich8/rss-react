import { mockCharacters } from '../../utils/tests/mock-characters';
import { ICharacter } from '../../utils/types/ICharacter';
import itemsPerPageReducer, {
  changeItemsPerPageCount,
  changeItemsPerPage,
} from '../itemsPerPageSlice';

describe('Test for the itemsPerPageSlice', () => {
  const itemsPerPageState = {
    itemsPerPageCount: 12,
    itemsPerPage: [] as ICharacter[],
  };

  it('should return default state when passed an empty action', () => {
    const result = itemsPerPageReducer(itemsPerPageState, { type: '' });

    expect(result).toEqual(itemsPerPageState);
  });

  it('should add new items per page with "changeItemsPerPage" action', () => {
    const action = {
      type: changeItemsPerPage.type,
      payload: { itemsPerPage: mockCharacters },
    };

    const result = itemsPerPageReducer(itemsPerPageState, action);

    expect(result.itemsPerPage[0].name).toBe('Spider-Man (Peter Parker)');
    expect(result.itemsPerPage[1].name).toBe('Captain America (Steve Rogers)');
    expect(result.itemsPerPage[2].name).toBe('Hulk (Bruce Banner)');
  });

  it('should add new items per page count with "changeItemsPerPageCount" action', () => {
    const action = {
      type: changeItemsPerPageCount.type,
      payload: { itemsPerPageCount: 3 },
    };

    const result = itemsPerPageReducer(itemsPerPageState, action);
    expect(result.itemsPerPageCount).toBe(3);
  });
});
