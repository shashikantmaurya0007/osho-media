import axios from "axios";
import { postActions } from "./post-slice";

import { addEditPostAction } from "../PostModal/postmodal-slice";
const getPost = () => {
  return async (dispatch) => {
    dispatch(postActions.setPostLoading(true));

    try {
      const {
        data: { posts },
      } = await axios.get(`/api/posts`);

      dispatch(postActions.setPostData(posts));
      dispatch(postActions.setPostError(null));
    } catch (error) {
      dispatch(postActions.setPostError("problem loading the post"));
    } finally {
      dispatch(postActions.setPostLoading(false));
      dispatch(addEditPostAction.setAddEditPostModalClose());
    }
  };
};

export { getPost };
