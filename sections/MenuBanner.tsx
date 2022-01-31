import React, { ReactElement } from "react";
import ButtonStandard from "../components/Button";
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
          chocolate pudding, vanilla, strawberry, chocol, chocolate pudding,
          vanilla, strawberryate pudding, vanilla, strawberry
        </p>
        <p className="ml-2.5 my-1 font-bold text-brown text-xl flex-end text-salmon-pink">
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
          <h1 className="font-bold text-4xl text-black capitalize text-center ">
            discover our menu
          </h1>
          <h4 className="font-medium text-xl text-salmon-pink capitalize italic text-center ">
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
      <ButtonStandard
        label="view full menu"
        styles="bg-salmon-pink text-white mt-24"
      />
    </section>
  );
}
