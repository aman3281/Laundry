import React, { useEffect, useState } from "react";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import m3 from "../../images/m3.jpg";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router";
import decode from "jwt-decode";

const NavBar = () => {
  const classes = useStyles();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  console.log(user);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    // JWT
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    dispatch({ type: "CLEAR" });
    history.push("/");
    setUser(null);
  };
  const allRequest = () => {
    // dispatch({ type: "LOGOUT" });
    // dispatch({ type: "CLEAR" });
    history.push("/allRequest");
    setUser(null);
  };
  const dashboard = () => {
    history.push("/");
    setUser(null);
  };
  const ChangePassword = () => {
    history.push("/changePassword");
    setUser(null);
  };
  return (
    // <AppBar className={classes.appBar} position="static" color="inherit">
    <div className={classes.navDiv}>
      <div className={classes.brandContainer}>
        <Avatar
          className={classes.purple}
          alt={user?.result.name}
          src={user?.result.imageUrl}
        >
          {user?.result.name.charAt(0).toUpperCase()}
        </Avatar>
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h4"
          align="center"
        >
          Laundry Service
        </Typography>
        <Toolbar className={classes.toolbar}>
          {user?.result ? (
            <>
              <div className={classes.profile}>
                <Typography
                  variant="h6"
                  className={classes.logout}
                  color="secondary"
                  onClick={dashboard}
                >
                  Home
                </Typography>
                <Typography
                  variant="h6"
                  className={classes.logout}
                  color="secondary"
                  onClick={allRequest}
                >
                  All Items
                </Typography>
                <Typography
                  variant="h6"
                  className={classes.logout}
                  color="secondary"
                  onClick={ChangePassword}
                >
                  Change Password
                </Typography>

                {/* <Typography className={classes.userName} variant="h6">
                  {user?.result.name}
                </Typography> */}
                <Button
                  variant="contained"
                  className={classes.logout}
                  color="secondary"
                  onClick={logout}
                >
                  Logout
                </Button>
              </div>
            </>
          ) : (
            <Button
              component={Link}
              to="/auth"
              variant="contained"
              color="primary"
            >
              Sign In
            </Button>
          )}
        </Toolbar>
      </div>
    </div>
  );
};
export default NavBar;
