import axios from "axios";
import { loginActions } from "./loginSlice";
import { toast } from "react-toastify";

const userSignup = (userInformation, navigate) => {
  return async (dispatch) => {
    dispatch(loginActions.setLoadingState(true));

    const signUpTheUser = async () => {
      const {
        data: { createdUser: user, encodedToken },
      } = await axios.post("/api/auth/signup", userInformation);

      toast.success("signup successfull!");
      console.log(user);
      dispatch(loginActions.setLoginStatus(true));
      dispatch(loginActions.setError(null));
      dispatch(loginActions.setUserInformation(user));
      dispatch(loginActions.setEncodedToken(encodedToken));
      dispatch(loginActions.setLoadingState(false));
      navigate("/");
    };

    try {
      await signUpTheUser();
    } catch (error) {
      dispatch(loginActions.setError("user already regiestered!"));
      toast.error("user already registered!");
      dispatch(loginActions.setLoginStatus(false));
      dispatch(loginActions.setEncodedToken(null));
      dispatch(loginActions.setUserInformation(null));
      dispatch(loginActions.setLoadingState(false));
    }
  };
};

export { userSignup };
