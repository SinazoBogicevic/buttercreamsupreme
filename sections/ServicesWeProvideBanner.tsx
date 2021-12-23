import React, { ReactElement } from "react";
import "../styles/tailwind.css";

import { GiCupcake } from "react-icons/gi";
import { RiCake3Line } from "react-icons/ri";
import { HiOutlineCake } from "react-icons/hi";

export default function ServicesWeProvideBanner(): ReactElement {
  return (
    <div className="w-screen text-black bg-red-300 text-white flex flex-col items-center pb-16">
      <h1 className="font-bold flex flex-col items-center content-center text-center  text-5xl uppercase mb-12">
        Goods
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        <div className=" container flex flex-col items-center content-center text-lg text-center ">
          <div className="text-7xl">
            <GiCupcake />
          </div>
          <h4 className="my-2 capitalize font-semibold text-xl">Cupcakes</h4>
          <p className="my-0 px-6">
            Culpa eu laboris dolor labore aliquip non et do sit culpa.
          </p>
        </div>
        <div className=" container flex flex-col items-center content-center text-lg text-center">
          <div className="text-7xl">
            <RiCake3Line />
          </div>
          <h4 className="my-2 capitalize font-semibold text-xl">Cakes</h4>
          <p className="my-0 px-6">
            Culpa eu laboris dolor labore aliquip non et do sit culpa.
          </p>
        </div>
        <div className=" container flex flex-col items-center content-center text-lg text-center">
          <div className="text-7xl">
            <HiOutlineCake />
          </div>
          <h4 className="my-2 capitalize font-semibold text-xl">
            Something else
          </h4>
          <p className="my-0 px-6">
            Culpa eu laboris dolor labore aliquip non et do sit culpa.
          </p>
        </div>
      </div>
      <hr className="my-6 border-white" />
    </div>
  );
}
