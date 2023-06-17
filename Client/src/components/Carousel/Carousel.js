import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';
import { useSwiper } from 'swiper/react';
import { useEffect, useRef } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Slide1 from './Images/Slide1.png'
import Slide2 from './Images/Slide2.png'
import Slide3 from './Images/Slide3.png'
import './Carousel.css'

const Carousel = ()=>{
    const swiper = useSwiper();

    

    return(
        <div>
          <Swiper
        modules={[Navigation, Pagination, A11y]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="slide">
        <img src={Slide1}  />
        <div className="slidetext">
          <div className="slidetext1">Get a link that you can share</div>
          <div className="slidetext2">Click <b>New meeting</b> to get a link that you can send to people that you want to meet with</div>
        </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="slide">
        <img src={Slide2}  />
        <div className="slidetext">
        <div className="slidetext1">Plan ahead</div>
          <div className="slidetext2">Click <b>New Meeting</b> to schedule meetings in Google Calendar and send invitations to participants</div>
        </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="slide">
        <img src={Slide3}  />
        <div className="slidetext">
        <div className="slidetext1">Your meeting is safe</div>
          <div className="slidetext2">No one can join a meeting unless invited or admitted by the host</div>
        </div>
        </div>
      </SwiperSlide>
      
    </Swiper>
        </div>
    )
};
export default Carousel;