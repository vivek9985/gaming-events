import { useContext } from "react";
import { AuthContext } from "../contextProvider/ContextProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Ripple } from "react-preloaders";

const Privateroute = ({ children }) => {
  const { users, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <Ripple />;
  }
  if (users) {
    return children;
  }
  return <Navigate to="/login" state={location.pathname}></Navigate>;
};

export default Privateroute;
