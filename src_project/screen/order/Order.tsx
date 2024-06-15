import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'; //material-top-tabs
import React, { Component } from 'react';
import DetailScreen from '../../screen/Detail';
import ShoppingCartNewScreen from '../shopcart/ShopCartNew';

const Tab = createMaterialTopTabNavigator()

export default class Order extends Component {
  render() {
    return (
      <Tab.Navigator
        style={{ marginTop: 25 }}
        initialRouteName="shopcart"
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
          tabBarLabelStyle: { fontSize: 12 },
          tabBarStyle: { backgroundColor: 'powderblue' },
        }}>
        <Tab.Screen name="Detail" component={DetailScreen} />
        <Tab.Screen name="shopcart" component={ShoppingCartNewScreen} />
      </Tab.Navigator>
    )
  }
}
