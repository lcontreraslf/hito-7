import React from "react";
import { Navigate } from "react-router-dom";  
import { useUser } from "../context/UserContext"; 

const RedirectIfAuthenticated = ({ children }) => {
  const { token } = useUser();

  if (token) {
    return <Navigate to="/" />;
  }

  return children;
};

export default RedirectIfAuthenticated;
