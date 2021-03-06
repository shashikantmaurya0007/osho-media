import React from "react";
import { useSelector } from "react-redux";
import { useInfiniteScroll } from "../../GeneralCustomHook/useInfiniteScroll.js";
import { PostCard } from "../PostCard/PostCard.jsx";
import { FilterFeedPost } from "./FilterFeedPost.jsx";
import { PostLoader } from "./PostLoader.jsx";

const FeedPost = () => {
  const allPosts = useSelector((state) => state.post.allPost);
  const { username, following } = useSelector(
    (state) => state.login.userInformation
  );
  const filterSelected = useSelector((state) => state.filter.filterSelected);
  const followedByuser = following?.map((ele) => ele.username);

  let feedPosts = allPosts
    .filter(
      (post) =>
        post?.username === username || followedByuser.includes(post?.username)
    )
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  if (Boolean(filterSelected)) {
    if (filterSelected === "old_first")
      feedPosts = feedPosts?.sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );
    if (filterSelected === "trending") {
      feedPosts = feedPosts?.sort(
        (a, b) => b.likes.likeCount - a.likes.likeCount
      );
    }
  }

  const { loading, lastElementReference, pageNumber } =
    useInfiniteScroll(feedPosts);
  feedPosts = feedPosts.slice(0, pageNumber * 3);
  return (
    <div className="flex flex-col gap-6 my-6">
      <FilterFeedPost />
      {feedPosts?.map((ele) => (
        <PostCard key={ele?._id} postdata={ele} />
      ))}
      <div ref={lastElementReference}></div>
      {loading && <PostLoader />}
    </div>
  );
};

export { FeedPost };
