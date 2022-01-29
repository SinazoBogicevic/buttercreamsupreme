import React, { ReactElement } from "react";
import { EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "../styles/tailwind.css";

export default function NewTestimonial(): ReactElement {
  const image =
    "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80";
  return (
    <div className="w-screen mb-16 flex flex-1 items-center justify-center bg-light-card-background text-darkest-text-color rounded-lg shadow-lg mt-10 py-10 border-2 border-red-600">
      <div className="flex flex-col justify-center items-center w-4/6 border-2 border-blue-600 overflow-hidden">
        <header className="flex flex-col mb-12 text-center">
          <h1 className="font-bold text-4xl capitalize text-darkest-text-color">
            What our clients say
          </h1>
          <h4 className="">
            Our clients send us bunch of smiles with our services and we love
            them
          </h4>
        </header>
        <div className=" self-center w-3/4  border-2 border-emerald-600">
          <Swiper spaceBetween={25} slidesPerView={1} effect="fade">
            {TESTIMONIALS_STATICS.map(({ name, place, text }, index) => {
              return (
                <SwiperSlide key={`${name}${index}`}>
                  <div className="swiper-slide flex flex-col justify-center items-center w-full overflow-hidden text-center border-2 border-sky-600">
                    <div className="w-28 h-28 rounded-full overflow-hidden mb-4">
                      <img className="w-full h-full object-cover" src={image} />
                    </div>
                    <h3 className="font-bold">{name}</h3>
                    <h4>{place}</h4>
                    <div className="text-darkest-text-color text-center w-3/4">
                      <p>{text}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export const TESTIMONIALS_STATICS = [
  {
    name: `Robert Brown`,
    place: `Port Edward, South Africa`,
    text: `Ea laborum sunt cupidatat Lorem pariatur duis officia eu id
    proident.Ea do consectetur id nostrud irure non fugiat esse est in est
    laboris ea.Deserunt eiusmod incididunt cillum sunt.Incididunt amet
    excepteur deserunt labore Lorem cupidatat anim labore veniam enim
    qui.Amet est elit voluptate magna ad adipisicing.`,
  },
  {
    name: `Litha Lethulethu`,
    place: `Ghamalakhe, South Africa`,
    text: `Ea laborum sunt cupidatat Lorem pariatur duis officia eu id
    proident.Ea do consectetur id nostrud irure non fugiat esse est in est
    laboris ea.Deserunt eiusmod incididunt cillum sunt..`,
  },
  {
    name: `Robert Brown`,
    place: `Uvongo, South Africa`,
    text: `Ea laborum sunt cupidatat Lorem pariatur duis officia eu id
    proident.Ea do consectetur id nostrud irure non fugiat esse est in est
    laboris ea.DeseruntIncididunt amet
    excepteur deserunt labore Lorem cupidatat anim labore veniam enim
    qui.Amet est elit voluptate magna ad adipisicing eiusmod incididunt cillum sunt.Incididunt amet
    excepteur deserunt labore Lorem cupidatat anim labore veniam enim
    qui.Amet est elit voluptate magna ad adipisicing.`,
  },
  {
    name: `Rajesh Moodley`,
    place: `Port Shepstone, South Africa`,
    text: `Ea laborum sunt cupidatat Lorem pariatur duis officia eu id
    proident.Ea do consectetur id nostrud irure non fugiat esse est in est
    laboris ea.Deserunt eiusmodEa laborum sunt cupidatat Lorem pariatur duis officia eu id
    proident. anim labore veniam enim incididunt cillum sunt.Incididunt amet
    excepteur deserunt labore Lorem cupidatat anim labore veniam enim
    qui.Amet est elit voluptate magna ad adipisicing.`,
  },
  {
    name: `Anonymous`,
    place: `Pennington, South Africa`,
    text: `Ea laborum sunt cupidatat Lorem pariatur duis officia eu id
    proident. anim labore veniam enim
    qui.Amet est elit voluptate magna ad adipisicing.`,
  },
];
