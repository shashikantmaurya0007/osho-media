import React from "react";
import { PoastLoaderCard } from "./PoastLoaderCard";

const PostLoader = () => {
  return (
    <div className="flex flex-col gap-5">
      <PoastLoaderCard />
      <PoastLoaderCard />
    </div>
  );
};

export { PostLoader };
