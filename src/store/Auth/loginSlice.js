import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  encodedToken: null,
  userInformation: null,
  error: null,
  isLogin: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLoadingState: (state, action) => {
      state.loading = action.payload;
    },
    setEncodedToken: (state, action) => {
      state.encodedToken = action.payload;
    },
    setUserInformation: (state, action) => {
      state.userInformation = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setLoginStatus: (state, action) => {
      state.isLogin = action.payload;
    },
    logOutUser: (state, action) => {
      localStorage.removeItem("encodedToken");
      localStorage.setItem("userInformation", null);
      return initialState;
    },
  },
});

const loginActions = loginSlice.actions;
export { loginActions };
export default loginSlice;
