import React from "react";
import { NavLink } from "react-router-dom";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import ScreenSearchDesktopTwoToneIcon from "@mui/icons-material/ScreenSearchDesktopTwoTone";
import ExploreTwoToneIcon from "@mui/icons-material/ExploreTwoTone";
import BookmarksTwoToneIcon from "@mui/icons-material/BookmarksTwoTone";
import ManageAccountsTwoToneIcon from "@mui/icons-material/ManageAccountsTwoTone";
const NavigationMenu = () => {
  return (
    <aside className="left-aside dark:text-white bg-white rounded-md shadow-lg w-64 ml-16 p-3 sticky top-20 hidden sm:block h-96 dark:bg-darkSecondary ">
      <ul className=" flex flex-col gap-2">
        <NavLink to={"/feed"}>
          <li className="flex gap-3 pl-14 items-center shadow-gray-500 border-2  hover:bg-lightBackground/80 transition-all rounded-xl shadow-md  py-1">
            <HomeTwoToneIcon /> <h5 className="font-semibold">Feed</h5>
          </li>
        </NavLink>
        <NavLink to={"/search"}>
          <li className="flex gap-3 pl-14 items-center shadow-gray-500 border-2  hover:bg-lightBackground/80 transition-all rounded-xl shadow-md  py-1 ">
            <ScreenSearchDesktopTwoToneIcon />{" "}
            <h5 className="font-semibold">Search</h5>
          </li>
        </NavLink>
        <NavLink to={"/explore"}>
          <li className="flex gap-3 pl-14 items-center shadow-gray-500  border-2  hover:bg-lightBackground/80 transition-all rounded-xl shadow-md  py-1 ">
            <ExploreTwoToneIcon /> <h5 className="font-semibold">Explore</h5>
          </li>
        </NavLink>
        <NavLink to={"/bookmarks"}>
          <li className="flex gap-3 pl-14 items-center shadow-gray-500  border-2  hover:bg-lightBackground/80 transition-all rounded-xl shadow-md  py-1 ">
            <BookmarksTwoToneIcon />{" "}
            <h5 className="font-semibold">Bookmarks</h5>
          </li>
        </NavLink>
        <NavLink to={"/profile"}>
          <li className="flex gap-3 pl-14 items-center shadow-gray-500  border-2  hover:bg-lightBackground/80 transition-all rounded-xl shadow-md  py-1 ">
            <ManageAccountsTwoToneIcon />{" "}
            <h5 className="font-semibold">Profile</h5>
          </li>
        </NavLink>
      </ul>
    </aside>
  );
};

export { NavigationMenu };
