import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { IFormProps } from '../utils/interfaces/IFormProps';
import formsSlice from './formsSlice';

export interface AppState {
  forms: {
    controlledForm: IFormProps;
  };
}

const rootReducer = combineReducers({
  forms: formsSlice,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
