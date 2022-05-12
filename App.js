import React, {useEffect} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import SplashScreen from 'react-native-splash-screen'; //Import react-native-splash-screen.

import {NavigationContainer} from '@react-navigation/native'; //Navigation
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'; //Navigation TOP_BAR
const Tab = createMaterialTopTabNavigator(); //Navigation TOP_BAR

//import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';//Navigation BOTTOM_BAR
// const Tab = createBottomTabNavigator();//Navigation BOTTOM_BAR
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; //Icon

import HomeScreen from './screens/HomeScreen';
import FriendScreen from './screens/FriendScreen';
import NotifyScreen from './screens/NotifyScreen';
import UserScreen from './screens/UserScreen';
import VideoScreen from './screens/VideoScreen';

const App = () => {
  //Hide Splash screen on app load.
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  });

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: 'black', //màu chữ của từng tap
          tabBarLabelStyle: {fontSize: 12}, // kích cỡ chữ của từng tab
          tabBarStyle: {
            backgroundColor: 'white',
            borderRadius: 5,
            padding: 1,
          }, //style của cả tabBar
          tabBarPressColor: '#968f8f', // ấn vào thì đổi màu
          tabBarIconStyle: {
            // backgroundColor: 'white',
            borderRadius: 1,
            shadowRadius: 5,
          }, //màu nền của icon
          // lazy: true, //
          tabBarContentContainerStyle: {backgroundColor: 'white', height: 50}, // style của cả tabBar
          tabBarInactiveTintColor: {color: 'yellow'},
          // tabBarIndicator: {color: 'yellow'},
          // tabBarScrollEnabled: true, // làm nó trở thành scroll theo chiều ngang
          tabBarIndicatorStyle: {
            backgroundColor: 'blue',
          }, //màu của thanh trượt bên dưới icon
          tabBarItemStyle: {marginLeft: 10}, // style cho từng tab một
        }}>
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarShowLabel: false, //ẩn tên của tab
            tabBarLabel: 'Home',
            tabBarIcon: ({}) => (
              <MaterialCommunityIcons name="home" color={'blue'} size={25} />
            ),
          }}
        />
        <Tab.Screen
          name="FriendScreen"
          component={FriendScreen}
          options={{
            tabBarShowLabel: false, //ẩn tên của tab
            tabBarLabel: 'Friend',
            tabBarIcon: ({}) => (
              <MaterialCommunityIcons
                name="account-multiple"
                color={'blue'}
                size={25}
              />
            ),
          }}
        />
        <Tab.Screen
          name="VideoScreen"
          component={VideoScreen}
          options={{
            tabBarShowLabel: false, //ẩn tên của tab
            tabBarLabel: 'Video',
            tabBarIcon: ({}) => (
              <MaterialCommunityIcons
                name="youtube-tv"
                color={'blue'}
                size={25}
              />
            ),
          }}
        />
        <Tab.Screen
          name="NotifyScreen"
          component={NotifyScreen}
          options={{
            tabBarShowLabel: false, //ẩn tên của tab
            tabBarLabel: 'Notify',
            tabBarIcon: ({}) => (
              <MaterialCommunityIcons
                name="bell-badge"
                color={'blue'}
                size={25}
              />
            ),
          }}
        />
        <Tab.Screen
          name="UserScreen"
          component={UserScreen}
          options={{
            tabBarShowLabel: false, //ẩn tên của tab
            tabBarLabel: 'User',
            tabBarIcon: ({}) => (
              <MaterialCommunityIcons name="menu" color={'blue'} size={25} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
