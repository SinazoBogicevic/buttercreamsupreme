import Grid from "../components/Grid";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";

export default function Gallery() {
  return (
    <div className="flex flex-col">
      <Navbar
        image={"Home"}
        links={[
          {
            path: "/home",
            link: "home",
          },
          {
            path: "/products",
            link: "products",
          },
          {
            path: "/gallery",
            link: "gallery",
          },
        ]}
      />
      <header className="my-16 text-center">
        <h1 className="font-bold text-4xl text-black capitalize text-center ">
          Our Selection
        </h1>
        <h4 className="font-medium text-xl text-gray-400 capitalize italic text-center ">
          loremProident nulla laborum aliquip esse est magna dolore fugiat elit
          cupidatat.
        </h4>
      </header>
      <div className="mt-16 mb-28">
        <Grid gridData={STATIC_DATA} />
      </div>

      <Footer />
    </div>
  );
}

const NAVBAR_PROPS = {
  image: "image",
  links: [
    {
      path: "/home",
      link: "home",
    },
    {
      path: "/products",
      link: "products",
    },
    {
      path: "/gallery",
      link: "gallery",
    },
  ],
};

const STATIC_DATA = [
  {
    name: "Product1",
    price: 250,
    salePrice: 190,
    sale: true,
    thumb:
      "https://cakeciouswp.bolvosites.com/demo4/wp-content/uploads/sites/17/2018/06/welcome-right.jpg",
  },
  {
    name: "Product2",
    price: 250,
    salePrice: 190,
    sale: true,
    thumb:
      "https://cakeciouswp.bolvosites.com/demo4/wp-content/uploads/sites/17/2018/06/welcome-right.jpg",
  },
  {
    name: "Product3",
    price: 250,
    salePrice: 190,
    sale: true,
    thumb:
      "https://cakeciouswp.bolvosites.com/demo4/wp-content/uploads/sites/17/2018/06/welcome-right.jpg",
  },
  {
    name: "Product4",
    price: 250,
    salePrice: 190,
    sale: true,
    thumb:
      "https://cakeciouswp.bolvosites.com/demo4/wp-content/uploads/sites/17/2018/06/welcome-right.jpg",
  },
];
