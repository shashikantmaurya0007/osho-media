import React from "react";
import { useOutletContext } from "react-router-dom";
import { FollowUnfollowCard } from "../../FollowUnfollowCard/FollowUnfollowCard";
import { EmptyPost } from "../../GeneralComponent/EmptyPost";
const UserFollowing = () => {
  const { following } = useOutletContext();
  const noFollowing = !Boolean(following?.length);
  return (
    <>
      {noFollowing && <EmptyPost message={`No user followed! `} />}
      {!noFollowing && (
        <div className="flex flex-col gap-4 my-6">
          {following?.map((ele) => (
            <FollowUnfollowCard key={ele?._id} user={ele} />
          ))}
        </div>
      )}
    </>
  );
};

export { UserFollowing };
