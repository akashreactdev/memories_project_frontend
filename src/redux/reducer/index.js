import { combineReducers } from "redux";
import { postReducer } from "./postreducer";


const rootReducer = combineReducers({
    post:postReducer
})

export default rootReducer;