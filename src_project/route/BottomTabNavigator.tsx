/* eslint-disable prettier/prettier */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React, { Component } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import ClassifyScreen from '../screen/classify/Classify'
import FindScreen from '../screen/find/Find'
import HomeScreen from '../screen/home/Home'
import ShopcartScreen from '../screen/shopcart/Shopcart'
import MineScreen from '../screen/user/Mine'

const Tab = createBottomTabNavigator()

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName = ''
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline'
            } else if (route.name === 'Classify') {
              iconName = focused ? 'grid' : 'grid-outline'
            } else if (route.name === 'Find') {
              iconName = focused ? 'newspaper' : 'newspaper-outline'
            } else if (route.name === 'Shopcart') {
              iconName = focused ? 'cart' : 'cart-outline'
            } else if (route.name === 'Mine') {
              iconName = focused ? 'person' : 'person-outline'
            } else {
            }
            return <Ionicons name={iconName} size={25} color={'#e9e9e4'} />
          },
        })}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false, title: '首页' }}
          // options={{ tabBarIcon: ({ color }) => <Image source={require('./home.png')} style={{ width: 26, height: 26, tintColor: color }} /> }}
        />
        <Tab.Screen
          name="Classify"
          component={ClassifyScreen}
          options={{ headerShown: false, title: '分类' }}
          // options={{ tabBarIcon: ({ color }) => <Image source={require('./settings.png')} style={{ width: 26, height: 26, tintColor: color }} /> }}
        />
        <Tab.Screen
          name="Find"
          component={FindScreen}
          options={{ headerShown: false, title: '发现' }}
          // options={{ tabBarIcon: ({ color }) => <Image source={require('./settings.png')} style={{ width: 26, height: 26, tintColor: color }} /> }}
        />
        <Tab.Screen
          name="Shopcart"
          component={ShopcartScreen}
          options={{ headerShown: false, title: '购物车' }}
          // options={{ tabBarIcon: ({ color }) => <Image source={require('./settings.png')} style={{ width: 26, height: 26, tintColor: color }} /> }}
        />
        <Tab.Screen
          name="Mine"
          component={MineScreen}
          options={{ headerShown: false, title: '我的' }}
          // options={{ tabBarIcon: ({ color }) => <Image source={require('./settings.png')} style={{ width: 26, height: 26, tintColor: color }} /> }}
        />
      </Tab.Navigator>
    )
  }
}
