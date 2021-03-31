import React from 'react'
import { View,StyleSheet,ScrollView } from 'react-native'
import Showcase from '../../components/Showcase';
import { Text } from 'react-native-elements';

const HomeScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Showcase/>
                </View>
                <View style={styles.footer}>
                <Text style={styles.sectionHeader} h4>Purchase Products</Text>
            </View>
        </ScrollView>
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
        flex:3,
        padding:10
    },
    sectionHeader: {
        marginVertical:18,
        
    }
})