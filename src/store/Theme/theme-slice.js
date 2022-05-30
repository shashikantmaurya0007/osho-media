const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  themeselected: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setLightTheme: (state, action) => {
      state.themeselected = "light";
    },
    setDarkTheme: (state, action) => {
      state.themeselected = "dark";
    },
  },
});

const themeAction = themeSlice.actions;
export { themeAction };

export default themeSlice;
