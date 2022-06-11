import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { PostCard } from "../../component/PostCard/PostCard";
import { EmptyPost } from "../../GeneralComponent/EmptyPost";
import { PostCardComment } from "./PostCardComment";
const SinglePostPage = () => {
  const { postId } = useParams();
  const allPosts = useSelector((state) => state.post.allPost);
  const postdata = allPosts.find((post) => post?._id === postId);

  return (
    <div>
      {postdata && <PostCard postdata={postdata} />}
      {postdata && <PostCardComment postdata={postdata} />}
      {!postdata && (
        <EmptyPost
          message={
            "This is correct url you cant see the post becaue its a mock server using uuid"
          }
        />
      )}
    </div>
  );
};

export { SinglePostPage };
