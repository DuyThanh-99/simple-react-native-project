import React from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import avatar from '../../assets/avatar/cat.jpg';
import Pen from '../../assets/svg/Pen';
export const Infor: React.FC<IInfor> = ({}) => {
  return (
    <View style={[styles.container, {flexDirection: 'row'}]}>
      <View style={styles.left}>
        <View style={[styles.avatar]}>
          <ImageBackground
            source={avatar}
            style={{width: '100%', height: '100%'}}></ImageBackground>
        </View>
      </View>
      <View style={styles.right}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: '#181725',
              marginRight: 10,
            }}>
            {'Thanh'}
          </Text>
          <Pen />
        </View>
        <Text style={{color: '#7C7C7C'}}>{'duythanh@gmail.com'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 10,
  },

  left: {
    flex: 1,
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  right: {
    flex: 3,
    // borderWidth: 1,
    padding: 15,
    justifyContent: 'center',
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 20,
    overflow: 'hidden',
    resizeMode: 'contain',
  },
});
