import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/auth/SplashScreen';
import SignupScreen from '../screens/auth/SignupScreen';
import LoginScreen from '../screens/auth/LoginScreen';


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