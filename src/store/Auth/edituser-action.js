import { loginActions } from "./loginSlice";
import axios from "axios";
import { toast } from "react-toastify";
import { postActions } from "../Post/post-slice";
import { ProfilePic } from "../../GeneralComponent/ProfilePic";

const updateUserProfile = (userData, encodedToken, allPost, username) => {
  return async (dispatch) => {
    try {
      const {
        data: { user },
      } = await axios.post(
        "/api/users/edit",
        { userData },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );

      dispatch(loginActions.setUserInformation(user));

      dispatch(
        postActions.setPostData(
          allPost.map((post) =>
            post.username === username
              ? { ...post, profileImage: userData.profileImage }
              : post
          )
        )
      );

      toast.success("updated Succesfully");
    } catch (error) {
      toast.error("Failed to update!");
    }
  };
};

export { updateUserProfile };
