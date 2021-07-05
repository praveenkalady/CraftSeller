import React from 'react';
import {useSelector} from 'react-redux';
import {View, StyleSheet} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Avatar, Text, Badge, withBadge} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import auth from '@react-native-firebase/auth';
const DrawerContent = (props) => {
  const {email} = useSelector((state) => state.user.user);
  const handleLogout = async () => {
    try {
      await auth().signOut();
    } catch (err) {
      console.log(err);
    }
  };
  const title = email[0] + email[1];
  const basketLength = useSelector((state) => state.basketLength.basketLength);
  const BadgeIcon = withBadge(basketLength)(Icon);
  return (
    <>
      <DrawerContentScrollView style={styles.container} {...props}>
        <View style={{flexDirection: 'row', padding: 10, alignItems: 'center'}}>
          <View style={{marginRight: 16}}>
            <Avatar
              overlayContainerStyle={{backgroundColor: '#ff0b00'}}
              activeOpacity={0.9}
              size="medium"
              rounded
              title={String(title).toUpperCase()}
            />
          </View>
          <View>
            <Text h4>Customer</Text>
            <Text style={{opacity: 0.6}}>{email}</Text>
          </View>
        </View>
        <DrawerItem
          style={{marginTop: 20}}
          onPress={() => props.navigation.navigate('Home')}
          icon={({color, size}) => (
            <Icon name="home" color={color} size={size} />
          )}
          label="Home"
        />
        <DrawerItem
          onPress={() => props.navigation.navigate('Cart')}
          icon={({color, size}) => (
            <BadgeIcon name="shopping-cart" size={size} />
          )}
          label="Cart"
        />
        <DrawerItem
          onPress={() => props.navigation.navigate('Order')}
          icon={({color, size}) => (
            <Icon name="truck" color={color} size={size} />
          )}
          label="Orders"
        />
        <DrawerItem
          onPress={() => props.navigation.navigate('About')}
          icon={({color, size}) => (
            <Icon name="info" color={color} size={size} />
          )}
          label="About"
        />
      </DrawerContentScrollView>
      <DrawerItem
        onPress={handleLogout}
        style={styles.bottomButton}
        icon={({color, size}) => (
          <Icon name="log-out" color={color} size={size} />
        )}
        label="Sign Out"
      />
    </>
  );
};
const styles = StyleSheet.create({
  bottomButton: {
    borderColor: '#f4f4f4',
    borderWidth: 1,
    marginBottom: 15,
  },
  container: {
    flex: 1,
  },
});
export default DrawerContent;
