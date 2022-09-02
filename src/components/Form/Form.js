import React, { useEffect, useState } from 'react'
import { Button, Paper, TextField, Typography } from '@mui/material';

//import styles 
import useStyles from "./styles";

import FileBase from "react-file-base64" 
import { useDispatch, useSelector } from 'react-redux';
import { createPost,updatePost } from '../../redux/actions/post';

const Form = ({currentId,setCurrentId}) => {

    const [postData,setPostData] = useState({
        creator:"",
        title:"",
        message:"",
        tags:"",
        selectedFile:"",
    })

    const classes = useStyles();
    const dispatch = useDispatch();
    const posts = useSelector(state=>state.post);

    useEffect(()=>{
        console.log(currentId)
        let tempArray = [...posts]
        tempArray.filter((item) => {
            console.log(item)
            if(item._id === currentId){
                setPostData(item)
            }
        })
    },currentId)


    const handleSubmit = (e) => {
        e.preventDefault()

        let obj = {
            title:postData.title,
            message:postData.message,
            creator:postData.creator,
            tags:postData.tags,
            selectedFile:postData.selectedFile,
        }
        if(postData.creator === "" || postData.title == "" || postData.message == "" || postData.tags == "" || postData.selectedFile == ""){
            alert("Please Enter Required Field")
        }else{
            if(currentId){
                dispatch(updatePost(currentId,obj));
                onClickClearBtn()
            }else{
                dispatch(createPost(obj));
                onClickClearBtn()
            }
        }
    }

    const onClickClearBtn = () => {
        setCurrentId(null)
        setPostData({
            creator:"",
            title:"",
            message:"",
            tags:"",
            selectedFile:"",
        })
    }

  return (
    <>
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={classes.form} onSubmit={handleSubmit}>
                <Typography variant='h6'>{currentId ? "Edited" :"Create"} a Memory</Typography>
                <TextField
                name='creator'
                label='Creator'
                variant='outlined'
                fullWidth
                sx={{marginTop:2}}
                value={postData.creator}
                onChange={(event)=>setPostData({...postData,creator:event.target.value})}
                />
                <TextField
                name='title'
                label='Title'
                variant='outlined'
                fullWidth
                sx={{marginTop:2}}
                value={postData.title}
                onChange={(event)=>setPostData({...postData,title:event.target.value})}
                />
                <TextField
                name='message'
                label='Message'
                variant='outlined'
                fullWidth
                sx={{marginTop:2}}
                value={postData.message}
                onChange={(event)=>setPostData({...postData,message:event.target.value})}
                />
                <TextField
                name='tags'
                label='Tags'
                variant='outlined'
                fullWidth
                sx={{marginTop:2}}
                value={postData.tags}
                onChange={(event)=>setPostData({...postData,tags:event.target.value.split(',')})}
                />
                <div className={classes.fileInput}>
                    <FileBase
                        type="File"
                        multiple={false}
                        value={postData.selectedFile}
                        onDone={({base64})=>setPostData({...postData,selectedFile:base64})}
                    />
                </div>
                <Button variant="contained" color='primary' size="large" type='submit' fullWidth>SUBMIT</Button>
                <Button variant="contained" color='secondary' size="small" fullWidth sx={{mt:2}} onClick={onClickClearBtn} >CLEAR</Button>
            </form>
        </Paper>
    </>
  )
}

export default Form