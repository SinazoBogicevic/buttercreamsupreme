import Head from "next/head";

const Meta = ({ title, keywords, description, url, summary, image }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale= 1" />
      <meta name="keywords" content={keywords} />
      <meta name="og:description" content={description} />
      <meta name="theme-color" content="#dbc3bf" />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="fb:app_id" content="your fb app id" />
      <meta property="og:title" content={title} />
      <meta name="twitter:card" content={summary} />
      <meta property="og:image" content={image} />
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
  title: "Buttercream Supreme",
  keywords:
    "south coast, port edward, margate, uvongo, port shepstone, delivers,bakery near me, cakes near me, cupcakes near me, gluten-free cakes, gluten-free cupcakes",
  description:
    "Buttercream Supreme specialises in gourmet cakes and cupakes. We deliver to the South and Wild Coast",
  url: "www.buttercreamsupreme.co.za",
  summary: "creme de la cream of baking",
  image: "/images/logo.jpg",
};

export default Meta;
