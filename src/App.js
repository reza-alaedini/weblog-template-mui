import React, { Fragment } from "react";

import { makeStyles, Grid } from "@material-ui/core";

//Components
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import Leftbar from "./components/Leftbar";
import Add from "./components/Add";

const useStyles = makeStyles((theme) => ({
  left: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Fragment>
      <Navbar />

      <Grid container>
        <Grid item sm={2} xs={2}>
          <Rightbar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3} className={classes.left}>
          <Leftbar />
        </Grid>
      </Grid>

      <Add />
    </Fragment>
  );
}

export default App;
