import React, { ReactElement } from "react";
import "../styles/tailwind.css";

import { GiCupcake } from "react-icons/gi";
import { RiCake3Line } from "react-icons/ri";
import { HiOutlineCake } from "react-icons/hi";

export default function ServicesWeProvideBanner(): ReactElement {
  return (
    <section className=" container bg-pink-300 flex flex-col items-center ">
      <h1 className="font-bold flex flex-col items-center content-center text-white text-center  text-3xl uppercase mb-12">
        Services we provide
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        <div className=" container flex flex-col items-center content-center text-white text-lg text-center">
          <div className="text-7xl">
            <GiCupcake />
          </div>
          <h4 className="my-2 capitalize font-semibold text-xl">Cupcakes</h4>
          <p className="my-0">
            Culpa eu laboris dolor labore aliquip non et do sit culpa.
          </p>
        </div>
        <div className=" container flex flex-col items-center content-center text-white text-lg text-center">
          <div className="text-7xl">
            <RiCake3Line />
          </div>
          <h4 className="my-2 capitalize font-semibold text-xl">Cakes</h4>
          <p className="my-0">
            Culpa eu laboris dolor labore aliquip non et do sit culpa.
          </p>
        </div>
        <div className=" container flex flex-col items-center content-center text-white text-lg text-center">
          <div className="text-7xl">
            <HiOutlineCake />
          </div>
          <h4 className="my-2 capitalize font-semibold text-xl">
            Something else
          </h4>
          <p className="my-0">
            Culpa eu laboris dolor labore aliquip non et do sit culpa.
          </p>
        </div>
      </div>
    </section>
  );
}
