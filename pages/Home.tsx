import Navbar from "../components/Navbar";
import FeaturedCakes from "../sections/FeaturedCakes";
import Footer from "../sections/Footer";
import KnowMoreBanner from "../sections/KnowMoreBanner";
import NewsletterBanner from "../sections/NewsletterBanner";
import ServicesWeProvideBanner from "../sections/ServicesWeProvideBanner";
import Testimonial from "../sections/Testimonial";

export default function Home() {
  return (
    <div className="flex flex-col overflow-hidden bg-primary-lightest">
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
      <KnowMoreBanner />
      <ServicesWeProvideBanner />
      <FeaturedCakes />
      <Testimonial />
      <NewsletterBanner />
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
