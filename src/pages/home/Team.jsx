import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../../css/index.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Team = () => {
  useEffect(() => {
      Aos.init();
  }, []);
  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 4, spacing: 10 },
      },
    },
    slides: { perView: 1 },
  });
  
  return (
    <div className="w-10/12 mx-auto mt-44 mb-28">
      <div className="mt-28 mb-8 flex items-center justify-end overflow-hidden">
        <div className="w-[20%] h-0.5 bg-gray-800 mt-1.5" data-aos="fade-right"></div>
        <h2 className="text-3xl md:text-4xl ml-3">Most popular Team</h2>
      </div>
      <div
        ref={sliderRef}
        className="keen-slider cursor-grab active:cursor-grabbing text-center rounded-xl bg-fuchsia-50 py-4"
      >
        <div className="keen-slider__slide number-slide1">
          <h2 className="font-black hover:bg-gradient-to-r hover:from-indigo-300 hover:to-fuchsia-400 bg-clip-text hover:text-transparent">
            Cyber Warriors
          </h2>
        </div>
        <div className="keen-slider__slide number-slide2">
          <h2 className="font-black hover:bg-gradient-to-r hover:from-indigo-300 hover:to-fuchsia-400 bg-clip-text hover:text-transparent">
            The Champions
          </h2>
        </div>
        <div className="keen-slider__slide number-slide3">
          <h2 className="font-black hover:bg-gradient-to-r hover:from-indigo-300 hover:to-fuchsia-400 bg-clip-text hover:text-transparent">
            Prodigy Gaming
          </h2>
        </div>
        <div className="keen-slider__slide number-slide4">
          <h2 className="font-black hover:bg-gradient-to-r hover:from-indigo-300 hover:to-fuchsia-400 bg-clip-text hover:text-transparent">
            Virtual Vixens
          </h2>
        </div>
        <div className="keen-slider__slide number-slide5">
          <h2 className="font-black hover:bg-gradient-to-r hover:from-indigo-300 hover:to-fuchsia-400 bg-clip-text hover:text-transparent">
            Screen Sirens
          </h2>
        </div>
        <div className="keen-slider__slide number-slide6">
          <h2 className="font-black hover:bg-gradient-to-r hover:from-indigo-300 hover:to-fuchsia-400 bg-clip-text hover:text-transparent">
            Gaming Geniuses
          </h2>
        </div>
        <div className="keen-slider__slide number-slide6">
          <h2 className="font-black hover:bg-gradient-to-r hover:from-indigo-300 hover:to-fuchsia-400 bg-clip-text hover:text-transparent">
            Cyber Squads
          </h2>
        </div>
        <div className="keen-slider__slide number-slide6">
          <h2 className="font-black hover:bg-gradient-to-r hover:from-indigo-300 hover:to-fuchsia-400 bg-clip-text hover:text-transparent">
            The Digital Dream
          </h2>
        </div>
        <div className="keen-slider__slide number-slide6">
          <h2 className="font-black hover:bg-gradient-to-r hover:from-indigo-300 hover:to-fuchsia-400 bg-clip-text hover:text-transparent">
            Game Giants
          </h2>
        </div>
        <div className="keen-slider__slide number-slide6">
          <h2 className="font-black hover:bg-gradient-to-r hover:from-indigo-300 hover:to-fuchsia-400 bg-clip-text hover:text-transparent">
            Cyber Sharks
          </h2>
        </div>
      </div>
    </div>
  );
};
export default Team;
