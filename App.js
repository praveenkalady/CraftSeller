import React,{ useLayoutEffect } from 'react'
import { StatusBar } from 'react-native'
import {  NavigationContainer } from '@react-navigation/native';
import { AuthNavigator } from './navigations/StackNavigations';
import { ThemeProvider} from 'react-native-elements';
import { Provider } from 'react-redux';
import { setUser,logoutUser } from './actions/userActions';
import auth from '@react-native-firebase/auth';
import store from './store';

const theme = {
  colors:{
    primary:"#ff0b00",
    secondary:"#009f4d"
  },
  regular:"Poppins-Regular",
  bold:"Poppins-Bold",
  medium:"Poppins-Medium",
  italic:"Poppins-MediumItalic"
}
const App = () => {

  useLayoutEffect(()=>{
    auth().onAuthStateChanged(user => {
      if(user){
        store.dispatch(setUser(user));
      } else {
        store.dispatch(logoutUser());
      }
    })
  },[])
  return (
    <Provider store={store}>
    <NavigationContainer>
      <ThemeProvider theme={theme}>
      <StatusBar bgStyle="dark-content"/>
      <AuthNavigator/>
      </ThemeProvider>
    </NavigationContainer>
    </Provider>
  )
}

export default App;
