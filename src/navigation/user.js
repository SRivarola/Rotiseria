import React from "react";
import { Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { UserScreen } from '../screens/Index';
import { colors } from "../constants/theme/colors";

const Stack = createNativeStackNavigator();

const isIOS = Platform.OS === "ios";

const UserNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="User"
            screenOptions={{
                headerStyle: {
                    backgroundColor: isIOS ? colors.secondary : colors.primary,
                },
                headerTintColor: isIOS ? colors.black : colors.white,
                headerTitleStyle: {
                    fontFamily: "Lato-Bold",
                },
            }}
        >
            <Stack.Screen
                name="User"
                component={UserScreen}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}

export default UserNavigator;