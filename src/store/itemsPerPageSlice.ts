import { createSlice } from '@reduxjs/toolkit';

const itemsPerPageSlice = createSlice({
  name: 'itemsPerPage',
  initialState: {
    itemsPerPageCount: 12,
  },
  reducers: {
    changeItemsPerPageCount(state, action) {
      state.itemsPerPageCount = action.payload;
    },
  },
});

export const { changeItemsPerPageCount } = itemsPerPageSlice.actions;

export default itemsPerPageSlice.reducer;
