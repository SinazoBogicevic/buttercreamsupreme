import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import React, { ReactElement, useState } from "react";
import { black, pink, white } from "../constants/colors";
import Sidebar from "./Sidebar";
import { isContext } from "vm";
import { Context } from "./Context";

export type NavbarPops = {
  image: string;
  links: { path: string; link: string }[];
};

export default function Navbar({ image, links }: NavbarPops): ReactElement {
  const classes = useStyles();
  const [context, setContext] = useState(false);

  const handleOpen = () => setContext((prev) => !prev);

  const ListItemLink = links.map(({ path, link }) => {
    return (
      <ListItem key={link} className={classes.listItem}>
        <ListItemText>{link}</ListItemText>
      </ListItem>
    );
  });

  return (
    <Context.Provider value={[context, setContext]}>
      <div className={classes.root}>
        <AppBar position="sticky">
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" className={classes.title}>
              Buttercream Supreme
            </Typography>
            <List className={classes.list}>{ListItemLink}</List>
            {context ? (
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleOpen}
              >
                <CloseIcon />
              </IconButton>
            ) : (
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleOpen}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>
        <Sidebar links={links} active={context} />
      </div>
    </Context.Provider>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "row",
      flexGrow: 1,
    },
    toolbar: {
      background: white,
      color: black,
    },
    title: {
      color: pink,
      flexGrow: 1,
      cursor: "pointer",
    },
    list: {
      display: "flex",
      flexGrow: 1,
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    listItem: {
      color: black,
      textTransform: "capitalize",
      "&:hover": {
        color: pink,
      },
    },
    link: {
      color: black,
      "&:hover": {
        color: pink,
      },
    },
    menuButton: {
      display: "none",
      marginRight: theme.spacing(3),
      "&:hover": {
        background: pink,
      },
      [theme.breakpoints.down("sm")]: {
        display: "block",
      },
    },
  })
);
