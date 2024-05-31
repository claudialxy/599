import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { Component } from 'react'
import DetailScreen from '../screen/Detail'
import LoginScreen from '../screen/login/Login'
import ShoppingCartScreen from '../screen/shopcart/ShopCartNew'
import BottomTabsNavigator from './BottomTabNavigator'

const Stack = createNativeStackNavigator()

export default class NavigatorScreen extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="BottomTabsNavigator">
        <Stack.Screen
          name="BottomTabsNavigator"
          component={BottomTabsNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ShoppingCart"
          component={ShoppingCartScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    )
  }
}
