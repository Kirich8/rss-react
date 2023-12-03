import { createSlice } from '@reduxjs/toolkit';
import { countriesList } from '../utils/constants/countries-list';

const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    countriesList: countriesList,
  },
  reducers: {},
});

export default countriesSlice.reducer;
