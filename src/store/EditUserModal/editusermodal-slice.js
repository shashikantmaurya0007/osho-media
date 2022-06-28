import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  editUserModalOpen: false,
};

const editUserSlice = createSlice({
  name: "edituser",
  initialState,
  reducers: {
    setEditUserProfileOpen: (state, action) => {
      state.editUserModalOpen = true;
    },
    setEditUserProfileClose: (state, action) => {
      state.editUserModalOpen = false;
    },
  },
});

const editUserModalOpenActions = editUserSlice.actions;
export { editUserModalOpenActions };
export default editUserSlice;
