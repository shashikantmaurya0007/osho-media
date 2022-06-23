import React from "react";
import { useSelector } from "react-redux";
import { ExplorePost } from "../../component/Explore/ExplorePost";
import { EmptyPost } from "../../GeneralComponent/EmptyPost";

const ExplorePage = () => {
  const allPosts = useSelector((state) => state.post.allPost);
  const { username } = useSelector((state) => state.login.userInformation);
  const explorePosts = allPosts?.filter((post) => post?.username !== username);
  const isExplrePostEmpty = !Boolean(explorePosts?.length);
  return (
    <main>
      {isExplrePostEmpty && (
        <EmptyPost message={"Share this app to get users"} />
      )}
      {!isExplrePostEmpty && <ExplorePost />}
    </main>
  );
};

export { ExplorePage };
