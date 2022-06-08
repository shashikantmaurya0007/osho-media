import axios from "axios";
import { loginActions } from "../Auth/loginSlice";
import { userActions } from "./user-slice";

const followuser_action = (followUsername, encodedToken) => {
  return async (dispatch) => {
    dispatch(userActions.setUserLoading(true));
    try {
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

      dispatch(userActions.setUserData(followUser));
      dispatch(loginActions.setUserInformation(user));
    } catch (error) {
      dispatch(userActions.setUserError());
    }
  };
};
export { followuser_action };
