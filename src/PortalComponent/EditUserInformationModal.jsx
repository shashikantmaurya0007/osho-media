import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";

import AddPhotoAlternateTwoToneIcon from "@mui/icons-material/AddPhotoAlternateTwoTone";
import RemoveCircleTwoToneIcon from "@mui/icons-material/RemoveCircleTwoTone";
import { UserInformationProfilePic } from "../component/UserProfile/UserInformationProfilePic";
import { toast } from "react-toastify";
import { editUserModalOpenActions } from "../store/EditUserModal/editusermodal-slice";

import { updateUserProfile } from "../store/Auth/edituser-action";
import { useOnClickOutside } from "../GeneralCustomHook/useOnClickOutside";
import { RotateLoader } from "react-spinners";

const EditUserInformationModal = () => {
  const {
    firstName,
    lastName,
    bio,
    username,
    profileImage,
    website,
    backgroundImage,
  } = useSelector((state) => state.login.userInformation);
  const allPost = useSelector((state) => state.post.allPost);
  const encodedToken = useSelector((state) => state.login.encodedToken);
  const [mediaLoading, setMediaLoading] = useState(false);
  const [editBackGroundImage, setEditBackGroundImage] = useState(
    backgroundImage || null
  );
  const ref = useRef(null);
  const [editProfileImage, setEditProfileImage] = useState(
    profileImage || null
  );
  const dispatch = useDispatch();
  const [updatedBio, setUpdatedBio] = useState(bio || null);
  const [updatedWebsite, setUpdatedWebsite] = useState(website || null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const cancelEditing = () => {
    dispatch(editUserModalOpenActions.setEditUserProfileClose());
  };
  const updateWebsite = (e) => {
    setUpdatedWebsite(e.target.value);
  };
  const updateBio = (e) => {
    setUpdatedBio(e.target.value);
  };
  const removeBackGround = () => {
    setEditBackGroundImage(null);
  };
  const removeProfileImage = () => setEditProfileImage(null);
  const handleImageSelectedForProfileImage = async (e) => {
    const fileSize = Math.floor(e.target.files[0].size / 1000000);

    if (fileSize > 3) {
      toast.info(`!your file size should be less than 3mb `);
      return;
    }
    try {
      setMediaLoading(true);
      const postData = new FormData();
      postData.append("file", e.target.files[0]);

      postData.append("upload_preset", process.env.REACT_APP_CLOUD_PRESET);
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: postData,
        }
      );

      const { url } = await response.json();
      setEditProfileImage(url);
    } catch (error) {
      toast.error("try uploading image later!");
    } finally {
      setMediaLoading(false);
    }
  };
  const handleImageSelectedForBackground = async (e) => {
    const fileSize = Math.floor(e.target.files[0].size / 1000000);

    if (fileSize > 3) {
      toast.info(`!your file size should be less than 3mb `);
      return;
    }
    try {
      setMediaLoading(true);
      const postData = new FormData();
      postData.append("file", e.target.files[0]);

      postData.append("upload_preset", process.env.REACT_APP_CLOUD_PRESET);
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: postData,
        }
      );

      const { url } = await response.json();
      setEditBackGroundImage(url);
    } catch (error) {
      toast.error("try uploading image later!");
    } finally {
      setMediaLoading(false);
    }
  };

  const updateUser = () => {
    dispatch(
      updateUserProfile(
        {
          bio: updatedBio,
          website: updatedWebsite,
          profileImage: editProfileImage,
          backgroundImage: editBackGroundImage,
        },
        encodedToken,
        allPost,
        username
      )
    );
    cancelEditing();
  };
  useOnClickOutside(ref, cancelEditing);

  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 right-0 bottom-0 backdrop-blur-sm ">
      <div
        ref={ref}
        className="bg-white w-[80%] backdrop-blur-md backdrop-brightness-150 md:backdrop-filter-none   fixed left-[10%] top-20 dark:bg-darkSecondary rounded-t-[1rem]"
      >
        <div className="backdrop-blur-md relative rounded-[1rem] ">
          {!editBackGroundImage && (
            <div className="h-52 w-full bg-darkHover rounded-md"></div>
          )}
          {editBackGroundImage && (
            <div className="h-52 w-full ">
              <img
                className="object-contain w-full h-52 rounded-[1rem] overflow-hidden"
                src={editBackGroundImage}
                alt=""
              />
            </div>
          )}
          <div>
            <UserInformationProfilePic
              username={username}
              profileImage={editProfileImage}
            />
            <div className=" absolute  right-[30%] bottom-[-3rem] dark:text-white ">
              <label htmlFor="input_file" className="cursor-pointer ">
                <AddPhotoAlternateTwoToneIcon />
                <input
                  id="input_file"
                  type="file"
                  accept="image/*"
                  onChange={handleImageSelectedForProfileImage}
                  className="invisible hidden "
                />
              </label>
              <button
                className="cursor-pointer"
                onClick={() => removeProfileImage()}
              >
                <RemoveCircleTwoToneIcon />
              </button>
            </div>
          </div>
          <div className=" absolute top-3 right-3 dark:text-white">
            <label htmlFor="input_files" className="cursor-pointer  ">
              <AddPhotoAlternateTwoToneIcon />
              <input
                id="input_files"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  handleImageSelectedForBackground(e);
                }}
                className="invisible hidden "
              />
            </label>
            <button onClick={() => removeBackGround()}>
              <RemoveCircleTwoToneIcon />
            </button>
          </div>
        </div>
        <div className=" relative mt-[3rem] md:mt-[3rem] pl-4 flex flex-col gap-1 dark:text-white dark:bg-darkSecondary">
          <p className="font-bold opacity-70">{firstName + " " + lastName}</p>
          <p className="font-bold opacity-70">@{username}</p>
          <p className="flex gap-2 items-center">
            <span className="font-bold w-[5rem]"> bio:</span>
            <input
              type="text"
              value={updatedBio}
              onChange={updateBio}
              className="w-full rounded-md outline-none shadow-2xl dark:bg-darkPrimary dark:text-white"
            ></input>
          </p>
          <p className="flex gap-2 ">
            <span className="font-bold "> website:-</span>
            <input
              type="text"
              onChange={updateWebsite}
              value={updatedWebsite}
              className="w-full rounded-md outline-none shadow-2xl dark:bg-darkPrimary dark:text-white"
            ></input>
          </p>
        </div>
        <div className="absolute flex gap-3 w-[6rem] right-[4.5rem]  my-3">
          <button onClick={() => cancelEditing()}>
            <li className="flex  justify-center  bottom-2 w-[6rem] py-1 hover:bg-red-400 rounded-md bg-red-500 font-semibold  text-white ">
              Cancel
            </li>
          </button>
          <button
            onClick={() => updateUser()}
            className="shadow-gray-500 dark:text-white w-[5rem] text-sm font-bold border-2  p-1  hover:bg-lightBackground/80 transition-all rounded-xl shadow-md"
          >
            Update
          </button>
        </div>
        {mediaLoading && (
          <div className="absolute top-0 left-0 bottom-0 backdrop-blur-[1px] right-0 flex justify-center items-center  ">
            <div className="text-blue-300">
              <RotateLoader color="#1E96FC" size={30} />
            </div>
          </div>
        )}
      </div>
    </div>,
    document.getElementById("editUserProfile")
  );
};

export { EditUserInformationModal };
