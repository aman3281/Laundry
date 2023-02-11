// import { Container, TextField, Grid, Button } from "@material-ui/core";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";

import React, { useEffect, useState } from "react";
import classes from "./cssAdmin.module.css";
import { getAllLaundry, changeStatus } from "../../api/index";

const AllRequest = () => {
  const [allLaundryItem, setallLaundryItem] = useState([]);

  const daata = async () => {
    const { data } = await getAllLaundry();
    console.log(data);

    setallLaundryItem(data);
  };
  useEffect(() => {
    daata();
  }, []);
  const changeStatusHandler = async (id, newStatus) => {
    // console.log(id, status);
    const data = await changeStatus(id, { status: newStatus });
    daata();
  };
  let i = 1;
  const allLaundryItemTable = () => {
    return allLaundryItem.map((data) => (
      <tr key={i}>
        {/* <td>{i++}</td> */}
        <td>{data.userName}</td>
        <td>{data.pickUpDate}</td>
        <td>{data.topWearPrice}</td>
        <td>{data.woolenWearPrice}</td>
        <td>{data.bottomWearPrice}</td>
        <td>{data.totalPrice}</td>
        <td>
          {data.statusLaundry == 0 && "New Request"}
          {data.statusLaundry == 1 && "Inprogress"}
          {data.statusLaundry == 2 && "Accepted!"}
          {data.statusLaundry == 3 && "Finish"}
        </td>

        <td>
          <FormControl fullWidth style={{ padding: "0px" }}>
            <InputLabel
              id="demo-simple-select-autowidth-label"
              variant="outlined"
            >
              Status
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              // value={age}
              onChange={(e) => changeStatusHandler(data._id, e.target.value)}
              autoWidth
              label="Role"
            >
              <MenuItem value={0}>New Request</MenuItem>
              <MenuItem value={1}>Inprogress</MenuItem>
              <MenuItem value={2}>Accepted!</MenuItem>
              <MenuItem value={3}>Finish!</MenuItem>
              {/* <MenuItem value={"guide"}>Guide</MenuItem> */}
            </Select>
          </FormControl>
        </td>
      </tr>
    ));
  };

  return (
    <>
      <br />
      <br />

      <Container className={classes.cont} style={{ borderRadius: "2rem" }}>
        <Typography variant="h5">Laundry Items</Typography>
        <br />
        <Grid container spacing={2} className={classes.tabecont}>
          <TableContainer>
            <Table
              striped
              bordered
              hover
              size="sm"
              responsive="xl"
              className={classes.tablecss}
            >
              <thead className={classes.tablehead} key={"header"}>
                {/* <th>S.No.</th> */}
                <th>User Name</th>
                <th>Pick Up Date</th>
                <th>Top Price</th>
                <th>Woolen Price</th>
                <th>bottom Price</th>
                <th>Total Price</th>
                <th>Status</th>
                <th>Change Status</th>

                {/* <th>Remove</th> */}
              </thead>

              {!allLaundryItem.length ? (
                <h3>No Data</h3>
              ) : (
                allLaundryItemTable()
              )}
            </Table>
          </TableContainer>
        </Grid>
      </Container>
    </>
  );
};

export default AllRequest;
