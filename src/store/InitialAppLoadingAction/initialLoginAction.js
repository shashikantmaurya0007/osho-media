import { loginActions } from "../Auth/loginSlice";

const initalLoginAction = () => {
  return async (dispatch) => {
    const encodedToken = localStorage.getItem("encodedToken");
    const userInformation = JSON.parse(localStorage.getItem("userInformation"));

    if (encodedToken) {
      dispatch(loginActions.setEncodedToken(encodedToken));
      dispatch(loginActions.setUserInformation(userInformation));
      dispatch(loginActions.setLoginStatus(true));
    }
  };
};
export { initalLoginAction };
