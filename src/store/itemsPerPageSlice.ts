import { INITIAL_ITEMS_COUNT } from '@/utils/constants/constants';
import { createSlice } from '@reduxjs/toolkit';

const isBrowser = typeof window !== 'undefined';

const itemsPerPageSave = isBrowser
  ? localStorage.getItem('marvel:items-per-page') || INITIAL_ITEMS_COUNT
  : INITIAL_ITEMS_COUNT;

const itemsPerPageSlice = createSlice({
  name: 'itemsPerPage',
  initialState: {
    itemsPerPageCount: +itemsPerPageSave,
  },
  reducers: {
    changeItemsPerPageCount(state, action) {
      state.itemsPerPageCount = action.payload.itemsPerPageCount;
    },
  },
});

export const { changeItemsPerPageCount } = itemsPerPageSlice.actions;

export default itemsPerPageSlice.reducer;
