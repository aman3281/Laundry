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
import { emailSent } from "../../api/index";
import Input from "./Input";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
// import {  emailSent } from "../../actions/auth";
const initialState = {
  email: "",
  //   confirmPassword: "",
};
const Auth = () => {
  const classes = useStyle();
  const [formData, setFormData] = useState(initialState);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const { data } = await emailSent(formData);
      alert(data.message, "Check Your Mail!!!");
      history.push("/auth");
    } catch (error) {
      alert("Some think went Wrong!!!");
    }
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
        <Typography variant="h5">{"Recover Password"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Input
              name="email"
              label="Email"
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
            {"Send Link"}
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
