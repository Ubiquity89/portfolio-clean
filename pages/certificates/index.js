import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

// Sample certificate data (replace with real data)
const certificates = [
  {
    title: "Hack The Mountains",
    issuer: "Sudans Tech",
    date: "September 2024",
    image: "/image.png",
  },
  {
    title: "Code4Cause",
    issuer: "HackWithIndia",
    date: "September 2024",
    image: "/image copy.png",
  },
  {
    title: "Data Science",
    issuer: "TRYST, IIT Delhi",
    date: "February 2024",
    image: "/image copy 7.png",
  },
  {
    title: "ChatGPT & AI Tools",
    issuer: "be10X",
    date: "September 2024",
    image: "/image copy 2.png",
  },
  {
    title: "Web Design & Development",
    issuer: "Skill India",
    date: "May 2023",
    image: "/image copy 3.png",
  },
  {
    title: "TCS iON Career Edge",
    issuer: "TCSiON",
    date: "June 2023",
    image: "/image copy 4.png",
  },
  {
    title: "FishTank ",
    issuer: "Maharaja Agrasen Institute Of Technology, Delhi",
    date: "April 2024",
    image: "/image copy 10.png",
  },
  {
    title: "Data Science & AI & Android",
    issuer: "GDSC-DTC",
    date: "March 2024",
    image: "/image copy 9.png",
  },
  {
    title: "Azure Data Fundamentals",
    issuer: "Microsoft",
    date: "March 2024",
    image: "/image copy 8.png",
  },
  {
    title: "Data science AI & CyberSecurity",
    issuer: "iSTEP",
    date: "Febrary 2024",
    image: "/image copy 6.png",
  },
  {
    title: "Introduction to Linux and CLI",
    issuer: "The FOSS Club",
    date: "Febrary 2024",
    image: "/image copy 5.png",
  },
  {
    title: "Webinar on career",
    issuer: "Cognizance, IIT Roorkee",
    date: "December 2023",
    image: "/Screenshot 2025-03-23 194806.png",
  },
  {
    title: "Fundamentals Of Digital Marketing",
    issuer: "Google",
    date: "May 2023",
    image: "/Screenshot 2025-03-23 213250.png",
  },
  {
    title: "Database Quiz",
    issuer: "Naukri campus",
    date: "March 2025",
    image: "/image copy 11.png",
  },
  {
    title: "Fill the Void() Hackathon",
    issuer: "IIT Jammu",
    date: "March 2024",
    image: "/image copy 12.png",
  },
  {
    title: "Online Assessment",
    issuer: "HP Power Lab",
    date: "January 2025",
    image: "/image copy 13.png",
  },
];

const Certifications = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false); // Track resume modal state
  const openModal = () => {
    setIsResumeModalOpen(true);
  };

  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      setIsResumeModalOpen(false);
    }
  };

  return (
    <div className="h-full bg-primary/30 py-20 text-center">
      <div className="container mx-auto h-full flex flex-col justify-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="h2 mb-12"
        >
          My <span className="text-accent">Certifications.</span>
        </motion.h2>

        {/* Swiper Slider */}
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          className="w-full pb-16"
        >
          {/* Adjust position */}
          {certificates.map((cert, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="cursor-pointer p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition"
                onClick={() => setSelectedCertificate(cert)}
              >
                {/* Certificate Preview */}
                <div className="w-full h-44 relative">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>

                {/* Certificate Details */}
                <h3 className="text-lg font-semibold mt-3">{cert.title}</h3>
                <p className="text-sm text-gray-300">{cert.issuer}</p>
                <p className="text-xs text-gray-400">{cert.date}</p>

                {/* View Certificate Button */}
                <button
                  className="mt-4 px-4 py-2 bg-accent text-white rounded-md hover:bg-accent/80 transition"
                  onClick={() => setSelectedCertificate(cert)}
                >
                  View Certificate
                </button>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Expanded Certificate Modal */}
        {selectedCertificate && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 p-4"
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="relative max-w-full max-h-full overflow-auto"
            >
              {/* Certificate Image */}
              <Image
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                width={800}
                height={500}
                objectFit="contain"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        )}

        {/* View Resume Button */}
        <div className="absolute top-0 right-0 mt-8 mr-8 z-50">
          <Link
            href="/resume.pdf"
            className="px-6 py-3 border border-white/70 text-white/90 rounded-md backdrop-blur-md transition duration-300 hover:text-white hover:border-white hover:scale-105 cursor-pointer"
          >
            View Resume
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
