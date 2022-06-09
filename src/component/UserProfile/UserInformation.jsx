import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, Outlet } from "react-router-dom";
import { UserInformationProfilePic } from "./UserInformationProfilePic";
import { followuser_action } from "../../store/User/followuser_action";
import { unfollowuser_action } from "../../store/User/unfollowuser_action";
import { loginActions } from "../../store/Auth/loginSlice";
import { toast } from "react-toastify";
const UserInformation = ({ userData }) => {
  const {
    firstName,
    lastName,
    bio,
    username,
    profileImage,
    followers,
    following,
    website,
    backgroundImage,
  } = userData;
  const userInformation = useSelector((state) => state.login.userInformation);
  console.log(userInformation);
  const followingUsername = userInformation.following.map(
    (ele) => ele.username
  );

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

  const userPosts = useSelector((state) => state.post.allPost).filter(
    (ele) => ele.username === username
  );
  const websiteExist = Boolean(website);
  const logOutUser = () => {
    dispatch(loginActions.logOutUser());
    toast.success("!logout successfull");
  };

  return (
    <div className="bg-white dark:bg-darkSecondary rounded-t-[1rem]">
      <div className="relative rounded-[1rem] ">
        {!backgroundImage && (
          <div className="h-52 w-full bg-darkHover rounded-md"></div>
        )}
        {backgroundImage && (
          <div className="h-52 w-full ">
            <img
              className="object-cover w-full h-52 rounded-[1rem] overflow-hidden"
              src={backgroundImage}
              alt=""
            />
          </div>
        )}
        <UserInformationProfilePic
          username={username}
          profileImage={profileImage}
        />
      </div>
      <div className=" relative mt-7 md:mt-2 pl-4 flex flex-col gap-1 dark:text-white dark:bg-darkSecondary">
        <p className="font-bold opacity-70">{firstName + " " + lastName}</p>
        <p className="font-bold opacity-70">@{username}</p>
        <p className="flex gap-2 items-center">
          <span className="font-bold"> bio:</span>
          <p className="text-sm font-semibold text-gray-400">{bio}</p>
        </p>
        <p className="flex gap-2 ">
          <span className="font-bold "> website:-</span>
          {websiteExist ? (
            <a
              className="text-darkHover hover:underline"
              href={website}
              target="_blank"
            >
              {website}
            </a>
          ) : (
            <p>Not exist</p>
          )}
        </p>
        <div className="flex gap-3 child:font-semibold  child-hover:text-gray-300   child-hover:transition-all ">
          <Link className="hover:underline" to={"post"}>
            {userPosts?.length} posts{" "}
          </Link>
          <Link className="hover:underline" to={"followers"}>
            {followers?.length} followers{" "}
          </Link>
          <Link className="hover:underline" to={"following"}>
            {following?.length} following
          </Link>
        </div>
        {userInformation.username === username ? (
          <div className="absolute w-[6rem] right-1 my-3">
            <button onClick={() => logOutUser()}>
              <li className="flex  justify-center absolute bottom-2 w-[6rem] py-1 hover:bg-red-400 rounded-md bg-red-500 font-semibold  text-white ">
                Logout
              </li>
            </button>
          </div>
        ) : (
          <div className="absolute right-1">
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
        )}
      </div>

      <div className="w-full child:font-bold dark:text-white flex justify-around child:flex-1 child:font-bold child-hover:transition-all child:border-[1px] child:text-center  child-hover:border-t-8 child-hover:border-t-darkHover child:rounded-t-xl child:p-2 mt-2 child:shadow-2xl">
        <NavLink
          className={({ isActive }) => (isActive ? " bg-darkHover" : undefined)}
          to={"followers"}
        >
          Followers
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? " bg-darkHover" : undefined)}
          to={"post"}
        >
          Post
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? " bg-darkHover" : undefined)}
          to={"following"}
        >
          Following
        </NavLink>
      </div>
      <div className="flex flex-col gap-6 bg-sky-50 dark:bg-darkBackground">
        <Outlet context={{ username, followers, following }} />
      </div>
    </div>
  );
};

export { UserInformation };
