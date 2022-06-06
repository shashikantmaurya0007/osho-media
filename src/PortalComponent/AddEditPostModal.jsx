import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import CancelTwoToneIcon from "@mui/icons-material/CancelTwoTone";
import SentimentSatisfiedTwoToneIcon from "@mui/icons-material/SentimentSatisfiedTwoTone";
import AddPhotoAlternateTwoToneIcon from "@mui/icons-material/AddPhotoAlternateTwoTone";
import Picker, { SKIN_TONE_MEDIUM_DARK } from "emoji-picker-react";
import { useDispatch, useSelector } from "react-redux";
import { useOnClickOutside } from "../GeneralCustomHook/useOnClickOutside";
import { addEditPostAction } from "../store/PostModal/postmodal-slice";
import { followCursor } from "tippy.js";
import { TipsyContent } from "../layoutcomponent/TipsyContent";
import Tippy from "@tippyjs/react";
import { toast } from "react-toastify";
import { Loader } from "../GeneralComponent/Loader";
import { addPost } from "../store/Post/addPost";
import { updatePost } from "../store/Post/updatePost";

const AddEditPostModal = () => {
  const [content, setContent] = useState("");
  const inputFocus = useRef(null);
  const [mediaLoading, setMediaLoading] = useState(false);
  const encodedToken = useSelector((state) => state.login.encodedToken);
  const [postImage, setPostImage] = useState(null);
  const ref = useRef(null);
  const [showEmoticon, setShowEmoticon] = useState(false);
  const { modalOpenInEditMode, editPostId } = useSelector(
    (state) => state.addEditPost
  );
  const postToEdit = useSelector((state) => state.post.allPost).find(
    (post) => post._id === editPostId
  );
  const dispatch = useDispatch();

  const hideAndShowEmoticon = () => setShowEmoticon((prev) => !prev);
  const modalClose = () =>
    dispatch(addEditPostAction.setAddEditPostModalClose());
  useOnClickOutside(ref, modalClose);

  const onEmojiClick = (event, emojiObject) => {
    if (content.trim().length >= 200) return;
    setContent((prev) => prev + emojiObject.emoji);
  };

  const addContent = (value) => {
    setContent(value);
  };
  const handleImageSelectedForPost = async (e) => {
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
      setPostImage(url);
    } catch (error) {
      toast.error("try uploading image later!");
    } finally {
      setMediaLoading(false);
    }
  };

  const removeImage = () => {
    setPostImage(null);
  };
  const addUsersPost = async (e) => {
    e.preventDefault();
    if (modalOpenInEditMode) {
      const updatetdPost = { ...postToEdit, content, postImage };
      dispatch(updatePost(updatetdPost, encodedToken));
    } else dispatch(addPost({ content, postImage }, encodedToken));
  };
  useEffect(() => {
    inputFocus.current.focus();
  }, []);
  // if (!modalOpen) return;
  useEffect(() => {
    if (modalOpenInEditMode) {
      setContent(postToEdit.content);
      setPostImage(postToEdit.postImage);
    }
  }, [modalOpenInEditMode, postToEdit]);

  return ReactDOM.createPortal(
    <main className="fixed top-0 left-0 right-0 bottom-0 backdrop-blur-[2px] flex justify-center  z-[11] ">
      <form
        ref={ref}
        onSubmit={(e) => {
          addUsersPost(e);
        }}
        className="relative flex flex-col top-20 shadow-lg bg-white blur-0   h-max w-[22rem] md:w-96 mx-auto dark:bg-darkPrimary rounded-lg dark:text-white"
      >
        <textarea
          rows={5}
          ref={inputFocus}
          value={content}
          maxLength={200}
          onChange={(e) => {
            addContent(e.target.value);
          }}
          placeholder="whats your thought for today?"
          className=" m-4 mb-2 w-[20rem] md:w-[22rem] resize-none cursor-text p-[5px] rounded-md outline-none border-0 dark:bg-darkSecondary"
        ></textarea>
        <div className="mx-auto mb-1">
          {mediaLoading && <Loader />}{" "}
          {!mediaLoading && postImage && (
            <div className="h-48 w-48 relative">
              <img
                src={postImage}
                alt={"content_image"}
                className="object-contain h-48 w-48 "
              />
              <Tippy
                content={<TipsyContent hoverContent={"Remove Image"} />}
                followCursor={true}
                plugins={[followCursor]}
              >
                <button
                  type="button"
                  onClick={() => removeImage()}
                  className="absolute top-[-0.1rem] right-[-1.4rem] hover:text-lightHover"
                >
                  <CancelTwoToneIcon />
                </button>
              </Tippy>
            </div>
          )}
        </div>
        <div className="flex justify-between px-3 pb-2">
          <div className="flex gap-3 items-center ">
            <Tippy
              content={<TipsyContent hoverContent={"Add emoticon"} />}
              followCursor={true}
              plugins={[followCursor]}
            >
              <button type="button" onClick={() => hideAndShowEmoticon()}>
                <SentimentSatisfiedTwoToneIcon />
              </button>
            </Tippy>
            <Tippy
              content={<TipsyContent hoverContent={"Add image"} />}
              followCursor={true}
              plugins={[followCursor]}
            >
              <label htmlFor="input_file" className="cursor-pointer">
                <AddPhotoAlternateTwoToneIcon />
                <input
                  id="input_file"
                  type="file"
                  accept="image/*"
                  onChange={handleImageSelectedForPost}
                  className="invisible hidden "
                />
              </label>
            </Tippy>
            <h5>{content.trim().length}/200</h5>
          </div>
          <div className="flex gap-4">
            <button
              type="button"
              className="border-2 min-w-[60px] p-1 rounded-md hover:text-white hover:bg-darkHover  border-darkHover"
            >
              Cancel
            </button>
            {!modalOpenInEditMode && (
              <button
                disabled={!Boolean(content || postImage)}
                className=" p-1 min-w-[60px] rounded-md bg-darkHover hover:bg-opacity-80 transition-all"
              >
                Add
              </button>
            )}
            {modalOpenInEditMode && (
              <button
                disabled={!Boolean(content || postImage)}
                className=" p-1 min-w-[60px] rounded-md bg-darkHover hover:bg-opacity-80 transition-all"
              >
                update
              </button>
            )}
          </div>
        </div>
        {showEmoticon && (
          <div className="absolute bottom-[-1.2rem]">
            <Picker
              onEmojiClick={onEmojiClick}
              disableAutoFocus={true}
              skinTone={SKIN_TONE_MEDIUM_DARK}
              groupNames={{ smileys_people: "PEOPLE" }}
              native
              pickerStyle={{ position: "absolute", top: "-1rem" }}
            />
          </div>
        )}
      </form>
    </main>,
    document.getElementById("addEditPostModal")
  );
};

export { AddEditPostModal };
