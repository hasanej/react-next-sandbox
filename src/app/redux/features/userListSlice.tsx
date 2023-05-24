import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UserListState = {
  value: object[];
};

const initialState = {
  value: [],
} as UserListState;

export const userList = createSlice({
  name: "userList",
  initialState,
  reducers: {
    reset: () => initialState,
    update: (state, action: PayloadAction<object[]>) => {
      state.value = action.payload;
    }
  }
});

export const {
  reset,
  update
} = userList.actions;

export default userList.reducer;