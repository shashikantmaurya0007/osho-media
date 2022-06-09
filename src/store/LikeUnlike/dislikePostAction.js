import axios from "axios";
import { toast } from "react-toastify";
import { postActions } from "../Post/post-slice";
import { likePostAction } from "./likeSlice";
const dislikePost = (postData, encodedToken) => {
  return async (dispatch) => {
    try {
      likePostAction.setLikeLoading();
      const {
        data: { posts },
      } = await axios.post(
        `/api/posts/dislike/${postData._id}`,
        {},
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );

      dispatch(likePostAction.setLikedPost(posts));
      dispatch(postActions.setPostData(posts));
    } catch (error) {
      toast.error("Failed To Like Your Post");
      dispatch(likePostAction.setLikedError());
    }
  };
};

export { dislikePost };
