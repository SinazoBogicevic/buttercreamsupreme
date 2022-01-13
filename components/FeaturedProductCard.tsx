import React, { ReactElement } from "react";
import "../styles/tailwind.css";
import ButtonStandard from "./Button";

type Props = {
  name: string;
  price: number;
  thumb: string;
  handleCard?: () => void;
};

export default function FeaturedCard({
  name,
  price,
  thumb,
  ...rest
}: Props): ReactElement {
  return (
    <div className="swiper-slide max-w-56 w-56 max-h-80 h-80 bg-light-card-background shadow-md rounded-lg pb-4">
      <div className="w-full h-52 max-h-52 overflow-hidden">
        <img
          className="rounded-t-lg w-full  h-full max-h-full object-cover"
          src={thumb}
          alt="cake"
        />
      </div>
      <div className="px-5 ">
        <div>
          <div className="h-12">
            <h3 className="text-darkest-text-color capitalize font-medium text-m tracking-tight dark:text-white">
              {name}
            </h3>
          </div>
        </div>
        <div className="flex items-center justify-between mt-1 pb-2">
          <span className="text-m font-bold text-darkest-text-color ">
            R{price}
          </span>
          <ButtonStandard label="add to cart" />
        </div>
      </div>
    </div>
  );
}
