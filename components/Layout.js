import Meta from "./Meta";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <div>{children}</div>
    </>
  );
};

export default Layout;
