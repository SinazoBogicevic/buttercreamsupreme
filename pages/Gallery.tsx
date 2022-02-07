import Grid from "../components/Grid";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import MasonryGrid from "../components/MasonryGrid";

export default function ProductList() {
  return (
    <div>
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
      <MasonryGrid gridData={GRIDDATA} />

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

const GRIDDATA = [
  {
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1389&q=80",
    key: 1,
  },
  {
    image:
      "https://images.unsplash.com/photo-1535141192574-5d4897c12636?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    key: 3,
  },
  {
    image: "https://unsplash.com/photos/6SHd7Q-l1UQ",
    key: 4,
  },
  {
    image:
      "https://images.unsplash.com/photo-1582293041079-7814c2f12063?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    key: 5,
  },
  {
    image:
      "https://images.unsplash.com/photo-1622896784083-cc051313dbab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    key: 6,
  },
  {
    image:
      "https://images.unsplash.com/photo-1631397833242-fc6213046352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    key: 7,
  },

  {
    image:
      "https://images.unsplash.com/photo-1557308536-ee471ef2c390?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    key: 8,
  },
  {
    image:
      "https://images.unsplash.com/photo-1627308595171-d1b5d67129c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    key: 9,
  },
  {
    image:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80",
    key: 10,
  },
];
