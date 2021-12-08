import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Navigators} from '..';
import ListDetails from '../../screens/Product/ListDetails';
import FindProduct from '../../screens/Search/FindProduct';

const Find = createStackNavigator();

export const FindproductScreen = () => {
  // if (route.state) {
  //   navigation.setOptions({tabBarVisible: false});
  // } else {
  //   navigation.setOptions({tabBarVisible: true});
  // }
  return (
    <Find.Navigator headerMode="none">
      <Find.Screen name="FindProduct" component={FindProduct} />
      {/* <Find.Screen name="ListDetail" component={ListDetails} /> */}
    </Find.Navigator>
  );
};
