//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

//import required modules
import { FreeMode, Pagination } from "swiper";

//service data
const serviceData = [
  {
    title: "💻 WEB DEVELOPMENT",
    description:
      "Crafting responsive, modern, and interactive websites using the latest technologies like MERN, Tailwind CSS, HTML,CSS, and JavaScript.",
  },
  {
    title: "📱 FRONTEND DEVELOPMENT",
    description:
      "Bringing designs to life with clean, efficient, and animated UI components for an engaging user experience.",
  },
  {
    title: "🔐 BACKEND DEVELOPMENT",
    description:
      "Building secure, scalable, and high-performing backends with Node.js, MongoDB, and Express.",
  },
  {
    title: "☕ DSA(Java)",
    description:
      "I specialize in solving algorithmic problems using techniques like recursion, dynamic programming, greedy algorithms, and graph theory.",
  },
  {
    title: " 🎨 GRAPHIC DESIGN",
    description:
      "Transforming ideas into visually appealing designs using creativity and modern tools. Logo & Branding Design,Social Media Graphics & Posters",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
              {/* icon */}
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              {/* title & desc */}
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">
                  {item.description}
                </p>
              </div>
              {/* arrow */}
              <div className="'text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
