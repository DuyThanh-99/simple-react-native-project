import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View, Text} from 'react-native';
import Favorite from '../../screens/Favorite/Favorite';

const Favor = createStackNavigator();

const FavoriteScreen = () => {
  return (
    <Favor.Navigator>
      <Favor.Screen
        name="Favor"
        component={Favorite}
        options={{title: 'Favorite', headerTitleAlign: 'center'}}
      />
    </Favor.Navigator>
  );
};

export default FavoriteScreen;
