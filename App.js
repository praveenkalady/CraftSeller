import React, {useLayoutEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {AuthNavigator} from './navigations/StackNavigations';
import {DrawerNavigation} from './navigations/DrawerNavigation';
import {ThemeProvider} from 'react-native-elements';
import {Provider} from 'react-redux';
import {setUser} from './actions/userActions';
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';
import store from './store';
const theme = {
  colors: {
    primary: '#ff0b00',
    secondary: '#009f4d',
  },
  regular: 'Poppins-Regular',
  bold: 'Poppins-Bold',
  medium: 'Poppins-Medium',
  italic: 'Poppins-MediumItalic',
};
const App = () => {
  let mounted = true;
  const [authUser, setAuthUser] = useState(null);
  useLayoutEffect(() => {
    auth().onAuthStateChanged((user) => {
      if (mounted) {
        if (user) {
          store.dispatch(setUser(user));
          setAuthUser(user);
        } else {
          setAuthUser(null);
        }
      }
    });
    return () => {
      mounted = false;
    };
  }, []);
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <ThemeProvider theme={theme}>
            <StatusBar bgStyle="dark-content" />
            {authUser ? <DrawerNavigation /> : <AuthNavigator />}
          </ThemeProvider>
        </NavigationContainer>
      </Provider>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </>
  );
};

export default App;
