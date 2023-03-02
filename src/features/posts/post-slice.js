import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";
import { POST_URL } from "../../constant/constant";
import axios from "axios";

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

export const sendPosts = createAsyncThunk(
  "posts/addPosts",
  async function (post) {
    const response = await axios.post(POST_URL, post);
    // const response = await fetch(POST_URL, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(post),
    // });

    // const data = await response.json();

    // console.log("Posted data", data);
    console.log(response);

    return response.data;
  }
);

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            userId,
            content,
            date: new Date().toISOString(),
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },
    addReaction(state, action) {
      const { postId, reaction } = action.payload;
      const availablePost = state.find((post) => postId === post.id);
      availablePost && availablePost.reactions[reaction]++;
    },
  },

  extraReducers(builder) {
    builder.addCase(sendPosts.fulfilled, (state, action) => {
      state.posts.push(action.payload);
    });
  },
});

export const selectAllPosts = (state) => state.posts;

export const { addPost, addReaction } = postSlice.actions;

export default postSlice.reducer;
