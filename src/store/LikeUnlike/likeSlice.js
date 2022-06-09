import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  likedPostLoading: false,
  likedPosts: [],
  likedError: null,
};

const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    setLikeLoading: (state, action) => {
      state.likedPostLoading = true;
    },
    setLikedPost: (state, action) => {
      state.likedPostLoading = false;
      state.likedPosts = action.payload;
      state.likedError = null;
    },
    setLikedError: (state, action) => {
      state.likedError = "failed to like post!";
      state.likedPostLoading = false;
    },
  },
});

const likePostAction = likeSlice.actions;

export { likePostAction };
export default likeSlice;
