import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  const details = useLoaderData();
  useEffect(() => {
    const findDetail = details.find((detail) => detail.id == id);
    setDetail(findDetail);
  }, []);
  return (
    <div>
      <div className="w-10/12 mx-auto mt-56 md:mt-36">
        <div>
          <div className="rounded-3xl overflow-hidden">
            <img src={detail.thumb} alt="image" className="w-full h-80 md:h-[550px]" />
          </div>
          <div className="relative">
            <img
              src={detail.img}
              alt="image"
              className="w-40 h-40 md:w-60 md:h-60 rounded-full absolute -bottom-20 md:-bottom-28 left-8 md:left-16 border-spacing-2 border-white border-4 md:border-[8px]"
            />
          </div>
          <h2 className="text-center text-4xl font-bold mt-28 mb-8">
            {detail.category}
          </h2>
          <p className="font-medium text-gray-700">
            {detail.desc}
          </p>
          <h6 className="mt-4 font-black">
            Ticket Price : {detail.price}TK only
          </h6>
          <button className="text-lg font-medium pt-1.5 pb-2 px-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 mt-6 mb-28">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
