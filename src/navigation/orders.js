import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OrdersScreen } from "../screens/Index";

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Orders">
            <Stack.Screen 
                name="Orders" 
                component={OrdersScreen} 
                options={{headerShown: false}} 
            />
        </Stack.Navigator>
    )
}

export default OrdersNavigator;