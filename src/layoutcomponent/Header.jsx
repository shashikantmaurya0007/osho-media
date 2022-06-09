import React from "react";
import ShareLocationTwoToneIcon from "@mui/icons-material/ShareLocationTwoTone";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import { useDispatch, useSelector } from "react-redux";
import { themeAction } from "../store/Theme/theme-slice";
import { NavLink, useNavigate } from "react-router-dom";
import { useManageTheme } from "../GeneralCustomHook/useManageTheme";
import { followCursor } from "tippy.js";
import { TipsyContent } from "./TipsyContent";
import Tippy from "@tippyjs/react";
import { ProfilePic } from "../GeneralComponent/ProfilePic";
const Header = () => {
  const dispatch = useDispatch();
  useManageTheme();
  const themeSelected = useSelector((state) => state.theme.themeselected);
  const navigate = useNavigate();
  const manageTheme = () => {
    if (themeSelected === "light") {
      localStorage.setItem("theme", "dark");
      dispatch(themeAction.setDarkTheme());
    }
    if (themeSelected === "dark") {
      localStorage.setItem("theme", "light");
      dispatch(themeAction.setLightTheme());
    }
  };
  const { userInformation, isLogin } = useSelector((state) => state.login);
  const navigateToUerProfile = () => {
    navigate(`/user/${userInformation.username}`);
  };

  return (
    <nav className="flex h-14 items-center sticky top-0 backdrop-blur-sm  justify-between px-7 bg-lightBackground/80 dark:bg-darkSecondary/80 z-10">
      <NavLink to={"/"}>
        <div className="text-xl tracking-wide font-bold dark:text-white">
          OshoShare
          <ShareLocationTwoToneIcon />
        </div>
      </NavLink>
      <div className="flex justify-center items-center ">
        <Tippy
          content={<TipsyContent hoverContent={"Theme"} />}
          followCursor={true}
          plugins={[followCursor]}
        >
          <button
            onClick={() => manageTheme()}
            data-tooltip="change-theme"
            className="hover:bg-lightHover hover:text-white text-lightSecondary transition-all duration-75 p-1 rounded-sm mx-3  "
          >
            {themeSelected === "light" ? <NightsStayIcon /> : <WbSunnyIcon />}
          </button>
        </Tippy>
        {isLogin && (
          <Tippy
            content={<TipsyContent hoverContent={"Profile"} />}
            followCursor={true}
            plugins={[followCursor]}
          >
            <div
              onClick={() => navigateToUerProfile()}
              className="cursor-pointer"
            >
              <ProfilePic
                username={userInformation.username}
                profileImage={userInformation.profileImage}
              />
            </div>
          </Tippy>
        )}
      </div>
    </nav>
  );
};

export default Header;
