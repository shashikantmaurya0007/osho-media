import { themeAction } from "../Theme/theme-slice";

const initialThemeAction = () => {
  return async (dispatch) => {
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      dispatch(themeAction.setDarkTheme());
    } else {
      dispatch(themeAction.setLightTheme());
    }
  };
};

export { initialThemeAction };
