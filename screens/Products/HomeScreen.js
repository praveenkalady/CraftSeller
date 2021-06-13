import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {useDispatch,useSelector} from 'react-redux';
import {setBasketLength} from '../../actions/basketActions';
import Showcase from '../../components/Showcase';
import {Text} from 'react-native-elements';
import CustomCard from '../../components/CustomCard';
import firestore from '@react-native-firebase/firestore';
const HomeScreen = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  let mounted = true;
  const dispatch = useDispatch();
  const basket = useSelector(state => state.basketLength.basketLength);
  useEffect(() => {
    const fetchProducts = async () => {
      const items = await firestore().collection('products').get();
      const cartLength = await (await firestore().collection('cart').get()).docs.length;
      let datas = [];
      for (const doc of items.docs) {
        datas.push({id: doc.id, product: doc.data()});
      }
      setProducts(datas);
      dispatch(setBasketLength(cartLength));
    };
    if (mounted) {
      fetchProducts();
      setLoading(false);
    }
    return () => (mounted = false);
  }, [firestore,basket]);
  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Showcase />
        </View>
        <View style={styles.footer}>
          <Text style={styles.sectionHeader} h4>
            Purchase Products
          </Text>
          {!loading &&
            products.map((el, i) => (
              <CustomCard
                navigation={props.navigation}
                id={el.id}
                key={i}
                product={el.product}
              />
            ))}
        </View>
      </ScrollView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 3,
  },
  footer: {
    flex: 3,
    padding: 10,
  },
  sectionHeader: {
    marginVertical: 18,
  },
});
