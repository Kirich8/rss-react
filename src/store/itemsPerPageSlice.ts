import { createSlice } from '@reduxjs/toolkit';
import { ICharacter } from '../utils/types/ICharacter';

const itemsPerPageSlice = createSlice({
  name: 'itemsPerPage',
  initialState: {
    itemsPerPageCount: 12,
    itemsPerPage: [] as ICharacter[],
  },
  reducers: {
    changeItemsPerPageCount(state, action) {
      state.itemsPerPageCount = action.payload.itemsPerPageCount;
    },
    changeItemsPerPage(state, action) {
      state.itemsPerPage = action.payload.itemsPerPage;
    },
  },
});

export const { changeItemsPerPageCount, changeItemsPerPage } =
  itemsPerPageSlice.actions;

export default itemsPerPageSlice.reducer;
