/* eslint-disable prettier/prettier */
import React, { ReactElement } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../styles/tailwind.css";
import FeaturedProductCard from "./FeaturedProductCard";

export type Props = {
  gridData: {
    name: string;
    price: number;
    thumb: string;
  }[];
};

export default function Grid({ gridData }: Props): ReactElement {
  return (
    <Swiper spaceBetween={50} slidesPerView={4}>
      {gridData.map(({ name, price, thumb }) => {
        return (
          <SwiperSlide>
            <FeaturedProductCard
              key={name}
              name={name}
              price={price}
              thumb={thumb}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
