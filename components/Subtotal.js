import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Divider, Button} from 'react-native-elements';

const Subtotal = () => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={{fontSize: 20}}>Subtotal:</Text>
        <Text h4>₹3000.00</Text>
      </View>
      <Divider orientation="horizontal" />
      <View style={styles.section}>
        <Text style={{fontSize: 20}}>Taxes:</Text>
        <Text h4>₹0.0</Text>
      </View>
      <Divider orientation="horizontal" />
      <View style={styles.section}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>TOTAL:</Text>
        <Text h4>₹3000.00</Text>
      </View>
      <Button buttonStyle={{borderRadius: 20}} title="PROCEED TO CHECKOUT" style={{marginVertical: 18}} />
    </View>
  );
};

export default Subtotal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
});
