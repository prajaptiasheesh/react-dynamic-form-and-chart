import { ACTIONS } from "../action-constants/Actions";

const Logging = ({result, error})=>{

     return {
         type: ACTIONS.USER_LOGIN.USER_LOGGING ,
         payload:{
             result,
             error
         }
     }
}

const LoginFailed = ({result, error})=>{

    return {
        type: ACTIONS.USER_LOGIN.USER_LOGIN_FAILED  ,
        payload:{
            result,
            error
        }
    }
}

const LoginSuccess = ({result, error})=>{

    return {
        type: ACTIONS.USER_LOGIN.USER_LOGGEDIN  ,
        payload:{
            result,
            error
        }
    }
}


export const LoginActions = {Logging, LoginFailed, LoginSuccess}