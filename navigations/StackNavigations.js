import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/auth/SplashScreen';
import SignupScreen from '../screens/auth/SignupScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import HomeScreen from '../screens/Products/HomeScreen';
import ProductDetailsScreen from '../screens/Products/ProductDetailsScreen';
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