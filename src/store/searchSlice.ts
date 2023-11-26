import { INITIAL_SEARCH } from '@/utils/constants/constants';
import { createSlice } from '@reduxjs/toolkit';

const isBrowser = typeof window !== 'undefined';

const searchValueSave = isBrowser
  ? localStorage.getItem('marvel:search-value') || INITIAL_SEARCH
  : INITIAL_SEARCH;

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchValue: searchValueSave,
  },
  reducers: {
    changeSearchValue(state, action) {
      state.searchValue = action.payload.searchValue;
    },
  },
});

export const { changeSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
