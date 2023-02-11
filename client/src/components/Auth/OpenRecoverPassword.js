import React, { useState } from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
  TextField,
} from "@material-ui/core";
import useStyle from "./style";
import LockOpenOutlined from "@material-ui/icons/LockOpenOutlined";
import { changePassword, recoverPassword } from "../../api/index";
import Input from "./Input";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { signin, signup } from "../../actions/auth";
const initialState = {
  newPassword: "",
  confirmPassword: "",
};
const Auth = () => {
  const classes = useStyle();
  const [formData, setFormData] = useState(initialState);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    console.log("hi");
    e.preventDefault();
    if (formData.newPassword != formData.confirmPassword)
      alert("confirm Password Not Match!!!");
    try {
      let url = window.location.href;
      let urlSplit = url.split("/");
      console.log(urlSplit);
      const changepass = await recoverPassword(
        urlSplit[4],
        urlSplit[5],
        formData
      );
      console.log(changepass, "changepass");
      alert("Your Password has been Changed Successful!!!");
      history.push("/auth");
    } catch (e) {
      alert("SomeThing Went Wrong!!!");
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper}>
        <Typography variant="h5">{"Recover Password"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Input
              name="newPassword"
              label="New Password"
              handleChange={handleChange}
              autoFocus
              fullWidth
            />
          </Grid>
          <Grid container spacing={2}>
            <Input
              name="confirmPassword"
              label="Confirm Password"
              handleChange={handleChange}
              autoFocus
              fullWidth
            />
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {"Set New Password"}
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
