import React,{useEffect, useState} from 'react'
import {AppBar, Box, Container, Grid, Grow, Paper, Typography} from "@mui/material"
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import useStyles from "./styles"
import { useDispatch } from 'react-redux'
import { getPosts } from './redux/actions/post'


const App = (props) => {
  const [currentId,setCurrentId] = useState(null)
  const classes = useStyles()

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getPosts())
  },[dispatch])

  return (
    <Container sx={{display:'flex',flexDirection:'column'}} maxWidth="lg">
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} variant='h2' align='center'>Memories</Typography>
      </AppBar>
      <Grow in timeout={1000} appear>
        <Grid container className={classes.mainContainer} justifyContent="space-between" alignItems="stretch">
          <Grid item xs={12} sm={12} md={7}>
            <Posts setCurrentId={setCurrentId}/>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId}/>
          </Grid>   
        </Grid>
      </Grow>
    </Container>
  )
}

export default App