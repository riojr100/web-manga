import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "../style.css";

import { getMangaRecommendation } from "../api";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Slider({ slides }) {
  const [recommendation, setRecommendation] = useState([]);
  useEffect(() => {
    getMangaRecommendation()
      .then((res) => res.json())
      // .then((res) => console.log(res.data[0].entry[0].mal_id));
      .then((res) => setRecommendation(res.data));
  }, []);

  return (
    <Swiper
      modules={[Navigation, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {
        // slides.map((slide) => (
        //   <SwiperSlide className="swipes" key={slide.image}>
        //     <a href={`/info/?id=${slide.id}`}>
        //       <img className="slide-image" src={slide.image} alt={slide.title} />
        //     </a>
        //   </SwiperSlide>
        // ))
        recommendation.map((value) => (
          <SwiperSlide className="swipes">
            <a href={`/info/?id=${value.entry[0].mal_id}`}>
              <img
                className="slide-image"
                src={value.entry[0].images.jpg.image_url}
                titl={value.entry[0].title}
              />
            </a>
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
}
