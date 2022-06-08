import axios from "axios";
import { userActions } from "./user-slice";
import { loginActions } from "../Auth/loginSlice";
const unfollowuser_action = (followUsername, encodedToken) => {
  return async (dispatch) => {
    dispatch(userActions.setUserLoading(true));

    try {
      const {
        data: { user, followUser },
      } = await axios.post(
        `/api/users/unfollow/${followUsername}`,
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

export { unfollowuser_action };
