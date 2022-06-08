import React, { useEffect, useRef, useState } from "react";

const SearchInput = ({ userSearchInputDebounce }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input
        onChange={(e) => userSearchInputDebounce(e.target.value)}
        ref={inputRef}
        type="text"
        max={12}
        placeholder="search by username.."
        className="w-full rounded-md outline-none shadow-2xl dark:bg-darkSecondary dark:text-white"
      />
    </div>
  );
};

export { SearchInput };
