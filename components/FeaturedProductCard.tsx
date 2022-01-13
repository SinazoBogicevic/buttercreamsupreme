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
    <div className="max-w-40 bg-light-card-background shadow-md rounded-lg max-w-sm">
      <div className="max-h-30">
        <img className="rounded-t-lg " src={thumb} alt="cake" />
      </div>
      <div className="px-5 pb-4">
        <div>
          <h3 className="text-darkest-text-color font-semibold text-xl tracking-tight dark:text-white">
            {name}
          </h3>
        </div>
        <div
          className="flex items-center justify-between mt-2.5
        "
        >
          <span className="text-xl font-bold text-darkest-text-color">
            R{price}
          </span>
          <ButtonStandard label="add to cart" />
        </div>
      </div>
    </div>
  );
}
