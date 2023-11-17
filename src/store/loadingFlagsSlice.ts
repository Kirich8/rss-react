import { createSlice } from '@reduxjs/toolkit';

const loadingFlagsSlice = createSlice({
  name: 'loadingFlags',
  initialState: {
    main: {
      isLoading: false,
      isFetching: false,
      isSuccess: false,
    },
    details: {
      isLoading: false,
      isFetching: false,
      isSuccess: false,
    },
  },
  reducers: {
    changeLoadingFlagsMain(state, action) {
      state.main.isLoading = action.payload.isLoading;
      state.main.isFetching = action.payload.isFetching;
      state.main.isSuccess = action.payload.isSuccess;
    },
    changeLoadingFlagsDetails(state, action) {
      state.details.isLoading = action.payload.isLoading;
      state.details.isFetching = action.payload.isFetching;
      state.details.isSuccess = action.payload.isSuccess;
    },
  },
});

export const { changeLoadingFlagsMain, changeLoadingFlagsDetails } =
  loadingFlagsSlice.actions;

export default loadingFlagsSlice.reducer;
