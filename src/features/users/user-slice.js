import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 0, name: "Dude Lebowski" },
  { id: 1, name: "Neil Young" },
  { id: 2, name: "Dave Gray" },
];

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

// export const { addUser } = userSlice.actions;

// const userReducer = userSlice.reducer;

export const selectAllUsers = (state) => state.users;

const userReducer = userSlice.reducer;

export default userReducer;
