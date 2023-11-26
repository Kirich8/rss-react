import itemsPerPageReducer, {
  changeItemsPerPageCount,
} from '../itemsPerPageSlice';

describe('Test for the itemsPerPageSlice', () => {
  const itemsPerPageState = {
    itemsPerPageCount: 12,
  };

  test('should return default state when passed an empty action', () => {
    const result = itemsPerPageReducer(itemsPerPageState, { type: '' });

    expect(result).toEqual(itemsPerPageState);
  });

  test('should add new items per page count with "changeItemsPerPageCount" action', () => {
    const action = {
      type: changeItemsPerPageCount.type,
      payload: { itemsPerPageCount: 3 },
    };

    const result = itemsPerPageReducer(itemsPerPageState, action);
    expect(result.itemsPerPageCount).toBe(3);
  });
});
