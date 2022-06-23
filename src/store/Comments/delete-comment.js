import axios from "axios";
import { toast } from "react-toastify";
import { postActions } from "../Post/post-slice";
const deletecomment = ({ _id: postId }, commentId, encodedToken, allPost) => {
  return async (dispatch) => {
    try {
      const {
        data: { comments },
      } = await axios.delete(`/api/comments/delete/${postId}/${commentId}`, {
        headers: {
          authorization: encodedToken,
        },
      });

      const updatedPost = allPost.map((post) =>
        post._id === postId ? { ...post, comments } : post
      );

      dispatch(postActions.setPostData(updatedPost));
    } catch (error) {
      toast.error("faied to delete Your comment");
    }
  };
};
export { deletecomment };
