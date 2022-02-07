import React, { ReactElement, useState } from "react";
import "../styles/tailwind.css";

export default function ServicesWeProvideBanner(): ReactElement {
  const [subscribed, setSubscription] = useState(false);
  return (
    <div className="self-center flex flex-col md:h-56 bg-light-card-background rounded-lg shadow-lg overflow-hidden md:flex-row my-10">
      <div className="md:flex items-center justify-center md:w-1/2 ">
        <div className="py-6 px-8 md:py-0">
          <h2 className="text-darkest-text-color text-2xl font-bold">
            Sign Up For Project Updates
          </h2>
          <p className="mt-2 text-darkest-text-color">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consectetur obcaecati odio
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center pb-6 md:py-0 md:w-1/2 ">
        <form>
          <div className="flex flex-col rounded-lg rounded- overflow-hidden sm:flex-row">
            <input
              className="py-4 px-5  bg-white  border-2 border-primary-medium outline-none placeholder-gray-500 focus:bg-gray-100"
              type="text"
              name="email"
              placeholder="Enter your email"
            />
            <button className="py-3 px-4 bg-primary-medium text-white font-semibold uppercase hover:bg-primary-darkest">
              subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
