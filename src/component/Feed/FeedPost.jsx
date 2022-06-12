import React from "react";
import { useSelector } from "react-redux";
import { PostCard } from "../PostCard/PostCard.jsx";

const FeedPost = () => {
  const allPosts = useSelector((state) => state.post.allPost);
  const { username, following } = useSelector(
    (state) => state.login.userInformation
  );
  const followedByuser = following.map((ele) => ele.username);
  debugger;
  const feedPosts = allPosts?.filter(
    (post) =>
      post?.username === username || followedByuser.includes(post?.username)
  );

  return (
    <div className="flex flex-col gap-6 my-6">
      {feedPosts?.map((ele) => (
        <PostCard key={ele?._id} postdata={ele} />
      ))}
    </div>
  );
};

export { FeedPost };
