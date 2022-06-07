import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userLoading: false,
  userData: [],

  userError: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoading: (state, action) => {
      state.userLoading = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
      state.userLoading = false;
      state.userError = null;
    },
    setUserError: (state, action) => {
      state.userLoading = false;
      state.userError = "failed to fetch user";
    },
  },
});

const userActions = userSlice.actions;

export { userActions };
export default userSlice;
