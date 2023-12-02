import { createSlice } from '@reduxjs/toolkit';

const formsSlice = createSlice({
  name: 'forms',
  initialState: {
    controlled: {
      name: '',
      age: 0,
      email: '',
      country: '',
      password: '',
      confirmPassword: '',
      gender: '',
      conditions: false,
      // image: '',
    },
  },
  reducers: {
    changeControlledFormData(state, action) {
      state.controlled.name = action.payload.name;
      state.controlled.age = action.payload.age;
      state.controlled.email = action.payload.email;
      state.controlled.country = action.payload.country;
      state.controlled.password = action.payload.password;
      state.controlled.confirmPassword = action.payload.confirmPassword;
      state.controlled.gender = action.payload.gender;
      state.controlled.conditions = action.payload.conditions;
    },
  },
});

export const { changeControlledFormData } = formsSlice.actions;

export default formsSlice.reducer;
