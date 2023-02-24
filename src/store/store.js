import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/posts/post-slice";
import userReducer from "../features/users/user-slice";

export const store = configureStore({
  reducer: {
    users: userReducer,
    posts: postReducer,
  },
});
