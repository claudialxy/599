/* eslint-disable prettier/prettier */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import LoginScreen from '../screen/login';
import UserScreen from '../screen/user';

const Stack = createNativeStackNavigator();

export default class MineStack extends Component {
  render() {
    return (
      <Stack.Navigator >
        <Stack.Screen
          name="Mine"
          component={UserScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{title:'登录',headerStyle:{backgroundColor:'#fff'}}}/>
      </Stack.Navigator>
    );
  }
}

const styles = StyleSheet.create({});
