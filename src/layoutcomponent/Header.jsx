import React from "react";
import ShareLocationTwoToneIcon from "@mui/icons-material/ShareLocationTwoTone";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import { useDispatch, useSelector } from "react-redux";
import { themeAction } from "../store/Theme/theme-slice";
import { NavLink } from "react-router-dom";
import { useManageTheme } from "../GeneralCustomHook/useManageTheme";
const Header = () => {
  const dispatch = useDispatch();
  useManageTheme();
  const themeSelected = useSelector((state) => state.theme.themeselected);
  console.log(useSelector((state) => state));
  const manageTheme = () => {
    console.log(typeof themeSelected, typeof "light");
    console.log(themeSelected == "light");
    if (themeSelected === "light") {
      debugger;
      localStorage.setItem("theme", "dark");
      dispatch(themeAction.setDarkTheme());
    }
    if (themeSelected === "dark") {
      debugger;
      localStorage.setItem("theme", "light");
      dispatch(themeAction.setLightTheme());
    }
  };

  return (
    <nav className="flex h-14 items-center sticky top-0 backdrop-blur-sm  justify-between px-7 bg-lightBackground/80 dark:bg-darkSecondary/80">
      <NavLink to={"/"}>
        <div className="text-xl tracking-wide font-bold dark:text-white">
          OshoShare
          <ShareLocationTwoToneIcon />
        </div>
      </NavLink>
      <div className="flex justify-center items-center ">
        <div
          onClick={() => manageTheme()}
          className="hover:bg-lightHover hover:text-white text-lightSecondary transition-all duration-75 p-1 rounded-sm mx-3"
        >
          {themeSelected === "light" ? <NightsStayIcon /> : <WbSunnyIcon />}
        </div>
        <div class=" flex -space-x-2 overflow-hidden">
          <img
            class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
