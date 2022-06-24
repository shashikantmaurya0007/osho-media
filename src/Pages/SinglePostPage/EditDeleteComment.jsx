import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BrushTwoToneIcon from "@mui/icons-material/BrushTwoTone";
import AutoDeleteTwoToneIcon from "@mui/icons-material/AutoDeleteTwoTone";
import { useDebounce } from "../../GeneralCustomHook/useDebounce";
import { deletecomment } from "../../store/Comments/delete-comment";

const EditDeleteComment = ({
  postdata,
  ele,
  enableEditComment,
  closeToggleEditDeleteButton,
}) => {
  const dispatch = useDispatch();
  const encodedToken = useSelector((state) => state.login.encodedToken);
  const allPost = useSelector((state) => state.post.allPost);
  const deleteThePostComment = async () => {
    dispatch(deletecomment(postdata, ele._id, encodedToken, allPost));
  };

  const deleteThePostdebounceFn = useDebounce(deleteThePostComment, 300);
  return (
    <div className="flex flex-col absolute top-3 dark:text-white dark:bg-darkSecondary bg-white rounded-md   right-8 shadow-2xl border-2">
      <button
        className="py-1 px-2 flex justify-between text-md rounded-t-md hover:bg-darkHover"
        onClick={() => {
          enableEditComment();
          closeToggleEditDeleteButton();
        }}
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

export default EditDeleteComment;
