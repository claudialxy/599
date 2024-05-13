/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import LeftFlatList from './LeftFlatList';
import RightSectionList from './RightSectionList';
import linkageData from './linkageData.json';

export default class index extends Component {
  render() {
    return (
      <View style={{flexDirection:'row'}}>
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
