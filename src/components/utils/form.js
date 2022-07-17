const formatEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordLength = 8;
const userNameMaxLength = 8;
const userNameMinLength = 4;

export const UPDATE_FORM = 'UPDATE_FORM';

export const validateInput = (name, value) => {
    let hasError = false;
    let error = '';
    switch (name) {
        case 'email':
            if(value === '') {
                hasError = true;
                error = 'Email is required';
            } else if (!formatEmail.test(value)) {
                hasError = true;
                error = 'Email is invalid';
            } else {
                hasError = false;
                error = '';
            }
            break;
        case 'password':
            if(value === ''){
                hasError = true;
                error = 'Password is required';
            } else if (value.length !== passwordLength) {
                hasError = true;
                error = `Password must have ${passwordLength} characters`;
            } else {
                hasError = false;
                error = '';
            }
            break;
        case 'userName':
            if(value === ''){
                hasError = true;
                error = 'Username is required'
            } else if(value.length < userNameMinLength || value.length > userNameMaxLength){
                hasError = true;
                error = `Username must be between ${userNameMinLength} and ${userNameMaxLength} characters`;
            } else {
                hasError = false;
                error = '';
            }
        default:
            break;
    }
    return { hasError, error };
}

export const onInputChange = (name, value, dispatch, formState) => {
    const {hasError, error} = validateInput(name, value);

    let isFormValid = true;

    for (const key in formState) {
        const item = formState[key];
        if(key === name && hasError) {
            isFormValid = false;
            break;
        } else if(key !== name && item.hasError) {
            isFormValid = false;
            break;
        }
    }
    dispatch({
        type: UPDATE_FORM,
        data: {
            name,
            value,
            hasError,
            error,
            touched: false,
            isFormValid
        }
    })
}

export const onFocusOut = (name, value, dispatch, formState) => {
    const {hasError, error} = validateInput(name, value);

    let isFormValid = true;

    for (const key in formState) {
        const item = formState[key];
        if(key === name && hasError) {
            isFormValid = false;
            break;
        } else if(key !== name && item.hasError) {
            isFormValid = false;
            break;
        }
    }

    dispatch({
        type: UPDATE_FORM,
        data: {
            name,
            value,
            hasError,
            error,
            touched: true,
            isFormValid
        }
    })
}