import React from 'react'
import { View, Text, StyleSheet,ImageBackground,KeyboardAvoidingView,TouchableWithoutFeedback,TouchableOpacity } from 'react-native'
import { withTheme,Input,Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Feather';


const LoginScreen = (props) => {
    const { theme } = props;
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <ImageBackground style={{width:"100%", height:"100%"}} source={require('../../assets/images/login.png')} >
                
                </ImageBackground>
            </View>
            <KeyboardAvoidingView behavior="padding" style={styles.footer}>
                <Text style={{...styles.title,fontFamily:theme.bold}}>Login</Text>
                <View style={styles.inputContainer}>
                    <Input leftIcon={<Icon name="mail" size={28} />} placeholder="Enter your email"/>
                    <Input secureTextEntry={true} leftIcon={<Icon size={28} name="lock"/>} placeholder="Enter your password"  />
                </View>
                <View style={{flex:1,alignItems:"center"}}>
                <View style={styles.buttonContainer}>
                <Button TouchableComponent={TouchableWithoutFeedback} buttonStyle={styles.button} title="Login" />
                <View style={{flexDirection:"row",justifyContent:"center",marginTop:8}}>
                <Text style={styles.foot}>Don't have account ?</Text>
                <TouchableOpacity onPress={()=> props.navigation.navigate('Signup')} >
                    <Text style={{color:"blue"}} >{' '}Signup</Text>
                </TouchableOpacity>
                </View>
                </View>
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white"
    },
    header:{
        flex:1.8,

    },
    footer:{
        flex:4,
        padding:20,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        backgroundColor:"#E9E9E9",
    },
    title:{
        fontSize:35,
        textAlign:"center"
    },
    buttonContainer:{
        width:"80%",
        marginTop:12,
    },
    button:{
       borderRadius:15,
       paddingVertical:10,
       marginBottom:5
    },
    foot:{ 
        textAlign:"center",
        opacity:0.5,
    }
})

export default withTheme(LoginScreen);
