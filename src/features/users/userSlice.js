import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "Ash" },
  { id: 2, name: "Berry" },
];

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

const usersReducer = userSlice.reducer();

export default usersReducer;
