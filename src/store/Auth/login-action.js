import { loginActions } from "./loginSlice";
import axios from "axios";
import { toast } from "react-toastify";
const userLogin = (userInformation, navigate) => {
  return async (dispatch) => {
    try {
      dispatch(loginActions.setLoadingState(true));
      const {
        data: { foundUser, encodedToken },
      } = await axios.post("/api/auth/login", userInformation);

      dispatch(loginActions.setError(null));

      dispatch(loginActions.setUserInformation(foundUser));
      dispatch(loginActions.setEncodedToken(encodedToken));
      localStorage.setItem("encodedToken", encodedToken);
      localStorage.setItem("userInformation", JSON.stringify(foundUser));

      dispatch(loginActions.setLoadingState(false));
      dispatch(loginActions.setLoginStatus(true));
      toast.success("login Succesfull");
      navigate("/");
    } catch (error) {
      dispatch(loginActions.setError("Invalid credential!"));
      dispatch(loginActions.setEncodedToken(null));
      dispatch(loginActions.setLoadingState(false));
      dispatch(loginActions.setLoginStatus(false));
      dispatch(loginActions.setUserInformation(null));
      localStorage.setItem("encodedToken", null);
      localStorage.setItem("userInformation", null);
      toast.error("Invalid credential!");
    }
  };
};

export { userLogin };
