import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Label: React.FC<ILabel> = ({name, image, item}) => {
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
  return (
    <View style={[styles.container, {backgroundColor: getcolor(item)}]}>
      <Image source={image} />
      <Text
        style={{
          marginLeft: 20,
          fontSize: 20,
          fontWeight: 'normal',
          color: '#3E423F',
          width: 100,
        }}>
        {name}
      </Text>
    </View>
  );
};

export default Label;

const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 120,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 18,
    marginRight: 20,
    marginBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
