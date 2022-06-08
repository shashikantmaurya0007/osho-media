import React, { useState } from "react";
import { useDebounce } from "../../GeneralCustomHook/useDebounce";
import { SearchInput } from "./SearchInput";
import { SearchResult } from "./SearchResult";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");

  const userSearchInput = (value) => setSearchInput(value);
  const userSearchInputDebounce = useDebounce(userSearchInput, 300);
  return (
    <div>
      <SearchInput userSearchInputDebounce={userSearchInputDebounce} />

      <SearchResult searchInput={searchInput} />
    </div>
  );
};

export { Search };
