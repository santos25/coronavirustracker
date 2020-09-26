import {
  TableContainer,
  TableHead,
  Table,
  TableRow,
  TableCell,
  TableBody,
  makeStyles,
  Paper,
} from "@material-ui/core";

import clsx from "clsx";

import React from "react";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    // border: "2px solid black",
  },
  table: {
    minWidth: 150,
  },
  container: {
    maxHeight: 440,
  },
});

const TableProvinces = ({ countrySelected, provinces }) => {
  const filterProvinces = () => {
    const filtered = provinces.filter(
      (city) => city.country_code === countrySelected
    );

    return filtered;
  };

  const classes = useStyles();
  return (
    <TableContainer
      className={clsx(classes.container, classes.root)}
      component={Paper}
    >
      <Table className="" stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell>LOCATION</TableCell>
            <TableCell align="right">CONFIRMED</TableCell>
            <TableCell align="right">DEAD</TableCell>
            <TableCell align="right">RECOVERED</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filterProvinces().length === 0 ? (
            <TableRow>
              <TableCell component="th" scope="row">
                <h2>No Data available</h2>
              </TableCell>
            </TableRow>
          ) : (
            filterProvinces().map((row, i) => (
              <TableRow key={i}>
                <TableCell component="th" scope="row">
                  {row.location}
                </TableCell>
                <TableCell align="right">{row.confirmed}</TableCell>
                <TableCell align="right">{row.dead}</TableCell>
                <TableCell align="right">{row.recovered}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableProvinces;
