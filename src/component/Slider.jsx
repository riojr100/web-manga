import React from "react";
import ReactDOM from "react-dom";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "../style.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Slider({ slides }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {slides.map((slide) => (
        <SwiperSlide className="swipes" key={slide.image}>
          <a href={`/info/?id=${slide.id}`}>
            <img className="slide-image" src={slide.image} alt={slide.title} />
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
