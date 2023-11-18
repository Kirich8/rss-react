import { AppState } from '.';

export const selectSearchValue = (state: AppState) => state.search.searchValue;

export const selectItemsPerPageCount = (state: AppState) =>
  state.itemsPerPage.itemsPerPageCount;

export const selectItemsPerPage = (state: AppState) =>
  state.itemsPerPage.itemsPerPage;
