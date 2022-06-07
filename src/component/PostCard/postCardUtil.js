import { addToBookmarks_acion } from "../../store/BookMark/addToBookmarks";

import { removeFromBookmark_action } from "../../store/BookMark/removeFromBookMark";

const addToBookmarks = (postData, dispatch, encodedToken) => {
  dispatch(addToBookmarks_acion(postData, encodedToken));
};
const removeFromBookmarks = (postData, dispatch, encodedToken) => {
  dispatch(removeFromBookmark_action(postData, encodedToken));
};
const alreadyAddedInBookMark = (postData, bookmarks) => {
  return bookmarks.some((id) => id === postData._id);
};

export { addToBookmarks, alreadyAddedInBookMark, removeFromBookmarks };
