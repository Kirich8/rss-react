import { createSlice } from '@reduxjs/toolkit';
import { IFormState } from '../utils/interfaces/IFormState';

const formsSlice = createSlice({
  name: 'forms',
  initialState: {
    listForms: [] as IFormState[],
    lastForm: {
      name: '',
      age: 0,
      email: '',
      country: '',
      password: '',
      confirmPassword: '',
      gender: '',
      conditions: false,
      image: '',
    } as IFormState,
  },
  reducers: {
    changeDataLastForm(state, action) {
      state.lastForm.name = action.payload.name;
      state.lastForm.age = action.payload.age;
      state.lastForm.email = action.payload.email;
      state.lastForm.country = action.payload.country;
      state.lastForm.password = action.payload.password;
      state.lastForm.confirmPassword = action.payload.confirmPassword;
      state.lastForm.gender = action.payload.gender;
      state.lastForm.conditions = action.payload.conditions;
      state.lastForm.image = action.payload.image;
    },
    updateListsForms(state) {
      state.listForms.unshift(state.lastForm);
    },
  },
});

export const { changeDataLastForm, updateListsForms } = formsSlice.actions;

export default formsSlice.reducer;
