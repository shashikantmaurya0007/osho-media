import React from "react";
import { NavLink } from "react-router-dom";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import ScreenSearchDesktopTwoToneIcon from "@mui/icons-material/ScreenSearchDesktopTwoTone";
import ExploreTwoToneIcon from "@mui/icons-material/ExploreTwoTone";
import BookmarksTwoToneIcon from "@mui/icons-material/BookmarksTwoTone";
import AddCircleTwoToneIcon from "@mui/icons-material/AddCircleTwoTone";
import { useDispatch } from "react-redux";
import { addEditPostAction } from "../store/PostModal/postmodal-slice";
const NavigationMobileMenu = () => {
  const dispatch = useDispatch();
  const showAddorEditPostModal = () => {
    dispatch(addEditPostAction.setAddEditPostModalOpen());
  };

  return (
    <aside className="fixed bottom-0  w-full dark:text-white backdrop-blur-md z-[11]  bg-white/80 rounded-md shadow-lg   block md:hidden   dark:bg-darkSecondary/80   ">
      <ul className=" flex child:flex-1 child:flex-end gap-2">
        <NavLink
          to={"/feed"}
          className={({ isActive }) =>
            isActive ? "bg-lightBackground/80 rounded-xl" : undefined
          }
        >
          <li className="flex  justify-center     items-center shadow-gray-500 border-2  hover:bg-lightBackground/80 transition-all rounded-xl shadow-md  py-1">
            <HomeTwoToneIcon />
          </li>
        </NavLink>
        <NavLink
          to={"/search"}
          className={({ isActive }) =>
            isActive ? "bg-lightBackground/80 rounded-xl" : undefined
          }
        >
          <li className="flex gap-3 justify-center items-center shadow-gray-500 border-2  hover:bg-lightBackground/80 transition-all rounded-xl shadow-md  py-1 ">
            <ScreenSearchDesktopTwoToneIcon />{" "}
          </li>
        </NavLink>
        <li className="flex gap-3 justify-center items-center  text-4xl dark:text-white ">
          <button onClick={() => showAddorEditPostModal()}>
            <AddCircleTwoToneIcon sx={{ fontSize: "2rem" }} />
          </button>
        </li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-lightBackground/80 rounded-xl" : undefined
          }
          to={"/explore"}
        >
          <li className="flex gap-3 justify-center items-center shadow-gray-500  border-2  hover:bg-lightBackground/80 transition-all rounded-xl shadow-md  py-1 ">
            <ExploreTwoToneIcon />
          </li>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-lightBackground/80 rounded-xl" : undefined
          }
          to={"/bookmarks"}
        >
          <li className="flex gap-3 justify-center items-center shadow-gray-500  border-2  hover:bg-lightBackground/80 transition-all rounded-xl shadow-md  py-1 ">
            <BookmarksTwoToneIcon />{" "}
          </li>
        </NavLink>
      </ul>
    </aside>
  );
};

export { NavigationMobileMenu };
