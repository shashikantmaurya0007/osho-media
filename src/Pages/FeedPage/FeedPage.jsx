import React from "react";
import { OnClickAddPostModal } from "../../component/Feed/OnClickAddPostModal";
import { FeedPost } from "../../component/Feed/FeedPost";
import { useSelector } from "react-redux";
import { EmptyPost } from "../../GeneralComponent/EmptyPost";
const FeedPage = () => {
  const allPosts = useSelector((state) => state.post.allPost);
  const { username, following } = useSelector(
    (state) => state.login.userInformation
  );
  const followedByuser = following?.map((ele) => ele.username);

  let feedPosts = allPosts.filter(
    (post) =>
      post?.username === username || followedByuser.includes(post?.username)
  );
  const isFeedPostEmpty = !Boolean(feedPosts?.length);
  return (
    <main>
      <OnClickAddPostModal />
      {isFeedPostEmpty && (
        <EmptyPost message={"Add Post or Follow user to  show here"} />
      )}
      {!isFeedPostEmpty && <FeedPost />}
    </main>
  );
};

export { FeedPage };
