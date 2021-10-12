import React, { createRef, ReactElement, useState, useEffect } from "react";
import "../styles/tailwind.css";

type TestimonialCarouselProps = {
  text: string;
  name: string;
  index: number;
  refs: any;
};

type TestimonialProps = {
  menulist: TestimonialCarouselProps[];
};

type PaginationProps = {
  totalNumberOfTestimonials: number;
  refs: any;
  currentImage: number;
  nextImage: () => void;
  previousImage: () => void;
};

function TestimonialCarousel({
  text,
  name,
  index,
  refs,
}: TestimonialCarouselProps): ReactElement {
  return (
    <div className="w-full flex-shrink-0" ref={refs[index]}>
      <div className="flex flex-col text-center text-white ">
        <p className="my-1 text-base pb-2">{text}</p>
        <p className="my-1  font-base justify-start">- {name}</p>
      </div>
    </div>
  );
}

function Pagination({
  totalNumberOfTestimonials,
  refs,
  currentImage,
  nextImage,
  previousImage,
}: PaginationProps): ReactElement {
  return (
    <div className="flex items-center">
      <div
        className="border-2 border-white rounded-full h-8 w-8 flex items-center justify-center mr-4"
        onClick={nextImage}
      >
        <p className="text-white text-lg ">{`<`}</p>
      </div>
      <div
        className="border-2 border-white rounded-full h-8 w-8 flex items-center justify-center"
        onClick={previousImage}
      >
        <p className="text-white text-lg ">{`>`}</p>
      </div>
    </div>
  );
}

export default function Testimonial(): ReactElement {
  const totalNumberOfTestimonials = TESTIMONIALS_STATICS.length;
  const [currentImage, setCurrentImage] = useState(0);

  const scrollToImage = (i) => {
    setCurrentImage(i);
    refs[i].current.scrollIntoView({
      //     Defines the transition animation.
      behavior: "smooth",
      //      Defines vertical alignment.
      block: "nearest",
      //      Defines horizontal alignment.
      inline: "start",
    });
  };

  const nextImage = () => {
    if (currentImage >= totalNumberOfTestimonials - 1) {
      scrollToImage(0);
    } else {
      scrollToImage(currentImage + 1);
    }
  };

  const previousImage = () => {
    if (currentImage === 0) {
      scrollToImage(totalNumberOfTestimonials - 1);
    } else {
      scrollToImage(currentImage - 1);
    }
  };
  const refs = TESTIMONIALS_STATICS.reduce((acc, val, i) => {
    acc[i] = createRef();
    return acc;
  }, {});

  useEffect(() => {
    const autoplay = setInterval(() => {
      console.log(`currentImage: ${currentImage}`);
      nextImage;
    }, 6000);

    return () => clearInterval(autoplay);
  }, [nextImage]);
  return (
    <section className="container flex flex-1 items-center justify-center bg-gradient-to-r from-blue-300 to-pink-400 ">
      <div className="flex flex-col justify-center items-center w-5/6">
        <header className="flex mb-12 text-center justify-between w-full">
          <h1 className="font-bold text-4xl text-white capitalize italic">
            Testimonial
          </h1>
          {true && (
            <Pagination
              refs={refs}
              nextImage={nextImage}
              previousImage={previousImage}
              currentImage={currentImage}
              totalNumberOfTestimonials={totalNumberOfTestimonials}
            />
          )}
        </header>
        <div className="flex justify-center items-center w-4/5 overflow-hidden">
          {TESTIMONIALS_STATICS.map(({ text, name }, index) => {
            return (
              <TestimonialCarousel
                key={name}
                text={text}
                name={name}
                index={index}
                refs={refs}
              />
            );
          })}
        </div>
        <div className="self-center pt-6">
          {false && (
            <Pagination
              refs={refs}
              nextImage={nextImage}
              previousImage={previousImage}
              currentImage={currentImage}
              totalNumberOfTestimonials={totalNumberOfTestimonials}
            />
          )}
        </div>
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
