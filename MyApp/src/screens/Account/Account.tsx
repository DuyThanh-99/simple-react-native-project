import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Infor} from '../../components/common/Infor';
import {ListItem, Icon} from 'react-native-elements';
import Load from '../../assets/svg/Load';
import {useNavigation} from '@react-navigation/core';
import {useAppDispatch} from '../../redux/store';
import {doLogoutSystem} from '../../redux/slice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Account = () => {
  const list = [
    {
      title: 'Orders',
      icon: 'shopping-bag',
      type: 'feather',
    },
    {
      title: 'My Details',
      icon: 'idcard',
      type: 'antdesign',
    },
    {
      title: 'Delivery Address',
      icon: 'location-pin',
      type: 'entypo',
      // color: '#fff',
    },
    {
      title: 'Payment Methods',
      icon: 'credit-card',
      type: 'fontawesome',
    },
    {
      title: 'Promo Cord',
      icon: 'ticket',
      type: 'entypo',
    },
    {
      title: 'Notifecations ',
      icon: 'notifications-none',
      type: 'materialIcons',
    },
    {
      title: 'Help',
      icon: 'help-circle',
      type: 'feather',
    },
    {
      title: 'About ',
      icon: 'exclamationcircleo',
      type: 'antdesign',
    },
  ];

  const {width} = useWindowDimensions();

  const navigation = useNavigation();

  const dispatch = useAppDispatch();

  return (
    <SafeAreaView style={[styles.container, {flexDirection: 'column'}]}>
      <View
        style={{
          borderBottomColor: '#E2E2E2',
          borderBottomWidth: 1,
          flex: 1,
          // alignItems: 'center',
          // justifyContent: 'center',
        }}>
        <Infor />
      </View>
      <View
        style={{
          borderBottomColor: '#E2E2E2',
          borderBottomWidth: 1,
          flex: 3,
        }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {list.map((item, i) => (
            <ListItem key={i}>
              <Icon name={item.icon} type={item.type} />
              <ListItem.Content>
                <ListItem.Title>{item.title}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron color="#181725" />
            </ListItem>
          ))}
        </ScrollView>
      </View>
      <View
        style={{
          borderBottomColor: '#E2E2E2',
          borderBottomWidth: 1,
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            // navigation.navigate('Auth');
            dispatch(doLogoutSystem());
            AsyncStorage.removeItem('token');
          }}
          style={[
            styles.btn,
            {
              // alignSelf: 'center',
              width: width - 40,
              height: 70,
            },
          ]}>
          <View
            style={{
              alignItems: 'center',
              // flex: 6,
            }}>
            <Text style={{fontSize: 18, color: '#53B175', fontWeight: 'bold'}}>
              Log Out
            </Text>
          </View>
          <View
            style={{
              padding: 3,
              borderRadius: 5,
              alignItems: 'center',
              position: 'absolute',
              left: 15,
              // marginLeft: 'auto',
              // flex: 1,
            }}>
            <Load />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },

  btn: {
    backgroundColor: '#F2F3F2',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
  },
});
