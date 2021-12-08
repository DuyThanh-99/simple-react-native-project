import React from 'react';
import {View, StyleSheet, Animated, useWindowDimensions} from 'react-native';

export const Paginator: React.FC<IPaginator> = ({data, scrollX}) => {
  // console.log(data);

  const {width} = useWindowDimensions();

  return (
    <View
      style={{
        flexDirection: 'row',
        position: 'absolute',
        bottom: -15,
        // height: 30,
      }}>
      {data.map((_: any, i: any) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: 'clamp',
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.5, 1, 0.5],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            style={[styles.dot, {width: dotWidth, opacity}]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  dot: {
    height: 7,
    borderRadius: 5,
    backgroundColor: '#7C7C7C',
    marginHorizontal: 8,
  },
});
