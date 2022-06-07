import React from "react";
import { OnClickAddPostModal } from "../../component/Feed/OnClickAddPostModal";
import { FeedPost } from "../../component/Feed/FeedPost";
import { useSelector } from "react-redux";
import { EmptyPost } from "../../GeneralComponent/EmptyPost";
const FeedPage = () => {
  const allPosts = useSelector((state) => state.post.allPost);
  const { username } = useSelector((state) => state.login.userInformation);
  const feedPosts = allPosts?.filter((post) => post?.username === username);
  const isFeedPostEmpty = !Boolean(feedPosts.length);
  return (
    <main>
      <OnClickAddPostModal />
      {isFeedPostEmpty && <EmptyPost message={"Add Post to show here"} />}
      {!isFeedPostEmpty && <FeedPost />}
    </main>
  );
};

export { FeedPage };
