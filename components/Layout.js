import Meta from "./Meta";
import Footer from "../sections/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <div className="flex flex-col justify-items-center items-center">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
