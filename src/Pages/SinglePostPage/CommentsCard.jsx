import React, { useEffect, useRef, useState } from "react";
import { ProfilePic } from "../../GeneralComponent/ProfilePic";
import moment from "moment";
import MoreVertTwoToneIcon from "@mui/icons-material/MoreVertTwoTone";
import { useNavigate } from "react-router-dom";
import { followCursor } from "tippy.js";
import { TipsyContent } from "../../layoutcomponent/TipsyContent";
import Tippy from "@tippyjs/react";
import EditDeleteComment from "./EditDeleteComment";
import { useOnClickOutside } from "../../GeneralCustomHook/useOnClickOutside";
import { useDispatch, useSelector } from "react-redux";
import { editCommentOnPOst } from "../../store/Comments/edit-comment";
import { useDebounce } from "../../GeneralCustomHook/useDebounce";
const CommentsCard = ({ ele, postdata, encodedToken }) => {
  const {
    username,
    profileImage,
    createdAt,
    edited,
    text,
    _id: commentId,
  } = ele;
  const allPost = useSelector((state) => state.post.allPost);
  const [editComment, setEditComment] = useState(false);
  const [editText, setEditText] = useState(text || "");
  const navigate = useNavigate();
  const navigateToUserProfile = () => {
    navigate(`/user/${username}`);
  };
  const editRef = useRef();
  const dispatch = useDispatch();
  const enableEditComment = () => setEditComment((prev) => true);
  const disableEditComment = () => setEditComment((prev) => false);
  const [updateBUttonDisabled, setUpdateButtonDisabled] = useState(false);
  const {
    userInformation: { username: username_ },
  } = useSelector((state) => state.login);
  const editDeleteRe = useRef(null);
  const [showEditDeleteButton, setShowEditDeleteButton] = useState(false);
  const closeToggleEditDeleteButton = () => {
    setShowEditDeleteButton(false);
  };
  const toggleEditDeleteButton = () =>
    setShowEditDeleteButton((prev) => (prev === false ? true : false));
  const addTextToEdit = (e) => {
    setEditText(e.target.value);
  };
  const updateCommentOnPost = () => {
    dispatch(
      editCommentOnPOst(postdata, commentId, encodedToken, editText, allPost)
    );
    disableEditComment();
  };

  const debounceUpdateComment = useDebounce(updateCommentOnPost, 400);
  useEffect(() => {
    editComment && editRef.current.focus();
  }, [editComment]);

  useEffect(() => {
    setUpdateButtonDisabled(text === editText || editText.trim().length === 0);
  }, [editText, text]);

  useOnClickOutside(editDeleteRe, closeToggleEditDeleteButton);
  return (
    <div className=" shadow-2xl dark:text-white bg-white dark:bg-darkPrimary rounded-md">
      <div className="flex justify-between">
        <div
          onClick={() => navigateToUserProfile()}
          className="flex gap-2 pl-2 pt-2 cursor-pointer"
        >
          <ProfilePic username={username} profileImage={profileImage} />
          <div>
            <p className="font-bold">@{username}</p>
            <p className="font-bold text-xs dark:text-white/75 text-gray-500">
              {moment(createdAt).fromNow()}
              {edited && "...edited"}
            </p>
          </div>
        </div>
        {username === username_ && (
          <div className="relative" ref={editDeleteRe}>
            <Tippy
              content={<TipsyContent hoverContent={"edit|delete"} />}
              followCursor={true}
              plugins={[followCursor]}
            >
              <button
                onClick={() => toggleEditDeleteButton()}
                className="hover:bg-darkHover/100 w-[2rem] h-[2rem] rounded-full transition-all"
              >
                <MoreVertTwoToneIcon />
              </button>
            </Tippy>
            {showEditDeleteButton && (
              <EditDeleteComment
                postdata={postdata}
                ele={ele}
                enableEditComment={enableEditComment}
                closeToggleEditDeleteButton={closeToggleEditDeleteButton}
              />
            )}
          </div>
        )}
      </div>
      {text && !editComment && (
        <p className="text-base text-justify py-2 px-5">{text}</p>
      )}
      {editComment && (
        <div className="flex">
          <input
            type="text"
            ref={editRef}
            className="w-full rounded-md outline-none shadow-2xl dark:bg-darkPrimary dark:text-white"
            value={editText}
            onChange={(e) => addTextToEdit(e)}
          />
          <button
            onClick={() => disableEditComment()}
            className="flex font-bold text-sm justify-center text-center mr-2 mb-2 gap-3 px-1 dark:text-white dark:bg-darkSecondary items-center shadow-gray-500 border-2  hover:bg-lightBackground/80 transition-all rounded-xl shadow-md  py-1"
          >
            Cancel
          </button>
          <button
            disabled={updateBUttonDisabled}
            title={updateBUttonDisabled && "disabled"}
            onClick={() => debounceUpdateComment()}
            className="flex  font-bold text-sm justify-center text-center gap-3 mb-2 px-1 dark:text-white dark:bg-darkSecondary items-center shadow-gray-500 border-2  hover:bg-lightBackground/80 transition-all rounded-xl shadow-md  py-1"
          >
            Update
          </button>
        </div>
      )}
    </div>
  );
};

export { CommentsCard };
