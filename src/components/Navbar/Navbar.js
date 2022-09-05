import { AppBar, Avatar, Button, Toolbar, Typography } from "@mui/material";

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { authLogOut } from "../../redux/actions/auth";

import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const location = useLocation()

 const [user,setUser] = useState(JSON.parse(localStorage.getItem("profile")));
 
  useEffect(()=>{
    const token = user?.token 
    setUser(JSON.parse(localStorage.getItem("profile")));
  },[location])

  const onClickLogoutBtn = () => {
    dispatch(authLogOut())
    navigate("/")
    setUser(null)
  }

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h2"
          align="center"
        >
          Memories
        </Typography>
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} src={user.result.imageUrl}>
              {/* {user.result.name.charAt(0)} */}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user.result.name}
            </Typography>
            <Button variant="contained" onClick={onClickLogoutBtn} color="secondary">
              LogOut
            </Button>
          </div>
        ) : (
          <div>
            <Button
              component={Link}
              to="/auth"
              variant="contained"
              color="primary"
            >
              Sign In
            </Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
