import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./Auth/loginSlice";
import addEditPostSlice from "./PostModal/postmodal-slice";
import themeSlice from "./Theme/theme-slice";
const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    login: loginSlice.reducer,
    addEditPost: addEditPostSlice.reducer,
  },
});

export { store };
