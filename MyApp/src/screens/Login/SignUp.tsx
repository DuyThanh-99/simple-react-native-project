import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  useWindowDimensions,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ScrollView,
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
import {useAppSelector} from '../../redux/store';
import {RootState} from '../../redux/rootReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUp = () => {
  const {width} = useWindowDimensions();
  const [name, onChangeName] = React.useState('');
  const [text, onChangeText] = React.useState('');
  const [pass, onChangePass] = React.useState('');
  const [isSecureEntry, setIsSeCureEntry] = useState(true);
  const navigation = useNavigation();

  // console.log('name', name);

  // const Token = useAppSelector((state: RootState) => state.authSlice.token)

  const handleSignUp = async () => {
    try {
      await AsyncStorage.setItem('name', name);
      await AsyncStorage.setItem('email', text);
      await AsyncStorage.setItem('password', pass);
    } catch (err) {
      console.log(err);
    }
    Alert.alert('Sign up Successful');
  };

  return (
    <SafeAreaView style={[styles.container, {flexDirection: 'column'}]}>
      <KeyboardAwareScrollView
        extraHeight={180}
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
              Sign Up
            </Text>
            <Text style={{color: '#7C7C7C', fontSize: 14}}>
              {' '}
              Enter your credentials to continue
            </Text>
          </View>
          <View style={styles.inputcover}>
            <Text style={{color: '#7C7C7C', fontSize: 14, fontWeight: 'bold'}}>
              {' '}
              UserName
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your name"
              placeholderTextColor="#7C7C7C"
              onChangeText={onChangeName}
              value={name}
              // keyboardType="numeric"
            />
          </View>
          <View style={styles.inputcover}>
            <Text style={{color: '#7C7C7C', fontSize: 14, fontWeight: 'bold'}}>
              {' '}
              Email
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TextInput
                style={[styles.input, {flex: 1}]}
                placeholder="Enter your email"
                placeholderTextColor="#7C7C7C"
                onChangeText={onChangeText}
                value={text}
                // keyboardType="numeric"
              />
              <Icon
                name="check"
                // name="visibility-off"
                size={24}
                type="antdesign"
                color="#53B175"
              />
            </View>
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
            style={{flexDirection: 'row', flexWrap: 'wrap', marginBottom: 15}}>
            <Text style={{fontSize: 14, color: '#7C7C7C', letterSpacing: 0.3}}>
              By continuing you agree to our{' '}
            </Text>
            <Text style={{fontSize: 14, color: '#53B175', letterSpacing: 0.3}}>
              Terms of Service{' '}
            </Text>
            <Text style={{fontSize: 14, color: '#7C7C7C', letterSpacing: 0.3}}>
              and{' '}
            </Text>
            <Text style={{fontSize: 14, color: '#53B175', letterSpacing: 0.3}}>
              Privacy Policy
            </Text>
          </View>
          <TouchableOpacity>
            <View style={[styles.btn, {width: width - 40, height: 60}]}>
              <Text
                style={{fontSize: 18, color: '#fff'}}
                onPress={handleSignUp}>
                Sign Up
              </Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 15,
              marginBottom: 15,
            }}>
            <Text
              style={{
                fontSize: 14,
                color: '#030303',
                letterSpacing: 0.3,
                fontWeight: 'bold',
              }}>
              Already have an account{' '}
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Logging');
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: '#53B175',
                  letterSpacing: 0.3,
                  fontWeight: 'bold',
                }}>
                Sign In{' '}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },

  header: {
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('25%'), // 70% of height device screen
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
    marginBottom: 15,
  },
  input: {color: '#030303'},
  footer: {
    paddingTop: 10,
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
