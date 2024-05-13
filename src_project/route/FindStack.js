/* eslint-disable prettier/prettier */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import FindScreen from '../screen/find';

const Stack = createNativeStackNavigator();

export default class FindStack extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Find"
          component={FindScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  }
}

const styles = StyleSheet.create({});
