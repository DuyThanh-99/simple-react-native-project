import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useWindowDimensions} from 'react-native';
import Home from '../../screens/Market/Home';
import {CustomDrawerContent} from '../../components/Drawer/CustomDrawerContent';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Account, Cart, Explore, Heart, Shop} from '../../assets/svg';
import HomeScreen from '../Stack/HomeScreen';
import {FindproductScreen} from '../Stack';
import CartScreen from '../Stack/CartScreen';
import FavoriteScreen from '../Stack/FavoriteScreen';
import AccountScreen from '../Stack/AccountScreen';

const HomeDrawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function MainTabsScreens() {
  return (
    <Tab.Navigator
      initialRouteName="Shop"
      tabBarOptions={{
        style: {
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          paddingBottom: 20,
          paddingTop: 15,
          height: 75,
        },
        activeTintColor: '#53B175',
        inactiveTintColor: '#181725',
      }}
      // screenOptions={({route}) => ({
      //   tabBarIcon: ({focused}) => {
      //     if (route.name === 'Shop') {
      //       return;
      //     } else if (route.name === 'Explore') {
      //     }
      //   },
      // })}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          if (route.name === 'Shop') {
            return (
              <Shop fill={focused ? '#53B175' : ''} width={25} height={23} />
            );
          } else if (route.name === 'Explore') {
            return (
              <Explore fill={focused ? '#53B175' : ''} width={23} height={23} />
            );
          } else if (route.name === 'Cart') {
            return (
              <Cart fill={focused ? '#53B175' : ''} width={23} height={23} />
            );
          } else if (route.name === 'Favorite') {
            return (
              <Heart fill={focused ? '#53B175' : ''} width={23} height={23} />
            );
          } else if (route.name === 'Account') {
            return (
              <Account fill={focused ? '#53B175' : ''} width={23} height={23} />
            );
          }
        },
      })}>
      <Tab.Screen name="Shop" component={HomeScreen} />
      <Tab.Screen
        name="Explore"
        component={FindproductScreen}
        // options={() => ({
        //   tabBarLabel: 'DetailProduct',
        // })}
      />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}

const DrawerHomeScreen = () => {
  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;
  return (
    <HomeDrawer.Navigator
      initialRouteName={'Home'}
      drawerStyle={{width: '50%'}}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <HomeDrawer.Screen name="MainTabsScreens" component={MainTabsScreens} />
    </HomeDrawer.Navigator>
  );
};

export default DrawerHomeScreen;
