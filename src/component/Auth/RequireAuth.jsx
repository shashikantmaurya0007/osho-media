import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate, useLocation } from "react-router-dom";

const RequireAuth = () => {
  const isLogin = useSelector((state) => state.login.isLogin);
  const location = useLocation();

  if (isLogin) return <Outlet />;
  return <Navigate to="/auth" state={{ from: location }} replace />;
};

export { RequireAuth };
