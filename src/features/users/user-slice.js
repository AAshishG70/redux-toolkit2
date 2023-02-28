import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { USERS_URL } from "../../constant/constant";

const initialState = {
  users: [],
};

export const fetchUser = createAsyncThunk("users/fetchUser", async () => {
  const response = await axios(USERS_URL);
  return response.data;
});

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.users.push(...action.payload);
      })
      .addCase(fetchUser.pending, (state, action) => {})
      .addCase(fetchUser.rejected, (state, action) => {});
  },
});

export const selectAllUsers = (state) => state.users.users;

export default userSlice.reducer;
// export const { addUser } = userSlice.actions;

// const userReducer = userSlice.reducer;
