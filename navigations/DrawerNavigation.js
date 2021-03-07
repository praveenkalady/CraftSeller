import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeNavigator,ProductDetailsNavigator } from './StackNavigations';
import DrawerContent from './DrawerContent';


const Drawer = createDrawerNavigator();

export function DrawerNavigation({ navigation }){
    return(
    <Drawer.Navigator drawerContent={props=><DrawerContent {...props} />} >
        <Drawer.Screen name="Home" component={HomeNavigator}/>
        <Drawer.Screen name="Details" component={ProductDetailsNavigator}/>
    </Drawer.Navigator>
    )
}