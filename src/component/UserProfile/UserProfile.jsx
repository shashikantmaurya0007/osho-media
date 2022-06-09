import React from "react";
import { UserInformation } from "./UserInformation";

const UserProfile = ({ userData }) => {
  return (
    <div className="mb-9">
      <UserInformation userData={userData} />
    </div>
  );
};

export { UserProfile };
