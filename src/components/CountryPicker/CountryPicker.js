import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core";
import { fetchCountries } from "../../Api";

import { List, ListItem, ListItemText } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    maxHeight: 300,
    overflowY: "scroll",
  },
}));

const CounterPicker = ({ countrySelected, handleCountry, countryFilter }) => {
  const classes = useStyles();
  const [countries, setCountries] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const fetch = async () => {
      setCountries(await fetchCountries());
    };

    fetch();
  }, []);

  const countriesFiltered = () =>
    countries.filter((country) =>
      country.location.toLowerCase().includes(countryFilter.toLowerCase())
    );

  return (
    <div>
      <List
        component="nav"
        aria-label="secondary mailbox folder"
        className={classes.root}
      >
        {countriesFiltered().map((country, i) => {
          return (
            <ListItem
              button
              key={i}
              selected={selectedIndex === i}
              onClick={(e) => {
                handleCountry(countriesFiltered()[i]);
                setSelectedIndex(i);
              }}
            >
              <ListItemText primary={country.location} />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default CounterPicker;
