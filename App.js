import React from 'react'
import { StatusBar } from 'react-native'
import {  NavigationContainer } from '@react-navigation/native';
import { AuthNavigator } from './navigations/StackNavigations';
import { ThemeProvider} from 'react-native-elements';

const theme = {
  colors:{
    primary:"#ff304f",
    secondary:"#002651"
  },
  regular:"Poppins-Regular",
  bold:"Poppins-Bold",
  medium:"Poppins-Medium",
  italic:"Poppins-MediumItalic"
}
const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
      <StatusBar bgStyle="dark-content"/>
      <AuthNavigator/>
      </ThemeProvider>
    </NavigationContainer>
  )
}

export default App;
