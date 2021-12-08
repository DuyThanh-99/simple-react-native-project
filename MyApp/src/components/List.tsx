import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text, Linking, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const List: React.FC<IList> = ({url, title, children}) => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.header}>
        <Text style={{fontSize: 24, fontWeight: '700', color: '#181725'}}>
          {title}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('DetailProduct')}>
          <Text style={{fontSize: 14, color: '#53B175', fontWeight: 'bold'}}>
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <View>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
});
