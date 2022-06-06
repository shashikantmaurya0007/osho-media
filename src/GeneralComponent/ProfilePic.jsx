import React from "react";

const ProfilePic = ({ username, profileImage }) => {
  return (
    <>
      {profileImage && (
        <img
          className={`h-[2.3rem] w-[2.3rem] flex justify-center items-center rounded-full font-extrabold uppercase bg-darkHover`}
          src={profileImage}
          alt="profile_image"
        />
      )}
      {!profileImage && (
        <div
          className={`h-[2.3rem] w-[2.3rem] flex justify-center items-center rounded-full font-extrabold uppercase bg-darkHover`}
        >
          {username && username[0]}
        </div>
      )}
    </>
  );
};

export { ProfilePic };
