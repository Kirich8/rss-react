import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './searchSlice';
import { charactersApi } from '../utils/services/charactersApi';
import itemsPerPageSlice from './itemsPerPageSlice';
import loadingFlagsSlice from './loadingFlagsSlice';

export interface AppState {
  search: {
    searchValue: string;
  };

  itemsPerPage: {
    itemsPerPageCount: number;
  };

  loadingFlags: {
    main: {
      isLoading: boolean;
      isFetching: boolean;
      isSuccess: boolean;
    };
    details: {
      isLoading: boolean;
      isFetching: boolean;
      isSuccess: boolean;
    };
  };
}

export default configureStore({
  reducer: {
    search: searchSlice,
    itemsPerPage: itemsPerPageSlice,
    loadingFlags: loadingFlagsSlice,
    [charactersApi.reducerPath]: charactersApi.reducer,
  },

  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(charactersApi.middleware),
});
