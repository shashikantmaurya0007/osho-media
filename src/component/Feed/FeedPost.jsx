import React from "react";
import { useSelector } from "react-redux";
import { PostCard } from "../PostCard/PostCard.jsx";

const FeedPost = () => {
  const allPosts = useSelector((state) => state.post.allPost);

  return (
    <div className="flex flex-col gap-6 my-6">
      {allPosts.map((ele) => (
        <PostCard key={ele?._id} postdata={ele} />
      ))}
    </div>
  );
};

export { FeedPost };
