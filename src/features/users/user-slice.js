import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { USERS_URL } from "../../constant/constant";

const initialState = {
  users: [],
  status: "idle",
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
        state.status == "Successful";
      })
      .addCase(fetchUser.pending, (state, action) => {
        state.status == "Pending";
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status == "Failed";
      });
  },
});

export const selectAllUsers = (state) => state.users.users;

export default userSlice.reducer;
// export const { addUser } = userSlice.actions;

// const userReducer = userSlice.reducer;
