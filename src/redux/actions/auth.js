import { AUTH, LOGOUT, SIGN_IN, SIGN_UP } from "./action.type"
import * as api from "../../api/index"

export const authLogin = (data) => {
    return{
        type:AUTH,
        payload:data
    }
}

export const authLogOut = () => {
    return{
        type:LOGOUT,
    }
}

export const signup = (data,navigate) => async(dispatch) =>  {
    try{
        dispatch({type:SIGN_UP,payload:data})
    }catch(error){
        console.log(error)
    }
}

export const signin = (data,navigate) => async(dispatch) => {
    try{
        dispatch({type:SIGN_IN,payload:data})
    }catch(error){
        console.log(error)
    }
}