/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';

import LeftFlatList from './LeftFlatList';
import RightSectionList from './RightSectionList';
import linkageData from './linkageData.json';

export default class Classify extends Component {
  render() {
    return (
      <View style={{flexDirection:'row', margin:25}}>
      <StatusBar barStyle={'dark-content'}></StatusBar>
      <LeftFlatList data = {linkageData}/>
      <RightSectionList data = {linkageData}/>
   </View>
    );
  }
}

const styles = StyleSheet.create({
  con: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
