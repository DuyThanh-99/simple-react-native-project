import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {drink} from '../../constants/Drink';

const Favorite = () => {
  const {width} = useWindowDimensions();
  return (
    <View style={[styles.container, {flexDirection: 'column'}]}>
      <View style={{flex: 3, padding: 20}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {drink.map((item, index) => (
            <View
              key={index}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                // borderWidth: 1,
                marginBottom: 10,
                paddingBottom: 10,
                paddingTop: 10,
                borderBottomWidth: 1,
                borderBottomColor: '#E2E2E2',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  // borderWidth: 1,
                }}>
                <Image
                  source={item.image}
                  style={{
                    height: 60,
                    width: 60,
                    resizeMode: 'contain',
                    marginRight: 15,
                  }}
                />
                <View>
                  <Text style={{fontSize: 15, fontWeight: '700'}}>
                    {item.title}
                  </Text>
                  <Text style={{color: '#7C7C7C', fontSize: 15}}>
                    {item.description}
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                  {item.price}
                </Text>
                <Icon
                  name="chevron-small-right"
                  size={24}
                  type="entypo"
                  color="#181725"
                />
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: '#E2E2E2',
          marginBottom: 20,
        }}></View>
      <View style={{flex: 1, padding: 20}}>
        <TouchableOpacity style={[styles.btn, {width: width - 40, height: 70}]}>
          <Text style={{fontSize: 18, color: '#fff'}}>Add All to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  container: {
    marginTop: 2,
    backgroundColor: '#fff',
    flex: 1,
  },

  number: {
    width: 30,
    height: 30,
    color: '#181725',
    fontWeight: 'bold',
    fontSize: 18,
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
    marginTop: 10,
    marginBottom: 10,
  },

  btn: {
    backgroundColor: '#53B175',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
