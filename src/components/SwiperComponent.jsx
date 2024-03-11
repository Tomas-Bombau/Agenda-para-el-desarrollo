
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

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
        className="mySwiper h-[280px] mt-10 px-5 md:mt-10 xl:mt-2"
      >
        <SwiperSlide><img className={styles.imagen} src="https://res.cloudinary.com/dhw5ulqje/image/upload/v1709745898/Agenda/ooxgnldnfidurgwadvnb.jpg" alt="niños_sonriendo" style={{borderRadius: "10px", cursor: "grab"}}/></SwiperSlide>
        <SwiperSlide><img className={styles.imagen} src="https://res.cloudinary.com/dhw5ulqje/image/upload/v1710167552/Agenda/twf5gg8rbpgmbvscklgx.jpg" alt="taller_ciudadania" style={{borderRadius: "10px", cursor: "grab"}}/></SwiperSlide>
        <SwiperSlide><img className={styles.imagen} src="https://res.cloudinary.com/dhw5ulqje/image/upload/v1709745898/Agenda/t2wmwzgfouqqit73cevp.jpg" alt="niño_taller" style={{borderRadius: "10px", cursor: "grab"}}/></SwiperSlide>
        <SwiperSlide><img className={styles.imagen} src="https://res.cloudinary.com/dhw5ulqje/image/upload/v1709745898/Agenda/ysiprobknhnibf5tsbgt.jpg" alt="festejo_25demayo" style={{borderRadius: "10px", cursor: "grab"}}/></SwiperSlide>
       
      </Swiper>
    </>
  );
}
