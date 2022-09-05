import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    appBar: {
      borderRadius: 15,
      margin: '30px 0',
      display: 'flex !important',
      flexDirection: 'row !important',
      justifyContent: 'space-between ',
      alignItems: 'center',
      padding: '10px 50px',
    //   backgroundColor:"green !important",
    },
    heading: {
      color: 'rgba(0,183,255, 1)',
      textDecoration: 'none',
    },
    image: {
      marginLeft: '15px',
    },
    toolbar: {
      display: 'flex',
      // backgroundColor:"red",
      justifyContent: 'flex-end',
      width: '400px',
    },
    profile: {
      display: 'flex',
    //   backgroundColor:'red',
      justifyContent: 'space-between',
      width: '300px',
    },
    userName: {
      display: 'flex',
      alignItems: 'center',
    },
    brandContainer: {
      display: 'flex',
    //   backgroundColor:"red",
      alignItems: 'center',
    },
    purple: {
      color: "white",
      backgroundColor: "purple",
    },
  }));