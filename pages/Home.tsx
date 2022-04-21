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

      <FeaturedCakes />
      <ServicesWeProvideBanner />
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
