import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="">
        <h2 className="text-center text-5xl font-black my-auto">
          NO DATA FOUND HERE!
        </h2>
        <Link to='/' className="py-3 px-6 bg-black text-white font-semibold rounded-full absolute top-5 left-5">
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default Error;
