"use client";

import { useRouter } from "next/navigation";
import { range } from "lodash";

import GridLayout from "@shared/GridLayout";
import Thumbnail from "@shared/Thumbnail";
import Carousel from "@shared/Carousel";

export default function MainList() {
  const router = useRouter();
  return (
    <GridLayout>
      <div className="col-span-10 col-start-2">
        <h1 className="text-gray-900 text-heading-s mb-11">이달의 추천작</h1>
        <div className="grid grid-cols-5 gap-x-12 gap-y-10 px-11">
          {range(0, 10).map((i) => (
            <Thumbnail key={i} onClick={() => router.push(`/books/${i}`)} />
          ))}
        </div>
      </div>
      <div className="col-span-10 col-start-2 mt-24">
        <h1 className="text-gray-900 text-heading-s mb-11">이달의 신작</h1>
        <Carousel
          slidesPerView={5}
          spaceBetween={48}
          slides={range(0, 10).map((i) => (
            <Thumbnail key={i} onClick={() => router.push(`/books/${i}`)} />
          ))}
          wrapperClass="relative px-11"
          useNavigation
        />
      </div>
    </GridLayout>
  );
}
