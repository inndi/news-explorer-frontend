import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute(props) {
  console.log(props.isAuthorized);
  if (!props.isAuthorized) {
    return <Navigate to='/' />
  }
  return props.children;
}

export default ProtectedRoute;