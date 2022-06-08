import { initalLoginAction } from "./initialLoginAction";
import { initialThemeAction } from "./initialThemeAction";
import { initalAppLoadingFetchPost } from "./initialAppLoadingFetchPost";
import { initialAppLoadingFetchUser } from "./initialAppLoadingFetchUser";
const initialAppLoadingAction = () => {
  return async (dispatch) => {
    dispatch(initialThemeAction());
    dispatch(initalLoginAction());
    dispatch(initalAppLoadingFetchPost());
    dispatch(initialAppLoadingFetchUser());
  };
};

export { initialAppLoadingAction };
