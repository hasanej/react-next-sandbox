import { createSlice } from '@reduxjs/toolkit';
import { AppState } from './store';
import { HYDRATE } from 'next-redux-wrapper';

export interface UserListState {
  userListState: object[];
}

const initialState: UserListState = {
  userListState: []
}

export const userListSlice = createSlice({
  name: "userList",
  initialState,
  reducers: {
    // Action to set the authentication status
    setUserListState(state, action) {
      state.userListState = action.payload;
    }
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.userList
      };
    }
  }
});

export const { setUserListState } = userListSlice.actions;

export const selectUserListState = (state: AppState) => state.userList.userListState;

export default userListSlice.reducer;