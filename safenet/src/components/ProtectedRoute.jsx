import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const user = localStorage.getItem("user");

  // If not logged in → go to login
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // If logged in → render dashboard
  return <Outlet />;
};

export default ProtectedRoute;
