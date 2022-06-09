import React from "react";
import { useOutletContext } from "react-router-dom";
import { FollowUnfollowCard } from "../../FollowUnfollowCard/FollowUnfollowCard";
import { EmptyPost } from "../../GeneralComponent/EmptyPost";
const UserFollowers = () => {
  const { followers } = useOutletContext();
  const noFollowers = !Boolean(followers?.length);
  return (
    <>
      {noFollowers && <EmptyPost message={`No Followers! `} />}
      {!noFollowers && (
        <div className="flex flex-col gap-4 my-6">
          {followers?.map((ele) => (
            <FollowUnfollowCard key={ele?._id} user={ele} />
          ))}
        </div>
      )}
    </>
  );
};

export { UserFollowers };
