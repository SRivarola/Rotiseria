import React from "react";
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IonicsIcons from '@expo/vector-icons/Ionicons';
import MainNavigator from "./main";
import CartNavigator from "./cart";
import OrdersNavigator from "./orders";
import { colors } from '../constants/theme/colors'

const BottomTabs = createBottomTabNavigator();

const LabelBottonTab = (focused, label) => (
    <Text
        style={{
            color: focused ? colors.primary : colors.secondary,
            fontFamily: focused ? 'Lato-Bold' : 'Lato-Regular'
        }}
    >{label}</Text>
)

const TabNavigator = () => {
    return (
        <BottomTabs.Navigator 
            initialRouteName='ShopTab'
            screenOptions={{
                headerShown: false,
            }}
        >
            <BottomTabs.Screen
                name='ShopTab'
                component={MainNavigator}
                options={{
                    tabBarLabel: ({ focused }) => LabelBottonTab(focused,'Shop'),
                    tabBarIcon: ({ focused }) => (
                        <IonicsIcons 
                            name={ focused ? 'home' : 'home-outline'} 
                            size={20}
                            color={ focused ? colors.primary : colors.secondary }
                        />
                    )
                }}
            />
            <BottomTabs.Screen
                name='CartTab'
                component={CartNavigator}
                options={{
                    tabBarLabel: ({ focused }) => LabelBottonTab(focused,'Cart'),
                    tabBarIcon: ({ focused }) => (
                        <IonicsIcons 
                            name={ focused ? 'cart' : 'cart-outline'} 
                            size={20}
                            color={ focused ? colors.primary : colors.secondary }
                        />
                    )
                }}
            />
            <BottomTabs.Screen
                name='OrdersTab'
                component={OrdersNavigator}
                options={{
                    tabBarLabel: ({ focused }) => LabelBottonTab(focused,'Orders'),
                    tabBarIcon: ({ focused }) => (
                        <IonicsIcons 
                            name={ focused ? 'file-tray-full' : 'file-tray-outline'} 
                            size={20}
                            color={ focused ? colors.primary : colors.secondary }
                        />
                    )
                }}
            />
        </BottomTabs.Navigator>
    )
}

export default TabNavigator;