/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Swiper from 'react-native-swiper';
import Splash from '../../util/Splash';

const Data = [
  { title: '新品上市', data: ['aaa', 'bbb', 'ccc'], id: '111' },
  { title: '明星产品', data: ['aaa', 'bbb', 'ccc'], id: '222' },
  { title: '专题推荐', data: ['aaa', 'bbb', 'ccc'], id: '333' },
  { title: '销售工具', data: ['aaa', 'bbb', 'ccc'], id: '444' },
  { title: '奖励计划', data: ['aaa', 'bbb', 'ccc'], id: '555' },
  { title: '本月必买', data: ['aaa', 'bbb', 'ccc'], id: '666' },
  { title: '明星产品222', data: ['aaa', 'bbb', 'ccc'], id: '777' },
  { title: '专题推荐222', data: ['aaa', 'bbb', 'ccc'], id: '888' },
  { title: '销售工具222', data: ['aaa', 'bbb', 'ccc'], id: '999' },
];

const Item = ({ title }) => <Text style={styles.nav}>{title}</Text>;

export class Home extends Component {

  componentDidMount(){
    Splash.hideSplash()
  }


  render() {
    return (
      <SafeAreaView style={styles.safeView}>
        <ScrollView>
          <Swiper style={styles.wapper} showsButtons={false} autoplay={true}>
            <Image
              style={styles.slide}
              source={{ uri: 'https://img2.baidu.com/it/u=4045137561,4227164018&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1280' }}
            />
            <Image
              style={styles.slide}
              // source={require('../image/image2.jpg')}
              source={{ uri: 'http://img0.baidu.com/it/u=375485806,902161195&fm=253&app=138&f=JPEG?w=800&h=1280' }}

            />
            <Image
              style={styles.slide}
              // source={require('../image/image1.jpg')}
              source={{ uri: 'http://img1.baidu.com/it/u=701133623,3750671343&fm=253&app=138&f=JPEG?w=800&h=1280' }}
            />
            <Image
              style={styles.slide}
              // source={require('../image/image2.jpg')}
              source={{ uri: 'https://img0.baidu.com/it/u=2191392668,814349101&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1399' }}
            />
            <Image
              style={styles.slide}
              source={{ uri: 'http://img2.baidu.com/it/u=3364932024,431806429&fm=253&app=138&f=JPEG?w=800&h=1422' }}
            />
          </Swiper>
          <FlatList
            data={Data}
            renderItem={({ item }) => <Item title={item.title} />}
            horizontal={true}
            style={styles.hscroll}
            showsHorizontalScrollIndicator={false}
          />
          <SectionList
            style={styles.sectionList}
            sections={Data}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Image
                  style={styles.itemImage}
                  source={require('../image/image1.jpg')}
                />
                <Text style={styles.itemText}>{item}</Text>
              </View>
            )}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.itemTitle}>{title}</Text>
            )}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  wapper: {
    height: 200,
  },
  slide: {
    height: 200,
    width: Dimensions.get('window').width,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#FFE900',
  },
  hscroll: {
    height: 60,
    backgroundColor: '#fff5eb',
  },
  nav: {
    padding: 10,
    margin: 10,
    fontSize: 14,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  sectionList: {
    backgroundColor: '#fff',
  },
  item: {
    backgroundColor: '#fffaf5',
    padding: 5,
    margin: 5,
    height: 50,
  },
  itemText: {
    fontSize: 14,
  },
  itemTitle: {
    fontSize: 18,
    paddingTop: 10,
    paddingBottom: 5,
    margin: 5,
    color: '#000',
    justifyContent: 'center',
  },
  itemImage: {
    width: 30,
    height: 30,
  },
});

export default Home;
