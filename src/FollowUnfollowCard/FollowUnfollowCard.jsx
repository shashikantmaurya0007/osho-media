import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ProfilePic } from "../GeneralComponent/ProfilePic";
import { followuser_action } from "../store/User/followuser_action";
import { unfollowuser_action } from "../store/User/unfollowuser_action";
const FollowUnfollowCard = ({
  user: { _id, profileImage, username, firstName, lastName },
}) => {
  const navigate = useNavigate();
  const { following } = useSelector((state) => state.login.userInformation);

  const followingUsername = following.map((ele) => ele.username);

  const isFollowed = followingUsername.includes(username);
  const encodedToken = useSelector((state) => state.login.encodedToken);
  const dispatch = useDispatch();

  const followThisUser = (e) => {
    e.stopPropagation();
    dispatch(followuser_action(username, encodedToken));
  };
  const unfollowThisUser = (e) => {
    e.stopPropagation();
    dispatch(unfollowuser_action(username, encodedToken));
  };
  const navigateToUserProfile = () => {
    navigate(`/user/${username}`);
  };
  return (
    <div
      onClick={() => navigateToUserProfile()}
      className="flex cursor-pointer bg-white justify-between py-2 items-center shadow-inner rounded-md dark:bg-darkPrimary px-2 border-2 dark:text-white"
    >
      <div className="flex items-center gap-3 py-3 h-9 px-2  ">
        <ProfilePic username={username} profileImage={profileImage} />
        <div className="    ">
          <p className="font-bold">@{username}</p>
          <p
            className="text-gray-400 text-sm 
          "
          >
            {firstName + " " + lastName}
          </p>
        </div>
      </div>
      {isFollowed ? (
        <button
          onClick={(e) => unfollowThisUser(e)}
          className="shadow-gray-500 w-[5rem] text-sm font-bold border-2  p-1  hover:bg-lightBackground/80 transition-all rounded-xl shadow-md"
        >
          Unfollow
        </button>
      ) : (
        <button
          onClick={(e) => followThisUser(e)}
          className="shadow-gray-500 w-[5rem] text-sm font-bold border-2  p-1  hover:bg-lightBackground/80 transition-all rounded-xl shadow-md"
        >
          Follow
        </button>
      )}
    </div>
  );
};

export { FollowUnfollowCard };
