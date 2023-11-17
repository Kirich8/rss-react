import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './searchSlice';
import { charactersApi } from '../utils/services/charactersApi';

export interface AppState {
  search: {
    searchValue: string;
  };
}

export default configureStore({
  reducer: {
    search: searchSlice,
    [charactersApi.reducerPath]: charactersApi.reducer,
  },

  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(charactersApi.middleware),
});
