import { initalLoginAction } from "./initialLoginAction";
import { initialThemeAction } from "./initialThemeAction";
const initialAppLoadingAction = () => {
  return async (dispatch) => {
    dispatch(initialThemeAction());
    dispatch(initalLoginAction());
  };
};

export { initialAppLoadingAction };
