// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow  } from 'swiper/modules';
import Notes from './Notes';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

const SwiperComponent = ({card}) => {

   return (
    <>
      <Swiper
        effect={'coverflow'}
        autoplay
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow,Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
         {card}
        </SwiperSlide>
        <SwiperSlide>
        {card}
        </SwiperSlide>
        <SwiperSlide>
        {card}
        </SwiperSlide>
        <SwiperSlide>
        {card}
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperComponent