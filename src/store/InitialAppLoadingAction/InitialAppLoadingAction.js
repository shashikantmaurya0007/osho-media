import { initalLoginAction } from "./initialLoginAction";
import { initialThemeAction } from "./initialThemeAction";
import { initalAppLoadingFetchPost } from "./initialAppLoadingFetchPost";
const initialAppLoadingAction = () => {
  return async (dispatch) => {
    dispatch(initialThemeAction());
    dispatch(initalLoginAction());
    dispatch(initalAppLoadingFetchPost());
  };
};

export { initialAppLoadingAction };
