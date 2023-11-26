import searchReducer, { changeSearchValue } from '../searchSlice';

describe('Test for the searchSlice', () => {
  const searchState = { searchValue: '' };

  test('should return default state when passed an empty action', () => {
    const result = searchReducer(searchState, { type: '' });

    expect(result).toEqual(searchState);
  });

  test('should add new search value with "changeSearchValue" action', () => {
    const action = {
      type: changeSearchValue.type,
      payload: { searchValue: 'Spider-Man' },
    };

    const result = searchReducer(searchState, action);

    expect(result.searchValue).toBe('Spider-Man');
  });
});
