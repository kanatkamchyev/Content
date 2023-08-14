import React, { useEffect, useRef, useState } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import './Point.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import slide1 from '../assets/imgs/slide1.png'
import slide2 from '../assets/imgs/slide.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperCore from 'swiper';



SwiperCore.use([Pagination, Autoplay]);
export const Point = () => {
   const [activeIndex, setActiveIndex] = useState(0);
   const [slidesPerView, setSlidesPerView] = useState(4);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 700) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(4);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);




  return (
    <div className='Point'>
      <div className="container">
        <div className="Point__inside">
          <div className="Point__title">
            <h1>Pick your starting point.</h1>
          </div>
          <div className="Point__describe">
            Templates make it easy to get started. Just select a Member Areas template, then customize it to suit your needs.
          </div>
          <div className="Point__link">
            Browse Templates
            <HiArrowNarrowRight />
          </div>
          <div className="slider__all">
            <Swiper
              slidesPerView={slidesPerView}
              centeredSlides={true}
              spaceBetween={30}
              grabCursor={true}
              onSlideChange={handleSlideChange}
              pagination={{
                clickable: true,
                renderBullet: (index, className) => {
                  return `<span class="${className}">${index + 1}</span>`;
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide >
                <img src={slide1} alt=""/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide2} alt=""  />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide2} alt=""  />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide2} alt=""/>
              </SwiperSlide>
            </Swiper>
            <div className="slider-nav">
              <span className="current-slide">0{activeIndex + 1}</span>
              <span className="total-slides">/06</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};