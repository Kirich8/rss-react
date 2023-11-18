import {
  configureStore,
  PreloadedState,
  combineReducers,
} from '@reduxjs/toolkit';
import { ICharacter } from '../utils/types/ICharacter';
import { charactersApi } from '../utils/services/charactersApi';
import searchSlice from './searchSlice';
import itemsPerPageSlice from './itemsPerPageSlice';
import loadingFlagsSlice from './loadingFlagsSlice';
import { setupListeners } from '@reduxjs/toolkit/query';

export interface AppState {
  search: {
    searchValue: string;
  };

  itemsPerPage: {
    itemsPerPageCount: number;
    itemsPerPage: ICharacter[];
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

const rootReducer = combineReducers({
  search: searchSlice,
  itemsPerPage: itemsPerPageSlice,
  loadingFlags: loadingFlagsSlice,
  [charactersApi.reducerPath]: charactersApi.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,

    middleware: (getDefaultMiddlware) =>
      getDefaultMiddlware().concat(charactersApi.middleware),
  });

export const store = setupStore();

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
