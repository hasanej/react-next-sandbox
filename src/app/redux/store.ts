import { configureStore } from '@reduxjs/toolkit';
import userListReducer from './features/userListSlice';

export const store = configureStore({
  reducer: {
    userListReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;