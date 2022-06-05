import React from "react";
import { ProfilePic } from "../GeneralComponent/ProfilePic";
import moment from "moment";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import ChatBubbleTwoToneIcon from "@mui/icons-material/ChatBubbleTwoTone";
import ShareTwoToneIcon from "@mui/icons-material/ShareTwoTone";
import BookmarkTwoToneIcon from "@mui/icons-material/BookmarkTwoTone";
import MoreVertTwoToneIcon from "@mui/icons-material/MoreVertTwoTone";
import { followCursor } from "tippy.js";
import { TipsyContent } from "../layoutcomponent/TipsyContent";
import Tippy from "@tippyjs/react";
const PostCard = ({ postdata }) => {
  const {
    content,
    postImage,
    username,
    profileImage,
    likes: { likeCount, likedBy },
    createdAt,
    comments,
  } = postdata;
  return (
    <div className="shadow-inner dark:text-white bg-white dark:bg-darkPrimary rounded-md">
      <div className="flex justify-between items-center px-3">
        <div className="flex items-center gap-3 py-3 px-2">
          <ProfilePic username={username} profileImage={profileImage} />
          <div>
            <p className="font-bold">@{username}</p>
            <p className="font-bold text-xs dark:text-white/75 text-gray-500">
              {moment(createdAt).fromNow()}
            </p>
          </div>
        </div>
        <Tippy
          content={<TipsyContent hoverContent={"edit|delete"} />}
          followCursor={true}
          plugins={[followCursor]}
        >
          <button className="hover:bg-darkHover/100 w-[2rem] h-[2rem] rounded-full transition-all">
            <MoreVertTwoToneIcon />
          </button>
        </Tippy>
      </div>
      {postImage && (
        <img src={postImage} alt="" className="h-96 w-full object-contain" />
      )}
      {content && <p className="text-base py-2 px-3">{content}</p>}
      <div className="flex justify-between py-4 px-3   ">
        <div className="flex gap-4">
          <Tippy
            content={<TipsyContent hoverContent={"like"} />}
            followCursor={true}
            plugins={[followCursor]}
          >
            <button>
              <FavoriteTwoToneIcon />
            </button>
          </Tippy>
          <Tippy
            content={<TipsyContent hoverContent={"comment"} />}
            followCursor={true}
            plugins={[followCursor]}
          >
            <button>
              <ChatBubbleTwoToneIcon />
            </button>
          </Tippy>
          <Tippy
            content={<TipsyContent hoverContent={"share"} />}
            followCursor={true}
            plugins={[followCursor]}
          >
            <button>
              <ShareTwoToneIcon />
            </button>
          </Tippy>
        </div>
        <Tippy
          content={<TipsyContent hoverContent={"bookmark"} />}
          followCursor={true}
          plugins={[followCursor]}
        >
          <button>
            <BookmarkTwoToneIcon />
          </button>
        </Tippy>
      </div>
    </div>
  );
};

export { PostCard };
