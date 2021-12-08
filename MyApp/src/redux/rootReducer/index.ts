import {combineReducers} from '@reduxjs/toolkit';
import authSlice from '../slice/appSlice/authSlice';

export const rootReducer = combineReducers({
    authSlice,
  });
  export type RootState = ReturnType<typeof rootReducer>;