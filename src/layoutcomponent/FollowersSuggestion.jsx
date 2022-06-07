import React from "react";
import { useSelector } from "react-redux";

const FollowersSuggestion = () => {
  const allUsers = useSelector((state) => state.user.userData);
  const { following, username } = useSelector(
    (state) => state.login.userInformation
  );
  const followingusername = following.map((ele) => ele.username);

  const userNotFollowed = allUsers?.filter(
    (ele) =>
      !followingusername.includes(ele.username) && ele.username !== username
  );

  return (
    <div className="right-aside sticky top-20 h-[14rem] bg-white shadow-lg w-64 mr-[8rem] hidden dark:bg-darkSecondary lg:block">
      FollowersSuggestion
      {userNotFollowed?.map((ele) => (
        <h1>{ele.firstName}</h1>
      ))}
    </div>
  );
};

export { FollowersSuggestion };
