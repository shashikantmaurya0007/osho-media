import React from "react";
import { UserInformation } from "./UserInformation";

const UserProfile = ({ userData }) => {
  return (
    <div>
      <UserInformation userData={userData} />
    </div>
  );
};

export { UserProfile };
