import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from '../../screens/Market/Home';
import DetailProduct from '../../screens/Product/DetailProduct';

const HomeMarket = createStackNavigator();

const HomeScreen = () => {
  return (
    <HomeMarket.Navigator headerMode="none">
      <HomeMarket.Screen name="Homemarket" component={Home} />
      {/* <HomeMarket.Screen name="DetailProduct" component={DetailProduct} /> */}
    </HomeMarket.Navigator>
  );
};

export default HomeScreen;
