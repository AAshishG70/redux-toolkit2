import { createSlice } from "react-redux";

const initialState = [
  { id: 1, title: "This is test title" },
  { id: 2, title: "This is another title" },
];

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

const postReducer = postSlice.reducer();

export default postReducer;
