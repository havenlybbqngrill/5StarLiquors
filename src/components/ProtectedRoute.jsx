import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  // If still loading, you can show a loader or return nothing to avoid premature redirects
  if (!user) {
    return <div>Loading...</div>; // Or a proper loading indicator
  }

  // Check if the user is authenticated and has admin privileges
  if (!user.isAdmin) {
    return <Navigate to="/" />;
  }

  // If admin, render the children components (admin pages)
  return children;
};

export default ProtectedRoute;
