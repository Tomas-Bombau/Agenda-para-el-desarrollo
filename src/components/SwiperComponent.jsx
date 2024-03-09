
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import cursos from "../assets/DerechosHumanos.jpg"


import 'swiper/css';
import 'swiper/css/pagination';

import styles from './SwiperComponent.module.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function SwipperPhotosMain() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper h-[280px] mt-2"
      >
        <SwiperSlide><img className={styles.imagen} src="https://res-console.cloudinary.com/dhw5ulqje/media_explorer_thumbnails/4fdda515789cdba7337d2ae47000cbd7/detailed" alt="" style={{borderRadius: "10px", cursor: "grab"}}/></SwiperSlide>
        <SwiperSlide><img className={styles.imagen} src={cursos} alt="" style={{borderRadius: "10px", cursor: "grab"}}/></SwiperSlide>
        <SwiperSlide><img className={styles.imagen} src="https://res-console.cloudinary.com/dhw5ulqje/media_explorer_thumbnails/220e87c85c8ea839d910c9d437e6a896/detailed" alt="" style={{borderRadius: "10px", cursor: "grab"}}/></SwiperSlide>
        <SwiperSlide><img className={styles.imagen} src="https://res-console.cloudinary.com/dhw5ulqje/media_explorer_thumbnails/b8a4b6184fdc247b78a1f05bb756b326/detailed" alt="" style={{borderRadius: "10px", cursor: "grab"}}/></SwiperSlide>
       
      </Swiper>
    </>
  );
}
