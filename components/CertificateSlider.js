//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//import required modules
import { Navigation, Pagination } from "swiper";

//icons
import { FaQuoteLeft } from "react-icons/fa";

//nextimage
import Image from "next/image";

const CertificateSlider = () => {
  return (
    <div className="relative">
      {/* View Resume Button */}
      <a
        href="/resume.pdf" // Update this with your actual resume link
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-md shadow-lg hover:bg-blue-600 transition"
      >
        View Resume
      </a>
      <Swiper
        navigation={true}
        pagination={{
          clickable: true,
          el: ".custom-swiper-pagination", // Explicitly set pagination container
        }}
        slidesPerView={1}
        modules={[Navigation, Pagination]}
        className="h-[400px] pb-20" // Extra padding to create space for dots
      >
        {testimonialData.map((person, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
              {/* Avatar, Name, Position */}
              <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                <div className="flex flex-col justify-center text-center">
                  {/* Avatar */}
                  <div className="mb-2 mx-auto">
                    <Image
                      src={person.image}
                      width={100}
                      height={100}
                      alt={person.name}
                    />
                  </div>
                  {/* Name */}
                  <div className="text-lg">{person.name}</div>
                  {/* Position */}
                  <div className="text-[12px] uppercase font-extralight tracking-widest">
                    {person.position}
                  </div>
                </div>
              </div>
              {/* Quote & Message */}
              <div className="bg-pink-500/10 flex flex-col justify-center relative xl:pl-20">
                {/* Quote icon */}
                <div className="mb-4">
                  <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
                </div>
                {/* Message */}
                <div className="xl:text-lg text-center md:text-left">
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Below */}
      <div className="custom-swiper-pagination"></div>

      {/* CSS to Move Dots Below */}
      <style jsx>{`
        .custom-swiper-pagination {
          position: relative;
          bottom: -40px; /* Moves dots further down */
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          justify-content: center;
          margin-top: 20px; /* Extra spacing below the box */
        }
        :global(.swiper-pagination-bullet) {
          background: #333 !important; /* Ensures bullets are visible */
        }
      `}</style>
    </div>
  );
};

export default CertificateSlider;
