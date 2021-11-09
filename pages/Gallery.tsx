import Grid from "../components/Grid";

export default function Gallery() {
  return (
    <div>
      <header className="mb-12 text-center">
        <h1 className="font-bold text-4xl text-black capitalize text-center ">
          Our Selection
        </h1>
        <h4 className="font-medium text-xl text-gray-400 capitalize italic text-center ">
          loremProident nulla laborum aliquip esse est magna dolore fugiat elit
          cupidatat.
        </h4>
      </header>
      <Grid gridData={STATIC_DATA} />
    </div>
  );
}

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
