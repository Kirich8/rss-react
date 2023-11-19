import { mockCharacters } from '../../utils/tests/mock-characters';
import {
  selectItemsPerPage,
  selectItemsPerPageCount,
  selectSearchValue,
} from '../selectors';

describe('Test for the Redux Selectors', () => {
  it('should select search value, items per page, items per page count from state', () => {
    const searchValue = 'spider-man';
    const itemsPerPage = mockCharacters;
    const itemsPerPageCount = 3;

    const mockState = {
      search: { searchValue: searchValue },
      itemsPerPage: {
        itemsPerPage: itemsPerPage,
        itemsPerPageCount: itemsPerPageCount,
      },
      loadingFlags: {
        main: {
          isFetching: false,
          isLoading: false,
          isSuccess: false,
        },
        details: {
          isFetching: false,
          isLoading: false,
          isSuccess: false,
        },
      },
    };

    const searchResult = selectSearchValue(mockState);
    const itemsPerPageResult = selectItemsPerPage(mockState);
    const itemsPerPageCountResult = selectItemsPerPageCount(mockState);

    expect(searchResult).toEqual(searchValue);
    expect(itemsPerPageResult).toEqual(itemsPerPage);
    expect(itemsPerPageCountResult).toEqual(itemsPerPageCount);
  });
});
