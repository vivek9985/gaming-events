import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const Gamecategory = () => {
  const [gametypes, setGametypes] = useState([]);
  useEffect(() => {
    fetch("/gametype.json")
      .then((res) => res.json())
      .then((data) => setGametypes(data));
      Aos.init();
  }, []);
  return (
    <div className="w-10/12 mx-auto mt-28 mb-20 overflow-hidden">
      <div className="flex items-center mb-10 md:mb-14">
        <h2 className="text-3xl md:text-4xl text-center mr-3">Game category</h2>
        <div className="w-[20%] h-0.5 bg-gray-800 mt-3" data-aos="fade-left"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-between">
        {gametypes.map((gametype) => (
          <div
            key={gametype.id}
            className="h-96 overflow-hidden relative"
            data-aos={gametype.aos}
          >
            <img
              src={gametype.img}
              alt="image"
              className="w-full h-full"
            />
            <div className="absolute top-0 bg-gradient-to-t from-[#01101f] bg-[#00000000] w-full h-full">
              <h2 className="text-gray-200 text-2xl uppercase font-semibold absolute bottom-24 left-4">
                {gametype.category}
              </h2>
              <p className="font-medium text-white absolute bottom-16 left-4 uppercase">Ticket price : {gametype.price}TK</p>
              <Link to={`/details/${gametype.id}`}
                className="absolute text-sm text-black bottom-6 left-4 py-1 px-4 bg-gradient-to-r from-indigo-600 
                 to-fuchsia-200 rounded-full hover:bg-gradient-to-r hover:from-pink-500 
                  hover:to-indigo-500"
              >
                Explore more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gamecategory;
