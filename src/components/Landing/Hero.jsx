import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import TopSellers from "./TopSellers";
import {
  storeLink,
  img1,
  img2,
  img3,
  title1,
  title2,
  title3,
  subtitle1,
  subtitle2,
  subtitle3,
} from "../data/data";
const slides = [
  {
    image: img1,
    title: title1,
    subtitle: subtitle1,
  },
  {
    image: img2,
    title: title2,
    subtitle: subtitle2,
  },
  {
    image: img3,
    title: title3,
    subtitle: subtitle3,
  },
];

const Hero = () => (
  <section className="bg-amber-50 md:h-[500px] flex items-center justify-center">
    <div className="max-w-[1300px] w-full mx-auto relative" id="home">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        useKeyboardArrows
        autoPlay
        showIndicators={false}
        showArrows={true}
        interval={3000} // Increased for smoother transitions
        className="relative"
      >
        {slides.map((slide, index) => (
          <div className="flex flex-col md:flex-row" key={index}>
            {/* Left Side: Text Content */}
            <div className="flex-1 flex flex-col justify-center text-left bg-amber-50 p-6 md:p-10">
              <p className="text-[12px] sm:text-[14px] md:text-base font-semibold uppercase mb-2 tracking-wide">
                Handpicked for You
              </p>
              <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[4rem] lg:text-[4.5rem] font-semibold mb-4 leading-tight">
                {slide.title}
              </h2>
              <p className="text-[14px] sm:text-[16px] md:text-lg font-medium mb-6">
                {slide.subtitle}
              </p>
              <a href={storeLink}>
                <button className="bg-[#722F37] text-white px-6 py-3 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:bg-white hover:text-black hover:scale-105 border border-transparent hover:border-black">
                  View Our Menu
                </button>
              </a>
            </div>

            {/* Right Side: Image */}
            <div className="flex-1 flex justify-center items-center bg-amber-50 overflow-hidden">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-[240px] sm:w-[300px] md:w-[360px] lg:w-[420px] h-[360px] sm:h-[420px] md:h-[480px] lg:h-[540px] object-contain rounded-md shadow-md"
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  </section>
);

const HeroAndTopSellers = () => (
  <div className="w-full bg-white text-black">
    <Hero />
    <section className="w-full py-5 bg-white text-black">
      <TopSellers />
    </section>
  </div>
);

export default HeroAndTopSellers;
