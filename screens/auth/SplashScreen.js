import React from 'react'
import { View,StyleSheet,Text,TouchableWithoutFeedback } from 'react-native';
import { Button } from 'react-native-elements';
import LottieView from 'lottie-react-native'
import { withTheme } from 'react-native-elements';

const SplashScreen = (props) => {
    const { theme } = props;
    return (
        <View style={styles.container}>
            <View style={{...styles.header,backgroundColor:theme.colors.secondary}}>
                <Text  style={{...styles.title,fontFamily:theme.bold}} >Craft Seller</Text>
                <LottieView source={require('../../assets/animations/landing.json')} autoPlay loop/>
            </View>
            <View style={styles.footer}>
                <View style={styles.buttonContainer}>
                    <View style={{marginBottom:20}}><Button onPress={()=>props.navigation.navigate('Signup')} TouchableComponent={TouchableWithoutFeedback} raised={true} buttonStyle={styles.button} title="SIGN UP"/></View>
                    <View style={{marginBottom:30}}><Button onPress={()=>props.navigation.navigate('Login')} TouchableComponent={TouchableWithoutFeedback} type="outline" raised={true} buttonStyle={styles.button} title="LOGIN"/></View>
                    <Text style={{fontFamily:theme.medium,opacity:0.5,textAlign:"center"}}>Create your products and market with us.</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    title:{
        textAlign: 'center',
        color:"white",
        fontSize:34,
        letterSpacing:3
    },
    header:{
        flex:3,
        padding:10,
        borderBottomLeftRadius:50,
        borderBottomRightRadius:50
    },
    footer:{
        flex:2,
        flexDirection:"column",
        alignItems:"center"
    },
    buttonContainer:{
        width:"80%",
        height:"100%",
        marginTop:36
    },
    button:{
        paddingVertical:13,
        borderRadius:15
    }
})

export default withTheme(SplashScreen);
