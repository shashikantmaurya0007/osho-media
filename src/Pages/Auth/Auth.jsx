import React from "react";
import { useSelector } from "react-redux";
import { Navigate, NavLink, Outlet } from "react-router-dom";
// import { SignUp } from "../../component/Auth/SignUp";
const Auth = () => {
  const isLogin = useSelector((state) => state.login.isLogin);
  if (isLogin) {
    // return <Navigate to={"/"} />;
  }

  return (
    <div className="flex-col justify-center items-center  w-96 m-auto  ">
      <div className="flex justify-around w-full rounded-xl mt-8 p-4 mx-auto bg-lightSecondary dark:bg-darkSecondary">
        <NavLink to="login ">
          <button className="w-28  mr-4 py-1 dark:text-white rounded-md bg-lightPrimary hover:shadow-lg hover:bg-opacity-75">
            Login
          </button>
        </NavLink>
        <NavLink to="signup">
          <button className="dark:text-white w-28 py-1 rounded-md bg-lightPrimary hover:shadow-lg hover:bg-opacity-75">
            SignUp
          </button>
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export { Auth };
