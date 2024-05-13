/* eslint-disable prettier/prettier */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ClassifyScreen from './ClassifyStack';
import FindScreen from './FindStack';
import HomeScreen from './HomeStack';
import MineScreen from './MineStack';
import ShopcartScreen from './ShopCartStack';



const Tab = createBottomTabNavigator();

export default class index extends Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;
            if (route.name === '首页') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === '分类') {
              iconName = focused ? 'grid' : 'grid-outline';
            } else if (route.name === '发现') {
              iconName = focused ? 'newspaper' : 'newspaper-outline';
            } else if (route.name === '购物车') {
              iconName = focused ? 'cart' : 'cart-outline';
            } else if (route.name === '我的') {
              iconName = focused ? 'person' : 'person-outline';
            } else {
            }
            return <Ionicons name={iconName} size={25} color={'#e9e9e4'} />;
          },
        })}>
        <Tab.Screen
          name="首页"
          component={HomeScreen}
          options={{ headerShown: false }}
        // options={{ tabBarIcon: ({ color }) => <Image source={require('./home.png')} style={{ width: 26, height: 26, tintColor: color }} /> }}
        />
        <Tab.Screen
          name="分类"
          component={ClassifyScreen}
          options={{ headerShown: false }}
        // options={{ tabBarIcon: ({ color }) => <Image source={require('./settings.png')} style={{ width: 26, height: 26, tintColor: color }} /> }}
        />
        <Tab.Screen
          name="发现"
          component={FindScreen}
          options={{ headerShown: false }}
        // options={{ tabBarIcon: ({ color }) => <Image source={require('./settings.png')} style={{ width: 26, height: 26, tintColor: color }} /> }}
        />
        <Tab.Screen
          name="购物车"
          component={ShopcartScreen}
          options={{ headerShown: false }}
        // options={{ tabBarIcon: ({ color }) => <Image source={require('./settings.png')} style={{ width: 26, height: 26, tintColor: color }} /> }}
        />
        <Tab.Screen
          name="我的"
          component={MineScreen}
          options={{ headerShown: false }}
        // options={{ tabBarIcon: ({ color }) => <Image source={require('./settings.png')} style={{ width: 26, height: 26, tintColor: color }} /> }}
        />
      </Tab.Navigator>
    );
  }
}

const styles = StyleSheet.create({});
