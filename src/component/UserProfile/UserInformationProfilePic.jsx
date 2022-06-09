import React from "react";

const UserInformationProfilePic = ({ username, profileImage }) => {
  return (
    <div className=" w-[6rem] absolute bottom-[-2rem] left-[calc(50%-3rem)]">
      {profileImage && (
        <img
          className={`h-[6rem] w-[6rem] flex justify-center items-center rounded-full border-4 border-white font-extrabold uppercase bg-darkHover`}
          src={profileImage}
          alt="profile_image"
        />
      )}
      {!profileImage && (
        <div
          className={`h-[6rem] w-[6em] text-[1rem] flex justify-center items-center rounded-full font-extrabold uppercase border-4 border-white bg-darkHover`}
        >
          {username && username[0]}
        </div>
      )}
    </div>
  );
};

export { UserInformationProfilePic };
