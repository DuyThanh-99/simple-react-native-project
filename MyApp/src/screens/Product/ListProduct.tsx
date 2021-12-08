import React from 'react';
import {View, FlatList} from 'react-native';
import {Product} from '../../components/common/Product';
import {product} from '../../constants/Data';

const ListProduct = () => {
  // console.log(product);

  return (
    <View>
      <FlatList
        data={product}
        renderItem={({item}) => <Product item={item} />}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={{width: 10}} />}
      />
    </View>
  );
};

export default ListProduct;
