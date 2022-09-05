import { makeStyles } from "@mui/styles";

export default makeStyles(()=>({
    paper: {
        marginTop: 30,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 10,
      },
      root: {
        '& .MuiTextField-root': {
          margin: 10,
        },
      },
      avatar: {
        margin: 10,
        backgroundColor:"purple !important",
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: 30,
      },
      submit: {
        marginTop:"30px !important",
      },
      googleButton: {
        marginTop:"30px !important",
      },
}))