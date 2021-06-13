import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {Text, Card, Button, Image} from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/Ionicons';
import Toast from 'react-native-toast-message';

const CustomCard = (props) => {
  const handleView = () => {
    props.navigation.navigate('Details', {id: props.id});
  };
  const handleAddToCart = async (id, image, title, price) => {
    try {
      await firestore().collection('cart').add({
        id,
        title,
        image,
        price,
      });
      Toast.show({
        position: 'bottom',
        type: 'success',
        text1: 'Success',
        text2: 'Successfully added to cart.',
      });
    } catch (err) {
      Toast.show({
        position: 'bottom',
        type: 'error',
        text1: 'Error',
        text2: 'Unexpected error encountered.',
      });
    }
  };
  const {title, image, price, description} = props.product;
  return (
    <Card containerStyle={{padding: 10, borderRadius: 10}}>
      <View style={styles.header}>
        <View style={styles.info}>
          <Text h4>{title}</Text>
          <Text style={{fontSize: 20}}>₹{price}</Text>
          <Text>{description}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            containerStyle={{borderRadius: 10}}
            style={styles.image}
            source={{uri: image}}
            PlaceholderContent={<ActivityIndicator />}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.button}>
          <Button
            icon={<Icon name="eye-outline" size={24} color="white" />}
            raised
            title="View"
            onPress={() => handleView()}
          />
        </View>
        <View style={styles.button}>
          <Button
            icon={<Icon name="add-circle-outline" size={24} color="white" />}
            raised
            onPress={() => handleAddToCart(props.id, image, title, price)}
            title="Add to cart"
          />
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    flex: 4,
    flexDirection: 'row',
  },
  footer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  imageContainer: {
    flex: 2.5,
  },
  image: {
    width: 150,
    height: 150,
  },
  info: {
    flex: 3,
    padding: 5,
  },
  button: {
    width: '40%',
  },
});

export default CustomCard;
