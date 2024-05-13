import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const drawerN = createDrawerNavigator();

function MineScreen(prop) {
  return (
    <View style={styles.safeView}>
      <Text>我的 Screen</Text>
      <Button title={"open drawer"} onPress={()=>prop.navigation.openDrawer()}/>
      <Button title={"open drawer"} onPress={()=>prop.navigation.toggleDrawer()}/>
    </View>
  );
}

function ClassifyScreen({navigation}) {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>分类 Screen</Text>
    </View>
  );
}

export default class index extends Component {
  render() {
    return (
      <drawerN.Navigator>
      <drawerN.Screen name='mine' component={MineScreen}/>
      <drawerN.Screen name='classify' component={ClassifyScreen}/>
      </drawerN.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  safeView: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
