import { themeAction } from "../Theme/theme-slice";

const initialThemeAction = () => {
  return async (dispatch) => {
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      dispatch(themeAction.setDarkTheme());
    }
    if (theme === "light") {
      dispatch(themeAction.setLightTheme());
    }
  };
};

export { initialThemeAction };
