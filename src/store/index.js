import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./Auth/loginSlice";
import themeSlice from "./Theme/theme-slice";
const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    login: loginSlice.reducer,
  },
});

export { store };
