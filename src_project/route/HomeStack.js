/* eslint-disable prettier/prettier */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import HomeScreen from '../screen/home';



const Stack = createNativeStackNavigator();

export default class HomeStack extends Component {
  render() {
    return (
        <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  }
}

// <Stack.Screen name="detail" component={DetailScreen} />

const styles = StyleSheet.create({});
