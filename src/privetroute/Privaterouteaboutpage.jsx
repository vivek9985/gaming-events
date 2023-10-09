import { useContext } from "react";
import { AuthContext } from "../contextProvider/ContextProvider";
import { Navigate } from "react-router-dom";

const Privaterouteaboutpage = ({ children }) => {
  const { users } = useContext(AuthContext);
  if (users) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default Privaterouteaboutpage;
