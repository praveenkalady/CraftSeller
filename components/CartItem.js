import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Image, Button} from 'react-native-elements';
import Toast from 'react-native-toast-message';
import Icon from 'react-native-vector-icons/Ionicons';
import {setBasketLength} from '../actions/basketActions';
import {useDispatch} from 'react-redux';
import firestore from '@react-native-firebase/firestore';
const CartItem = ({id, image, price, title,noButton}) => {
  const dispatch = useDispatch();
  const handleRemove = async (id) => {
    try {
      await firestore().collection('cart').doc(id).delete();
      const basket = await (await firestore().collection('cart').get()).docs
        .length;
      dispatch(setBasketLength(basket));
      Toast.show({
        position: 'bottom',
        type: 'success',
        text1: 'Success',
        text2: 'Successfully removed to cart.',
      });
    } catch (err) {
      Toast.show({
        position: 'bottom',
        type: 'error',
        text1: 'Error',
        text2: 'Something went wrong.',
      });
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        {image ? <Image source={{uri: image}} style={styles.image} />:
          <Text>{name}</Text>
        }
      </View>
      <View style={styles.right}>
        <Text style={{fontSize: 20, fontWeight: 'bold', opacity: 0.8}}>
          {title}
        </Text>
        <Text>{id}</Text>
        <Text style={{textAlign: 'center'}} h4>
          ₹{price}
        </Text>
        {!noButton && (
          <Button
            icon={<Icon name="trash-outline" size={24} color="white" />}
            raised
            type="outline"
            title="Remove"
            onPress={() => handleRemove(id)}
          />
        )}
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    flexDirection: 'row',
    backgroundColor: 'white',
    marginBottom: 10,
    borderRadius: 10,
  },
  left: {
    flex: 3,
  },
  right: {
    flex: 4,
    flexDirection: 'column',
    marginLeft: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});
