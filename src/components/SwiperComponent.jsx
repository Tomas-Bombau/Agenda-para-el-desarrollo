
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './SwiperComponent.module.css';
import { Pagination } from 'swiper/modules';
import { useTheme } from '@emotion/react';
import { useMediaQuery } from '@mui/material';

export default function SwipperPhotosMain() {
  
  const theme = useTheme()
  const smScreen = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <>
      <Swiper
        slidesPerView={smScreen ? 1 : 2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="h-[280px] mt-10 px-12  :mt-10 xl:mt-2 sm:p-2"
      >
        <SwiperSlide><img className={styles.imagen} src="https://res.cloudinary.com/dhw5ulqje/image/upload/v1709745898/Agenda/Landing/ooxgnldnfidurgwadvnb.jpg" alt="niños_sonriendo" style={{borderRadius: "10px", cursor: "grab"}}/></SwiperSlide>
        <SwiperSlide><img className={styles.imagen} src="https://res.cloudinary.com/dhw5ulqje/image/upload/v1710167552/Agenda/Landing/twf5gg8rbpgmbvscklgx.jpg" alt="taller_ciudadania" style={{borderRadius: "10px", cursor: "grab"}}/></SwiperSlide>
        <SwiperSlide><img className={styles.imagen} src="https://res.cloudinary.com/dhw5ulqje/image/upload/v1709745898/Agenda/Landing/t2wmwzgfouqqit73cevp.jpg" alt="niño_taller" style={{borderRadius: "10px", cursor: "grab"}}/></SwiperSlide>
        <SwiperSlide><img className={styles.imagen} src="https://res.cloudinary.com/dhw5ulqje/image/upload/v1709745898/Agenda/Landing/ysiprobknhnibf5tsbgt.jpg" alt="festejo_25demayo" style={{borderRadius: "10px", cursor: "grab"}}/></SwiperSlide>
       
      </Swiper>
    </>
  );
}
