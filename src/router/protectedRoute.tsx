import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import useAuthStore from "../stores/useAuthStore";

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  console.log("isAuthenticated:", isAuthenticated);

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
};
