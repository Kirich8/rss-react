import searchReducer, { changeSearchValue } from '../searchSlice';

describe('Test for the searchSlice', () => {
  const searchState = { searchValue: '' };

  it('should return default state when passed an empty action', () => {
    const result = searchReducer(searchState, { type: '' });

    expect(result).toEqual(searchState);
  });

  it('should add new search value with "changeSearchValue" action', () => {
    const action = { type: changeSearchValue.type, payload: 'Spider-Man' };

    const result = searchReducer(searchState, action);

    expect(result.searchValue).toBe('Spider-Man');
  });
});
