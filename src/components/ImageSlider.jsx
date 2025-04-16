import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../assets/slide1.webp";
import slide2 from "../assets/slide2.webp";
import slide3 from "../assets/slide3.webp";
import slide4 from "../assets/slide4.webp";
import slide5 from "../assets/slide5.webp";

const images = [slide1, slide2, slide3, slide4, slide5];

const ImageSlider = () => {
  return (
    <div className="mt-20 px-20">
      <div className="w-full relative">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
            bulletClass: "swiper-pagination-bullet custom-bullet",
            bulletActiveClass:
              "swiper-pagination-bullet-active custom-bullet-active",
          }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-[300px] md:h-[400px] object-fit rounded-xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom pagination bullets container */}
        <div className="custom-pagination absolute bottom-4 right-4 flex z-10" />

        {/* Custom styles */}
        <style>{`
        .custom-bullet {
          background-color: white;
          width: 16px;
          height: 16px;
          border-radius: 9999px;
          opacity: 1;
          margin: 0 6px !important;
          transition: background-color 0.3s ease;
        }
        .custom-bullet-active {
          background-color: black;
        }
      `}</style>
      </div>
    </div>
  );
};

export default ImageSlider;
