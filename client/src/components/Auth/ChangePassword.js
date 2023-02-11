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
import { changePassword } from "../../api/index";
import Input from "./Input";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { signin, signup } from "../../actions/auth";
const initialState = {
  oldPassword: "",
  newPassword: "",
  confirmPassword: "",
};
const Auth = () => {
  const classes = useStyle();
  const [formData, setFormData] = useState(initialState);
  const history = useHistory();
  const dispatch = useDispatch();
  const openRecoverPassword = () => {
    history.push("/openRecoverPassword");
  };
  const handleSubmit = async (e) => {
    if (formData.newPassword != formData.confirmPassword)
      alert("confirm Password Not Match!!!");
    e.preventDefault();
    try {
      const changepass = await changePassword(formData);
      alert("Change Password Successful!!!");
      history.push("/");
    } catch (e) {
      alert("Enter Correct Password / Something Went Wrong!!!");
    }

    console.log(formData);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOpenOutlined />
        </Avatar>
        <Typography variant="h5">{"Change Password"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Input
              name="oldPassword"
              label="Old Password"
              handleChange={handleChange}
              autoFocus
              fullWidth
            />
          </Grid>
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
            {"Change Password"}
          </Button>
          <Grid item>
            <Button onClick={openRecoverPassword} style={{ color: "blue" }}>
              {"Recover Password"}
            </Button>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
