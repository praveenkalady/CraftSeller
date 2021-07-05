import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {Input, Text, Button} from 'react-native-elements';
import uuid from 'react-native-uuid';
import Toast from 'react-native-toast-message';
const AddressScreen = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [pincode, setPincode] = useState('');
  const [address, setAddress] = useState('');
  const handleSubmit = async () => {
    try {
      const items = await firestore().collection('cart').get();
      let datas = [];
      for (const doc of items.docs) {
        datas.push({id: doc.id, cartItems: doc.data()});
      }
      const totalPrice = parseFloat(
        datas.reduce((acc, item) => {
          return acc + Number(item.cartItems.price);
        }, 0),
      );
      let data = {
        address: {firstName, lastName, email, phone, pincode, address},
        cartItems: datas,
        totalPrice: totalPrice,
        status: 'placed',
      };
      await firestore().collection('order').doc(uuid.v4()).set(data);
      Toast.show({
        position: 'bottom',
        type: 'success',
        text1: 'Success',
        text2: 'Order placed successfully',
      });
      props.navigation.navigate('Order');
    } catch (err) {
      Toast.show({
        position: 'bottom',
        type: 'error',
        text1: 'Success',
        text2: 'something went wrong',
      });
      console.log(err);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20}}>
        Add your shipping address
      </Text>
      <Input
        onChangeText={(value) => setFirstName(value)}
        placeholder="First Name"
      />
      <Input
        onChangeText={(value) => setLastName(value)}
        placeholder="Last Name"
      />
      <Input onChangeText={(value) => setEmail(value)} placeholder="Email" />
      <Input onChangeText={(value) => setPhone(value)} placeholder="Phone" />
      <Input
        onChangeText={(value) => setPincode(value)}
        placeholder="Pincode"
      />
      <Input
        onChangeText={(value) => setAddress(value)}
        placeholder="Address"
      />
      <Button
        onPress={() => handleSubmit()}
        buttonStyle={{borderRadius: 20}}
        title="PLACE ORDER"
        style={{marginVertical: 18}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default AddressScreen;
