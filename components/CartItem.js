import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Image, Button} from 'react-native-elements';
import Toast from 'react-native-toast-message';
import Icon from 'react-native-vector-icons/Ionicons';
const CartItem = ({id, image, price, title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image source={{uri: image}} style={styles.image} />
      </View>
      <View style={styles.right}>
        <Text h4>{title}</Text>
        <Text>{id}</Text>
        <Text h4>{price}</Text>
        <Button
          icon={<Icon name="trash-outline" size={24} color="black" />}
          raised
          title="Remove"
        />
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
    marginBottom:10
  },
  left: {
    flex: 3,
  },
  right: {
    flex: 4,
    flexDirection: 'column',
    marginLeft:10
  },
  image:{
      width: 100,
      height: 100
  }
});
