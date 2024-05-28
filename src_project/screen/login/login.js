/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Dimensions, ImageBackground, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

// MyCustomComponent = Animatable.createAnimatableComponent(MyCustomComponent);
// <ImageBackground source={require('../image/image2.jpg')} style={[styles.bgimage]}> textInComponent </ImageBackground>

export default class login extends Component {
  constructor() {
    super();

    this.state = {
      userName: '',
      passWord: '',
      validateUserName: false,
      isValidUser: true,
      secureTextEntry: true,
    };
  }

  validateUserName = (val) => {
    if (val.trim().length >= 2) {
      this.setState({
        userName: val,
        validateUserName: true,
        isValidUser: true,
      });
    } else {
      this.setState({
        userName: val,
        validateUserName: false,
        isValidUser: false,
      });
    }
  };

  handleValideUser = (val) => {
    if (val.trim().length >= 2) {
      this.setState({
        isValidUser: true,
      });
    } else {
      this.setState({
        isValidUser: false,
      });
    }
  };

  updataSecureTextEntry = (val) => {
    this.setState({
      secureTextEntry: !this.state.secureTextEntry,
    });
  };

  render() {
    return (
      <View style={[styles.content]}>
        <ImageBackground source={{ uri: 'http://img1.baidu.com/it/u=701133623,3750671343&fm=253&app=138&f=JPEG?w=800&h=1280' }} style={[styles.bgimage]}>
          <Text style={[styles.welcom]}>WELCOM</Text>
          <Animatable.View animation="fadeInUpBig" style={[styles.footer]}>
            <ScrollView>
              <View style={[styles.action]}>
                <Ionicons name={'person'} size={16} />
                <TextInput
                  style={[styles.input]}
                  placeholder="请输入账户编号/手机号码"
                  value={this.state.userName}
                  onChangeText={(val) => {
                    this.validateUserName(val);
                  }}
                  onEndEditing={(e) => {
                    this.handleValideUser(e.nativeEvent.text);
                  }}
                />
                {
                  this.state.validateUserName ?
                    <Animatable.View animation="bounceIn">
                      <Ionicons name={'checkmark-circle-outline'} size={20} />
                    </Animatable.View>
                    : null
                }
              </View>

              {
                this.state.isValidUser ? null : <Animatable.View animation="fadeInLeft" duration={500}>
                  <Text style={[styles.errorMsg]} >用户名最短2位</Text>
                </Animatable.View>
              }

              <View style={[styles.action]}>
                <Ionicons name={'lock-closed'} size={16} />
                <TextInput
                  placeholder="请输入登录密码"
                  secureTextEntry={this.state.secureTextEntry ? true : false}
                  style={[styles.input]}
                  onChangeText={(val) => {
                    this.validatePassword(val);
                  }}
                />
                <TouchableOpacity onPress={this.updataSecureTextEntry}>
                  {
                    <View flexDirection={'row'}>
                      <Ionicons name={'help-circle-outline'} size={15} />
                      <Text style={[styles.forgetPassword]}>忘记密码</Text>
                    </View>
                  }
                </TouchableOpacity>
              </View>


              <TouchableOpacity onPress={this.updataSecureTextEntry} activeOpacity={1}>
                <View flexDirection={'row'} style={[styles.yinsi]}>
                {this.state.secureTextEntry ?
                  <Ionicons name={'checkmark-circle-outline'} size={15}/>
                : <Ionicons name={'checkmark-circle'} size={15} color={'#08d4c4'}/>
              }
                  <Text style={[styles.forgetPassword]}>我已阅读并同意《欧瑞莲隐私政策》</Text>
                </View>
              </TouchableOpacity>

              <View>
                <TouchableOpacity onPress={() => { this.handleLogin; }} activeOpacity={1}>
                  <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#08d4c4', '#01ab9d']} style={[styles.linearGItem]}>
                    <Text>登录</Text>
                  </LinearGradient>
                </TouchableOpacity>

              </View>

              <View flexDirection={'row'} style={[styles.zhuce]}>
                <Text style={[styles.zhuceText]}>注册</Text>
                <Ionicons name={'chevron-forward-outline'} size={14} color={'#08d4c4'} />
              </View>

            </ScrollView>
          </Animatable.View>
        </ImageBackground>
      </View>
    );
  }
}

// {
//   this.state.secureTextEntry ? null : <Animatable.View animation="fadeInLeft" duration={500}>
//     <Text style={[styles.errorMsg]} >密码最短2位</Text>
//   </Animatable.View>
// }


const styles = StyleSheet.create({
  bgimage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,

  },
  content: {
    flex: 1,
  },
  welcom: {
    fontSize: 44,
    color: '#fff',
    justifyContent: 'center',
    textAlign: 'center',
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 60,
  },

  action: {
    flexDirection: 'row',
    marginTop: 35,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  input: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? -12 : 0,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: 'red',
    fontSize: 10,
  },
  linearGItem: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 30,
    marginBottom: 10,
    width: (Dimensions.get('window').width) - 20,
    height: 40,
  },
  forgetPassword: {
    fontSize: 10,
  },
  yinsi: {
    fontSize: 14,
    marginTop: 10,
  },
  zhuce: {
    marginTop: 10,
    flex: 1,
    textAlign: 'right',
    justifyContent: 'flex-end',
  },

  zhuceText: {
    color: '#08d4c4',
  },
});
