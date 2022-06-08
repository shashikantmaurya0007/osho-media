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
      const filteredUser = state.userData.reduce((acc, curr) => {
        if (curr._id === action.payload._id) {
          return acc.concat(action.payload);
        }

        return acc.concat(curr);
      }, []);
      // const filteredUser = state.userData.filter(
      //   (ele) => ele._id !== action.payload._id
      // );
      state.userData = filteredUser;
      state.userLoading = false;
      state.userError = null;
    },
    setInitalUserData: (state, action) => {
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
