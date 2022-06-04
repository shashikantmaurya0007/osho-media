import axios from "axios";
import { toast } from "react-toastify";
import { addEditPostAction } from "../PostModal/postmodal-slice";
import { postActions } from "./post-slice";

const addPost = (postData, encodedToken) => {
  return async (dispatch) => {
    console.log(postData.postImage);
    dispatch(postActions.setPostLoading(true));

    try {
      const {
        data: { posts },
      } = await axios.post(
        `/api/posts`,
        { postData },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      dispatch(postActions.setPostData(posts));
      toast.success("post added successfully!");
    } catch (error) {
      toast.error("try adding post later!");
    } finally {
      debugger;
      dispatch(postActions.setPostLoading(false));
      dispatch(addEditPostAction.setAddEditPostModalClose());
    }
  };
};

export { addPost };
