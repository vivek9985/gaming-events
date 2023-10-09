import circle from "../../assets/circle.mp4";
import Team from "./Team";
import Gamecategory from "./Gamecategory";
import reward from "../../assets/call-to-action-left.png";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="mt-20 md:mt-28">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 mt-10">
        <div className="pl-8 md:pl-10 lg:pl-20 xl:pl-28 pt-40 md:pt-20 lg:pt-28">
          <div className="overflow-hidden">
            <h2
              className="font-bold text-purple-600"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              Play and get rewards.
            </h2>
          </div>
          <div className="overflow-hidden py-4">
            <h2
              className="text-4xl lg:text-6xl font-medium"
              data-aos="fade-up"
              data-aos-duration="700"
            >
              Vellu Gaming Events
            </h2>
          </div>
          <div className="overflow-hidden">
            <p
              className="text-lg font-medium mt-3 pr-10 md:pr-2"
              data-aos="fade-up"
              data-aos-duration="900"
            >
              These events serve as a hub for all things related to video games,
              board games, tabletop role-playing games, and other forms of
              interactive entertainment.
            </p>
          </div>
          <div className="overflow-hidden pb-4">
            <div
              className="animation-btn flex relative mt-10 ml-6"
              data-aos="fade-up"
              data-aos-duration="1100"
            >
              <div className="w-[110px] md:w-[120px] h-10 md:h-[53px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full relative">
                <span
                  style={{ "--i": 0 }}
                  className="w-[110px] md:w-[120px] h-10 md:h-[53px] rounded-full absolute bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-80"
                ></span>
                <span
                  style={{ "--i": 1 }}
                  className="w-[110px] md:w-[120px] h-10 md:h-[53px] rounded-full absolute bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-80"
                ></span>
                <span
                  style={{ "--i": 2 }}
                  className="w-[110px] md:w-[120px] h-10 md:h-[53px] rounded-full absolute bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-80"
                ></span>
                <button className="absolute right-0 left-0 top-0 bottom-0 font-bold text-base hover:text-white md:text-lg z-10">
                  <Link to="" className="hover:scale-110 duration-300">
                    Join Now
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-14 md:mt-0 flex items-center justify-center">
          <video
            src={circle}
            autoPlay
            loop
            muted
            className="lg:w-full object-cover rounded-full"
          ></video>
        </div>
      </div>
      <div
        className="flex items-center justify-center fixed z-10 bg-purple-100 w-[30px] md:w-[41px] h-[99px] md:h-32 rounded-full top-0 bottom-0 m-auto right-2 md:right-4"
        data-aos="fade-left"
      >
        <ul className="text-xl md:text-3xl space-y-3 ml-0.5">
          <li className="text-[18px] md:text-[27px] hover:scale-125 duration-300 text-gray-900  hover:text-purple-600">
            <Link>
              <FaFacebook></FaFacebook>
            </Link>
          </li>
          <li className="hover:scale-125 duration-300 text-gray-900  hover:text-purple-600">
            <Link>
              <AiFillInstagram></AiFillInstagram>
            </Link>
          </li>
          <li className="hover:scale-125 duration-300 text-gray-900  hover:text-purple-600">
            <Link>
              <AiFillTwitterCircle></AiFillTwitterCircle>
            </Link>
          </li>
        </ul>
      </div>
      <Gamecategory></Gamecategory>
      <Team></Team>
      <div className="w-10/12 mx-auto my-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 overflow-hidden rounded-3xl bg-[rgba(92,130,255,0.1)]">
        <img src={reward} alt="image" className="w-full h-full" />
        <div className="flex items-center">
          <div className="overflow-hidden">
            <h2
              data-aos="fade-up"
              className="font-semibold text-sm text-center md:text-left md:text-base tracking-wide text-gray-800 px-4 py-4 sm:py-0 sm:px-0"
            >
              INVITE YOUR FRIENDS AND WIN REWARDS.JOIN VELLA GAMES
            </h2>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="mb-10 md:mb-0 py-3 px-6 text-xl
          bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full font-bold"
            data-aos="fade-up"
          >
            Invite Friend
          </button>
        </div>
      </div>
      <div className="w-10/12 mx-auto bg-gradient-to-r from-indigo-200 via-purple-400 to-pink-200 py-16 px-12 rounded-xl text-center mb-28">
        <div className="overflow-hidden">
          <h2
            className="text-2xl md:text-3xl font-bold mt-2"
            data-aos="fade-up"
          >
            SUBSCRIBE TO OUR NEWSLETTER
          </h2>
        </div>
        <div className="overflow-hidden">
          <p className="text-lg md:text-xl font-medium my-3" data-aos="fade-up">
            Receive news, stay updated and special offers
          </p>
        </div>
        <div className="overflow-hidden">
          <div
            className="bg-white w-full md:w-3/4 lg:w-2/4 mx-auto flex items-center justify-between gap-0 overflow-hidden py-2 px-2 md:px-3 rounded-full my-8"
            data-aos="fade-up"
          >
            <input
              type="email"
              placeholder="Your Email Address"
              required
              className="py-1 md:py-2 px-0 md:px-5 text-base md:text-lg font-normal md:font-medium w-2/3 bg-transparent focus:outline-none text-black"
            />
            <button
              className="w-1/3 py-2 md:py-3 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full font-medium md:font-bold text-sm md:text-base"
              data-aos="fade-left"
            >
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
