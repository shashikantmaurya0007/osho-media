import axios from "axios";
import { toast } from "react-toastify";
import { addEditPostAction } from "../PostModal/postmodal-slice";
import { postActions } from "./post-slice";
const updatePost = (postData, encodedToken) => {
  return async (dispatch) => {
    dispatch(postActions.setPostLoading(true));

    try {
      const {
        data: { posts },
      } = await axios.post(
        `/api/posts/edit/${postData._id}`,
        { postData },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      debugger;
      dispatch(postActions.setPostData(posts));
      toast.success("post updated successfully!");
    } catch (error) {
      toast.error("try adding post later!");
    } finally {
      dispatch(postActions.setPostLoading(false));
      dispatch(addEditPostAction.setAddEditPostModalClose());
    }
  };
};
export { updatePost };
