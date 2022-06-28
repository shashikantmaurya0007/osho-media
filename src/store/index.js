import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./Auth/loginSlice";
import bookMarkSlice from "./BookMark/bookmark-slice";
import editUserSlice from "./EditUserModal/editusermodal-slice";
import filterSlice from "./Filter/Filterslice";
import likeSlice from "./LikeUnlike/likeSlice";
import postSlice from "./Post/post-slice";
import addEditPostSlice from "./PostModal/postmodal-slice";
import themeSlice from "./Theme/theme-slice";
import userSlice from "./User/user-slice";
const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    login: loginSlice.reducer,
    addEditPost: addEditPostSlice.reducer,
    post: postSlice.reducer,
    bookmark: bookMarkSlice.reducer,
    user: userSlice.reducer,
    like: likeSlice.reducer,
    filter: filterSlice.reducer,
    eidtUserInformation: editUserSlice.reducer,
  },
});

export { store };
