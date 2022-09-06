import axios from "axios";

// const url = "http://localhost:5000/posts";

const API = axios.create({baseURL:'http://localhost:5000'})

API.interceptors.request.use((req)=>{
    if(localStorage.getItem("profile")){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req;
})

export const fetchPosts = () => API.get("/posts");

export const createPosts = (newpost) => API.post("/posts",newpost);  

export const updatedPosts = (id,updatedPost) => API.patch(`/posts/${id}`,updatedPost);

export const deletePost = (id) => API.delete(`/posts/${id}`);

export const likePost = (id) => API.patch(`/posts/likepost/${id}`);

export const signIn = (data) => API.post("/user/signin",data);

export const signUp = (data) => API.post("/user/signup",data);