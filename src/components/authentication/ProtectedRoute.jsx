import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import CenteredContainer from "./CenteredContainer";

export default function ProtectedRoute({ children }) {
  const { currentUser } = useAuth();

  if (!currentUser) return <Navigate to="/login" />;

  return children;
}
