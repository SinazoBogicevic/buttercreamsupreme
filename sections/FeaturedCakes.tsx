import React, { ReactElement } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { grey, pink, white } from "../constants/colors";
import FeaturedProductsCarousel from "../components/FeaturedProductsCarousel";
// @ts-ignore
import sliceOfFruitCake from "../public/imgs/sliceOfFruitCake.jpg";
// @ts-ignore
import ferreroCake from "../public/imgs/ferreroCake.jpg";

export type Props = {
  featuredCakes: [
    {
      name: string;
      price: number;
      salePrice: number;
      thumb: string;
      sale: boolean;
    }
  ];
};

export default function Featured(): ReactElement {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
        <Typography className={classes.title} variant="h1">
          featured cakes
        </Typography>
        <Typography className={classes.subtitle} variant="h3">
          Seldolor sit amet consect eturMinim excepteur laboris anim fugiat
          adipisicing occaecat aliquip nostrud excepteur sint.
        </Typography>
      </div>
      <div className="w-full mt-28 mb-28">
        <FeaturedProductsCarousel gridData={STATIC_DATA} />
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      justifyItems: "center",
      alignItems: "center",
      textAlign: "center",
      marginTop: "8rem",
    },
    title: {
      textTransform: "capitalize",
      fontWeight: 700,
      fontSize: "3rem",
      color: "#43000b",
    },
    subtitle: {
      marginTop: 8,
      fontSize: "1.5rem",
      color: "rgb(250, 128, 114)",
    },
    textContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      paddingRight: "4rem",
      paddingLeft: "4rem",
    },
    gridListWrapper: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      marginTop: 32,
    },
    gridList: {
      flexWrap: "nowrap",
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: "translateZ(0)",
    },
    circleTileBar: {
      background: "none",
    },
    circle: {
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      width: 30,
      height: 30,
      padding: 8,
      background: pink,
      borderRadius: "50%",
      marginRight: 12,
      marginTop: 16,
    },
    icon: {
      fonSize: 6,
      color: white,
    },
    titleBar: {
      background: white,
    },
    text: {},
    prices: {
      display: "flex",
      justifyContent: "space-between`",
    },
  })
);

const STATIC_DATA = [
  {
    name: "Triple layer lemon curd",
    price: 540,
    thumb:
      "https://images.unsplash.com/photo-1627834377411-8da5f4f09de8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=701&q=80",
  },
  {
    name: "double layer chocolate mint",
    price: 3300,
    thumb: ferreroCake,
  },
  {
    name: "double layer cookies and cream",
    price: 1247,
    thumb:
      "https://images.unsplash.com/photo-1612809075925-230725151da2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=788&q=80",
  },
  {
    name: "cinnamon and vanilla cupcake",
    price: 294,
    thumb:
      "https://images.unsplash.com/photo-1596223575327-99a5be4faf1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
];
