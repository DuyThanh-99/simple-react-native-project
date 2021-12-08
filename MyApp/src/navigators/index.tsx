import React, {useEffect} from 'react';
import {View, Text, StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {Shop} from '../assets/svg/Shop';
import {Explore} from '../assets/svg/Explore';
import {Cart} from '../assets/svg/Cart';
import {Account} from '../assets/svg/Account';
import {Heart} from '../assets/svg/Heart';
import HomeScreen from './Stack/HomeScreen';
import CartScreen from './Stack/CartScreen';
import {FindproductScreen} from './Stack/FindProductScreen';
import FavoriteScreen from './Stack/FavoriteScreen';
import AccountScreen from './Stack/AccountScreen';
import FindProduct from '../screens/Search/FindProduct';
import {createStackNavigator} from '@react-navigation/stack';
import ListDetail from '../screens/Product/ListDetails';
import DetailProduct from '../screens/Product/DetailProduct';
import SignUp from '../screens/Login/SignUp';
import Logging from '../screens/Login/Logging';
import AuthScreen from './Stack/AuthScreen';
import {useAppDispatch, useAppSelector} from '../redux/store';
import {TabsScreens} from './Tabs/TabsScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {doLogoutSystem} from '../redux/slice';
import DrawerHomeScreen from './drawer/DrawerHomeScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export const Navigators = () => {
  const dispatch = useAppDispatch();
  const isLogined = useAppSelector(state => state.authSlice.isLogined);
  useEffect(() => {
    AsyncStorage.getItem('token').then(res => {
      console.log('token', res);

      if (!res && isLogined) {
        dispatch(doLogoutSystem());
      }
    });
  }, [isLogined]);
  // const isLoggined = useAppSelector(state => state.authSlice.isLogined);
  // console.log('log', isLoggined);

  // function TabsScreen() {
  //   return (
  //     <Tab.Navigator
  //       initialRouteName="Shop"
  //       tabBarOptions={{
  //         style: {
  //           borderTopLeftRadius: 15,
  //           borderTopRightRadius: 15,
  //           paddingBottom: 20,
  //           paddingTop: 15,
  //           height: 75,
  //         },
  //         activeTintColor: '#53B175',
  //         inactiveTintColor: '#181725',
  //       }}
  //       // screenOptions={({route}) => ({
  //       //   tabBarIcon: ({focused}) => {
  //       //     if (route.name === 'Shop') {
  //       //       return;
  //       //     } else if (route.name === 'Explore') {
  //       //     }
  //       //   },
  //       // })}
  //       screenOptions={({route}) => ({
  //         tabBarIcon: ({focused}) => {
  //           if (route.name === 'Shop') {
  //             return (
  //               <Shop fill={focused ? '#53B175' : ''} width={25} height={23} />
  //             );
  //           } else if (route.name === 'Explore') {
  //             return (
  //               <Explore
  //                 fill={focused ? '#53B175' : ''}
  //                 width={23}
  //                 height={23}
  //               />
  //             );
  //           } else if (route.name === 'Cart') {
  //             return (
  //               <Cart fill={focused ? '#53B175' : ''} width={23} height={23} />
  //             );
  //           } else if (route.name === 'Favorite') {
  //             return (
  //               <Heart fill={focused ? '#53B175' : ''} width={23} height={23} />
  //             );
  //           } else if (route.name === 'Account') {
  //             return (
  //               <Account
  //                 fill={focused ? '#53B175' : ''}
  //                 width={23}
  //                 height={23}
  //               />
  //             );
  //           }
  //         },
  //       })}>
  //       <Tab.Screen name="Shop" component={HomeScreen} />
  //       <Tab.Screen
  //         name="Explore"
  //         component={FindproductScreen}
  //         // options={() => ({
  //         //   tabBarLabel: 'DetailProduct',
  //         // })}
  //       />
  //       <Tab.Screen name="Cart" component={CartScreen} />
  //       <Tab.Screen name="Favorite" component={FavoriteScreen} />
  //       <Tab.Screen name="Account" component={AccountScreen} />
  //     </Tab.Navigator>
  //   );
  // }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'TabsScreen'} headerMode={'none'}>
          <Stack.Screen component={TabsScreens} name="TabsScreen" />
          <Stack.Screen component={ListDetail} name="ListDetail" />
          <Stack.Screen component={DetailProduct} name="DetailProduct" />
          {/* <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Logging" component={Logging} /> */}
          {/* <Stack.Screen component={AuthScreen} name="Auth" /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

// // type
// export type RootStackParamList = {
//   Prodetails: undefined;
//   findProduct: undefined;
// };
