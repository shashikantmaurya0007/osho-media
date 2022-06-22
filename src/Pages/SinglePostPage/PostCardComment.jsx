import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../store/Comments/add-comment";
import { CommentsCard } from "./CommentsCard";

const PostCardComment = ({ postdata }) => {
  const commentRef = useRef(null);
  const encodedToken = useSelector((state) => state.login.encodedToken);
  const { comments } = postdata;
  const dispatch = useDispatch();
  const addCommentToPost = () => {
    if (commentRef.current.value === "") return;

    dispatch(addComment(postdata, commentRef.current.value, encodedToken));
    commentRef.current.value = "";
  };
  return (
    <div className="shadow-inner bg-sky-50 dark:text-white   dark:bg-darkBackground rounded-md">
      <div className="flex gap-2 py-3">
        <input
          ref={commentRef}
          type="text"
          max={12}
          placeholder="add "
          className="w-full rounded-md outline-none shadow-2xl dark:bg-darkSecondary dark:text-white"
        />
        <button
          onClick={() => addCommentToPost()}
          className="flex font-bold text-sm justify-center text-center gap-3 px-1 dark:text-white dark:bg-darkSecondary items-center shadow-gray-500 border-2  hover:bg-lightBackground/80 transition-all rounded-xl shadow-md  py-1"
        >
          Comment
        </button>
      </div>
      <div className="flex flex-col gap-4 bg-sky-50 dark:bg-darkBackground">
        {comments.map?.((ele) => (
          <CommentsCard ele={ele} />
        ))}
      </div>
    </div>
  );
};

export { PostCardComment };
