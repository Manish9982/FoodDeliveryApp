import { View, Text, useWindowDimensions } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Dashboard from '../Screens/Dashboard/Dashboard';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Spacings } from '../Schemes/Spacings';
import { Colors } from '../Schemes/Colors';
import { Styles } from '../Schemes/Styles';
import Cart from '../Screens/Cart/Cart';
import Orders from '../Screens/Orders/Orders';
import More from '../Screens/More/More';
import Home from '../Screens/Home/Home';

const BottomTabsCustomer = () => {
    const Tab = createMaterialBottomTabNavigator();

    const { height } = useWindowDimensions()

    return (
        <Tab.Navigator
            activeColor={Colors.priceLabelOrange}
            inactiveColor={"gray"}
            barStyle={{
                backgroundColor: Colors.WHITE,
                borderRadius: 8,
                elevation: 10,
                height: height * 0.087
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={22} />
                    ),
                }} />
            <Tab.Screen
                name="Orders"
                component={Orders}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="food" color={color} size={22} />
                    )
                }} />
            <Tab.Screen
                name="Cart"
                component={Cart}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="cart" color={color} size={22} />
                    )
                }} />
            <Tab.Screen
                name="More"
                component={More}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="menu" color={color} size={22} />
                    )
                }} />
        </Tab.Navigator>
    )
}

export default BottomTabsCustomer