import React from "react";
import { useNavigate } from "react-router-dom";

const EmptyPost = ({ message }) => {
  const navigate = useNavigate();
  const navigateToExplore = () => {
    navigate("/explore");
  };
  return (
    <div>
      <img
        onClick={() => navigateToExplore()}
        src="https://res.cloudinary.com/dwqdlzlek/image/upload/v1654456121/dzpw8qqn0m8a88mhwmt9.png"
        alt="No post to show"
        className="cursor-pointer mx-auto"
      />
      <p className="text-center text-sm text-gray-400">{message}</p>
    </div>
  );
};

export { EmptyPost };
