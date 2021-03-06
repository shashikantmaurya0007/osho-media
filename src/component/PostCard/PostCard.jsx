import React, { useState, useRef } from "react";
import { ProfilePic } from "../../GeneralComponent/ProfilePic";
import { useOnClickOutside } from "../../GeneralCustomHook/useOnClickOutside";
import moment from "moment";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import ChatBubbleTwoToneIcon from "@mui/icons-material/ChatBubbleTwoTone";
import ShareTwoToneIcon from "@mui/icons-material/ShareTwoTone";
import BookmarkTwoToneIcon from "@mui/icons-material/BookmarkTwoTone";
import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";
import MoreVertTwoToneIcon from "@mui/icons-material/MoreVertTwoTone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { followCursor } from "tippy.js";
import { TipsyContent } from "../../layoutcomponent/TipsyContent";
import Tippy from "@tippyjs/react";
import EditDeletePostMenu from "./EditDeletePostMenu";
import {
  addToBookmarks,
  alreadyAddedInBookMark,
  removeFromBookmarks,
  likeThisPost,
  findIsLiked,
  dislikeThisPost,
} from "./postCardUtil";
import { useDispatch, useSelector } from "react-redux";
import { useDebounce } from "../../GeneralCustomHook/useDebounce";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const PostCard = ({ postdata }) => {
  const {
    _id,
    content,
    postImage,
    username,
    profileImage,
    likes: { likeCount, likedBy },
    createdAt,
    comments,
  } = postdata;
  const dispatch = useDispatch();
  const {
    encodedToken,
    userInformation: { username: username_ },
  } = useSelector((state) => state.login);
  const bookMarkPosts = useSelector((state) => state.bookmark.bookMarkPosts);
  const editDeleteRef = useRef(null);
  const navigate = useNavigate();
  const [showEditDeleteButton, setShowEditDeleteButton] = useState(false);
  const toggleEditDeleteButton = () =>
    setShowEditDeleteButton((prev) => (prev === false ? true : false));

  const closeToggleEditDeleteButton = () => {
    setShowEditDeleteButton(false);
  };
  useOnClickOutside(editDeleteRef, closeToggleEditDeleteButton);

  const addToBookMarkDebounce = useDebounce(addToBookmarks, 300);
  const removeFromBookmarksDebounce = useDebounce(removeFromBookmarks, 300);
  const isBookMarked = alreadyAddedInBookMark(postdata, bookMarkPosts);
  const navigateToUserProfile = () => {
    navigate(`/user/${username}`);
  };
  const likeThisPostDebounce = useDebounce(likeThisPost, 200);
  const dislikeThisPostDebounce = useDebounce(dislikeThisPost, 200);
  const isLiked = findIsLiked(likedBy, username_);

  const navigateToSinglePost = () => {
    navigate(`/post/${_id}`);
  };
  const copyToClipBoard = () => {
    navigator.clipboard.writeText(window.location.origin + `/post/${_id}`);
    toast.success(`copied to clipboard!`);
  };
  const copyToClipBoardDebounce = useDebounce(copyToClipBoard, 200);
  return (
    <div className="shadow-inner dark:text-white bg-white dark:bg-darkPrimary rounded-md">
      <div className="flex justify-between items-center px-3 relative">
        <div
          onClick={() => navigateToUserProfile()}
          className="flex items-center cursor-pointer gap-3 py-3 px-2"
        >
          <ProfilePic username={username} profileImage={profileImage} />
          <div>
            <p className="font-bold">@{username}</p>
            <p className="font-bold text-xs dark:text-white/75 text-gray-500">
              {moment(createdAt).fromNow()}
            </p>
          </div>
        </div>
        {username === username_ && (
          <div ref={editDeleteRef}>
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
              <EditDeletePostMenu
                postdata={postdata}
                closeToggleEditDeleteButton={closeToggleEditDeleteButton}
              />
            )}
          </div>
        )}
      </div>
      {postImage && (
        <img
          loading="lazy"
          src={postImage}
          alt=""
          onClick={() => navigateToSinglePost()}
          className="h-96 cursor-pointer w-full object-contain"
        />
      )}
      {content && (
        <p
          onClick={() => navigateToSinglePost()}
          className="text-base cursor-pointer  text-justify py-2 px-5"
        >
          {content}
        </p>
      )}
      <div className="flex justify-between py-4 px-3   ">
        <div className="flex gap-4">
          {isLiked ? (
            <Tippy
              content={<TipsyContent hoverContent={"dislike"} />}
              followCursor={true}
              plugins={[followCursor]}
            >
              <button
                onClick={() =>
                  dislikeThisPostDebounce(postdata, dispatch, encodedToken)
                }
              >
                <FavoriteIcon /> {likeCount}
              </button>
            </Tippy>
          ) : (
            <Tippy
              content={<TipsyContent hoverContent={"like"} />}
              followCursor={true}
              plugins={[followCursor]}
            >
              <button
                onClick={() =>
                  likeThisPostDebounce(postdata, dispatch, encodedToken)
                }
              >
                <FavoriteTwoToneIcon /> {likeCount}
              </button>
            </Tippy>
          )}
          <Tippy
            content={<TipsyContent hoverContent={"comment"} />}
            followCursor={true}
            plugins={[followCursor]}
          >
            <button onClick={() => navigateToSinglePost()}>
              <ChatBubbleTwoToneIcon />
              {comments?.length}
            </button>
          </Tippy>
          <Tippy
            content={<TipsyContent hoverContent={"share"} />}
            followCursor={true}
            plugins={[followCursor]}
          >
            <button onClick={() => copyToClipBoardDebounce()}>
              <ShareTwoToneIcon />
            </button>
          </Tippy>
        </div>
        <Tippy
          content={<TipsyContent hoverContent={"bookmark"} />}
          followCursor={true}
          plugins={[followCursor]}
        >
          {isBookMarked ? (
            <button
              onClick={() =>
                removeFromBookmarksDebounce(postdata, dispatch, encodedToken)
              }
            >
              <BookmarkRemoveIcon />
            </button>
          ) : (
            <button
              onClick={() =>
                addToBookMarkDebounce(postdata, dispatch, encodedToken)
              }
            >
              <BookmarkTwoToneIcon />
            </button>
          )}
        </Tippy>
      </div>
    </div>
  );
};

export { PostCard };
