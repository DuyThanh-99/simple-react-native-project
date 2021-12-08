import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  useWindowDimensions,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Logo} from '../../assets/svg';
import background from '../../assets/background/ground.png';
import {Icon} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import {doLoginSystem} from '../../redux/slice';
import {RootState} from '../../redux/rootReducer';

const Logging = () => {
  const {width} = useWindowDimensions();
  //React
  const [email, onChangeEmail] = React.useState('');
  const [pass, onChangePass] = useState('');
  const [token, setToken] = useState('');

  const [isSecureEntry, setIsSeCureEntry] = useState(true);
  const navigation = useNavigation();

  const dispatch = useAppDispatch();

  const Token = useAppSelector((state: RootState) => state.authSlice.token);

  // const handleLoggin = async () => {
  //   // Alert.alert('hihi');
  //   try {
  //     setToken('thanh');
  //     await AsyncStorage.setItem('token', token);
  //     await AsyncStorage.setItem('email', email);
  //     await AsyncStorage.setItem('password', pass);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const handleLoggin = async () => {
    try {
      const emailValue = await AsyncStorage.getItem('email');
      const passwordValue = await AsyncStorage.getItem('password');
      if (email === emailValue && pass === passwordValue) {
        // Alert.alert('Loggin');
        dispatch(doLoginSystem());
        AsyncStorage.setItem('token', Token);
      } else {
        Alert.alert('Wrong username or password');
      }
    } catch (err) {
      console.log(err);
    }
  };

  // const getData = async () => {
  //   try {
  //     const emailValue = await AsyncStorage.getItem('email');
  //     const passwordValue = await AsyncStorage.getItem('password');
  //     if (emailValue && passwordValue !== null) {
  //       onChangeEmail(emailValue);
  //       onChangePass(passwordValue);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <SafeAreaView style={[styles.container]}>
      <KeyboardAwareScrollView
        extraHeight={160}
        enableOnAndroid
        keyboardShouldPersistTaps={'handled'}
        showsVerticalScrollIndicator={false}>
        <View style={[styles.header]}>
          <ImageBackground
            source={background}
            style={[styles.image, {width: '100%'}]}>
            <Logo width={30} height={30} fill="#53B175" head="#F3603F" />
          </ImageBackground>
        </View>
        <View style={styles.body}>
          <View style={styles.title}>
            <Text
              style={{
                color: '#030303',
                fontSize: 26,
                fontWeight: '600',
                marginBottom: 10,
              }}>
              Logging
            </Text>
            <Text style={{color: '#7C7C7C', fontSize: 14}}>
              {' '}
              Enter your Email and Password
            </Text>
          </View>
          <View style={styles.inputcover}>
            <Text style={{color: '#7C7C7C', fontSize: 14, fontWeight: 'bold'}}>
              {' '}
              Email
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              placeholderTextColor="#7C7C7C"
              onChangeText={email => onChangeEmail(email)}
              value={email}
              // multiline={true}
              // keyboardType="numeric"
            />
          </View>
          <View style={styles.inputcover}>
            <Text style={{color: '#7C7C7C', fontSize: 14, fontWeight: 'bold'}}>
              {' '}
              Password
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TextInput
                style={[styles.input, {flex: 1}]}
                placeholder="Enter your password"
                placeholderTextColor="#7C7C7C"
                onChangeText={pass => onChangePass(pass)}
                value={pass}
                secureTextEntry={pass.length > 0 ? isSecureEntry : false}
                // keyboardType="numeric"
              />
              <TouchableOpacity
                onPress={() => {
                  setIsSeCureEntry(!isSecureEntry);
                }}>
                {isSecureEntry === true ? (
                  <Icon
                    name="visibility-off"
                    size={24}
                    type="materialIcons"
                    color="#7C7C7C"
                  />
                ) : (
                  <Icon
                    name="visibility"
                    size={24}
                    type="materialIcons"
                    color="#7C7C7C"
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <View
            style={{
              alignItems: 'flex-end',
              marginBottom: 15,
            }}>
            <Text style={{fontSize: 14, color: '#181725', letterSpacing: 0.3}}>
              Forgot Password?{' '}
            </Text>
          </View>
          <TouchableOpacity onPress={handleLoggin}>
            <View style={[styles.btn, {width: width - 30, height: 60}]}>
              <Text style={{fontSize: 18, color: '#fff'}}>Log In</Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 20,
            }}>
            <Text
              style={{
                fontSize: 14,
                color: '#030303',
                letterSpacing: 0.3,
                fontWeight: 'bold',
              }}>
              Don't have an account?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SignUp');
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: '#53B175',
                  letterSpacing: 0.3,
                  fontWeight: 'bold',
                }}>
                Sign up{' '}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Logging;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },

  header: {
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('25%'),
  },
  image: {
    resizeMode: 'contain',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  body: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },

  title: {marginBottom: 30},
  inputcover: {
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
    marginBottom: 10,
  },
  input: {
    color: '#030303',
  },
  footer: {
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },

  btn: {
    backgroundColor: '#53B175',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
