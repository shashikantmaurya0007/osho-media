import React from "react";

import { FollowUnfollowCard } from "../../FollowUnfollowCard/FollowUnfollowCard";

const SearchResult = ({ searchInput, allUsers }) => {
  const isValidSearch = Boolean(searchInput.trim());

  let searchedUser = [];
  if (isValidSearch) {
    searchedUser = allUsers.filter((ele) =>
      ele.username.toLowerCase().includes(searchInput.toLowerCase().trim())
    );
  }
  const resultRecievedForSearch = Boolean(searchedUser.length);
  return (
    <div>
      {isValidSearch && (
        <div className="flex flex-col gap-3 my-5">
          {!resultRecievedForSearch && (
            <h5 className="text-center font-bold dark:text-white ">
              No user exist for "{searchInput}"
            </h5>
          )}
          {resultRecievedForSearch &&
            searchedUser?.map((ele) => (
              <FollowUnfollowCard key={ele._id} user={ele} />
            ))}
        </div>
      )}
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
