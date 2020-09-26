import React from "react";

import CovidLogo from "../../images/virus.png";

import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#f2e9e4",
    color: "black",
  },
  img: {
    width: "50px",
    height: "50px",
  },
  tittle: {
    padding: theme.spacing(1),
    marginLeft: "5px",
  },
}));

const Nav = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <img src={CovidLogo} alt="" className={classes.img} />
        <Typography variant="h6" className={classes.tittle}>
          COVID-19 Tracker
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
