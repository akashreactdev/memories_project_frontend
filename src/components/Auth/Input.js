import React from 'react'
import { Grid, IconButton, InputAdornment, TextField } from '@mui/material'
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from '@mui/icons-material/VisibilityOff'

const Input = ({half,name,handleChange,value,lable,autoFocus,type,handleShowPassword}) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
        <TextField
            name={name}
            onChange={handleChange}
            variant="outlined"
            value={value}
            required
            fullWidth
            label={lable}
            autoFocus={autoFocus}
            type={type}
            InputProps={name === "password" && {
                endAdornment:(
                    
                        <IconButton onClick={handleShowPassword}>
                            {type === "password" ? <Visibility/> : <VisibilityOff/>}
                        </IconButton>
                   
                )
            }}
        />
    </Grid>
  )
}

export default Input