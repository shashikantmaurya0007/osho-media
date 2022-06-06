import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./Auth/loginSlice";
import postSlice from "./Post/post-slice";
import addEditPostSlice from "./PostModal/postmodal-slice";
import themeSlice from "./Theme/theme-slice";
const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    login: loginSlice.reducer,
    addEditPost: addEditPostSlice.reducer,
    post: postSlice.reducer,
  },
});

export { store };
