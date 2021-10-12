import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {ScrollView, StyleSheet, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {Text, Divider} from 'react-native-elements';
import CartItem from '../../components/CartItem';
const OrderScreen = () => {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    const fetchOrders = async () => {
      const items = await firestore()
        .collection('orders')
        .doc(user.uid)
        .collection('order')
        .get();
      let datas = [];
      for (const doc of items.docs) {
        datas.push({id: doc.id, orders: doc.data()});
      }
      setOrders(datas);
    };
    fetchOrders();
    setLoading(false);
  }, [firestore().collection('orders')]);
  return (
    <ScrollView style={styles.container}>
      <Text h4 style={{textAlign: 'center'}}>
        Orders
      </Text>
      {!loading &&
        orders.map((item, i) => (
          <View
            style={{
              flex: 1,
              backgroundColor: '#fff',
              padding: 10,
              marginBottom: 10,
            }}>
            {item.orders.cartItems.map((cartItem, i) => (
              <CartItem
                key={i}
                id={cartItem.id}
                title={cartItem.cartItems.title}
                image={cartItem.cartItems.image}
                price={cartItem.cartItems.price}
                noButton
              />
            ))}
            <View>
              <View style={styles.section}>
                <Text style={{fontSize: 20}}>Subtotal:</Text>
                <Text h4>₹{item.orders.totalPrice}</Text>
              </View>
              <Divider orientation="horizontal" />
              <View style={styles.section}>
                <Text style={{fontSize: 20}}>Status:</Text>
                <Text h4>{item.orders.status}</Text>
              </View>
            </View>
          </View>
        ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
});
export default OrderScreen;
