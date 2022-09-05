import { AUTH, LOGOUT } from "../actions/action.type";

export const authReducer = (state={},action) => {
    switch(action.type){
        case AUTH:
            localStorage.setItem("profile",JSON.stringify(action.payload))
            return action.payload;
        case LOGOUT:
            localStorage.clear();
            return null;
        default:
            return state;
    }
}