/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
  Alert,
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { getArticleList } from './api';

const Data = [
  {title: '新品上市', data: ['aaa', 'bbb', 'ccc'], id: '111'},
  {title: '明星产品', data: ['aaa', 'bbb', 'ccc'], id: '222'},
  {title: '专题推荐', data: ['aaa', 'bbb', 'ccc'], id: '333'},
  {title: '销售工具', data: ['aaa', 'bbb', 'ccc'], id: '444'},
  {title: '奖励计划', data: ['aaa', 'bbb', 'ccc'], id: '555'},
  {title: '本月必买', data: ['aaa', 'bbb', 'ccc'], id: '777'},
  {title: '新品上市2', data: ['aaa', 'bbb', 'ccc'], id: '888'},
  {title: '明星产品2', data: ['aaa', 'bbb', 'ccc'], id: '999'},
];

const Item = ({title}) => (
  <View style={styles.flatItem}>
    <Text style={styles.itemText}>{title}</Text>
  </View>
);

export default class index extends Component {
  renderItem = ({item}) => {
    return (
      <View style={styles.flatItem}>
        <Text style={styles.itemText}>{item.title}</Text>
      </View>
    );
  };

  getData = () => {
    getArticleList()
      .then(res => {
        console.log('res');
        Alert.alert('fl--请求成功', JSON.stringify(res));
      })
      .catch(err => {
        Alert.alert('fl--报错', JSON.stringify(err));
      });

    // const url = 'https://www.wanandroid.com/article/list/0/json';
    // fetch(url, {
    //   method: 'GET',
    // })
    //   .then(res => res.json)
    //   .then(res => {
    //     console.log(res);
    //     Alert.alert('请求成功');
    //   })
    //   .catch(error => {
    //     Alert.alert('报错', JSON.stringify(error));
    //   });
  };

  constructor() {
    super();
    this.state = {
      isfresh: false,
    };
  }
  loadData = () => {
    this.setState({
      isfresh: true,
    });

    //模拟数据请求
    setTimeout(() => {
      this.setState({
        isfresh: false,
      });
      // alert('下拉刷新')
    }, 1000);
  };

  render() {
    return (
      <SafeAreaView>
        <FlatList
          style={styles.flatList}
          data={Data}
          renderItem={({item}) => <Item title={item.title} />}
          //   renderItem = {this.renderItem}
          keyExtractor={item => item.id}
          numColumns={2} //多列展示不支持瀑布流(item等高)
          horizontal={false} //水平布局模式
          // initialScrollIndex = {1}//初始滚动索引
          // initialNumToRender = {4}//指定初始渲染数据的数量，一般数量要填满一屏幕
          // inverted = {true}//列表反转
          // extraData = {}
          //   ItemSeparatorComponent={()=>{//分隔符
          //     // return <View style={[styles.itemSepara]}></View>
          //     return <View style={{borderBottomWidth:1 ,borderBottomColor:'red'}}></View>
          //   }}
          ListEmptyComponent={() => {
            return <Text>空空如也</Text>;
          }}
          refreshing={this.state.isfresh}
          onRefresh={this.getData}
          onEndReachedThreshold={0.1} //声明触底的几率,0.1--距离底部还有10%
          onEndReached={() => {
            // alert('到底了'),
            // this.loadData
          }}
          ListHeaderComponent={() => {
            return <Text style={styles.safeView}>这是一个列表</Text>;
          }}
          ListFooterComponent={() => {
            return <Text>这是列表底部</Text>;
          }}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
    backgroundColor: '#fff',
    width: Dimensions.get('window').width,
  },
  flatItem: {
    backgroundColor: '#fffaf5',
    padding: 5,
    margin: 5,
    height: 250,
    width: Dimensions.get('window').width / 2,
  },
  itemSepara: {
    backgroundColor: '#e4acb2',
    height: 1,
  },
  itemText: {
    fontSize: 14,
  },
  safeView: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
  },
});
