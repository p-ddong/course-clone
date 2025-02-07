import React from "react";
import "./style.scss";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import img from "../../assets/slider_background.jpg";

import { FaGlobeAfrica } from "react-icons/fa";
import { GiSpellBook } from "react-icons/gi";
import { GiTeacher } from "react-icons/gi";

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="main-carousel">
      <button className="btn prev-btn">Prev</button>
      <button className="btn next-btn">Next</button>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
          clickable: true,
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        loop={true}
        className="slider-carousel"
      >
        <SwiperSlide className="slider-item">
          <img src={img} alt="" />
          <p>
            Get your <span>Education</span> today!
          </p>
        </SwiperSlide>
        <SwiperSlide className="slider-item">
          <img src={img} alt="" />
        </SwiperSlide>
      </Swiper>
      <div className="viewmore-group">
        <div className="viewmore-card">
          <FaGlobeAfrica className="icon"/>
          <div>
            <h1>Online Courses</h1>
            <p>View more</p>
          </div>
        </div>
        <div className="viewmore-card">
        <GiSpellBook className="icon"/>

          <div>
            <h1>Our Library</h1>
            <p>View more</p>
          </div>
        </div>
        <div className="viewmore-card">
          <GiTeacher className="icon"/>
          <div>
            <h1>Our Teachers</h1>
            <p>View more</p>
          </div>
        </div>
      </div>
      </div>
      
      <div className="viewmore-group-vertical">
        <div className="viewmore-card">
          <FaGlobeAfrica className="icon"/>
          <div>
            <h1>Online Courses</h1>
            <p>View more</p>
          </div>
        </div>
        <div className="viewmore-card">
        <GiSpellBook className="icon"/>

          <div>
            <h1>Our Library</h1>
            <p>View more</p>
          </div>
        </div>
        <div className="viewmore-card">
          <GiTeacher className="icon"/>
          <div>
            <h1>Our Teachers</h1>
            <p>View more</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
