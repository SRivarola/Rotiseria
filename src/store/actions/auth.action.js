import { URL_AUTH_SIGN_UP, URL_AUTH_SIGN_IN } from "../../constants/database/firebase";
import { authTypes } from "../types/auth.types";

const { SIGN_UP, SIGN_IN, SIGN_ERROR } = authTypes;

export const signup = (email, password) => {
    return async dispatch => {
        try {
            const response = await fetch(URL_AUTH_SIGN_UP, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password,
                    returnSecureToken: true
                }),
            });
            const data = await response.json();
            if(data.email) {
                dispatch({
                    type: SIGN_UP,
                    token: data.idToken,
                    userId: data.localId,
                })
            } else {
                dispatch({
                    type: SIGN_ERROR,
                    error: true,
                    message: 'Email already exist!',
                })
            }
            
        } catch (error) {
            console.log('error: ',error.message);
            
        }
    }
}

export const signin = (email, password) => {
    return async dispatch => {
        try {
            const response = await fetch(URL_AUTH_SIGN_IN, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password,
                    returnSecureToken: true
                }),
            });
            const data = await response.json();
            if(data.email) {
                dispatch({
                    type: SIGN_IN,
                    token: data.idToken,
                    userId: data.localId,
                })
            } else {
                dispatch({
                    type: SIGN_ERROR,
                    error: true,
                    message: "Email does NOT exist!",
                })
            }
        } catch (error) {
            console.log(error.message);
        }
    }
}