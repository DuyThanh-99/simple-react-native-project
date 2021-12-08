import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  useWindowDimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import background from '../../assets/background/RealApple.png';
import {Icon} from 'react-native-elements';

const DetailProduct = () => {
  const navigation = useNavigation();
  const {width} = useWindowDimensions();
  const [count, setCount] = useState(0);
  return (
    <SafeAreaView style={{backgroundColor: '#fff'}}>
      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={[styles.container, {width: width, height: 300}]}>
            <View style={styles.header}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name="left" size={26} type="antdesign" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log('')}>
                <Icon name="upload" size={26} type="feather" solid />
              </TouchableOpacity>
            </View>
            <ImageBackground
              source={background}
              style={[styles.image]}></ImageBackground>
          </View>
          <View style={styles.detail}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 24, fontWeight: 'bold'}}>
                Naturel Red Apple
              </Text>
              <Icon
                name="heart-outlined"
                size={30}
                type="entypo"
                color="#7C7C7C"
              />
            </View>
            <Text style={{color: '#7C7C7C', fontSize: 15}}>1kg, Price</Text>
            <View style={styles.price}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    setCount(count - 1);
                  }}>
                  <Icon name="minus" size={28} type="entypo" color="#7C7C7C" />
                </TouchableOpacity>
                <Text style={styles.number}>{count}</Text>
                <TouchableOpacity
                  onPress={() => {
                    setCount(count + 1);
                  }}>
                  <Icon name="plus" size={28} type="entypo" color="#53B175" />
                </TouchableOpacity>
              </View>
              <Text style={{fontSize: 24, fontWeight: 'bold'}}>$4.99</Text>
            </View>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 15,
                }}>
                <Text style={{fontWeight: '700', fontSize: 16}}>
                  Product Detail
                </Text>
                <Icon name="chevron-down" size={24} type="entypo" />
              </View>
              <Text style={{color: 'rgba(124, 124, 124, 1)', marginBottom: 30}}>
                Apples are nutritious. Apples may be good for weight loss.
                apples may be good for your heart. As part of a healtful and
                varied diet.
              </Text>
            </View>
            <TouchableOpacity>
              <View style={[styles.btn, {width: width - 40, height: 70}]}>
                <Text style={{fontSize: 18, color: '#fff'}}>Add To Basket</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default DetailProduct;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F3F2',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },

  image: {
    height: 200,
    resizeMode: 'contain',
  },

  detail: {
    padding: 20,
  },

  number: {
    width: 40,
    height: 40,
    color: '#181725',
    fontWeight: 'bold',
    fontSize: 22,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'center',
    justifyContent: 'center',
  },

  price: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(226, 226, 226, 0.7)',
  },

  btn: {
    backgroundColor: '#53B175',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
