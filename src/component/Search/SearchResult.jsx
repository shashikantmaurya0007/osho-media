import React from "react";
import { useSelector } from "react-redux";

const SearchResult = ({ searchInput }) => {
  const isValidSearch = Boolean(searchInput.trim());
  const allUsers = useSelector((state) => state.user.userData);
  console.log(allUsers);
  return (
    <div>
      {isValidSearch && <h1>validseaarch</h1>}
      {!isValidSearch && <h1>Notvalidseaarch</h1>}
    </div>
  );
};

export { SearchResult };
