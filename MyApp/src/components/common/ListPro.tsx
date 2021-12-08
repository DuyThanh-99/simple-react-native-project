import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import PlusButton from '../../assets/svg/Plus';

const numColumns = 2;

export const ListPro: React.FC<IProduct> = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Image
          source={item.image}
          style={{height: 80, resizeMode: 'contain', marginBottom: 10}}
        />
      </View>
      <Text style={{fontSize: 15, fontWeight: '700', height: 40}}>
        {item.title}
      </Text>
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
    borderColor: '#E2E2E2',
    borderWidth: 1,
    borderRadius: 18,
    padding: 20,
    justifyContent: 'space-between',
    flex: 1,
    margin: 5,
    height: Dimensions.get('window').width / numColumns + 60, // approximate a square
  },

  price: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
});
