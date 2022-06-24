import React from "react";

const PoastLoaderCard = () => {
  return (
    <div className="shadow-inner px-4 flex flex-col gap-3 py-2 dark:text-white bg-white dark:bg-darkPrimary rounded-md">
      <div className="flex animate-pulse flex-row items-center h-full  ">
        <div className="w-12 bg-gray-300 h-12 rounded-full "></div>
        <div className="flex w-full items-center justify-between  space-y-3">
          <div className="w-36 bg-gray-300 h-6 rounded-md "></div>
          <div className="w-8 h-8 rounded-full bg-gray-300"></div>
        </div>
      </div>
      <div className="flex animate-pulse h-32 bg-gray-300 rounded-md"></div>
      <div className="flex justify-between">
        <div className="flex gap-2 ">
          <div className="w-8 h-8 rounded-full bg-gray-300"></div>
          <div className="w-8 h-8 rounded-full bg-gray-300"></div>
          <div className="w-8 h-8 rounded-full bg-gray-300"></div>
        </div>
        <div className="w-8 h-8 rounded-full bg-gray-300"></div>
      </div>
    </div>
  );
};

export { PoastLoaderCard };
