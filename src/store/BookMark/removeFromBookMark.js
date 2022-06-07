import axios from "axios";
import { toast } from "react-toastify";
import { bookmarkActions } from "./bookmark-slice";

const removeFromBookmark_action = (postData, encodedToken) => {
  return async (dispatch) => {
    try {
      const {
        data: { bookmarks },
      } = await axios.post(
        `/api/users/remove-bookmark/${postData._id}`,
        {},
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );

      dispatch(bookmarkActions.setBookMarkData(bookmarks));
    } catch (error) {
      toast.error("Your post failed to  remove from bookmark try later!");
      dispatch(
        bookmarkActions.setBookMarkError(
          "Your post failed to remove from bookmark try later!"
        )
      );
    }
  };
};

export { removeFromBookmark_action };
