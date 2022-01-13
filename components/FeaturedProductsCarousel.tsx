/* eslint-disable prettier/prettier */
import React, { ReactElement } from "react";
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {gridData.map(({ name, price, thumb }) => {
        return (
          <FeaturedProductCard
            key={name}
            name={name}
            price={price}
            thumb={thumb}
          />
        );
      })}
    </div>
  );
}
