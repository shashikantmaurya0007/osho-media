import React from "react";

const EmptyFollowList = () => {
  return (
    <main>
      <img
        className="h-[11rem] w-full object-contain"
        src="https://res.cloudinary.com/dwqdlzlek/image/upload/v1654681306/login_lhmcyk.png"
        alt="no_follower"
      />
      <h5 className="text-center text-sm text-gray-400">No more user</h5>
    </main>
  );
};

export { EmptyFollowList };
