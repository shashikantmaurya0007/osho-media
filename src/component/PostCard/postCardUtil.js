import { addToBookmarks_acion } from "../../store/BookMark/addToBookmarks";

import { removeFromBookmark_action } from "../../store/BookMark/removeFromBookMark";
import { dislikePost } from "../../store/LikeUnlike/dislikePostAction";
import { likePost } from "../../store/LikeUnlike/likePostAction";

const addToBookmarks = (postData, dispatch, encodedToken) => {
  dispatch(addToBookmarks_acion(postData, encodedToken));
};
const removeFromBookmarks = (postData, dispatch, encodedToken) => {
  dispatch(removeFromBookmark_action(postData, encodedToken));
};
const alreadyAddedInBookMark = (postData, bookmarks) => {
  return bookmarks.some((id) => id === postData._id);
};

const likeThisPost = (postData, dispatch, encodedToken) => {
  dispatch(likePost(postData, encodedToken));
};
const dislikeThisPost = (postData, dispatch, encodedToken) => {
  dispatch(dislikePost(postData, encodedToken));
};
const findIsLiked = (likedBy, username_) => {
  return likedBy.some((el) => el.username === username_);
};
export {
  addToBookmarks,
  alreadyAddedInBookMark,
  removeFromBookmarks,
  likeThisPost,
  dislikeThisPost,
  findIsLiked,
};
