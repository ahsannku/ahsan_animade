import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Slidp
} from "..";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Notmain = () => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      spaceBetween={80}
      speed={600}
      // autoplay={{
      //   delay: 5000,
      //   disableOnInteraction: false,
      // }}
      // navigation={true}
      modules={[Pagination, Autoplay, Navigation]}
      className={`relative flex max-w-[1400px] p-6  h-full`}
    >
      <SwiperSlide>
        <div className={` relative h-full flex items-center`}>
          <Slidp />
        </div>
        {window.innerWidth > 990 ? (
          <ul className='absolute top-0 right-0 flex items-center'>
            <li className='p-6  font-semibold text-base my-auto'>
              <a href="/pricing">Pricing</a>
            </li>
            <li className='p-6  font-semibold text-base'>
              <a href="/How-it-works">How it works</a>
            </li>
            <li className='p-6  font-semibold text-base'>
              <a href="/login">login</a>
            </li>
            <li className='hdritembtn'>
              <a href="/register">Signup</a>
            </li>
          </ul>
        ) : (
          <p></p>
        )}
      </SwiperSlide>
    </Swiper>
  );
};

export default Notmain;
