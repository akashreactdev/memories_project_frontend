import { CREATE_POST, DELETE_POST, FETCH_POST, LIKE_POST, UPDATE_POST } from "./action.type"

import * as api from "../../api"

export const getPosts = () => async(dispatch) => {
   try{
    const {data} = await api.fetchPosts();
    dispatch({type:FETCH_POST,payload:data.post});
   }catch(error){
    console.log(error.message);
   }
}

export const createPost =(post)=> async(dispatch) => {
    try{
        const {data} = await api.createPosts(post)
        if(data){
            dispatch({type:CREATE_POST,payload:data.post})
        }
    }catch(error){
        console.log("error",error)
    }
}

export const updatePost = (id,upost) => async(dispatch)=>{
    try{
        const {data} = await api.updatedPosts(id,upost);
        console.log("updatePost",data.updatePost)
        dispatch({type:UPDATE_POST,payload:data.updatePost});
    }catch(error){
        console.log("error",error)
    }
}

export const deletePost = (id) => async(dispatch) => {
    try{    
        await api.deletePost(id);
        dispatch({type:DELETE_POST,payload:id})
    }catch(error){
        console.log(error)
    }
}

export const likePost = (id) => async(dispatch) =>  {
    try{
         const {data} = await api.likePost(id);
         dispatch({type:LIKE_POST,payload:data.updatedPost})
    }catch(error){
        console.log("action-error",error)
    }
}