import { Link } from "react-router-dom";
import { AuthContext } from "../../contextProvider/ContextProvider";
import { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const { createUser, googleLogin } = useContext(AuthContext);
  const registrationAuthantication = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success("Successfully Registered!");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const loginWithgoogle = () => {
    googleLogin()
      .then((res) => {
        console.log(res.user);
        toast.success("Successfully Logged In With Google!");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="bg-image pt-52 md:pt-28">
        <div className="w-10/12 md:w-8/12 lg:w-6/12 mx-auto pt-10 pb-20">
          <div className="rounded-2xl backdrop-blur-[60px] bg-black/5 overflow-hidden">
            <h2 className="text-4xl font-bold text-center mt-8 mb-2">
              Please Register
            </h2>
            <form
              onSubmit={registrationAuthantication}
              className="grid grid-cols-1 gap-8 px-10 pt-10"
            >
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required
                className="bg-transparent focus:outline-none py-3 pr-8 border-b-4 border-dotted border-indigo-500"
              />
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
                Register
              </button>
            </form>
            <div className="w-full mx-auto px-10 mt-6">
              <button
                onClick={loginWithgoogle}
                className=" w-full py-3 text-white text-xl font-semibold tracking-wider bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500"
              >
                Login with Google
              </button>
              <p className="text-lg font-semibold text-center mb-12 mt-8">
                Already have an accout ?
                <Link to="/login" className="text-fuchsia-600 font-bold">
                  {" "}
                  Login
                </Link>
              </p>
              <Toaster position="bottom-center"></Toaster>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
