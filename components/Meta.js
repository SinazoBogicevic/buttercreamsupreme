import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale= 1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charset="utf-8" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "ButterCream Supreme",
  keywords:
    "south coast, port edward, margatem uvongo, port shepstone, delivers,bakery, cakes, cupcakes, gluten-free cakes, gluten-free cupcakes",
  description: "order cupcakes and cakes for all occassions",
};

export default Meta;
