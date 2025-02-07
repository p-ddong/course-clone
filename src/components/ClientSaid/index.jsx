import React from 'react'
import './style.scss'
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import img from '../../assets/image.png'

const ClientSaid = () => {
  return (
    <div className='client'>
      <h1 className='client-title'>What our students say</h1>
      <div className='client-content'>
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
                pagination={{ el: '.pag', clickable: true }}
                loop={true}
                className="slider-client"
              >
                <SwiperSlide className="slider-item">
                  <h1>"</h1>
                  <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
                  <div className='avt'>
                      <img src={img} alt="" />
                      <h2>james cooper</h2>
                      <h3>Graduate Student</h3>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slider-item">
                <h1>"</h1>
                  <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
                  <div className='avt'>
                      <img src={img} alt="" />
                      <h2>james cooper</h2>
                      <h3>Graduate Student</h3>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slider-item">
                <h1>"</h1>
                  <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
                  <div className='avt'>
                      <img src={img} alt="" />
                      <h2>james cooper</h2>
                      <h3>Graduate Student</h3>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className='pag'/>
      </div>
    </div>
  )
}

export default ClientSaid