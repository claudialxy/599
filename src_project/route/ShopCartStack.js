/* eslint-disable prettier/prettier */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import ShopcartScreen from '../screen/shopcart';

const Stack = createNativeStackNavigator();

export default class ShopCartStack extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Shopcart"
          component={ShopcartScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  }
}

const styles = StyleSheet.create({});
