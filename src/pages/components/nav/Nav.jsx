import { useContext } from "react";
import logo from "../../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../contextProvider/ContextProvider";
import { FaUserCircle } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const Nav = () => {
  const { users, logout } = useContext(AuthContext);
  const logoutHandle = () => {
    logout()
      .then(toast.success("Successfully Logged Out."))
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="w-10/12 mx-auto absolute left-0 right-0 top-0 z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center py-6 md:py-2">
        <div className="flex items-center justify-center md:justify-start">
          <Link
            to="/"
            className="flex items-center hover:scale-110 duration-300"
          >
            <div className="my-3 sm:my-0 w-10 rounded-full overflow-hidden">
              <img src={logo} alt="Logo" />
            </div>
            <p className="font-black">
              <span className="nav-gradient text-2xl inline">V</span>
              ellu.
            </p>
          </Link>
        </div>
        <div className="flex justify-center mt-2 mb-0">
          <ul className="text-[17px] flex gap-6 md:gap-3 lg:gap-6 font-semibold">
            <li className="hover:scale-90 duration-300">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "nav-gradient" : "")}
              >
                Home
              </NavLink>
            </li>
            <li className="hover:scale-90 duration-300">
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "nav-gradient" : "")}
              >
                About
              </NavLink>
            </li>
            <li className="hover:scale-90 duration-300">
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "nav-gradient" : "")}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center md:justify-end gap-4 my-5">
          <div>
            {users?.photoURL ? (
              <div className="flex items-center gap-2 bg-gray-200 rounded-full py-1 pl-3 pr-1">
                <h2 className="font-bold nav-gradient overflow-hidden">
                  {users?.displayName}
                </h2>
                <img
                  src={users?.photoURL}
                  alt="image"
                  className="w-[40px] h-[40px] rounded-full cursor-pointer"
                />
              </div>
            ) : (
              <div className="">
                <FaUserCircle className="text-[40px] text-gray-500 cursor-pointer"></FaUserCircle>
              </div>
            )}
          </div>
          {users ? (
            <button
              onClick={logoutHandle}
              className="text-lg font-medium w-24 h-[45px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 hover:text-white duration-500"
            >
              <Link to="/">Logout</Link>
            </button>
          ) : (
            <button className="text-lg font-medium w-24 h-[45px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 hover:text-white duration-500">
              <Link to="/login">Login</Link>
            </button>
          )}
        </div>
        <Toaster></Toaster>
      </div>
    </div>
  );
};

export default Nav;
