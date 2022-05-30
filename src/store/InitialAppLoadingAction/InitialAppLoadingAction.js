import { initialThemeAction } from "./initialThemeAction";
const initialAppLoadingAction = () => {
  return async (dispatch) => {
    dispatch(initialThemeAction());
  };
};

export { initialAppLoadingAction };
