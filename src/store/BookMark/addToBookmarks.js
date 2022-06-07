import axios from "axios";
import { toast } from "react-toastify";
import { bookmarkActions } from "./bookmark-slice";
const addToBookmarks_acion = (postData, encodedToken) => {
  return async (dispatch) => {
    try {
      const {
        data: { bookmarks },
      } = await axios.post(
        `/api/users/bookmark/${postData._id}`,
        {},
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );

      dispatch(bookmarkActions.setBookMarkData(bookmarks));
    } catch (error) {
      toast.error("Your post failed to add in book mark try later!");
      dispatch(
        bookmarkActions.setBookMarkError(
          "Your post failed to add in book mark try later!"
        )
      );
    }
  };
};
export { addToBookmarks_acion };
