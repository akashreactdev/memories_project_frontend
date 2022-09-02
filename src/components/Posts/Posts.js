import { CircularProgress, Grid } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import Post from "./Post/Post"  

import useStyles from "./styles"

const Posts = ({setCurrentId}) => {

  const classes = useStyles();

  const posts = useSelector(state=>state.post);

  console.log("==>posts",posts);

  return (
    <>
      {posts.length <= 0 ? <CircularProgress/>:(
        <Grid className={classes.mainContainer} container mt={2} justifyContent="space-between" alignItems="stretch" spacing={2}>
          {posts.map((post)=>{
            return(
          <Grid item xs={12} key={post.id} sm={6}>
              <Post setCurrentId={setCurrentId} memoriesPost={post}/>
          </Grid>
            )
          })}
        </Grid>
      )}
    </>
  )
}

export default Posts