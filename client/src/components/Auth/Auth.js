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

import Input from "./Input";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { signin, signup } from "../../actions/auth";
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNo: "",
  password: "",
  confirmPassword: "",
};
const Auth = () => {
  const classes = useStyle();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const history = useHistory();
  const dispatch = useDispatch();
  // const isSignup = true;
  const handleShowPassword = () =>
    setShowPassword((preShowPassword) => !preShowPassword);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      dispatch(signup(formData, history));
    } else {
      dispatch(signin(formData, history));
    }

    console.log(formData);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const switchMode = () => {
    setIsSignup((preIsSignup) => !preIsSignup);
    setShowPassword(false);
  };
  const openRecoverPassword = () => {
    history.push("/openRecoverPassword");
  };
  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{ width: "444px", marginLeft: "0px" }}
    >
      <Paper className={classes.paper}>
        {/* <Avatar className={classes.avatar}>
          <LockOpenOutlined />
        </Avatar> */}
        <Typography variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            {isSignup && (
              <Input
                name="phoneNo"
                label="Phone No"
                handleChange={handleChange}
                type="number"
              />
            )}
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />

            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            style={{ background: "blue" }}
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>

          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode} style={{ background: "skyblue" }}>
                {isSignup
                  ? "Already have an Account? Sign In"
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
            <Grid item>
              <Button onClick={openRecoverPassword} style={{ color: "blue" }}>
                {isSignup ? "" : "Recover Password"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
