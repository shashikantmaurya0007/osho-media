import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  postLoading: false,
  allPost: [],
  postError: null,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPostLoading: (state, action) => {
      state.postLoading = action.payload;
    },
    setPostData: (state, action) => {
      state.allPost = action.payload;
    },
    setPostError: (state, action) => {
      state.postError = action.payload;
    },
  },
});

const postActions = postSlice.actions;
export default postSlice;
export { postActions };
