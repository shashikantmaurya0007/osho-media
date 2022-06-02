import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalOpen: false,
  modalOpenInEditMode: "false",
  editPostId: null,
};

const addEditPostSlice = createSlice({
  name: "addEditPost",
  initialState,
  reducers: {
    setAddEditPostModalOpen: (state, action) => {
      state.modalOpen = true;
    },
    setAddEditPostModalClose: (state, action) => {
      state.modalOpen = false;
    },
    setEditPostId: (state, action) => {
      state.editPostId = action.payload;
    },
  },
});

const addEditPostAction = addEditPostSlice.actions;
export { addEditPostAction };
export default addEditPostSlice;
