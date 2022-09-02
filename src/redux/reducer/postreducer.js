import { CREATE_POST, DELETE_POST, FETCH_POST, LIKE_POST, UPDATE_POST } from "../actions/action.type";

const intialState = [];

export const postReducer = (post=[], action) => {
  switch (action.type) {
    case FETCH_POST:
      return action.payload;
    case CREATE_POST:
      // console.log("hello world",[...post])
      return [...post,action.payload]; 
      case UPDATE_POST:
        console.log('akash',post)
        let tempArray = [...post]
        return tempArray.map((item)=>item._id === action.payload._id ? action.payload: item);
      case DELETE_POST:
        let deleteArray = [...post]
        return deleteArray.filter((item)=>item._id !== action.payload);
      case LIKE_POST:
        let likepost = [...post]; 
        return likepost.map((item)=>item._id === action.payload._id ? action.payload: item);
    default:
      return post;
  }
};
