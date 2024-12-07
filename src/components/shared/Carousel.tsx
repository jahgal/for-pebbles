import { useRef } from "react";

import Swiper, { ISwiperProps } from "@/components/shared/Swiper";
import { cn } from "@/utils";

interface CarouselProps extends ISwiperProps {
  useNavigation?: boolean;
  wrapperClass?: string;
}

export default function Carousel({
  slidesPerView,
  spaceBetween,
  slides,
  onSlideChange,
  wrapperClass,
  useNavigation = false,
}: CarouselProps) {
  const swiperRef = useRef();
  const onSwiper = (swiper: any) => {
    swiperRef.current = swiper;
  };

  return (
    <>
      <div className={cn(wrapperClass)}>
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={spaceBetween}
          slides={slides}
          onSwiper={onSwiper}
          onSlideChange={onSlideChange}
        />
      </div>
      {useNavigation && <Swiper.Nav swiper={swiperRef} />}
    </>
  );
}
