import {createSlice} from '@reduxjs/toolkit';

type TTnitialState = {
  isLogined: boolean;
  token: string;
};

//user:Ngocanh@gmail.com
//pass:171020

const initialState = {
  isLogined: true,
  token: 'NgocAnh'
} as TTnitialState;

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    doLoginSystem(state) {
      state.isLogined = true;
    },
    doLogoutSystem(state) {
      state.isLogined = false;
    },
  },
});

const {actions, reducer} = authSlice;
export const {doLoginSystem, doLogoutSystem} = actions;
export default reducer;