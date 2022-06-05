import axios from "axios";
import { toast } from "react-toastify";
import { addEditPostAction } from "../PostModal/postmodal-slice";
import { postActions } from "./post-slice";

const deletePost = (postData, encodedToken) => {
  return async (dispatch) => {
    dispatch(postActions.setPostLoading(true));

    try {
      const {
        data: { posts },
      } = await axios.delete(
        `/api/posts/${postData._id}`,

        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      dispatch(postActions.setPostData(posts));
      toast.success("post deleted successfully!");
    } catch (error) {
      toast.error("try adding post later!");
    } finally {
      dispatch(postActions.setPostLoading(false));
      dispatch(addEditPostAction.setAddEditPostModalClose());
    }
  };
};

export { deletePost };
