import { combineReducers } from "redux";
import { authReducer } from "./authreducer";
import { postReducer } from "./postreducer";


const rootReducer = combineReducers({
    post:postReducer,
    auth:authReducer
})

export default rootReducer;