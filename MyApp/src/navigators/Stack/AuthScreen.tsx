import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Logging from '../../screens/Login/Logging';
import SignUp from '../../screens/Login/SignUp';

const AuthtStack = createStackNavigator();

const AuthScreen = () => {
  return (
    <AuthtStack.Navigator initialRouteName={'Logging'} headerMode="none">
      <AuthtStack.Screen name="Logging" component={Logging} />
      <AuthtStack.Screen name="SignUp" component={SignUp} />
    </AuthtStack.Navigator>
  );
};

export default AuthScreen;
