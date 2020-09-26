import React from "react";

import Card from "./Card/Card";

import { Grid, makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  container: {
    margin: "2rem 0",
  },
}));

const Cards = ({ data: { confirmed, deaths, recovered } }) => {
  const classes = useStyle();
  if (!confirmed) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className={classes.container}>
      <Grid container spacing={4} justify="center">
        {/* <div className="cards"> */}
        <Card
          label="Infected"
          value={confirmed.value}
          // date={lastUpdate}
          subtitle="Infected"
          color="#231AA2"
        />
        <Card
          label="Recovered"
          value={recovered.value}
          // date={lastUpdate}
          subtitle="Recovered"
          color="#17C823"
        />
        <Card
          label="Dead"
          value={deaths.value}
          // date={lastUpdate}
          subtitle="Dead"
          color="#C90C1C"
        />
      </Grid>
    </div>
  );
};

export default Cards;
