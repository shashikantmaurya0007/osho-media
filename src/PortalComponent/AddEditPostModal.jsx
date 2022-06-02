import React, { useRef, useState } from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import SentimentSatisfiedTwoToneIcon from "@mui/icons-material/SentimentSatisfiedTwoTone";
import AddPhotoAlternateTwoToneIcon from "@mui/icons-material/AddPhotoAlternateTwoTone";
import Picker, { SKIN_TONE_MEDIUM_DARK } from "emoji-picker-react";
import { useDispatch, useSelector } from "react-redux";
import { useOnClickOutside } from "../GeneralCustomHook/useOnClickOutside";
import { addEditPostAction } from "../store/PostModal/postmodal-slice";
import { followCursor } from "tippy.js";
import { TipsyContent } from "../layoutcomponent/TipsyContent";
import Tippy from "@tippyjs/react";
import { useDebounce } from "../GeneralCustomHook/useDebounce";
import { toast } from "react-toastify";
import { LineAxisOutlined } from "@mui/icons-material";
const AddEditPostModal = () => {
  const [content, setContent] = useState("");

  const [mediaLoading, setMediaLoading] = useState(false);

  const [postImage, setPostImage] = useState(null);
  const ref = useRef(null);
  const [showEmoticon, setShowEmoticon] = useState(false);
  const dispatch = useDispatch();
  const onEmojiClick = (event, emojiObject) => {
    // setEmojiSelected(emojiObject.emoji);
    if (content.trim().length >= 150) return;
    setContent((prev) => prev + emojiObject.emoji);
  };

  const addContent = (value) => {
    setContent(value);
  };

  const hideAndShowEmoticon = () => setShowEmoticon((prev) => !prev);
  const modalOpen = useSelector((state) => state.addEditPost.modalOpen);
  const modalClose = () =>
    dispatch(addEditPostAction.setAddEditPostModalClose());
  useOnClickOutside(ref, modalClose);

  const handleImageSelectedForPost = async (e) => {
    console.log(e.target);
    const fileSize = Math.floor(e.target.files[0].size / 1000000);

    if (fileSize > 3) {
      toast.info(`!your file size should be less than 3mb `);
      return;
    }

    try {
      setMediaLoading(true);
      const postMediaData = new FormData();
      postMediaData.append("file", e.target.files[0]);
      console.log(
        process.env.REACT_APP_CLOUD_NAME,
        process.env.REACT_APP_CLOUD_PRESET
      );
      postMediaData.append("upload_preset", process.env.REACT_APP_CLOUD_PRESET);
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: postMediaData,
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

  const addUsersPost = (e) => {
    e.preventDefault();

    alert(content + postImage);
  };
  if (!modalOpen) return null;

  return ReactDOM.createPortal(
    <main className="fixed top-0 left-0 right-0 bottom-0 backdrop-blur-[2px] flex justify-center  z-[11] ">
      <form
        ref={ref}
        onSubmit={(e) => {
          addUsersPost(e);
        }}
        className="relative flex flex-col top-20 shadow-lg bg-white blur-0   h-max  w-96 mx-auto dark:bg-darkPrimary rounded-lg dark:text-white"
      >
        <textarea
          rows={7}
          value={content}
          maxLength={150}
          onChange={(e) => {
            addContent(e.target.value);
          }}
          placeholder="whats your thought for today?"
          className=" m-4  resize-none cursor-text p-[5px] rounded-md outline-none dark:bg-darkSecondary"
        ></textarea>
        <h1>{mediaLoading && "Loading..."}hello</h1>
        {console.log(mediaLoading)}
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
                  onChange={handleImageSelectedForPost}
                  className="invisible hidden "
                />
              </label>
            </Tippy>
            <h5>{content.trim().length}/150</h5>
          </div>
          <div className="flex gap-4">
            <button
              type="button"
              className="border-2 min-w-[60px] p-1 rounded-md hover:text-white hover:bg-darkHover  border-darkHover"
            >
              Cancel
            </button>
            <button
              disabled={!Boolean(content || postImage)}
              className=" p-1 min-w-[60px] rounded-md bg-darkHover hover:bg-opacity-80 transition-all"
            >
              Add
            </button>
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
