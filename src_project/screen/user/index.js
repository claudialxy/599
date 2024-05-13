/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Alert, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class index extends Component {
  render() {
    return (
      // https://stagestatic.sephora.cn/EllaIconGif31712718275019.gif?hash=FmPfqhGABMqfuP-57mbp8SWv_E75 
      // https://reactnative.dev/img/tiny_logo.png
      <SafeAreaView style={styles.safeView}>
        <ScrollView>
          <View>
            <Text style={[styles.text]}>我的</Text>
            <Image source={require('../image/soogif-3.gif')} style={{ width: 180, height: 180, marginVertical: 10, borderRadius: 40 }} />
          </View>
          <TouchableOpacity onPress={() => { Alert.alert('点击'); }}>
            <View style={[styles.listItem]}>
              <View style={{ flexDirection: 'row' }}>
                <Ionicons name={'information-circle-outline'} size={20} color={'#2d3'} />
                <Text>关于</Text>
              </View>
              <Ionicons name={'chevron-forward-outline'} size={20} color={'#bbb'} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { Alert.alert('点击'); }}>
            <View style={[styles.listItem]}>
              <View style={{ flexDirection: 'row' }}>
                <Ionicons name={'information-circle-outline'} size={20} color={'#2d3'} />
                <Text>设置</Text>
              </View>
              <Ionicons name={'chevron-forward-outline'} size={20} color={'#bbb'} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('login')}>
            <View style={[styles.listItem]}>
              <View style={{ flexDirection: 'row' }}>
                <Ionicons name={'information-circle-outline'} size={20} color={'#2d3'} />
                <Text>登录</Text>
              </View>
              <Ionicons name={'chevron-forward-outline'} size={20} color={'#bbb'} />
            </View>
          </TouchableOpacity>
        </ScrollView>
        {/* <draw></draw> */}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeView: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#bbb',
    height: 50,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 14,
    color: '#373737',
    textAlign: 'center',
  },
});
