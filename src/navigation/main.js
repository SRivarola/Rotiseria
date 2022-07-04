import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CategoriesScreen, ProductDetailsScreen, ProductsScreen } from "../screens/Index";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Categories">
            <Stack.Screen 
                name="Categories" 
                component={CategoriesScreen} 
                options={{headerShown: false}} 
            />
            <Stack.Screen 
                name="Products" 
                component={ProductsScreen} 
                options={({ route }) => ({title: route.params.title}) } 
            />
            <Stack.Screen 
                name="ProductDetails" 
                component={ProductDetailsScreen} 
                options={({ route }) => ({title: route.params.name}) } 
            />
        </Stack.Navigator>
    )
}

export default MainNavigator;