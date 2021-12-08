import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Carts from '../../screens/Market/Carts';
const Cart = createStackNavigator();

const CartScreen = () => {
  return (
    <Cart.Navigator>
      <Cart.Screen
        name="Cart"
        component={Carts}
        options={{title: 'My cart', headerTitleAlign: 'center'}}
      />
    </Cart.Navigator>
  );
};

export default CartScreen;
