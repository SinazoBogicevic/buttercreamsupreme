import { Button, CardMedia, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
// @ts-ignore
import heroImage from "../public/imgs/gingerHouseCake.jpg";
import React, { ReactElement } from "react";

export default function KnowMoreBanner(): ReactElement {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
        <Typography variant="h2" gutterBottom className={classes.title}>
          Welcome to our Bakery
        </Typography>
        <Typography variant="subtitle2" gutterBottom className={classes.intro}>
          Baked goods have been around for thousands of years. The art of baking
          was developed early during the Roman Empire.
        </Typography>
        <Typography variant="body1" gutterBottom className={classes.snug}>
          It was a highly famous art as Roman citizens loved baked goods and
          demanded for them frequently for important occasions such as feasts
          and weddings etc. Due to the fame and desire that the art of baking
          received, around 300 BC, baking was introduced as an occupation and
          respectable profession for Romans.
        </Typography>
        <div className={classes.buttonGroup}>
          <Button variant="contained" className={classes.button}>
            order
          </Button>
          <Button variant="outlined" className={classes.orderButton}>
            contact
          </Button>
        </div>
      </div>
      <div className={classes.image}>
        <CardMedia
          component="img"
          alt="cake made with gingerbread cookies and icing sugar"
          image={heroImage}
          className={classes.cardMedia}
        />
      </div>
    </div>
  );
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      flexWrap: "wrap",
      padding: "50px 100px",
      marginTop: "8rem",
      backgroundColor: "#FF8070",
      color: "#fafaf9",
      overflowX: "hidden",
      borderRadius: 8,
      [theme.breakpoints.down("md")]: {
        padding: "12px 20px",
      },
    },
    textContainer: {
      display: "flex",
      flexDirection: "column",
      flex: 1,
      [theme.breakpoints.up("md")]: {
        paddingRight: 70,
      },
    },
    title: {
      fontWeight: 700,
    },
    intro: {
      marginBottom: 16,
      paddingRight: 24,
    },
    snug: {
      color: "#fafaf9",
      marginBottom: 24,
      paddingRight: 24,
    },
    buttonGroup: {
      display: "flex",
    },
    button: {
      width: "fit-content",
      borderRadius: 24,
      border: "none",
      outline: "none",
      marginBottom: 32,
      marginRight: 8,
      background: "#fafaf9",
      color: "#43000b",
      "& .MuiTouchRipple-root span": {
        backgroundColor: "#fafaf9",
      },
      "&:hover, &:focus": {
        opacity: 0.7,
        backgroundColor: "#fafaf9",
      },
    },
    orderButton: {
      width: "fit-content",
      borderRadius: 24,
      marginBottom: 32,
      color: "#fafaf9",
      borderWidth: 2,
      borderColor: "#fafaf9",
      "& .MuiTouchRipple-root span": {},
      "&:hover, &:focus": {
        opacity: 0.7,
      },
    },
    image: {
      width: 900,
      maxWidth: 1450,
      height: 500,
      borderRadius: 8,
      [theme.breakpoints.down("md")]: {
        width: 450,
      },
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    cardMedia: {
      width: "100%",
      height: "100%",
      borderRadius: 8,
    },
  })
);
