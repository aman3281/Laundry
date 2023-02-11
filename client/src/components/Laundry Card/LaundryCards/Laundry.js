import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core/";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";
import { likePost, deletePost } from "../../../actions/laundry";
import useStyles from "./styles";
const Post = ({ laundry }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <Card className={classes.card}>
      <div className={classes.overlay}></div>

      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">
          Name : {laundry.userName}
        </Typography>
      </div>
      <Typography
        className={classes.title}
        gutterBottom
        variant="h6"
        component="h2"
      >
        {laundry.statusLaundry == 0 && "New Request"}
        {laundry.statusLaundry == 1 && "In Progress"}
        {laundry.statusLaundry == 2 && "Request Accept"}
        {laundry.statusLaundry == 3 && "Finsh!"}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Top Wear Price : {laundry.topWearPrice}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Woolen Wear Price : {laundry.woolenWearPrice}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          bottom Wear Price : {laundry.bottomWearPrice}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Total Price : {laundry.totalPrice}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Contact Person : {laundry.contactPerson}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Description : {laundry.description}
        </Typography>
        <Typography variant="body2" component="p">
          Date : {laundry.pickUpDate}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}></CardActions>
    </Card>
  );
};

export default Post;
