import React from 'react'
import { View, StyleSheet,ActivityIndicator } from 'react-native';
import { Text,Card,Button,Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

const CustomCard = ({product}) => {
    return (
        <Card containerStyle={{padding:10,borderRadius:10}}>
            <View style={styles.header}>
                <View style={styles.info}>
                    <Text h4>{product.title}</Text>
                    <Text style={{fontSize:20}}>₹{product.price}</Text>
                    <Text>{product.description}</Text>
                </View>
                <View style={styles.imageContainer}>
                <Image containerStyle={{borderRadius:10}} style={styles.image}  source={{ uri: product.image }}
                PlaceholderContent={<ActivityIndicator />}
                />
                </View>
            </View>
            <View style={styles.footer}>
               <View style={styles.button}><Button icon={<Icon name="eye-outline" size={24} color="white" />} raised title="View"/></View>
                <View style={styles.button}><Button icon={<Icon name="add-circle-outline" size={24} color="white" />} raised title="Add to cart"/></View>
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10
    },
 header: {
     flex:4,
     flexDirection: 'row'
 },
 footer: {
     flex:2,
     flexDirection: 'row',
     justifyContent: 'space-around',
     marginVertical:10
 },
 imageContainer:{
     flex:2.5
     
 },
 image:{
    width:150,
    height:150
 },
 info:{
     flex:3,
     padding:5
 },
 button:{
     width:'40%'
 }
})

export default CustomCard;
