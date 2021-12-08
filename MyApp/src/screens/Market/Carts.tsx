import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  useWindowDimensions,
  Alert,
  Modal,
} from 'react-native';
import {Icon} from 'react-native-elements';
import apple from '../../assets/img/Apples.png';
import {product} from '../../constants/Data';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Carts = () => {
  const navigation = useNavigation();
  const [count, setCount] = useState(0);
  const {width} = useWindowDimensions();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={[styles.container, {flexDirection: 'column'}]}>
      <View style={{flex: 7}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {product.map((item, index) => (
            <View
              key={index}
              style={{
                flexDirection: 'row',
                borderBottomWidth: 1,
                borderBottomColor: '#E2E2E2',
                paddingBottom: 10,
                paddingTop: 10,
              }}>
              <Image
                source={item.image}
                style={{
                  height: 80,
                  resizeMode: 'contain',
                  marginRight: 15,
                }}
              />
              <View style={{flex: 1}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    // width: '100%',
                    // borderWidth: 1,
                  }}>
                  <Text style={{fontSize: 15, fontWeight: '700'}}>
                    {item.title}
                  </Text>
                  <TouchableOpacity>
                    <Icon name="x" size={24} type="feather" color="#7C7C7C" />
                  </TouchableOpacity>
                </View>
                <Text style={{color: '#7C7C7C', fontSize: 15}}>
                  {item.description}
                </Text>
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
                      <Icon
                        name="minus"
                        size={28}
                        type="entypo"
                        color="#7C7C7C"
                      />
                    </TouchableOpacity>
                    <Text style={styles.number}>{count}</Text>
                    <TouchableOpacity
                      onPress={() => {
                        setCount(count + 1);
                      }}>
                      <Icon
                        name="plus"
                        size={28}
                        type="entypo"
                        color="#53B175"
                      />
                    </TouchableOpacity>
                  </View>
                  <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                    {item.price}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={{flex: 1}}></View>
      <TouchableOpacity
        style={[
          styles.btn,
          {
            position: 'absolute',
            alignSelf: 'center',
            bottom: 15,
            width: width - 40,
            height: 70,
          },
        ]}
        onPress={() => {
          // Alert.alert('hihi');
          setModalVisible(true);
        }}>
        <View
          style={{
            alignItems: 'center',
            // flex: 6,
          }}>
          <Text style={{fontSize: 18, color: '#fff'}}>Go to Checkout</Text>
        </View>
        <View
          style={{
            backgroundColor: '#489E67',
            padding: 3,
            borderRadius: 5,
            alignItems: 'center',
            position: 'absolute',
            right: 15,
            // marginLeft: 'auto',
            // flex: 1,
          }}>
          <Text style={{color: '#fff', fontSize: 10}}>{`$12,96`}</Text>
        </View>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modal}>
          <View style={styles.upper}></View>
          <View style={styles.lowwer}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottomWidth: 1,
                borderBottomColor: 'rgba(226, 226, 226, 0.7)',
                paddingBottom: 20,
              }}>
              <Text
                style={{fontSize: 24, color: '#181725', fontWeight: 'bold'}}>
                Check Out
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <View>
                  <Icon
                    name="close"
                    type="antdesign"
                    size={24}
                    color="#181725"
                  />
                </View>
              </TouchableOpacity>
            </View>
            {/* Item */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottomWidth: 1,
                borderBottomColor: 'rgba(226, 226, 226, 0.7)',
                paddingBottom: 20,
                paddingTop: 20,
              }}>
              <Text style={{fontSize: 18, color: '#7C7C7C'}}>Delivery</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{fontSize: 18, color: '#181725'}}>
                  Select Method
                </Text>
                <Icon
                  name="chevron-small-right"
                  type="entypo"
                  size={22}
                  color="#181725"
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottomWidth: 1,
                borderBottomColor: 'rgba(226, 226, 226, 0.7)',
                paddingBottom: 20,
                paddingTop: 20,
              }}>
              <Text style={{fontSize: 18, color: '#7C7C7C'}}>Delivery</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name="credit-card" type="entypo" size={22} />
                <Icon
                  name="chevron-small-right"
                  type="entypo"
                  size={22}
                  color="#181725"
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottomWidth: 1,
                borderBottomColor: 'rgba(226, 226, 226, 0.7)',
                paddingBottom: 20,
                paddingTop: 20,
              }}>
              <Text style={{fontSize: 18, color: '#7C7C7C'}}>Promo Code</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{fontSize: 18, color: '#181725'}}>
                  Pick Discount
                </Text>
                <Icon
                  name="chevron-small-right"
                  type="entypo"
                  size={22}
                  color="#181725"
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottomWidth: 1,
                borderBottomColor: 'rgba(226, 226, 226, 0.7)',
                paddingBottom: 20,
                paddingTop: 20,
              }}>
              <Text style={{fontSize: 18, color: '#7C7C7C'}}>Total Cost</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{fontSize: 18, color: '#181725'}}>$13.97</Text>
                <Icon
                  name="chevron-small-right"
                  type="entypo"
                  size={22}
                  color="#181725"
                />
              </View>
            </View>
            {/* End */}
            <View style={{marginTop: 10, marginBottom: 20}}>
              <Text
                style={{fontSize: 16, color: '#7C7C7C', fontWeight: 'bold'}}>
                By placing an order you agree to our
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{fontSize: 16, color: '#181725', fontWeight: 'bold'}}>
                  Terms {''}
                </Text>
                <Text
                  style={{fontSize: 16, color: '#7C7C7C', fontWeight: 'bold'}}>
                  And {''}
                </Text>
                <Text
                  style={{fontSize: 16, color: '#181725', fontWeight: 'bold'}}>
                  Conditions
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={[
                styles.btn,
                {
                  alignSelf: 'center',
                  width: width - 40,
                  height: 70,
                },
              ]}
              onPress={() => {
                // Alert.alert('hihi');
                setModalVisible(true);
              }}>
              <View
                style={{
                  alignItems: 'center',
                  // flex: 6,
                }}>
                <Text style={{fontSize: 18, color: '#fff'}}>Place Order</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Carts;

const styles = StyleSheet.create({
  container: {
    marginTop: 2,
    padding: 20,
    backgroundColor: '#fff',
    position: 'relative',
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
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
  },

  modal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },

  upper: {
    height: hp('30%'),
  },

  lowwer: {
    height: hp('70%'),
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#fff',
    padding: 20,
  },
});
