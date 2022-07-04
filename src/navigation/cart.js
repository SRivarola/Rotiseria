import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CartScreen } from "../screens/Index";

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Cart">
            <Stack.Screen 
                name="Cart" 
                component={CartScreen} 
                options={{headerShown: false}} 
            />
        </Stack.Navigator>
    )
}

export default CartNavigator;