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

export const signup = (formData,navigate) => async(dispatch) =>  {
    try{
        const {data} = await api.signUp(formData)
        console.log("formData",data)
        dispatch({type:AUTH,payload:data})
        navigate("/")
    }catch(error){
        console.log(error)
    }
}

export const signin = (formData,navigate) => async(dispatch) => {
    try{
        const {data} = await api.signIn(formData)
        console.log("signin",data)
        dispatch({type:AUTH,payload:data})
        navigate('/')
    }catch(error){
        console.log(error)
    }
}