import { createSlice } from '@reduxjs/toolkit';

let initialToken = localStorage.getItem('token');
let initialUserId = localStorage.getItem('userId');
let initialName = localStorage.getItem('name');
let initialMobile = localStorage.getItem('mobile');
let initialRole = localStorage.getItem('role');



const initialState = {
  token: initialToken,
  userId: initialUserId,
  name: initialName,
  mobile: initialMobile,
  role: initialRole,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState: initialState,
  reducers: {
    userLogin(state, action) {
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('userId', action.payload.userId);
      localStorage.setItem('name', action.payload.name);
      localStorage.setItem('role', action.payload.role);
      localStorage.setItem('mobile', action.payload.mobile);


      state.token = action.payload.token;
      state.userId = action.payload.userId;
      state.name = action.payload.name;
      state.mobile = action.payload.mobile;
      state.role = action.payload.role;
    },

    userLogout(state) {
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      localStorage.removeItem('name');
      localStorage.removeItem('role');
      localStorage.removeItem('mobile');

      state.token = '';
      state.userId = '';
      state.name = '';
      state.role = '';
      state.mobile = '';
    },
  },
});

export const profileActions = profileSlice.actions;
export default profileSlice;
