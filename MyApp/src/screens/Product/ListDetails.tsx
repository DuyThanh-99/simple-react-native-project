import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import {ListPro} from '../../components/common/ListPro';
import {drink} from '../../constants/Drink';

const ListDetails = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="left" size={26} type="antdesign" />
        </TouchableOpacity>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Bavarage</Text>
        <TouchableOpacity onPress={() => console.log('')}>
          <Icon name="upload" size={26} type="feather" solid />
        </TouchableOpacity>
      </View>
      <FlatList
        data={drink}
        renderItem={({item}) => <ListPro item={item} />}
        style={styles.list}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        // keyExtractor={item => item.id}
        //   ItemSeparatorComponent={() => (
        //     <View style={{height: 10, width: 10}} />
        //   )}
        //   columnWrapperStyle={{justifyContent: 'space-between'}}
      />
    </View>
  );
};

export default ListDetails;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    marginBottom: 40,
  },

  list: {
    marginVertical: 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
});
