import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEditPostAction } from "../../store/PostModal/postmodal-slice";
import BrushTwoToneIcon from "@mui/icons-material/BrushTwoTone";
import AutoDeleteTwoToneIcon from "@mui/icons-material/AutoDeleteTwoTone";
import { deletePost } from "../../store/Post/deletePost";
import { useDebounce } from "../../GeneralCustomHook/useDebounce";

const EditDeletePostMenu = ({ postdata, closeToggleEditDeleteButton }) => {
  const dispatch = useDispatch();
  const encodedToken = useSelector((state) => state.login.encodedToken);
  const editThisPost = () => {
    closeToggleEditDeleteButton();
    dispatch(addEditPostAction.setEditPostId(postdata._id));
  };

  const deleteThePost = async () => {
    dispatch(deletePost(postdata, encodedToken));
  };

  const deleteThePostdebounceFn = useDebounce(deleteThePost, 300);
  return (
    <div className="flex flex-col absolute top-12 dark:text-white dark:bg-darkSecondary bg-white rounded-md   right-5 shadow-2xl border-2">
      <button
        className="py-1 px-2 flex justify-between text-md rounded-t-md hover:bg-darkHover"
        onClick={() => editThisPost()}
      >
        <p>Edit</p>
        <BrushTwoToneIcon />
      </button>
      <button
        onClick={() => deleteThePostdebounceFn()}
        className="py-1 text-md px-2 flex gap-2 rounded-b-md justify-between hover:bg-darkHover"
      >
        <p>Delete</p>
        <AutoDeleteTwoToneIcon />{" "}
      </button>
    </div>
  );
};

export default EditDeletePostMenu;
