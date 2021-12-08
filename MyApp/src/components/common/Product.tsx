import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import PlusButton from '../../assets/svg/Plus';

export const Product: React.FC<IProduct> = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Image
          source={item.image}
          style={{height: 80, resizeMode: 'contain'}}
        />
      </View>
      <Text style={{fontSize: 15, fontWeight: '700'}}>{item.title}</Text>
      <Text style={{fontSize: 13, color: '#7C7C7C'}}>{item.description}</Text>
      <View style={styles.price}>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>{item.price}</Text>
        <PlusButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 170,
    height: 250,
    borderColor: '#E2E2E2',
    borderWidth: 1,
    borderRadius: 18,
    padding: 20,
    marginTop: 20,
    justifyContent: 'space-between',
  },

  price: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
});
