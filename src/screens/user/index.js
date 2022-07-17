import React, { useReducer, useState } from 'react';
import { View, Text, KeyboardAvoidingView, TouchableOpacity, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { Input } from '../../components';
import { styles } from './styles';
import { onInputChange, onFocusOut, UPDATE_FORM } from '../../components/utils/form';
import { setUserName, setUserImage } from '../../store/actions/user.action';
import ImageSelector from '../../components/imageSelector';

const initialState = {
    userName: { value: '', touched: false, hasError: true, error: '' },
    inFormValid: false
}

const formReducer = (state, action) => {
    switch(action.type) {
        case UPDATE_FORM:
            const { name, value, hasError, error, touched, isFormValid } = action.data;
            return {
                ...state,
                [name]: {
                    ...state[name],
                    value,
                    hasError,
                    error,
                    touched,
                },
                isFormValid
            }
        default:
            return state;
    }
}

const UserScreen = () => {

    const dispatch = useDispatch();
    const [formState, dispatchFormState] = useReducer(formReducer, initialState);
    const [image, setImage] = useState("");

    const onHandleChange = (text, type) => {
        onInputChange(type, text, dispatchFormState, formState);
    }

    const onBlurInput = (text, type) => {
        onFocusOut(type, text, dispatchFormState, formState);
    }

    const onHandlerUserName = () => {
        onBlurInput(formState.userName.value, 'userName')
        if(formState.userName.hasError === false) {
            dispatch(setUserName(formState.userName.value))
        }
    }

    const onHandleImageSelect = (imageUrl) => setImage(imageUrl);

    const onHandlerImgName = () => {
        if(image){
            dispatch(setUserImage(image))
        }
    }

    return (
        <KeyboardAvoidingView style={styles.containerKeyboard} behavior='height'>
            <View style={styles.container}>
                <Text style={styles.title}>USER SETTINGS</Text>
                <View style={styles.userNameContainer}>
                    <Input 
                        placeholder='Choose a user name'
                        autoCapitalize='none'
                        autoCorrect={false}
                        label='UserName'
                        onChangeText={(text) => onHandleChange(text, 'userName')}
                        onEndEditing={(e) => onBlurInput(e.nativeEvent.text, 'userName')}
                        value={formState.userName.value}
                        hasError={formState.userName.hasError}
                        error={formState.userName.error}
                        touched={formState.userName.touched}
                    />
                    <TouchableOpacity onPress={onHandlerUserName} style={styles.userNameBtn}>
                        <Text style={styles.textBtn}>SET USER NAME</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.userImgContainer}>
                    <ImageSelector onImage={onHandleImageSelect} />
                    <TouchableOpacity onPress={onHandlerImgName} style={styles.userNameBtn}>
                        <Text style={styles.textBtn}>SET USER IMAGE</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default UserScreen;