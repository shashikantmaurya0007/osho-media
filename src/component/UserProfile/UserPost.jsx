import React from "react";
import { useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";
import { EmptyPost } from "../../GeneralComponent/EmptyPost";
import { PostCard } from "../PostCard/PostCard";
const UserPost = () => {
  const { username } = useOutletContext();
  const userPost = useSelector((state) => state.post.allPost).filter(
    (ele) => ele.username === username
  );
  const noPost = !Boolean(userPost?.length);
  console.log(noPost);
  return (
    <>
      {noPost && <EmptyPost message={`No post by @${username} `} />}
      {!noPost && (
        <div className="flex flex-col gap-6 my-6">
          {userPost?.map((post) => (
            <PostCard key={post?._id} postdata={post} />
          ))}
        </div>
      )}
    </>
  );
};

export { UserPost };
