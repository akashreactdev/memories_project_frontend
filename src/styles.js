import { makeStyles } from "@mui/styles";

import BG_IMG from "../src/images/thomas-heintz-0tgMnMIYQ9Y-unsplash.jpg";

export default makeStyles((theme)=>({
    background:{
        backgroundImage:`url(${BG_IMG})`,
        width:"100%",
        height:"100vh",
        margin:0,
        padding:0,
        backgroundRepeat:"no-repeat",
    },
    heading:{
         color:"rgba(0,183,255,1)"
    },
    appBar:{
        // marginTop:40
    },
    // [theme.breakpoints.down("sm")]:{
    //     // mainContainer:{
    //     //     flexDirection:"column-reverse"
    //     // }
    // }
    
})) 