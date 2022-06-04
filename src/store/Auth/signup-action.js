import axios from "axios";
import { loginActions } from "./loginSlice";
import { toast } from "react-toastify";

const userSignup = (userInformation, navigate) => {
  return async (dispatch) => {
    dispatch(loginActions.setLoadingState(true));

    const signUpTheUser = async () => {
      debugger;
      const {
        data: { createdUser: user, encodedToken },
      } = await axios.post("/api/auth/signup", userInformation);

      toast.success("signup successfull!");
      dispatch(loginActions.setError(null));
      dispatch(loginActions.setUserInformation(user));
      dispatch(loginActions.setEncodedToken(encodedToken));
      localStorage.setItem("encodedToken", encodedToken);
      localStorage.setItem("userInformation", JSON.stringify(user));
      dispatch(loginActions.setLoadingState(false));
      dispatch(loginActions.setLoginStatus(true));
      navigate("/");
    };

    try {
      await signUpTheUser();
    } catch (error) {
      debugger;
      dispatch(loginActions.setError("user already regiestered!"));
      toast.error("user already registered!");
      dispatch(loginActions.setLoginStatus(false));
      dispatch(loginActions.setEncodedToken(null));
      dispatch(loginActions.setUserInformation(null));
      dispatch(loginActions.setLoadingState(false));
      localStorage.setItem("encodedToken", null);
      localStorage.setItem("userInformation", null);
    }
  };
};

export { userSignup };
