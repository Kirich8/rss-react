import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { MakeStore, createWrapper } from 'next-redux-wrapper';
import searchSlice from './searchSlice';
import itemsPerPageSlice from './itemsPerPageSlice';

export interface AppState {
  search: {
    searchValue: string;
  };

  itemsPerPage: {
    itemsPerPageCount: number;
  };
}

const rootReducer = combineReducers({
  search: searchSlice,
  itemsPerPage: itemsPerPageSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

const makeStore: MakeStore<AppStore> = () => store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];

export const wrapper = createWrapper<AppStore>(makeStore);
