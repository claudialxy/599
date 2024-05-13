import React, { Component } from "react";
import { AppRegistry, Dimensions, Image, ScrollView, StyleSheet } from "react-native";

import Swiper from "react-native-swiper";

export default class SwiperComponent extends Component{
    render(){
      return(
        <ScrollView style = {styles.scroll}>
        <Swiper style={styles.wapper} showsButtons={false} autoplay = {true}>
       
        <Image style={styles.slide} source = {require('./images/image1.jpg')}/>
        <Image style={styles.slide} source = {require('./images/image2.jpg')}/>
        <Image style={styles.slide} source = {require('./images/image1.jpg')}/>
        <Image style={styles.slide} source = {require('./images/image2.jpg')}/>
       
        </Swiper>
        </ScrollView>
      )
        
    }
    
    }

const styles = StyleSheet.create({
    scroll:{ height: 200,
    backgroundColor :'#FFE900'},
    wapper:{ height: 200},
    slide:{
        height : 200,
        width: Dimensions.get('window').width,
        flex :1,
        justifyContent :'center',
        alignItems:'center',
        backgroundColor:'#FFE900'
      },
      Text:{
        color:'#fff',
        fontSize:30,
        fontWeight:'bold'
      }

})

AppRegistry.registerComponent('FirstRNDemo',()=>SwiperComponent)