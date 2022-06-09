import React from "react";
import { UserInformation } from "./UserInformation";

const UserProfile = ({ userData }) => {
  const { username } = userData;
  return (
    <div>
      <UserInformation userData={userData} />
    </div>
  );
};

export { UserProfile };
