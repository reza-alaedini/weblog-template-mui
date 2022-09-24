import React from "react";

import { makeStyles, Typography, Container } from "@material-ui/core";
import {
  Home,
  Person,
  List,
  PhotoCamera,
  PlayCircleOutline,
  TabletMac,
  Bookmark,
  Storefront,
  Settings,
  ExitToApp,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "sticky",
    top: "0",
    fontWeight:"300",
    paddingTop: theme.spacing(10),
    border: "1px solid #f8f8f8",
    // color: "white",
    height: "100vh",
    [theme.breakpoints.down("xs")]: {
      backgroundColor: theme.palette.primary.main,
      color: "white",
    },
  },
  items: {
    display: "flex",
    cursor: "pointer",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("xs")]: {
      marginBottom: theme.spacing(2),
      textAlign: "center",
    },
  },
  text: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  icon: {
    marginLeft: theme.spacing(1),
  },
}));

function Rightbar() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.items}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>خانه</Typography>
      </div>
      <div className={classes.items}>
        <Person className={classes.icon} />
        <Typography className={classes.text}>دوستان</Typography>
      </div>
      <div className={classes.items}>
        <List className={classes.icon} />
        <Typography className={classes.text}>لیست ها</Typography>
      </div>
      <div className={classes.items}>
        <PhotoCamera className={classes.icon} />
        <Typography className={classes.text}>دوربین</Typography>
      </div>
      <div className={classes.items}>
        <PlayCircleOutline className={classes.icon} />
        <Typography className={classes.text}>ویدیو ها</Typography>
      </div>
      <div className={classes.items}>
        <TabletMac className={classes.icon} />
        <Typography className={classes.text}>اپ</Typography>
      </div>
      <div className={classes.items}>
        <Bookmark className={classes.icon} />
        <Typography className={classes.text}>مجموعه ها</Typography>
      </div>
      <div className={classes.items}>
        <Storefront className={classes.icon} />
        <Typography className={classes.text}>بازار</Typography>
      </div>
      <div className={classes.items}>
        <Settings className={classes.icon} />
        <Typography className={classes.text}>تنظیمات</Typography>
      </div>
      <div className={classes.items}>
        <ExitToApp className={classes.icon} />
        <Typography className={classes.text}>خروج</Typography>
      </div>
    </Container>
  );
}

export default Rightbar;
