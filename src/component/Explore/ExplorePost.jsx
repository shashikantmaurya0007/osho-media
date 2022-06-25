import React from "react";
import { useSelector } from "react-redux";
import { useInfiniteScroll } from "../../GeneralCustomHook/useInfiniteScroll";
import { PostLoader } from "../Feed/PostLoader";
import { PostCard } from "../PostCard/PostCard";

const ExplorePost = () => {
  const allPosts = useSelector((state) => state.post.allPost);
  const { username } = useSelector((state) => state.login.userInformation);
  let explorePosts = allPosts
    ?.filter((post) => post?.username !== username)
    ?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  const { loading, lastElementReference, pageNumber } =
    useInfiniteScroll(explorePosts);
  explorePosts = explorePosts?.slice(0, pageNumber * 3);
  return (
    <div className="flex flex-col gap-6 my-6">
      {explorePosts?.map((ele) => (
        <PostCard key={ele?.id} postdata={ele} />
      ))}
      <div ref={lastElementReference}></div>

      {loading && <PostLoader />}
    </div>
  );
};

export { ExplorePost };
