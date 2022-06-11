import React from "react";
import { ProfilePic } from "../../GeneralComponent/ProfilePic";
import moment from "moment";
import { useNavigate } from "react-router-dom";
const CommentsCard = ({
  ele: { username, profileImage, createdAt, text, _id },
}) => {
  const navigate = useNavigate();
  const navigateToUserProfile = () => {
    navigate(`/user/${username}`);
  };
  return (
    <div className="shadow-inner shadow-2xl dark:text-white bg-white dark:bg-darkPrimary rounded-md">
      <div className="flex">
        <div
          onClick={() => navigateToUserProfile()}
          className="flex gap-2 pl-2 pt-2 cursor-pointer"
        >
          <ProfilePic username={username} profileImage={profileImage} />
          <div>
            <p className="font-bold">@{username}</p>
            <p className="font-bold text-xs dark:text-white/75 text-gray-500">
              {moment(createdAt).fromNow()}
            </p>
          </div>
        </div>
      </div>
      {text && <p className="text-base text-justify py-2 px-5">{text}</p>}
    </div>
  );
};

export { CommentsCard };
