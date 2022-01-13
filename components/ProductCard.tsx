import React, { ReactElement } from "react";
import "../styles/tailwind.css";

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
    <div>
      <div className="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div">
        <div>
          <div className="w-full image-cover rounded-t-md">
            {sale && (
              <div className="p-2 m-4 w-16 h-16 flex items-center justify-center  rounded-full text-white float-right fd-cl group-hover:opacity-25 bg-pink-300">
                <span className="text-xs tracking-wide font-bold uppercase block font-sans ">
                  Sale!
                </span>
              </div>
            )}
          </div>
          <div className="py-4 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
            <span className="block text-xl text-gray-800 font-bold tracking-wide">
              Order now
            </span>
            <span className="leading-10">
              {sale && (
                <span className="text-gray-400 text-sm line-through mr-4">
                  R{salePrice}
                </span>
              )}
              <span className="text-black text-lg font-bold">R{price}</span>
            </span>
            <span className="block text-gray-600 text-sm ">
              Vivamus ac ligula sit amet erat luctus laoreet ac quis ligula.
              Donec bibendum faucibus purus eget cursus. Proin enim ante,
              scelerisque vel sem sit amet, ultrices mollis risus.
            </span>
          </div>
        </div>
        <div className="absolute opacity-0 fd-sh group-hover:opacity-100">
          <span className="text-3xl font-bold text-white tracking-wider leading-relaxed font-sans">
            {name}
          </span>
          <div className="pt-8 text-center ">
            <button className="text-center uppercase rounded-lg p-4 bg-white  text-gray-700 font-bold text-lg hover:bg-pink-300 hover:text-white transform focus:scale-110">
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
