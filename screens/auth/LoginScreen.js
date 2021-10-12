import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../../actions/userActions';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {withTheme, Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import auth from '@react-native-firebase/auth';

const LoginScreen = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  const dispatch = useDispatch();
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const handleSubmit = () => {
    const test = re.test(String(email).toLowerCase());
    if (!email && !password && !confirmPassword) {
      setErrors({field: 'all', message: 'Please fill out the form'});
      return;
    } else if (!test) {
      setErrors({field: 'email', message: 'Please enter a valid email'});
      return;
    } else if (!email) {
      setErrors({field: 'email', message: 'Please enter your email'});
      return;
    } else if (!password) {
      setErrors({field: 'password', message: 'Please create a password'});
      return;
    } else {
      setLoading(true);
      setErrors({});
      auth()
        .signInWithEmailAndPassword(email, password)
        .then((user) => {
          dispatch(setUser(user));
          setLoading(false);
        })
        .catch((err) => {
          setErrors({field: 'email', message: err.message});
          dispatch(setUser({}));
          setLoading(false);
        });
    }
  };
  const {theme} = props;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground
          style={{width: '100%', height: '100%'}}
          source={require('../../assets/images/signup.png')}
        />
      </View>
      <KeyboardAvoidingView behavior="padding" style={styles.footer}>
        <Text style={{...styles.title, fontFamily: theme.bold}}>Login</Text>
        <View style={styles.inputContainer}>
          <Input
            errorMessage={
              errors.field === 'email'
                ? errors.message
                : errors.field === 'all'
                ? errors.message
                : ''
            }
            onChangeText={(text) => setEmail(text)}
            leftIcon={<Icon name="mail" size={28} />}
            placeholder="Enter your email"
          />
          <Input
            rightIcon={
              <Pressable onPress={() => setHidePassword(!hidePassword)}>
                <Icon name={hidePassword ? 'eye-off' : 'eye'} size={24} />
              </Pressable>
            }
            errorMessage={
              errors.field === 'password'
                ? errors.message
                : errors.field === 'all'
                ? errors.message
                : errors.field === 'passboth'
                ? errors.message
                : ''
            }
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={hidePassword ? true : false}
            leftIcon={<Icon size={28} name="lock" />}
            placeholder="Enter your password"
          />
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <View style={styles.buttonContainer}>
            <Button
              loading={loading}
              onPress={handleSubmit}
              TouchableComponent={TouchableWithoutFeedback}
              buttonStyle={styles.button}
              title="Login"
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 8,
              }}>
              <Text style={styles.foot}>Don't have an account ?</Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Signup')}>
                <Text style={{color: 'blue'}}> Create</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 1.8,
  },
  footer: {
    flex: 4,
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#E9E9E9',
  },
  title: {
    fontSize: 35,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '80%',
    marginTop: 12,
  },
  button: {
    paddingVertical: 13,
    borderRadius: 15,
    marginBottom: 5,
  },
  foot: {
    textAlign: 'center',
    opacity: 0.5,
  },
});

export default withTheme(LoginScreen);
