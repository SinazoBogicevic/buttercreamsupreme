import React, { ReactElement } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Typography, Button, CardMedia } from "@material-ui/core";
import { grey, pink, white, black, salmon } from "../constants/colors";
import { Backdrop } from "@material-ui/core";

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
        <Button className={classes.button}>know more about us</Button>
      </div>
      <div className={classes.image}>
        <CardMedia
          component="img"
          alt="cake"
          image={
            "https://cakeciouswp.bolvosites.com/demo4/wp-content/uploads/sites/17/2018/06/welcome-right.jpg"
          }
          title={"lady paying for a coffee"}
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
      overflowX: "hidden",
      [theme.breakpoints.down("md")]: {
        padding: "12px 20px",
      },
    },
    textContainer: {
      display: "flex",
      flexDirection: "column",
      flex: 1,
      paddingRight: 0,
      [theme.breakpoints.up("md")]: {
        paddingRight: 70,
      },
    },
    title: {
      fontWeight: 700,
    },
    intro: {
      marginBottom: 16,
    },
    snug: {
      color: grey,
      marginBottom: 24,
    },
    button: {
      width: "fit-content",
      borderRadius: 24,
      border: "none",
      outline: "none",
      marginBottom: 32,
      background: pink,
      color: white,
      "& .MuiTouchRipple-root span": {
        backgroundColor: "rgb(255, 255, 255, 0.3)",
        opacity: 0.5,
      },
      "&:hover, &:focus": {
        background: salmon,
      },
    },
    image: {
      width: 300,
      [theme.breakpoints.down("md")]: {
        width: 353,
      },
    },
    cardMedia: {
      width: "100%",
    },
  })
);
