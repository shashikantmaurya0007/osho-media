import React from "react";
import { useSelector } from "react-redux";
import { PostCard } from "../PostCard/PostCard";

const ExplorePost = () => {
  const allPosts = useSelector((state) => state.post.allPost);
  const { username } = useSelector((state) => state.login.userInformation);
  const explorePosts = allPosts?.filter((post) => post?.username !== username);

  return (
    <div className="flex flex-col gap-6 my-6">
      {explorePosts?.map((ele) => (
        <PostCard key={ele?.id} postdata={ele} />
      ))}
    </div>
  );
};

export { ExplorePost };
