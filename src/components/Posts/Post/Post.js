import React, { useEffect } from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, ListItem, Typography } from '@mui/material'
import moment from "moment"
import useStyles from "./styles"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeleteIcon from "@mui/icons-material/Delete";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt"
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../redux/actions/post';

const Post = ({memoriesPost,setCurrentId}) => {
    // console.log("==hdjhjdkjkdsajhdsa",memoriesPost)
    const classes = useStyles()
    const dispatch = useDispatch()

    const onClickDeletePost = (id) => {
        dispatch(deletePost(id))
    }

    const onClickLikePost = (id) => {
      dispatch(likePost(id))
    }

  return (
    <Card className={classes.card}>
      <CardMedia
        title={memoriesPost.title}
        className={classes.media}
        image={memoriesPost.selectedFile}
      />
      <div className={classes.overlay}>
        <Typography variant='h6'>{memoriesPost.creator}</Typography>
        <Typography variant='body2'>{moment(memoriesPost.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button onClick={()=>setCurrentId(memoriesPost._id)} style={{color:"white"}} size="small">
          <MoreHorizIcon fontSize="medium"/>
        </Button>
      </div>
      <div className={classes.details}>
        <Typography color="textSecondary" variant='body2'>{memoriesPost.tags.map((tag)=>`#${tag}`)}</Typography>
      </div>
      <CardContent>
      <Typography className={classes.title} variant="body2" component="p" color="GrayText" >{memoriesPost.message}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button onClick={()=>onClickLikePost(memoriesPost._id,memoriesPost.likeCount)} size='small' color='primary'>
          <ThumbUpAltIcon fontSize='medium'/>Like {memoriesPost.likeCount}
        </Button>
        <Button size='small' onClick={()=>onClickDeletePost(memoriesPost._id)} color='primary'>
          <DeleteIcon fontSize='medium'/>Delete
        </Button>
      </CardActions>
    </Card>
  )
}

export default Post