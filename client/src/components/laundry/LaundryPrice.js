import {
  Container,
  TextField,
  Grid,
  Button,
  Typography,
} from "@material-ui/core";

import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";

import React, { useEffect, useState } from "react";
import ModelLaundry from "../Form/ModelLaundry";
import classes from "./cssAdmin.module.css";
// import { getStockItem } from "../../action/stock";
const data = [
  {
    id: 11,
    partNo: 1222,
    partName: "www",
    quantity: "wwww",
    cPrice: "www",
  },
];
const LaundryPrice = () => {
  const [allStockItem, setallStockItem] = useState([]);
  // useEffect(() => {
  // const daata = async () => {
  //   const allStock = await getStockItem();
  //   console.log(allStockItem.data);
  //   return allStock.data;
  // };
  // const alldata = daata();
  // setallStockItem(alldata);
  //});
  useEffect(() => {
    const daata = async () => {
      const allStock = [];
      const stockData = [];
      for (const key in allStock.data) {
        stockData.push({
          id: key,
          partNo: allStock.data[key].partNo,
          partName: allStock.data[key].partName,
          quantity: allStock.data[key].quantity,
          mPrice: allStock.data[key].mPrice,
          cPrice: allStock.data[key].cPrice,
        });
      }
      console.log(stockData);
      setallStockItem(data);
    };
    daata();
  }, []);
  let i = 1;
  const stockDataTable = () => {
    return allStockItem.map((data) => (
      <tr key={i}>
        <td>{i++}</td>
        <td>{data.partNo}</td>
        <td>{data.partName}</td>
        <td>{data.quantity}</td>
        <td>{data.mPrice}</td>
        <td>{data.cPrice}</td>
      </tr>
    ));
  };

  return (
    <>
      <Container className={classes.cont} style={{ borderRadius: "1.5rem" }}>
        <Typography variant="h6">Laundry Price</Typography>

        <ModelLaundry />
        <Grid container spacing={2} className={classes.tabecont}>
          <TableContainer>
            <Table
              striped
              bordered
              hover
              size="sm"
              responsive="m"
              className={classes.tablecss}
            >
              <thead key={"header"}>
                <tr>
                  <td>
                    <b>Top Wear Laundry</b>
                  </td>
                  <td>12</td>
                </tr>
                <tr>
                  <td>
                    <b>Bootom Wear Laundry Price</b>
                  </td>
                  <td>22</td>
                </tr>
                <tr>
                  <td>
                    <b>Woolen Cloth Laundry Price</b>
                  </td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>
                    <b>Other Price</b>
                  </td>
                  <td>Other Price depend upon variety</td>
                </tr>
              </thead>
            </Table>
          </TableContainer>
        </Grid>
      </Container>
    </>
  );
};

export default LaundryPrice;
