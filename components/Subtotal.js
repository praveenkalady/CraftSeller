import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {View, StyleSheet} from 'react-native';
import {Text, Divider, Button} from 'react-native-elements';

const Subtotal = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchCartItems = async () => {
      setLoading(true);
      const items = await firestore().collection('cart').get();
      let datas = [];
      for (const doc of items.docs) {
        datas.push({id: doc.id, cartItems: doc.data()});
      }
      setCartItems(datas);
    };
    fetchCartItems();
    setLoading(false);
  }, [firestore().collection('cart')]);
  const totalPrice = parseFloat(
    cartItems.reduce((acc, item) => {
      return acc + Number(item.cartItems.price);
    }, 0),
  );
  return (
    <View style={styles.container}>
      {!loading && (
        <>
          <View style={styles.section}>
            <Text style={{fontSize: 20}}>Subtotal:</Text>
            <Text h4>₹{totalPrice.toFixed(2)}</Text>
          </View>
          <Divider orientation="horizontal" />
          <View style={styles.section}>
            <Text style={{fontSize: 20}}>Taxes:</Text>
            <Text h4>₹0.0</Text>
          </View>
          <Divider orientation="horizontal" />
          <View style={styles.section}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>TOTAL:</Text>
            <Text h4>₹{totalPrice.toFixed(2)}</Text>
          </View>
          <Button
            onPress={() => props.navigation.navigate('Address')}
            buttonStyle={{borderRadius: 20}}
            title="PROCEED TO CHECKOUT"
            style={{marginVertical: 18}}
          />
        </>
      )}
    </View>
  );
};

export default Subtotal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingBottom: 28,
    backgroundColor: 'white',
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
});
