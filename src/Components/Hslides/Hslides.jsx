

// jfdksaslkfdla 
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// css of the slides 
import "./Hslides.css"

// images 
import Img1 from "./HslidesImages/img1.png"
import Img2 from "./HslidesImages/img2.png"
import Img3 from "./HslidesImages/img3.png"

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img3}/>
        </SwiperSlide>
      
      </Swiper>
    </>
  );
}
