import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: '',
  userId: '',
  name: '',
  email: '', 
  role: '',
};

const profileSlice = createSlice({
  name: 'profile',
  initialState: initialState,
  reducers: {
    userLogin(state, action) {
      state.token = action.payload.token;
      state.userId = action.payload.userId;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.role = action.payload.role;
    },
  },
});

export const profileActions = profileSlice.actions;
export default profileSlice;
