import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeNavigator,ProductDetailsNavigator } from './StackNavigations';
import DrawerContent from './DrawerContent';
import { BottomTabNavigator } from './BottomTabNavigator';


const Drawer = createDrawerNavigator();

export function DrawerNavigation({ navigation }){
    return(
    <Drawer.Navigator drawerContent={props=><DrawerContent {...props} />} >
        <Drawer.Screen name="HomeScreen" component={BottomTabNavigator} />
    </Drawer.Navigator>
    )
}