import React from "react";
import { OnClickAddPostModal } from "../../component/Feed/OnClickAddPostModal";
import { FeedPost } from "../../component/Feed/FeedPost";
const FeedPage = () => {
  return (
    <main className="">
      <OnClickAddPostModal />

      <FeedPost />
    </main>
  );
};

export { FeedPage };
