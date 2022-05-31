import React from "react";
import { Outlet } from "react-router-dom";
import { FollowersSuggestion } from "../../layoutcomponent/FollowersSuggestion";
import { NavigationMenu } from "../../layoutcomponent/NavigationMenu";

const SideBarLayoutPage = () => {
  return (
    <div className="grid-container">
      <NavigationMenu />
      <div className="main shadow-lg">
        <Outlet />
      </div>
      <FollowersSuggestion />
    </div>
  );
};

export { SideBarLayoutPage };
