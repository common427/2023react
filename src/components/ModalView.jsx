import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';

// export default function Modal(){  
function Modal() {
  return (
    <>
      <h3>안녕하세요</h3>
      {/* <ModalBoday></ModalBoday> */}
      <Swiper navigation={true} modules={[Navigation]}>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </>
  )
}

function ModalBoday() {
  const pStyle = {
    color: "red",
    background: "skyblue"
  };
  return (
    <>
      <p style={pStyle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, eligendi.</p>
      <p className="myP">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, eligendi.</p>
    </>
  )
}

export default Modal;


