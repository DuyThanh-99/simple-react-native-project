import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../../screens/Market/Home';
import DetailProduct from '../../screens/Product/DetailProduct';

const Prodetails = createStackNavigator();

const Protails = () => {
  return (
    <Prodetails.Navigator headerMode={'none'}>
      <Prodetails.Screen
        name="Shop"
        component={Home}
        options={{title: 'Overview', headerShown: false}}
      />
      <Prodetails.Screen name="DetailProduct" component={DetailProduct} />
    </Prodetails.Navigator>
  );
};

export default Protails;
