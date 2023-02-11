import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import LaundryCards from "./LaundryCards/Laundry";
import useStyles from "./styles";

const Laundry = ({ setCurrentId }) => {
  const laundry = useSelector((state) => state.laundry);
  const classes = useStyles();

  return !laundry.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {laundry.map((laundry) => (
        <Grid key={laundry._id} item xs={12} sm={6} md={6}>
          <LaundryCards laundry={laundry} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Laundry;
