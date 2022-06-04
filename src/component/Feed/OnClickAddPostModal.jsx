import React from "react";
import { ProfilePic } from "../../GeneralComponent/ProfilePic";
import { useDispatch, useSelector } from "react-redux";
import { addEditPostAction } from "../../store/PostModal/postmodal-slice";
const OnClickAddPostModal = () => {
  const dispatch = useDispatch();
  const { username, profileImage } = useSelector(
    (state) => state.login.userInformation
  );

  const showAddorEditPostModal = () => {
    dispatch(addEditPostAction.setAddEditPostModalOpen());
  };
  console.log(username, profileImage);
  return (
    <section
      onClick={() => showAddorEditPostModal()}
      className="bg-white p-2 shadow-md cursor-pointer rounded-md dark:bg-darkPrimary"
    >
      <div className="flex gap-3">
        <ProfilePic username={username} profileImage={profileImage} />
        <textarea
          rows={1}
          maxLength={10}
          placeholder="whats your thought for today?"
          className="h-[2.3rem] flex-1  mb-2 shadow-md cursor-pointer resize-none p-[5px] rounded-md outline-none border-0 dark:bg-darkSecondary"
        ></textarea>
      </div>
    </section>
  );
};

export { OnClickAddPostModal };
