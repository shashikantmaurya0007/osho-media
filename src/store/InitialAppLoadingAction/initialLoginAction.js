import { loginActions } from "../Auth/loginSlice";

const initalLoginAction = () => {
  return async (dispatch) => {
    const encodedToken = localStorage.getItem("encodedToken");
    const userInformation = JSON.parse(localStorage.getItem("userInformation"));
    console.log(encodedToken !== null);
    console.log(encodedToken, "efsfsdf");
    if (encodedToken) {
      dispatch(loginActions.setEncodedToken(encodedToken));
      dispatch(loginActions.setUserInformation(userInformation));
      dispatch(loginActions.setLoginStatus(true));
    }
  };
};
export { initalLoginAction };
