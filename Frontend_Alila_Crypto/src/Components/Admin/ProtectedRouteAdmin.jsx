import { Navigate } from "react-router-dom";
import { isUserLoggedIn, isAdmin } from "../../utils/auth";

const ProtectedRouteAdmin = ({ children }) => {
  if (!isUserLoggedIn()) {
    return <Navigate to="/login" replace />;
  }

  if (!isAdmin()) {
    return <Navigate to="/unauthorized" replace />;
  }
  return children;
};

export default ProtectedRouteAdmin;