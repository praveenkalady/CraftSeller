import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import Showcase from '../../components/Showcase';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Showcase/>
                </View>
                <View style={styles.footer}>
            </View>
        </View>
    )
}

export default HomeScreen;


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'white'
    },
    header:{
        flex:3
    },
    footer:{
        flex:3
    }
})