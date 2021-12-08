import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import SearchBar from 'react-native-elements/dist/searchbar/SearchBar-default';
import GroceriesItem from '../../components/GroceriesItem';
import {groceries} from '../../constants/Groceries';
import GridProduct from './GridProduct';

const numColumns = 2;
const data = groceries;

const formatData = (data: any, numColumns: any) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push({
      key: `blank-${numberOfElementsLastRow}`,
      id: `${numberOfElementsLastRow + 10}}`,
      empty: true,
    });
    numberOfElementsLastRow++;
  }

  return data;
};

const renderItem = (item: any) => {
  if (item.item.empty === true) {
    <GroceriesItem
      item={item.item}
      numColumns={numColumns}
      style={styles.itemInvisible}
    />;
  }
  return <GroceriesItem item={item.item} numColumns={numColumns} />;
};

const FindProduct = () => {
  return (
    <View style={styles.container}>
      <SearchBar
        platform="default"
        placeholder="Search Store"
        lightTheme={true}
        containerStyle={{borderRadius: 15, backgroundColor: '#F2F3F2'}}
        placeholderTextColor="#7C7C7C"
        searchIcon={{size: 30}}
      />
      <View>
        <FlatList
          // data={groceries}
          data={formatData(data, numColumns)}
          // renderItem={({item}) => (
          //   <GroceriesItem item={item} numColumns={numColumns} />
          // )}
          renderItem={renderItem}
          style={styles.list}
          showsVerticalScrollIndicator={false}
          numColumns={numColumns}
          // keyExtractor={item => item.id}
          //   ItemSeparatorComponent={() => (
          //     <View style={{height: 10, width: 10}} />
          //   )}
          //   columnWrapperStyle={{justifyContent: 'space-between'}}
        />
      </View>
    </View>
  );
};

export default FindProduct;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },

  list: {
    marginVertical: 20,
    marginBottom: 140,
  },

  itemInvisible: {
    backgroundColor: 'transparent',
  },
});
