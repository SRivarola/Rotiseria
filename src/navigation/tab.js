import React from "react";
import { Text, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import IonicsIcons from '@expo/vector-icons/Ionicons';
import MainNavigator from "./main";
import CartNavigator from "./cart";
import OrdersNavigator from "./orders";
import UserNavigator from "./user";
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

    const userImg = useSelector((state) => state.user.img);
    const userName = useSelector((state) => state.user.name);

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
             <BottomTabs.Screen
                name='UserTab'
                component={UserNavigator}
                options={{
                    tabBarLabel: ({ focused }) => LabelBottonTab(focused, userName? userName : 'Username'),
                    tabBarIcon: ({ focused }) => (
                        userImg ?
                            <Image 
                                style={styles.imagen}
                                source={{uri: userImg}}
                            />
                        :
                            <IonicsIcons 
                                name={ focused ? 'person' : 'person-outline'} 
                                size={20}
                                color={ focused ? colors.primary : colors.secondary }
                            />
                    )
                }}
            />
        </BottomTabs.Navigator>
    )
}

const styles = StyleSheet.create({
    imagen:{
        borderRadius: 5,
        height: 30,
        width: 30,
    }
})

export default TabNavigator;
