import React from "react";
import { ProfilePic } from "../GeneralComponent/ProfilePic";

const SuggestionFollowCard = ({
  user: { _id, profileImage, username, bio },
}) => {
  return (
    <div className="flex justify-between py-1 items-center shadow-inner rounded-md dark:bg-darkPrimary px-2 border-2">
      <div className="flex items-center gap-3 py-3 h-9 px-2  ">
        <ProfilePic username={username} profileImage={profileImage} />
        <div>
          <p className="font-bold">@{username}</p>
        </div>
      </div>
      <button className="shadow-gray-500 text-sm font-bold border-2 text-sm p-1  hover:bg-lightBackground/80 transition-all rounded-xl shadow-md">
        Follow
      </button>
    </div>
  );
};

export { SuggestionFollowCard };
