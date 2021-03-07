import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/auth/SplashScreen';
import SignupScreen from '../screens/auth/SignupScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import HomeScreen from '../screens/Products/HomeScreen';
import OrderScreen from '../screens/Products/OrderScreen';
import SettingsScreen from '../screens/Products/SettingsScreen';
import AboutScreen from '../screens/Products/AboutScreen';
import ProductDetailsScreen from '../screens/Products/ProductDetailsScreen';
import AddressScreen from '../screens/Products/AddressScreen';
import CartScreen from '../screens/Products/CartScreen';
import Icon from 'react-native-vector-icons/Feather';


const Stack = createStackNavigator();

export function AuthNavigator(){
    return (
        <Stack.Navigator screenOptions={{headerShown:false}} >
            <Stack.Screen name="Splash" component={SplashScreen}/>
            <Stack.Screen name="Signup" component={SignupScreen}/>
            <Stack.Screen name="Login" component={LoginScreen}/>
        </Stack.Navigator>
    )
}

export function HomeNavigator({ navigation }){
    return (
        <Stack.Navigator screenOptions={{headerLeft:()=>(
            <Icon.Button onPress={()=>navigation.toggleDrawer()} name="align-justify" size={28} backgroundColor="#fff" color="#000"/>
        )}} initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={ProductDetailsScreen}/>
        </Stack.Navigator>
    )
}

export function ProductDetailsNavigator({ navigation }){
    return (
        <Stack.Navigator screenOptions={{headerLeft:()=>(
            <Icon.Button onPress={()=>navigation.toggleDrawer()} name="align-justify" size={28} backgroundColor="#fff" color="#000"/>
        )}} initialRouteName="Details">
            <Stack.Screen name="Details" component={ProductDetailsScreen}/>
            <Stack.Screen name="Home" component={HomeScreen}/>
        </Stack.Navigator>
    )
}

export function OrderScreenNavigator({ navigation }){
    return (
        <Stack.Navigator screenOptions={{headerLeft:()=>(
            <Icon.Button onPress={()=>navigation.toggleDrawer()} name="align-justify" size={28} backgroundColor="#fff" color="#000"/>
        )}} initialRouteName="Order">
            <Stack.Screen name="Order" component={OrderScreen}/>
            <Stack.Screen name="Details" component={ProductDetailsScreen}/>
            <Stack.Screen name="Cart" component={CartScreen}/>
            <Stack.Screen name="Home" component={HomeScreen}/>
        </Stack.Navigator>
    )
}

export function CartScreenNavigator({ navigation }){
    return (
        <Stack.Navigator screenOptions={{headerLeft:()=>(
            <Icon.Button onPress={()=>navigation.toggleDrawer()} name="align-justify" size={28} backgroundColor="#fff" color="#000"/>
        )}} initialRouteName="Cart">
            <Stack.Screen name="Cart" component={CartScreen}/>
            <Stack.Screen name="Order" component={OrderScreen}/>
            <Stack.Screen name="Details" component={ProductDetailsScreen}/>
            <Stack.Screen name="Home" component={HomeScreen}/>
        </Stack.Navigator>
    )
}

export function SettingsNavigator({ navigation }){
    return (
        <Stack.Navigator screenOptions={{headerLeft:()=>(
            <Icon.Button onPress={()=>navigation.toggleDrawer()} name="align-justify" size={28} backgroundColor="#fff" color="#000"/>
        )}} initialRouteName="Settings">
            <Stack.Screen name="Settings" component={SettingsScreen}/>
            <Stack.Screen name="Address" component={AddressScreen}/>
            <Stack.Screen name="About" component={AboutScreen}/>
        </Stack.Navigator>
    )
}
export function AboutScreenNavigator({ navigation }){
    return (
        <Stack.Navigator screenOptions={{headerLeft:()=>(
            <Icon.Button onPress={()=>navigation.toggleDrawer()} name="align-justify" size={28} backgroundColor="#fff" color="#000"/>
        )}} initialRouteName="About">
            <Stack.Screen name="About" component={AboutScreen}/>
        </Stack.Navigator>
    )
}