import React, { ReactElement } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { grey, pink, white } from "../constants/colors";
import Grid from "../components/Grid";

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
          our featured cakes
        </Typography>
        <Typography className={classes.subtitle} variant="h3">
          Seldolor sit amet consect etur
        </Typography>
      </div>
      <div className="mt-16 mb-28">
        <Grid gridData={STATIC_DATA} />
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      marginTop: 24,
    },
    title: {
      textTransform: "capitalize",
      fontWeight: 500,
      fontSize: "2rem",
    },
    subtitle: {
      fontSize: 18,
      color: grey,
    },
    textContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
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
