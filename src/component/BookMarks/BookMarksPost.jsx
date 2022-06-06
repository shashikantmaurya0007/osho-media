import React from "react";
import { useSelector } from "react-redux";
import { PostCard } from "../PostCard/PostCard";

const BookMarksPost = () => {
  const allPosts = useSelector((state) => state.post.allPost);
  const bookmarkedIds = useSelector((state) => state.bookmark.bookMarkPosts);
  const bookMarkedPosts = allPosts?.filter((postData) =>
    bookmarkedIds.includes(postData._id)
  );
  console.log(bookMarkedPosts);
  return (
    <div className="flex flex-col gap-6 mb-6">
      {bookMarkedPosts?.map((ele) => (
        <PostCard key={ele?._id} postdata={ele} />
      ))}
    </div>
  );
};

export { BookMarksPost };
