import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import CartItem from '../../components/CartItem';

const CartScreen = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  let mounted = true;
  useEffect(() => {
    const fetchCartItems = async () => {
      setLoading(true);
      const items = await firestore().collection('cart').get();
      //   const cartLength = await (await firestore().collection('cart').get()).docs.length;
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
  }, [firestore]);
  return (
    <ScrollView style={styles.container}>
      {!loading &&
        cartItems.map((cartItem,index) => (
          <CartItem
            key={index}
            id={cartItem.id}
            title={cartItem.cartItems.title}
            image={cartItem.cartItems.image}
            price={cartItem.cartItems.price}
          />
        ))}
    </ScrollView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
