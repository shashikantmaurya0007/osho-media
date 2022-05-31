import React from "react";
import { NavLink } from "react-router-dom";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
const NavigationMenu = () => {
  return (
    <aside className="left-aside shadow-lg  p-3  ">
      <ul>
        <NavLink to={"/feed"}>
          <li className="flex  bg-lightBackground ">
            <HomeTwoToneIcon /> <h5 className="font-semibold">Feed</h5>
          </li>
        </NavLink>
      </ul>
    </aside>
  );
};

export { NavigationMenu };
