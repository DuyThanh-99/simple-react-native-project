import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

// const numColumns = 2;

const GroceriesItem: React.FC<IItem> = ({item, numColumns, style}) => {
  // console.log(item);

  const getcolor = (item: any) => {
    switch (item) {
      case 1:
        return 'rgba(248, 164, 76, 0.2)';
      case 2:
        return 'rgba(83, 177, 117, 0.2)';
      case 3:
        return 'rgba(83, 177, 117, 0.1)';
      case 4:
        return 'rgba(248, 164, 76, 0.2)';
      case 5:
        return 'rgba(247, 165, 147, 0.25)';
      case 6:
        return 'rgba(211, 176, 224, 0.25)';
      case 7:
        return 'rgba(253, 229, 152, 0.25)';
      case 8:
        return 'rgba(183, 223, 245, 0.25)';
    }
  };
  const getBorderColor = (item: any) => {
    switch (item) {
      case 1:
        return 'rgba(248, 164, 76, 0.7)';
      case 2:
        return 'rgba(83, 177, 117, 0.7)';
      case 3:
        return 'rgba(83, 177, 117, 1)';
      case 4:
        return 'rgba(248, 164, 76, 1)';
      case 5:
        return 'rgba(247, 165, 147, 1)';
      case 6:
        return 'rgba(211, 176, 224, 1)';
      case 7:
        return 'rgba(253, 229, 152, 1)';
      case 8:
        return 'rgba(183, 223, 245, 1)';
      default:
        return 'transparent';
    }
  };
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        // console.log(item.id);
        navigation.navigate('ListDetail');
      }}
      style={[
        styles.container,
        style,
        {
          backgroundColor: getcolor(item.id),
          borderColor: getBorderColor(item.id),
          borderWidth: 1,
          borderRadius: 16,
          height: Dimensions.get('window').width / numColumns,
        },
      ]}>
      <View style={{alignItems: 'center'}}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={item.image}
            style={{height: 80, resizeMode: 'contain'}}
          />
        </View>
        <Text style={{fontSize: 15, fontWeight: '700'}}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GroceriesItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4D243D',
    flex: 1,
    margin: 5,
    // height: Dimensions.get('window').width / numColumns, // approximate a square
  },
  // itemInvisible: {
  //   backgroundColor: 'transparent',
  // },
});
