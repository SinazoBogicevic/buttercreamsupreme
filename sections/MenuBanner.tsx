import React, { ReactElement } from "react";
import "../styles/tailwind.css";

type MenuItemProps = {
  productName: string;
  productDescription: string;
  price: number;
};

type MenuBannerProps = {
  menulist: MenuItemProps[];
};

function MenutItem(): ReactElement {
  return (
    <div className="border-b-2 pb-4 border-gray-300 border-dashed">
      <h5 className="font-bold text-black text-xl capitalize">
        double chocolate pie
      </h5>
      <div className="flex justify-between">
        <p className="my-1 text-base text-gray-600">
          chocolate pudding, vanilla, strawberry
        </p>
        <p className="my-1  font-bold text-brown text-xl flex-end text-yellow-700">
          R200
        </p>
      </div>
    </div>
  );
}

export default function MenuBanner(): ReactElement {
  return (
    <section className=" container flex flex-1 flex-col items-center ">
      <div>
        <header className="mb-12 text-center">
          <h1 className="font-bold text-4xl text-black uppercase text-center ">
            disccover our menu
          </h1>
          <h4 className="font-medium text-xl text-gray-400 capitalize italic text-center ">
            We offer a wide range of items
          </h4>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 ">
          <MenutItem />
          <MenutItem />
          <MenutItem />
          <MenutItem />
          <MenutItem />
          <MenutItem />
          <MenutItem />
          <MenutItem />
          <MenutItem />
        </div>
      </div>
    </section>
  );
}
