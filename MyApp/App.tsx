import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {Navigators} from './src/navigators';
import Home from './src/screens/Market/Home';
import RNBootSplash from 'react-native-bootsplash';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import Splash from './src/screens/Login/Splash';

const App = () => {
  // const [isLoading, setIsLoading] = useState(true);
  // if (isLoading) {
  //   return <Splash />;
  // }
  // useEffect(() => {
  //   RNBootSplash.hide({fade: true});
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1000);
  // }, []);
  // SplashBoost
  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide({fade: true});
    }, 1000);
  }, []);
  return (
    <Provider store={store}>
      <Navigators />
    </Provider>
  );
};

export default App;
