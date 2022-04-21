import { useState } from "react";
import Layout from "../components/Layout";
import { useEffect } from "../.next/static/chunks/pages";
import { sendProductsToDatabase } from "../helpers/sendProductData";
import { AllProductData } from "../static-data/cake-data";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
