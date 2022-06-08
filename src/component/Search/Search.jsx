import React, { useState } from "react";
import { useDebounce } from "../../GeneralCustomHook/useDebounce";
import { SearchInput } from "./SearchInput";
import { SearchResult } from "./SearchResult";
import { useSelector } from "react-redux";
const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  let allUsers = useSelector((state) => state.user.userData);
  const { username } = useSelector((state) => state.login.userInformation);
  allUsers = allUsers.filter((user) => user.username !== username);
  const userSearchInput = (value) => setSearchInput(value);
  const userSearchInputDebounce = useDebounce(userSearchInput, 300);
  return (
    <div>
      <SearchInput userSearchInputDebounce={userSearchInputDebounce} />

      <SearchResult searchInput={searchInput} allUsers={allUsers} />
    </div>
  );
};

export { Search };
