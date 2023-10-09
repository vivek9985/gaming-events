import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contextProvider/ContextProvider";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const { login } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const loginAuthantication = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    login(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success("Successfully Logged in.");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="bg-image pt-52 md:pt-28">
        <div className="w-10/12 md:w-8/12 lg:w-6/12 mx-auto pt-10 pb-20">
          <div className="rounded-2xl backdrop-blur-[20px] bg-black/5 overflow-hidden">
            <h2 className="text-4xl font-bold text-center mt-8 mb-2">
              Please Login
            </h2>
            <form
              onSubmit={loginAuthantication}
              className="grid grid-cols-1 gap-8 p-10"
            >
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
                className="bg-transparent focus:outline-none py-3 pr-8 border-b-4 border-dotted border-indigo-500"
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                required
                className="bg-transparent focus:outline-none py-3 pr-8 border-b-4 border-dotted border-indigo-500"
              />
              <button className="py-3 mt-6 text-white text-xl font-semibold tracking-wider bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500">
                Login
              </button>
              <p className="text-lg font-semibold text-center">
                Don't have an accout ?
                <Link to="/register" className="text-fuchsia-600 font-bold">
                  {" "}
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default Login;
