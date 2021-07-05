import React from 'react';
import {View, Text} from 'react-native';

const AboutScreen = () => {
  return (
    <View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}}>
      <Text style={{fontSize:18}}>CraftSeller</Text>
      <Text style={{color: 'grey'}}>Version 1.0.0</Text>
    </View>
  );
};

export default AboutScreen;
