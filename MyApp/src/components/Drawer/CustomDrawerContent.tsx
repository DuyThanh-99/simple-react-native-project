import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import {
  DrawerItem,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Icon} from 'react-native-elements';
import avatar from '../../assets/avatar/cat.jpg';
import Luv from '../../assets/avatar/luv.jpg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAppDispatch} from '../../redux/store';
import {doLogoutSystem} from '../../redux/slice';

export function CustomDrawerContent(props: any) {
  const [name, setName] = useState<any>('');

  const dispatch = useAppDispatch();
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('name');
      if (value !== null) {
        // value previously stored
        setName(value);
      }
    } catch (e) {
      // error reading value
    }
  };
  useEffect(() => {
    getData();
    // AsyncStorage.getItem('name').then(res => {
    //   setName(res);
    // });
  }, []);
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{position: 'relative', flex: 1}}>
      <View
        style={{alignItems: 'center', justifyContent: 'center', margin: 15}}>
        <View style={[styles.avatar]}>
          <ImageBackground
            source={Luv}
            style={{width: '100%', height: '100%'}}></ImageBackground>
        </View>
      </View>
      <View
        style={{alignItems: 'center', justifyContent: 'center', margin: 15}}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: '#181725',
            marginRight: 10,
          }}>
          {name}
        </Text>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        style={{
          position: 'absolute',
          bottom: 0,
          borderTopWidth: 1,
          borderTopColor: '#7C7C7C',
          marginBottom: 15,
          width: '100%',
        }}
        label="Sign Out"
        icon={() => <Icon name="exit-to-app" type="materialIcons" size={24} />}
        onPress={() => {
          dispatch(doLogoutSystem());
          AsyncStorage.removeItem('token');
        }}
      />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 20,
    overflow: 'hidden',
    resizeMode: 'contain',
  },
});
