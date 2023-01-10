import React from "react";
import { slider } from "../../fake";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "./header.css";

import "swiper/css";
import "swiper/css/pagination";

const Header = () => {
  SwiperCore.use([Autoplay]);
  return (
    <div className="sliderComp">
      <Swiper
        modules={[Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
      >
        {slider.map((slide) => {
          return (
            <SwiperSlide>
              <div className="slider">
                <div className="discount">
                  <h1>
                    product: <span>{slide.title}</span>
                  </h1>
                  <p>
                    discount: <span>{slide.discount}</span>
                  </p>
                </div>
                <img src={slide.img} alt="" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Header;
