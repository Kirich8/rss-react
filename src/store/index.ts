import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './searchSlice';

export interface AppState {
  search: {
    searchValue: string;
  };
}

export default configureStore({
  reducer: {
    search: searchSlice,
  },
});
