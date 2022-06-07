import React from "react";
import { useSelector } from "react-redux";
import { SuggestionFollowCard } from "../FollowUnfollowCard/SuggestionFollowCard";

const FollowersSuggestion = () => {
  const allUsers = useSelector((state) => state.user.userData);
  const { following, username } = useSelector(
    (state) => state.login.userInformation
  );
  const followingusername = following.map((ele) => ele.username);

  const userNotFollowed = allUsers
    ?.filter(
      (ele) =>
        !followingusername.includes(ele.username) && ele.username !== username
    )
    .splice(0, 3);
  console.log(userNotFollowed, "usernotfollowed");
  return (
    <div className="right-aside dark:text-white flex flex-col overflow-y-scroll sticky top-20 h-[14rem] bg-white shadow-lg w-72 mr-[8rem] hidden dark:bg-darkSecondary rounded-lg lg:block">
      <h5 className="text-center text-sm font-semibold text-gray-400">
        Users you might know
      </h5>
      <div className="flex flex-col gap-3 p-2 ">
        {userNotFollowed?.map((ele) => (
          <SuggestionFollowCard key={ele?._id} user={ele} />
        ))}
      </div>
    </div>
  );
};

export { FollowersSuggestion };
