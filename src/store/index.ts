import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './searchSlice';
import { charactersApi } from '../utils/services/charactersApi';
import itemsPerPageSlice from './itemsPerPageSlice';

export interface AppState {
  search: {
    searchValue: string;
  };
  itemsPerPage: {
    itemsPerPageCount: number;
  };
}

export default configureStore({
  reducer: {
    search: searchSlice,
    itemsPerPage: itemsPerPageSlice,
    [charactersApi.reducerPath]: charactersApi.reducer,
  },

  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(charactersApi.middleware),
});
