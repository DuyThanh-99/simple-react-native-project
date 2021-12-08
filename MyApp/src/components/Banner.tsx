import React from 'react';
import {View, Text, StyleSheet, Image, useWindowDimensions} from 'react-native';

const Banner: React.FC<IBanner> = ({item}) => {
  const {width} = useWindowDimensions();

  return (
    <View style={[styles.container, {width: width - 40}]}>
      <Image
        source={item.image}
        style={[styles.image, {width: width - 40, resizeMode: 'contain'}]}
      />
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    justifyContent: 'center',
  },
});
