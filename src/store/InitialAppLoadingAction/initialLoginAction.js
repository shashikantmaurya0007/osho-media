import { loginActions } from "../Auth/loginSlice";

const initalLoginAction = () => {
  return async (dispatch) => {
    const encodedToken = localStorage.getItem("encodedToken");
    const userInformation = JSON.parse(localStorage.getItem("userInformation"));
    if (encodedToken) {
      dispatch(loginActions.setLoginStatus(true));
      dispatch(loginActions.setEncodedToken(encodedToken));
      dispatch(loginActions.setUserInformation(userInformation));
    }
  };
};
export { initalLoginAction };
