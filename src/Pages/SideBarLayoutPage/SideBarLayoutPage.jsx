import React from "react";
import { Outlet } from "react-router-dom";
import { FollowersSuggestion } from "../../layoutcomponent/FollowersSuggestion";
import { NavigationMenu } from "../../layoutcomponent/NavigationMenu";

const SideBarLayoutPage = () => {
  return (
    <div className="flex gap-4 mt-8">
      <NavigationMenu />
      <div className="main flex-1 shadow-lg mx-4 min-h-screen">
        <Outlet />
      </div>
      <FollowersSuggestion />
    </div>
  );
};

export { SideBarLayoutPage };
