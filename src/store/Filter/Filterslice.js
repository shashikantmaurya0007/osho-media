import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterSelected: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filterSelected = action.payload;
    },
    resetFilter: (state, action) => {
      state.filterSelected = "";
    },
  },
});

const filterActions = filterSlice.actions;
export { filterActions };
export default filterSlice;
