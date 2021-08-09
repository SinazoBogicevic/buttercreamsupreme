import React, { ReactElement } from "react";
import "../styles/tailwind.css";

type TestimonialCarouselProps = {
  text: string;
  name: string;
};

type TestimonialProps = {
  menulist: TestimonialCarouselProps[];
};

function TestimonialCarousel({
  text,
  name,
}: TestimonialCarouselProps): ReactElement {
  return (
    <div className="border-2 p-6">
      <div className="flex flex-col text-center  text-white ">
        <p className="my-1 text-base pb-2">{text}</p>
        <p className="my-1  font-base justify-start">- {name}</p>
      </div>
    </div>
  );
}

function Pagination(): ReactElement {
  return (
    <div className="flex items-end">
      <div className="border-2 border-white rounded-full h-8 w-8 flex items-center justify-center mr-4">
        <p className="text-white text-lg ">{`<`}</p>
      </div>
      <div className="border-2 border-white rounded-full h-8 w-8 flex items-center justify-center">
        <p className="text-white text-lg ">{`>`}</p>
      </div>
    </div>
  );
}

export default function Testimonial(): ReactElement {
  return (
    <section className="container flex flex-1 items-center justify-center bg-gradient-to-r from-blue-300 to-pink-400 ">
      <div className="flex flex-col justify-center items-center">
        <header className="flex mb-12 text-center justify-between w-4/6">
          <h1 className="font-bold text-4xl text-white capitalize italic">
            Testimonial
          </h1>
          {true && <Pagination />}
        </header>
        <div className="max-w-lg md:w-4/6 ">
          {TESTIMONIALS_STATICS.map(({ text, name }) => {
            <TestimonialCarousel key={name} text={text} name={name} />;
          })}
        </div>
        <div className="self-center pt-6">{false && <Pagination />}</div>
      </div>
    </section>
  );
}

export const TESTIMONIALS_STATICS = [
  {
    text: `Ea laborum sunt cupidatat Lorem pariatur duis officia eu id
    proident.Ea do consectetur id nostrud irure non fugiat esse est in est
    laboris ea.Deserunt eiusmod incididunt cillum sunt.Incididunt amet
    excepteur deserunt labore Lorem cupidatat anim labore veniam enim
    qui.Amet est elit voluptate magna ad adipisicing.`,
    name: `Robert Brown`,
  },
  {
    text: `Ea laborum sunt cupidatat Lorem pariatur duis officia eu id
    proident.Ea do consectetur id nostrud irure non fugiat esse est in est
    laboris ea.Deserunt eiusmod incididunt cillum sunt..`,
    name: `Ice Cube`,
  },
  {
    text: `Ea laborum sunt cupidatat Lorem pariatur duis officia eu id
    proident.Ea do consectetur id nostrud irure non fugiat esse est in est
    laboris ea.DeseruntIncididunt amet
    excepteur deserunt labore Lorem cupidatat anim labore veniam enim
    qui.Amet est elit voluptate magna ad adipisicing eiusmod incididunt cillum sunt.Incididunt amet
    excepteur deserunt labore Lorem cupidatat anim labore veniam enim
    qui.Amet est elit voluptate magna ad adipisicing.`,
    name: `Robert Lesley`,
  },
  {
    text: `Ea laborum sunt cupidatat Lorem pariatur duis officia eu id
    proident.Ea do consectetur id nostrud irure non fugiat esse est in est
    laboris ea.Deserunt eiusmodEa laborum sunt cupidatat Lorem pariatur duis officia eu id
    proident. anim labore veniam enim incididunt cillum sunt.Incididunt amet
    excepteur deserunt labore Lorem cupidatat anim labore veniam enim
    qui.Amet est elit voluptate magna ad adipisicing.`,
    name: `Emma Brown`,
  },
  {
    text: `Ea laborum sunt cupidatat Lorem pariatur duis officia eu id
    proident. anim labore veniam enim
    qui.Amet est elit voluptate magna ad adipisicing.`,
    name: `Seaview Summer`,
  },
];
