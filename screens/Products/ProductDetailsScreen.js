import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {LinearProgress, Image, Text, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import Toast from 'react-native-toast-message';

const ProductDetailsScreen = (props) => {
  const {id} = props.route.params;
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getDetails = async () => {
      setLoading(true);
      const item = await firestore().collection('products').doc(id).get();
      if (item) {
        setDetails(item._data);
      }
    };
    getDetails();
    setLoading(false);
  }, [id]);
  const {description, image, title, price} = details;
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
  return (
    <View style={{flex: 1}}>
      {loading ? (
        <>
          <LinearProgress color="primary" />
        </>
      ) : (
        <>
          <View style={styles.container}>
            <View style={styles.header}>
              <Image
                source={{uri: image}}
                style={{width: '100%', height: '100%'}}
                placeholder={<ActivityIndicator />}
              />
            </View>
            <View style={styles.footer}>
              <View style={{marginTop: 30}}>
                <Text style={{textAlign: 'center'}} h4>
                  {title}
                </Text>
                <Text style={{textAlign: 'center', color: 'grey'}} h2>
                  ₹{price}
                </Text>
                <Text
                  style={{fontSize: 18, textAlign: 'center', marginBottom: 18}}>
                  {description}
                </Text>
                <Button
                  icon={
                    <Icon name="add-circle-outline" size={24} color="white" />
                  }
                  raised
                  title="Add to cart"
                  onPress={() => handleAddToCart(id, image, title, price)}
                />
              </View>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 3,
    width: '100%',
  },
  footer: {
    flex: 4,
    backgroundColor: 'white',
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    marginTop: -28,
  },
});
