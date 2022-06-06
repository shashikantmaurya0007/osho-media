import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookMarkLoading: false,
  bookMarkPosts: [],
  bookMatkError: null,
};

const bookMarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    setBookMarkLoading: (state, action) => {
      state.bookMarkLoading = action.payload;
    },
    setBookMarkData: (state, action) => {
      state.bookMarkLoading = false;
      state.bookMarkPosts = action.payload;
      state.bookMatkError = null;
    },
    setBookMarkError: (state, action) => {
      state.bookMarkLoading = false;
      state.bookMatkError = action.payload;
    },
  },
});

const bookmarkActions = bookMarkSlice.actions;
export { bookmarkActions };
export default bookMarkSlice;
