import React from "react";
import { useSelector } from "react-redux";
import { BookMarksPost } from "../../component/BookMarks/BookMarksPost";
import { EmptyPost } from "../../GeneralComponent/EmptyPost";
const BookMarkPage = () => {
  const bookMarkedPosts = useSelector((state) => state.bookmark.bookMarkPosts);
  const noBookMarkToShow = Boolean(bookMarkedPosts?.length);

  return (
    <main>
      {!noBookMarkToShow && (
        <EmptyPost message={"You havenot Bookmarked any post"} />
      )}
      {noBookMarkToShow && <BookMarksPost />}
    </main>
  );
};

export { BookMarkPage };
