import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeNavigator,CartScreenNavigator,OrderScreenNavigator,SettingsNavigator, } from './StackNavigations';
import Icon from 'react-native-vector-icons/Feather';


const Tab = createBottomTabNavigator();

export function BottomTabNavigator() {
    return (
        <Tab.Navigator tabBarOptions={{activeTintColor:"#ff0b00",inactiveTintColor:"black"}} >
            <Tab.Screen options={{tabBarIcon:({color})=>(<Icon name="home" size={26}/>)}} name="Home" component={HomeNavigator} />
            <Tab.Screen options={{tabBarBadge:5,tabBarIcon:({color})=>(<Icon name="shopping-cart" size={26}/>)}} name="Cart" component={CartScreenNavigator}/>
            <Tab.Screen options={{tabBarIcon:({color})=>(<Icon name="truck" size={26}/>)}} name="Order" component={OrderScreenNavigator}/>
            <Tab.Screen options={{tabBarIcon:({color})=>(<Icon name="settings" size={26}/>)}} name="Settings" component={SettingsNavigator}/>
        </Tab.Navigator>
    )
}