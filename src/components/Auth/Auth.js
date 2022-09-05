import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  Grid, 
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import useStyles from "./styles";
import Input from "./Input";
import { GoogleLogin } from "react-google-login";
import Icon from "@mui/icons-material/Google"
import { gapi } from "gapi-script";
import { useDispatch } from "react-redux";
import { authLogin, signin, signup } from "../../redux/actions/auth";
import { useNavigate } from "react-router-dom";


const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();

  const navigate = useNavigate();


  const [user,setUser] = useState(JSON.parse(localStorage.getItem("profile")))

  const [formData,setFormData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:"",
  })

  // useEffect(()=>{
  //   if(!user){
  //     navigate("/")
  //   }
  // },[])


  const onSubmitLoginBtn = (e) => {
    e.preventDefault();
    if(isSignUp){
      dispatch(signup(formData,navigate))
    }else{
      dispatch(signin(formData,navigate))
    }
  };

  

  const onChangeInput = () => {};

  const switchMode = () => {
    setIsSignUp(!isSignUp);
    setShowPassword(false);
  };

  // const GOOGLE_CLIENT_ID = "";

  const googleSuccess = async(res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;    
    try{
      dispatch(authLogin({result,token}))
      navigate("/")
    }catch(error){
      console.log(error)
    }
  }

  const googleFailure = (error) => {
    console.log(error)  
    console.log("Failed Google Login")
  }

  useEffect(()=>{
    gapi.load("client:auth2", () => {
      gapi.client.init({
        clientId:
          "958241120952-ojne92a733q1j3t1s5641gmk83hekkjb.apps.googleusercontent.com",
        plugin_name: "auth",
      });
    });
  },[])

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignUp ? "Sign Up" : "Sign In"}</Typography>
        <form className={classes.form} onSubmit={onSubmitLoginBtn}>
          <Grid container spacing={2}>
            {isSignUp && (
              <>
                <Input
                  name="firstName"
                  lable="First Name"
                  type="text"
                  half
                  handleChange={onChangeInput}
                />
                <Input
                  name="lastName"
                  lable="Last Name"
                  type="text"
                  half
                  handleChange={onChangeInput}
                />
              </>
            )}
            <Input
              name="email"
              lable="Email Address"
              handleChange={onChangeInput}
              type="email"
            />
            <Input
              name="password"
              lable="Password"
              handleChange={onChangeInput}
              type={showPassword ? "text" : "password"}
              handleShowPassword={() => setShowPassword(!showPassword)}
            />
            {isSignUp && (
              <Input
                name="confirmPassword"
                lable="Repeat Password"
                handleChange={onChangeInput}
                type="password"
              />
            )}
          </Grid>
          <GoogleLogin
            clientId="958241120952-ojne92a733q1j3t1s5641gmk83hekkjb.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                className={classes.googleButton}
                color="secondary"
                fullWidth
                onClick={renderProps.onClick}
                startIcon={<Icon />}
                variant="contained"
              >Google Sign In</Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy='single_host_origin'
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </Button>
        </form>
        <Grid container mt={2} justifyContent="flex-end">
          <Grid item>
            <Button onClick={switchMode}>
              {isSignUp
                ? "Already have an account ? Sign In "
                : "Don't have an account?Sign Up"}
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Auth;
