import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalOpen: false,
  modalOpenInEditMode: false,
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
      state.modalOpenInEditMode = false;
      state.editPostId = null;
    },
    setEditPostId: (state, action) => {
      state.modalOpen = true;
      state.editPostId = action.payload;
      state.modalOpenInEditMode = true;
    },
  },
});

const addEditPostAction = addEditPostSlice.actions;
export { addEditPostAction };
export default addEditPostSlice;
