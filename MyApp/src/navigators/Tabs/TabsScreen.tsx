import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Account, Cart, Explore, Heart, Shop} from '../../assets/svg';
import HomeScreen from '../Stack/HomeScreen';
import {FindproductScreen} from '../Stack';
import CartScreen from '../Stack/CartScreen';
import FavoriteScreen from '../Stack/FavoriteScreen';
import AccountScreen from '../Stack/AccountScreen';
import {useAppSelector} from '../../redux/store';
import AuthScreen from '../Stack/AuthScreen';
import DrawerAuthScreen from '../drawer/DrawerAuthScreen';
import DrawerHomeScreen from '../drawer/DrawerHomeScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// function MainTabsScreens() {
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
//               <Explore fill={focused ? '#53B175' : ''} width={23} height={23} />
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
//               <Account fill={focused ? '#53B175' : ''} width={23} height={23} />
//             );
//           }
//         },
//       })}>
//       <Tab.Screen name="Shop" component={DrawerHomeScreen} />
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

export function TabsScreens() {
  const isLogined = useAppSelector(state => state.authSlice.isLogined);

  return (
    <Stack.Navigator headerMode="none">
      {isLogined ? (
        // <Stack.Screen component={MainTabsScreens} name="MainTabsScreens" />
        <Stack.Screen component={DrawerHomeScreen} name="DrawerHomeScreen" />
      ) : (
        <Stack.Screen
          component={DrawerAuthScreen}
          name="DrawerAuthScreen"
          options={{animationTypeForReplace: isLogined ? 'push' : 'pop'}}
        />
      )}
    </Stack.Navigator>
  );
}
