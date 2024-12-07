"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import ChevronLeft from "images/chevron-left-regular.svg";
import ChevronRight from "images/chevron-right-regular.svg";

import "swiper/css";

export interface ISwiperProps {
  spaceBetween: number;
  slidesPerView: number;
  slides: React.ReactElement[];
  onSlideChange?: () => void;
  onSwiper?: (ref: any) => void;
}

export default function CustomSwiper({
  slidesPerView,
  spaceBetween,
  slides,
  onSlideChange,
  onSwiper,
}: ISwiperProps) {
  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      onSlideChange={onSlideChange}
      onSwiper={onSwiper}
    >
      {slides.map((item, key) => (
        <SwiperSlide key={key}>{item}</SwiperSlide>
      ))}
    </Swiper>
  );
}

const SwiperNav = ({ swiper }: { swiper: any }) => {
  return (
    <div className="flex w-full justify-between relative left-0 bottom-1/2 z-[1]">
      <button
        className="flex items-center justify-center rounded-full bg-sparkPurple-50 w-9 h-9"
        onClick={() => swiper?.current?.slidePrev()}
      >
        <ChevronLeft className="fill-gray-700" />
      </button>
      <button
        className="flex items-center justify-center rounded-full bg-sparkPurple-50 w-9 h-9"
        onClick={() => swiper?.current?.slideNext()}
      >
        <ChevronRight className="fill-gray-700" />
      </button>
    </div>
  );
};

CustomSwiper.Nav = SwiperNav;
