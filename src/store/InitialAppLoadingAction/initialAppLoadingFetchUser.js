import axios from "axios";
import { userActions } from "../User/user-slice";

const initialAppLoadingFetchUser = () => {
  return async (dispatch) => {
    dispatch(userActions.setUserLoading(true));
    try {
      const {
        data: { users },
      } = await axios.get(`/api/users`);

      dispatch(userActions.setInitalUserData(users));
    } catch (error) {
      dispatch(userActions.setUserError());
    }
  };
};

export { initialAppLoadingFetchUser };
