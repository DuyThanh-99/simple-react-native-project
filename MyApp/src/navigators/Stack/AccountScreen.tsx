import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Account from '../../screens/Account/Account';
const Accounts = createStackNavigator();

const AccountScreen = () => {
  return (
    <Accounts.Navigator headerMode="none">
      <Accounts.Screen name="Account" component={Account} />
      {/* <Accounts.Screen name="Splash" component={Splash} /> */}
    </Accounts.Navigator>
  );
};

export default AccountScreen;
