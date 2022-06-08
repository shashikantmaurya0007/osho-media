import axios from "axios";
import { loginActions } from "../Auth/loginSlice";
import { userActions } from "./user-slice";

const followuser_action = (followUsername, encodedToken) => {
  return async (dispatch) => {
    dispatch(userActions.setUserLoading(true));
    try {
      console.log(followUsername, encodedToken);
      const {
        data: { user, followUser },
      } = await axios.post(
        `/api/users/follow/${followUsername}`,
        {},
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );

      console.log(user, followUser, "user", "folllowUser");
      dispatch(userActions.setUserData(followUser));
      dispatch(loginActions.setUserInformation(user));
    } catch (error) {
      console.log(error);
      dispatch(userActions.setUserError());
    }
  };
};
export { followuser_action };
