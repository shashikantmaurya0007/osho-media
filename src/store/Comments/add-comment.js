import axios from "axios";
import { toast } from "react-toastify";
import { postActions } from "../Post/post-slice";
const addComment = (postData, commentData, encodedToken) => {
  return async (dispatch) => {
    try {
      const {
        data: { posts },
      } = await axios.post(
        `/api/comments/add/${postData._id}`,
        {
          commentData,
        },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );

      dispatch(postActions.setPostData(posts));
    } catch (error) {
      toast.error("faied to add your comment");
    }
  };
};
export { addComment };
