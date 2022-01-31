import { url } from "inspector";
import React, { ReactElement } from "react";
import { IoCloseSharp } from "react-icons/io5";
import ButtonStandard from "./Button";

export default function ContactCard(): ReactElement {
  const image =
    "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";
  return (
    <div className="md:w-8/12 w-full self-center justify-self-center">
      <div className="relative flex flex-col bg-white w-full mb-6 shadow-lg rounded-lg">
        <div className="relative bg-contact-pattern bg-cover bg-center bg-no-repeat bg-center w-full h-64">
          <svg
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 300 105"
            className="absolute left-0 bottom-0 w-full "
          >
            <polygon
              points="-30,105 300,150 300,65"
              className="text-white fill-current"
            ></polygon>
          </svg>
          <div className="absolute top-2 z-10 w-full">
            <div className="flex w-full text-white">
              <div className="flex justify-center items-center">
                <IoCloseSharp className="ml-4 self-center text-lg" />
                <h4 className="ml-4 justify-self-end text-sm uppercase">
                  contact us
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="relative pt-12 p-8">
          <form className="flex flex-col">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="text"
              type="text"
              required
              autoFocus
              placeholder="Name"
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              type="email"
              required
              autoFocus
              placeholder="Email"
            />
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 mb-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="message"
              required
              autoFocus
              placeholder="Message"
            />
            <ButtonStandard
              label="submit"
              styles="shrink self-center text-center rounded-full px-8 capitalize"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
