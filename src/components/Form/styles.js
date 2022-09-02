import { makeStyles } from "@mui/styles";

export default makeStyles((theme)=>({
    root: {
        '& .MuiTextField-root': {
          margin: 100,
        },
      },
      paper: {
        padding: 10,
        marginTop:20,
      },
      form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      },
      fileInput: {
        width: '97%',
        margin: '20px 0',
      },
      buttonSubmit: {
        marginBottom: 10,
        marginTop:20
      },
}));