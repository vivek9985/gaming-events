import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import moment from "moment/moment";

const Footer = () => {
    const time = moment().format('LTS');
  return (
    <div className="w-10/12 mx-auto my-10">
      <div className="grid grid-cols-1 items-center md:grid-cols-3">
        <div className="uppercase">
            <h2 className="font-bold text-gray-800">Local Time</h2>
            <h2 className="font-black">{time}</h2>
        </div>
        <div className="flex items-center gap-2 border-spacing-2 border-2 border-purple-500 rounded-full py-1 px-2 my-6 md:my-0">
            <BiLogoGmail className="text-3xl p-1.5 bg-teal-400 rounded-full cursor-pointer"></BiLogoGmail>
            <h6 className="mr-2 font-medium">infovella@gmail.com</h6>
        </div>
        <ul className="flex justify-end items-center gap-3 text-3xl">
          <li className="text-[27px] hover:scale-125 duration-300 text-teal-700 hover:text-purple-600">
            <Link>
              <FaFacebook></FaFacebook>
            </Link>
          </li>
          <li className="hover:scale-125 duration-300 text-teal-700 hover:text-purple-600">
            <Link>
              <AiFillInstagram></AiFillInstagram>
            </Link>
          </li>
          <li className="hover:scale-125 duration-300 text-teal-700 hover:text-purple-600">
            <Link>
              <AiFillTwitterCircle></AiFillTwitterCircle>
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-full h-px bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 my-8"></div>
      <h2 className="text-center font-medium text-gray-600">
        Copyright © 2023. All Rights Reserved By
        <span className="nav-gradient font-black"> Vellu.</span>
      </h2>
    </div>
  );
};

export default Footer;
