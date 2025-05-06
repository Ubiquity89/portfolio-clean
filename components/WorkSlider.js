// data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: "WEATHER APP",
          path: "/Screenshot 2025-03-23 140743.png",
          link: "https://weatherrealtimee.netlify.app/",
          description:
            "A real-time weather application that provides weather updates using OpenWeather API.",
        },
        // !WILL UPDATE ALL THESE LINKS AND IMGS
        {
          title: "Code Tracker",
          path: "/codetracker.png",
          link: "https://codeetrackerr.netlify.app",
          description:
            "Seamless code tracking experience for different platforms    in just one click.",
        },
        {
          title: "3D Experience",
          path: "/thumb2.jpg",
          link: "",
          description:
            "A 3D experience that allows users to explore and interact with a virtual world.",
        },
        {
          title: "PORTFOLIO",
          path: "/portfolio.png",
          link: "http://localhost:3000/",
          description:
            "A portfolio website that showcases a collection of projects and skills.",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb4.jpg",
        },
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
      ],
    },
  ],
};

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/pagination";

//import required modules
import { Pagination } from "swiper";

//import bsarrow
import { BsArrowRight } from "react-icons/bs";

//nextimage
import Image from "next/image";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      slidesPerView={1}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <a
                    href={image.link} // ✅ Use dynamic project link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                    key={index}
                  >
                    <div className="flex items-center justify-center relative overflow-hidden">
                      {/* Image */}
                      <Image
                        src={image.path}
                        width={500}
                        height={300}
                        alt={image.title}
                      />

                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>

                      {/* Dynamic Title, Tech Stack & Description */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-12 group-hover:xl:-translate-y-20 transition-all duration-300 text-center">
                        {/* Project Title (bold) */}

                        <div className="flex items-center justify-center gap-2 text-lg font-semibold text-white">
                          <span className="text-center">
                            {image.title || "Untitled Project"}
                          </span>
                          <BsArrowRight className="text-white text-xl transform rotate-[-45deg]" />
                        </div>

                        {/* Description (lighter font) */}
                        <div className="text-sm font-light text-white-300">
                          {image.description || "No description available."}
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
