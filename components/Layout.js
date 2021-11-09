import Meta from "./Meta";
import Footer from "../sections/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
