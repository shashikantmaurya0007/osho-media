import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProfilePic } from "../GeneralComponent/ProfilePic";
import { followuser_action } from "../store/User/followuser_action";

const SuggestionFollowCard = ({ user: { _id, profileImage, username } }) => {
  const dispatch = useDispatch();
  const encodedToken = useSelector((state) => state.login.encodedToken);
  const followThisUser = () => {
    dispatch(followuser_action(username, encodedToken));
  };
  return (
    <div className="flex justify-between py-1 items-center shadow-inner rounded-md dark:bg-darkPrimary px-2 border-2">
      <div className="flex items-center gap-3 py-3 h-9 px-2  ">
        <ProfilePic username={username} profileImage={profileImage} />
        <div>
          <p className="font-bold">@{username}</p>
        </div>
      </div>
      <button
        onClick={() => followThisUser()}
        className="shadow-gray-500 text-sm font-bold border-2  p-1  hover:bg-lightBackground/80 transition-all rounded-xl shadow-md"
      >
        Follow
      </button>
    </div>
  );
};

export { SuggestionFollowCard };
