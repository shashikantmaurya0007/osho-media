import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ProfilePic } from "../GeneralComponent/ProfilePic";
import { followuser_action } from "../store/User/followuser_action";

const SuggestionFollowCard = ({ user: { _id, profileImage, username } }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const encodedToken = useSelector((state) => state.login.encodedToken);
  const followThisUser = (e) => {
    e.stopPropagation();
    dispatch(followuser_action(username, encodedToken));
  };
  const navigateToUserProfile = () => {
    navigate(`/user/${username}`);
  };

  return (
    <div
      onClick={() => navigateToUserProfile()}
      className="flex cursor-pointer justify-between py-1 items-center shadow-inner rounded-md dark:bg-darkPrimary px-2 border-2"
    >
      <div className="flex items-center gap-3 py-3 h-9 px-2  ">
        <ProfilePic username={username} profileImage={profileImage} />
        <div>
          <p className="font-bold">@{username}</p>
        </div>
      </div>
      <button
        onClick={(e) => followThisUser(e)}
        className="shadow-gray-500 text-sm font-bold border-2  p-1  hover:bg-lightBackground/80 transition-all rounded-xl shadow-md"
      >
        Follow
      </button>
    </div>
  );
};

export { SuggestionFollowCard };
