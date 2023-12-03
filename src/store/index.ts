import { combineReducers, configureStore } from '@reduxjs/toolkit';
import formsSlice from './formsSlice';
import countriesSlice from './countriesSlice';

const rootReducer = combineReducers({
  forms: formsSlice,
  countries: countriesSlice,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
