/* eslint-disable prettier/prettier */
import React, { ReactElement } from "react";
import "../styles/tailwind.css";
import ProductCard from "./ProductCard";

export type Props = {
  gridData: {
    name: string;
    price: number;
    salePrice: number;
    thumb: string;
    isOnSale: boolean;
  }[];
};

export default function Grid({ gridData }: Props): ReactElement {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-x-8 justify-items-center items-center mx-4 mt-24 mb-24">
      {gridData.map(({ name, price, salePrice, isOnSale, thumb }) => {
        return (
          <ProductCard
            key={name}
            name={name}
            price={price}
            isOnSale={isOnSale}
            salePrice={salePrice}
            thumb={thumb}
          />
        );
      })}
    </div>
  );
}
