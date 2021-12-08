import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  FlatList,
  Animated,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
// import Logo from '../../assets/svg/Logo';
import {Icon} from 'react-native-elements';
import SearchBar from 'react-native-elements/dist/searchbar/SearchBar-default';
import {banner} from '../../constants/Banner';
import Banner from '../../components/Banner';
import {List} from '../../components/List';
import Label from '../../components/Label';
import {groceries} from '../../constants/Groceries';
import ListProduct from '../Product/ListProduct';
import ListFood from '../Product/ListFood';
import {Paginator} from '../../components/common/Paginator';
import {Logo} from '../../assets/svg';
import {useNavigation} from '@react-navigation/core';

const Home = () => {
  // console.log(groceries);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const slideRef = useRef(null);

  const onViewableItemsChanged = useRef((viewableItems: any) => {
    setCurrentIndex(viewableItems.viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  // const navigation = useNavigation();

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {/* Header */}
          <View style={{alignItems: 'center', marginBottom: 10}}>
            <TouchableOpacity
              onPress={() => {
                // navigation.openDrawer();
              }}>
              <Logo width={22} height={25} fill="#53B175" head="#F3603F" />
            </TouchableOpacity>
          </View>
          <View style={styles.location}>
            <Icon
              name="location-pin"
              color="rgba(57, 54, 54, 1)"
              size={30}
              type="materialIcons"
            />
            <Text
              style={{
                fontSize: 22,
                marginLeft: 5,
              }}>
              DahaKa, Banassre
            </Text>
          </View>
          <View style={{marginTop: 15}}>
            <SearchBar
              platform="default"
              placeholder="Search Store"
              lightTheme={true}
              containerStyle={{borderRadius: 15, backgroundColor: '#F2F3F2'}}
              placeholderTextColor="#7C7C7C"
              searchIcon={{size: 30}}
            />
          </View>

          {/* Banner */}
          <View
            style={{
              height: 150,
              marginTop: 10,
              position: 'relative',
              alignItems: 'center',
            }}>
            <FlatList
              data={banner}
              renderItem={({item}) => <Banner item={item} />}
              // renderItem={item => <Text>{item.item.id}</Text>}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              pagingEnabled={true}
              bounces={false}
              keyExtractor={item => item.id}
              onScroll={Animated.event(
                // scrollX = e.nativeEvent.contentOffset.x
                [
                  {
                    nativeEvent: {
                      contentOffset: {
                        x: scrollX,
                      },
                    },
                  },
                ],
                {useNativeDriver: false},
              )}
              scrollEventThrottle={32}
              onViewableItemsChanged={onViewableItemsChanged}
              viewabilityConfig={viewConfig}
              ref={slideRef}
            />
            <Paginator data={banner} scrollX={scrollX} />
          </View>

          {/* Product */}
          <View style={{marginTop: 20, marginBottom: 20}}>
            <List title="Exclusive Offer">
              <ListProduct />
            </List>
          </View>

          <View style={{marginBottom: 20}}>
            <List title="Best Selling">
              <ListProduct />
            </List>
          </View>

          {/* Groceries */}
          <View style={{marginBottom: 20}}>
            <List title="Groceries">
              <View>
                <ScrollView scrollEventThrottle={16}>
                  <View>
                    <ScrollView
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}>
                      {groceries.map((item, index) => (
                        <Label
                          key={index}
                          name={item.title}
                          image={item.image}
                          item={item.id}
                        />
                      ))}
                    </ScrollView>
                  </View>
                </ScrollView>
                {/* Food */}
                <ListFood />
              </View>
            </List>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
  },

  location: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default Home;
