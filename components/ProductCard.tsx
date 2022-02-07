import React, { ReactElement } from "react";
import "../styles/tailwind.css";
import ButtonStandard from "./ButtonStandard";

export type Props = {
  name: string;
  price: number;
  salePrice: number;
  sale: boolean;
  thumb: string;
  handleCard?: () => void;
};

export default function FeaturedCard({
  name,
  price,
  salePrice,
  sale,
  thumb,
  ...rest
}: Props): ReactElement {
  return (
    <div className="bg-light-card-background shadow-md rounded-lg pb-4">
      <div className="w-full h-52 max-h-52 overflow-hidden">
        <img
          className="rounded-t-lg w-full  h-full max-h-full object-cover"
          src={thumb}
          alt="cake"
        />
      </div>
      <div className="px-5 pt-2">
        <h3 className="text-darkest-text-color capitalize text-xl font-bold dark:text-white">
          {name}
        </h3>

        {/* <span className="block  text-darkest-text-color font-bold ">
          Order now
        </span> */}
        <span className="">
          {sale && (
            <span className="text-gray-400 text-sm line-through mr-4">
              R{salePrice}
            </span>
          )}
          <span className="text-darkest-text-color text-lg font-bold">
            R{price}
          </span>
        </span>
        <span className="block lightest-text-color text-sm ">
          Vivamus ac ligula sit amet erat luctus laoreet ac quis ligula. Donec
          bibendum faucibus purus eget cursus.
        </span>
        <div className="flex items-center justify-between mt-1 pb-2">
          <span className="text-m font-bold text-darkest-text-color ">
            R{price}
          </span>
          {false && <ButtonStandard label="add to cart" />}
        </div>
      </div>
    </div>
  );
}
