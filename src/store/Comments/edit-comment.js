import axios from "axios";
import { toast } from "react-toastify";
import { postActions } from "../Post/post-slice";
const editCommentOnPOst = (
  postData,
  commentId,
  encodedToken,
  editText,
  allPost
) => {
  return async (dispatch) => {
    const commentData = editText;
    try {
      const {
        data: { comments },
      } = await axios.post(
        `/api/comments/edit/${postData._id}/${commentId}`,
        {
          commentData,
        },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      const updatedPost = allPost.map((post) =>
        post._id === postData._id ? { ...post, comments } : post
      );

      dispatch(postActions.setPostData(updatedPost));
      //   dispatch(postActions.setPostData(posts));
    } catch (error) {
      toast.error("faied to update your comment");
    }
  };
};
export { editCommentOnPOst };
