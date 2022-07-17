import { authTypes } from "../types/auth.types";

const { SIGN_UP, SIGN_IN, SIGN_ERROR } = authTypes;

const initialState = {
    token: null,
    userId: null,
    error: false,
    message: '',
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP:
            return {
                ...state,
                token: action.token,
                userId: action.userId,
            }
        case SIGN_IN:
            return {
                ...state,
                token: action.token,
                userId: action.userId,
            }
        case SIGN_ERROR:
            return {
                ...state,
                error: action.error,
                message: action.message,
            }
        default:
            return state;
    }
}

export default authReducer;