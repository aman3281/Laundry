import React from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import Laundrys from "../Laundry Card/Laundry";
import Form from "../Form/Form";
import { useEffect, useState } from "react";
import { getLaundry } from "../../actions/laundry";
import { useDispatch } from "react-redux";
import LaundryPrice from "../laundry/LaundryPrice";
const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  // const classes = useStyles();

  useEffect(() => {
    dispatch(getLaundry());
    // console.log()
  }, [dispatch]);
  return (
    <Grow in>
      <Container>
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={7}>
            <LaundryPrice />
            <Laundrys />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};
export default Home;
