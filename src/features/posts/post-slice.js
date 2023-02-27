import { createSlice } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "I've heard good things.",
    userId: 2,
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
];

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

export const selectAllPosts = (state) => state.posts;

export default postSlice.reducer;
