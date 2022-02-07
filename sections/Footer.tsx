import React, { ReactElement } from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import "../styles/tailwind.css";

export default function Footer(): ReactElement {
  return (
    <footer className="self-center justify-self-center shrink-0 pt-12  rounded  bg-primary-darkest text-white relative  pt-8 pb-6">
      <div className="container px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold ">Let's keep in touch!</h4>
            <h5 className="text-lg mt-0 mb-2 ">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6">
              <button
                className="text-white border-2 border-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FaFacebookF className="fab fa-facebook-square" />
              </button>
              <button
                className="text-white border-2 border-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FaInstagram />
              </button>
              <button
                className="text-white border-2 border-white  shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FaWhatsapp className="fab fa-whatsapp " />
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-row flex-wrap justify-between items-top mb-6">
              <div className="pr-6">
                <span className="block uppercase text-slate-50 font-light text-sm  mb-2">
                  Quick Links
                </span>
                <ul className="list-unstyled pl-0">
                  <li>
                    <a
                      className="text-white font-semibold block pb-2 text-sm hover:underline hover:decoration-solid"
                      href="https://www.creative-tim.com/presentation?ref=njs-profile"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white font-semibold block pb-2 text-sm hover:underline hover:decoration-solid"
                      href="https://blog.creative-tim.com?ref=njs-profile"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white font-semibold block pb-2 text-sm hover:underline hover:decoration-solid"
                      href="https://www.github.com/creativetimofficial?ref=njs-profile"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white font-semibold block pb-2 text-sm hover:underline hover:decoration-solid"
                      href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile"
                    >
                      Free Products
                    </a>
                  </li>
                </ul>
              </div>
              <div className="pr-6">
                <span className="block uppercase text-slate-50 font-light text-sm  mb-2">
                  Work Times
                </span>
                <ul className="list-unstyled pl-0">
                  <li>
                    <a
                      className="text-white font-semibold block pb-2 text-sm hover:underline hover:decoration-solid"
                      href="https://www.creative-tim.com/presentation?ref=njs-profile"
                    >
                      Mon - Thu: 8 am - 8 pm
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white font-semibold block pb-2 text-sm hover:underline hover:decoration-solid"
                      href="https://blog.creative-tim.com?ref=njs-profile"
                    >
                      Fri: 8 am - 8 pm
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white font-semibold block pb-2 text-sm hover:underline hover:decoration-solid"
                      href="https://www.github.com/creativetimofficial?ref=njs-profile"
                    >
                      Sat: 9am - 4pm
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white font-semibold block pb-2 text-sm hover:underline hover:decoration-solid"
                      href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile"
                    >
                      Sun: Closed
                    </a>
                  </li>
                </ul>
              </div>
              <div className="pr-6">
                <span className="block uppercase text-slate-50 font-light text-sm mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled pl-0">
                  <li>
                    <a
                      className="text-white font-semibold block pb-2 text-sm hover:underline hover:decoration-solid"
                      href="https://creative-tim.com/terms?ref=njs-profile"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white font-semibold block pb-2 text-sm hover:underline hover:decoration-solid"
                      href="https://creative-tim.com/privacy?ref=njs-profile"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white font-semibold block pb-2 text-sm hover:underline hover:decoration-solid"
                      href="https://creative-tim.com/contact-us?ref=njs-profile"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-white" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-white font-semibold py-1">
              Copyright © <span id="get-current-year">2021</span>
              <a
                href="https://www.creative-tim.com/product/notus-js"
                className="text-white"
                target="_blank"
              >
                Buttercream Supreme
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
