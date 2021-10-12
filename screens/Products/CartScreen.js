import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Text, Image, Button} from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';
import CartItem from '../../components/CartItem';
import Subtotal from '../../components/Subtotal';
const CartScreen = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.user.user);
  let mounted = true;
  useEffect(() => {
    const fetchCartItems = async () => {
      setLoading(true);
      const items = await firestore()
        .collection('cart')
        .doc(user.uid)
        .collection('basket')
        .get();
      let datas = [];
      for (const doc of items.docs) {
        datas.push({id: doc.id, cartItems: doc.data()});
      }
      setCartItems(datas);
    };
    if (mounted) {
      fetchCartItems();
      setLoading(false);
    }
    return () => (mounted = false);
  }, [firestore().collection('cart')]);
  return (
    <ScrollView style={cartItems.length > 0 ? styles.container : styles.empty}>
      {!loading && cartItems.length > 0 ? (
        cartItems.map((cartItem, index) => (
          <CartItem
            key={index}
            id={cartItem.id}
            title={cartItem.cartItems.title}
            image={cartItem.cartItems.image}
            price={cartItem.cartItems.price}
          />
        ))
      ) : (
        <View style={styles.cartEmpty}>
          <Image
            style={{width: 300, height: 300}}
            source={require('../../assets/images/cart-empty.png')}
          />
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              fontStyle: 'italic',
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Your cart is empty
          </Text>
          <Button
            title="Take me home"
            onPress={() => props.navigation.navigate('Home')}
          />
        </View>
      )}
      {!loading && cartItems.length > 0 && <Subtotal {...props} />}
    </ScrollView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  cartEmpty: {
    flex: 1,
    padding: 18,
    marginVertical: 30,
    backgroundColor: 'white',
  },
  empty: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
});
