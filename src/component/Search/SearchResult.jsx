import React from "react";
import { useSelector } from "react-redux";
import { FollowUnfollowCard } from "../../FollowUnfollowCard/FollowUnfollowCard";

const SearchResult = ({ searchInput }) => {
  const isValidSearch = Boolean(searchInput.trim());
  const allUsers = useSelector((state) => state.user.userData);
  console.log(allUsers);
  return (
    <div>
      {isValidSearch && <h1>validseaarch</h1>}
      {!isValidSearch && (
        <div className="flex flex-col gap-3 my-5">
          {allUsers?.map((ele) => (
            <FollowUnfollowCard key={ele._id} user={ele} />
          ))}
        </div>
      )}
    </div>
  );
};

export { SearchResult };
