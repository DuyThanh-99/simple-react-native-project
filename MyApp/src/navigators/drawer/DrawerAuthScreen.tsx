import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Logging from '../../screens/Login/Logging';
import SignUp from '../../screens/Login/SignUp';
import {useWindowDimensions} from 'react-native';

const AuthtDrawer = createDrawerNavigator();

const DrawerAuthScreen = () => {
  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;
  return (
    <AuthtDrawer.Navigator
      initialRouteName={'Logging'}
      //   drawerStyle={{width: '100%'}}
    >
      <AuthtDrawer.Screen name="Logging" component={Logging} />
      <AuthtDrawer.Screen name="SignUp" component={SignUp} />
    </AuthtDrawer.Navigator>
  );
};

export default DrawerAuthScreen;
