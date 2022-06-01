import React from "react";

const TipsyContent = ({ hoverContent }) => {
  return (
    <span className="bg-white font-medium text-sm p-1 rounded-md border-2 dark:text-white dark:bg-darkBackground ">
      {hoverContent}
    </span>
  );
};

export { TipsyContent };
