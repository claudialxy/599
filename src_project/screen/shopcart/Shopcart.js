/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Alert, Dimensions, FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { getArticleList } from '../views/api';

export default class Shopcart extends Component {

  getData = () => {
    getArticleList()
      .then(res => {
        console.log('res');
        this.setState({
          myList: res.datas,
          image: '',
        });
        // Alert.alert('fl--请求成功', JSON.stringify(res.datas));
        Alert.alert('fl--请求成功');
      })
      .catch(err => {
        Alert.alert('fl--报错', JSON.stringify(err));
      });
  };

  // getData = () =>{
  //   ShopcartService.getArticleList(ARTICLE_LIST).then(
  //     (response) =>{
  //       console.log('index---加载数据success==>' + JSON.stringify(response));
  //       this.setState({
  //         myList : response.data,
  //         image:'',
  //       });
  //       // Alert.alert('加载数据success--请求成功' + response.datas);
  //     }
  //   ).catch((error)=>{
  //     console.log('index---加载数据error==>' + error);
  //   });
  // };

  componentDidMount() {
    this.getData();
  }
  renderItem = ({ item }) => {
    return (
      <View style={styles.flatItem}>
        <Text style={styles.itemText}>{item.title}</Text>
      </View>
    );
  };

  indicesItem = ({ item }) => {
    // <Image style={styles.itemImage} source={require('../image/soogif.gif')}/>
    return (
      <TouchableOpacity
        key={'index' + item.type}
        onPress={() => { 
          this.props.navigation.navigate('Detail')
        }}
        activeOpacity={1}>
        <View style={styles.flatItem}>
          <Image style={styles.itemImage} source={this.state.image ? { uri: this.state.image } : require('../image/soogif.gif')} />
          <Text style={styles.itemText} numberOfLines={2}>{item.title}</Text>
          <Text style={styles.itemText}>{item.niceDate}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  // activeOpacity={1} 点击是否有透明效果,1--点击没有闪烁透明效果，0或不设置有闪一下的透明效果

  constructor() {
    super();
    this.state = {
      isfresh: false,
      myList: [],
    };
  }

  render() {
    return (
      <SafeAreaView style={{marginTop:25}}>
      <StatusBar barStyle={'dark-content'}/>
        <FlatList
          data={this.state.myList}
          renderItem={this.indicesItem}
          keyExtractor={item => item.id}
          numColumns={2} //多列展示不支持瀑布流(item等高)
          horizontal={false} //水平布局模式
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
            return <Text style={styles.listHeaderText}>这是一个列表</Text>;
          }}
          ListFooterComponent={() => {
            return <Text style={styles.listHeaderText}>这是列表底部</Text>;
          }}
        />
      </SafeAreaView>
    );
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
    width: (Dimensions.get('window').width / 2) - 10,
  },
  itemSepara: {
    backgroundColor: '#e4acb2',
    height: 1,
  },
  itemText: {
    fontSize: 14,
  },
  safeView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
  },
  itemImage: {
    width: (Dimensions.get('window').width / 2) - 20,
    height: (Dimensions.get('window').width / 2) - 20,
  },
  listHeaderText: {
    textAlign: 'center',
  },
});
