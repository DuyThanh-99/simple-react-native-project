import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Logo} from '../../assets/svg';

const Splash = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <StatusBar barStyle="light-content" backgroundColor="#53B175" />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Logo width={45} height={60} fill="#fff" head="#fff" />
          <View style={{alignItems: 'center', padding: 15}}>
            <View style={{padding: 0, margin: 0}}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 60,
                  //   borderWidth: 1,
                  lineHeight: 50,
                }}>
                nectar
              </Text>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: '#fff',
                letterSpacing: 5,
                lineHeight: 15,
                // borderWidth: 1,
              }}>
              online grocriet
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#53B175',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
