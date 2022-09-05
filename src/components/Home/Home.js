import { Grid, Grow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getPosts } from '../../redux/actions/post'
import Form from '../Form/Form'
import Posts from '../Posts/Posts'
import useStyles from "./styles"
const Home = () => {
    const [currentId,setCurrentId] = useState(null)
    const classes = useStyles()
    // const navigate = useNavigate();
    // const [user,setUser] = useState(JSON.parse(localStorage.getItem("profile")));

    const dispatch = useDispatch();
  
    useEffect(()=>{
      dispatch(getPosts())
    },[dispatch])
  
  return (
    <Grow in timeout={1500} appear>
    <Grid container className={classes.mainContainer} justifyContent="space-between" alignItems="stretch">
      <Grid item xs={12} sm={12} md={7}>
        <Posts setCurrentId={setCurrentId}/>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <Form currentId={currentId} setCurrentId={setCurrentId}/>
      </Grid>   
    </Grid>
  </Grow>
  )
}

export default Home