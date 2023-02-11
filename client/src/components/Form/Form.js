import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper, Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";

import useStyles from "./styles";
import { createLaundry } from "../../actions/laundry";

const Form = ({ currentId, setCurrentId }) => {
  // const [topPrice,setTopPrice]=useState(0);
  // const [bottomPrice,setBottomPrice]=useState(0);
  // const [woolenPrice,setWoolenPrice]=useState(0);
  const [laundryData, setLaundryData] = useState({
    pickUpDate: "N/A",
    topWearPrice: 0,
    bottomWearPrice: 0,
    woolenWearPrice: 0,
    totalPrice: 0,
    contactPerson: "",
    description: "",
    // userName: "",
    // userId: "",
  });
  const post = useSelector((state) =>
    currentId ? state.posts.find((message) => message._id === currentId) : null
  );
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    if (post) setLaundryData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setLaundryData({
      pickUpDate: "N/A",
      topWearPrice: 0,
      bottomWearPrice: 0,
      woolenWearPrice: 0,
      totalPrice: 0,
      contactPerson: "",
      description: "",
    });
  };
  const topPriceHandler = (e) => {
    const temp = parseInt(e.target.value) * 12;
    let tot = laundryData.totalPrice + temp;
    setLaundryData({
      ...laundryData,
      topWearPrice: temp,
      totalPrice: tot,
    });
  };
  const descriptionHandler = (e) => {
    setLaundryData({
      ...laundryData,
      description: e.target.value,
    });
  };
  const contactPersonHandler = (e) => {
    setLaundryData({
      ...laundryData,
      contactPerson: e.target.value,
    });
  };

  const bottomWearPriceHandler = (e) => {
    const temp = parseInt(e.target.value) * 22;
    let tot = laundryData.totalPrice + temp;
    setLaundryData({
      ...laundryData,
      bottomWearPrice: temp,
      totalPrice: tot,
    });
  };
  const woolenWearPriceHandler = (e) => {
    const temp = parseInt(e.target.value) * 20;
    let tot = laundryData.totalPrice + temp;
    setLaundryData({
      ...laundryData,
      woolenWearPrice: temp,
      totalPrice: tot,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(
      createLaundry({
        ...laundryData,
        userName: user?.result?.name,
        userId: user?.result?._id,
      })
    );
    clear();
  };

  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Please Sign In to Laundry.
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">{"Creating a Laundry"}</Typography>

        <TextField
          // variant="outlined"
          name="pickUpDate"
          type="date"
          fullWidth
          value={laundryData.pickUpDate}
          onChange={(e) =>
            setLaundryData({ ...laundryData, pickUpDate: e.target.value })
          }
        />
        {/* <input /> */}
        <div className={classes.divBlock}>
          <Typography variant="h6">{"Top Wear"}</Typography>
          <TextField
            name="topWear"
            // variant="outlined"
            label="No of Item"
            type="number"
            onChange={topPriceHandler}
          />
          <Typography variant="h6">Rs {laundryData.topWearPrice}</Typography>
        </div>

        <div className={classes.divBlock}>
          <Typography variant="h6">{"Bottom Wear"}</Typography>
          <TextField
            name="bottomWear"
            // variant="outlined"
            label="No of Item"
            type="number"
            onChange={bottomWearPriceHandler}
          />
          <Typography variant="h6">Rs {laundryData.bottomWearPrice}</Typography>
        </div>
        <div className={classes.divBlock}>
          <Typography variant="h6">{"Woolen Wear"}</Typography>
          <TextField
            name="woolenWear"
            // variant="outlined"
            label="No of Item"
            type="number"
            onChange={woolenWearPriceHandler}
          />
          <br />
          <br />
          <Typography variant="h6">Rs {laundryData.woolenWearPrice}</Typography>
        </div>
        <div className={classes.divBlock}>
          {/* <Typography variant="h6">{"Total Price : Rs. "}</Typography> */}

          <Typography variant="h6">
            Total Price : Rs {laundryData.totalPrice}
          </Typography>
        </div>
        <TextField
          name="contactPerson"
          // variant="outlined"
          label="Contact Person"
          fullWidth
          value={laundryData.contactPerson}
          onChange={contactPersonHandler}
        />
        <TextField
          name="description"
          // variant="outlined"
          label="Description"
          fullWidth
          value={laundryData.description}
          onChange={descriptionHandler}
        />

        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
