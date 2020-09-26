import React from "react";
import CountUp from "react-countup";
import clsx from "clsx";

import {
  Grid,
  Card as CardMaterial,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("xs")]: {
      margin: "10px 25px",
    },
    margin: "0 1rem",
    backgroundColor: "transparent",
    color: "black",
  },
  content: {
    textAlign: "center",
  },
  border: {
    border: (props) => `2px solid ${props.color}`,
  },
}));

const Card = ({ label, value, ...props }) => {
  const classes = useStyles(props);

  return (
    <Grid
      xs={12}
      sm={3}
      className={clsx(classes.root, classes.border)}
      item
      component={CardMaterial}
    >
      <CardContent>
        <div className={classes.content}>
          <Typography variant="h5">
            <CountUp end={value} separator="." />
          </Typography>
          <Typography>{label} </Typography>
        </div>
      </CardContent>
    </Grid>
  );
};

export default Card;
