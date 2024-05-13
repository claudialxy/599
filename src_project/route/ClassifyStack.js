/* eslint-disable prettier/prettier */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import ClassifyScreen from '../screen/classify';

const Stack = createNativeStackNavigator();

export default class ClassifyStack extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Classify"
          component={ClassifyScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  }
}

// <Stack.Screen
// name="detail"
// component={DetailScreen}
// options={{headerShown: false}}
// />

const styles = StyleSheet.create({});
