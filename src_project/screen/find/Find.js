/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Alert, Button, Dimensions, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CountDown from '../../util/CountDowReact';

export default class Find extends Component {
  state = {
    num:100,
    show:false,
  };
  constructor(){
    super();
    console.log("构造函数");
    //对state做初始化
    this.state = {
      num:100,
      show:true,
    };
  }

  //组件挂载完毕
  componentDidMount(){
    console.log('3 组件挂载完毕');
  }

  handlePress = ()=>{
    this.setState({num:Date.now()});
  };

  handleToggle = ()=>{
    this.setState({show:!this.state.show});
  };
  render() {
    console.log('2 render 视图渲染');
    return (
      <View  style={[styles.linearView]}>
      <StatusBar barStyle={'dark-content'}></StatusBar>
       
      
        <LinearGradient start = {{ x:0,y:0}} end = {{x:1,y:0}} colors = {['#ddd','#333']} style={[styles.linearGItem]}>
        <Text> 当前日期</Text>
        <Text onPress={this.handlePress}> {this.state.num}</Text>
        </LinearGradient>

        <LinearGradient start = {{ x:0,y:0}} end = {{x:1,y:0}} colors = {['#ddd','#333']} style={[styles.linearGItem]}>
        <CountDown></CountDown>
        </LinearGradient>

        <LinearGradient start = {{ x:0,y:0}} end = {{x:1,y:0}} colors = {['#ddd','#333']} style={[styles.linearGItem]}>
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('ShoppingCart')}}>
        <Text > 打开购物车</Text>
        </TouchableOpacity>
        </LinearGradient>

        <LinearGradient start = {{ x:0,y:0}} end = {{x:1,y:0}} colors = {['#ddd','#333']} style={[styles.linearGItem]}>
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Order')}}>
        <Text > 打开订单</Text>
        </TouchableOpacity>
        </LinearGradient>

        <LinearGradient start = {{ x:0,y:0}} end = {{x:1,y:0}} colors = {['#ddd','#333']} style={[styles.linearGItem]}>
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('BasicType')}}>
        <Text > 基本类型</Text>
        </TouchableOpacity>
        </LinearGradient>
      

        <Button
          title="点它"
          onPress={() => {
            Alert.alert('咋？');
          }}
        />

        <Text onPress={this.handleToggle}>切换显示</Text>
        {this.state.show ? <Btn> </Btn> : <></> }
        
      </View>
    );
  }
}

class Btn extends Component{
  componentWillUnmount(){
    console.log( '组件被卸载' );
  }
  render(){
    return (<View><Text> 按钮 </Text></View>);
  }
}


const styles = StyleSheet.create({
  linearView:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    flexWrap:'wrap',
    marginHorizontal:10,
    margin :25,

  },
  linearGItem:{
    alignItems:'center',
    justifyContent:'center',
    borderRadius:20,
    marginTop:10,
    marginBottom:10,
    width:(Dimensions.get('window').width) - 20,
    height:50,
  },
  linearGItemCountDown:{
    marginTop:20,
  }

});
