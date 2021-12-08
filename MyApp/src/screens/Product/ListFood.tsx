import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {Product} from '../../components/common/Product';
import {food} from '../../constants/Food';

const ListFood = () => {
  return (
    <View>
      <FlatList
        data={food}
        renderItem={({item}) => <Product item={item} />}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{width: 10}} />}
      />
    </View>
  );
};

export default ListFood;
