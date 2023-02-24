import { createSlice } from "@reduxjs/toolkit";

const initialState = [{ id: 1, name: "Ash" }];

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addUser } = userSlice.actions;

const userReducer = userSlice.reducer;

export default userReducer;
