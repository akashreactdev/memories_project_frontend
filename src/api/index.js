import axios from "axios";

const url = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url);

export const createPosts = (newpost) => axios.post(url,newpost);  

export const updatedPosts = (id,updatedPost) => axios.patch(`${url}/${id}`,updatedPost);

export const deletePost = (id) => axios.delete(`${url}/${id}`);

export const likePost = (id) => axios.patch(`${url}/likepost/${id}`);