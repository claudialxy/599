/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import { Pushy, PushyProvider } from 'react-native-update';
import MainTab from './src_project/route/NavigatorScreen';
import _updateConfig from './update.json';
const { appKey } = _updateConfig.android;

const pushyClient = new Pushy({
  appKey,
  // 注意，默认情况下，在开发环境中不会检查更新
  // 如需在开发环境中调试更新，请设置debug为true
  // 但即便打开此选项，也仅能检查、下载热更，并不能实际应用热更。实际应用热更必须在release包中进行。
  debug: true,
});

/**
 * @description: 配置导航路由目录, 实现 Deeplink 跳转
 */
const LinkingConfig = {
  prefixes: ['myschemes://', 'https://www.aaa.com'],
  config: {
    screens: {
      initialRouteName: 'BottomTabsNavigator',
      BottomTabsNavigator: {
        initialRouteName: 'Home',
        screens: {
          Home: 'home',
          Classify: 'classify',
          Find: 'find',
          Shopcart: 'shopcart',
          Mine :'mine'
        },
        path: '',
      },
      Detail: 'detail',
    },
  },
}


function App(): React.JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };
   // 检查更新

  return (
    <PushyProvider client={pushyClient}>
    <NavigationContainer linking={LinkingConfig}>
    <StatusBar backgroundColor={'transparent'} translucent barStyle={'light-content'}></StatusBar>
      <MainTab/>
    </NavigationContainer>
    </PushyProvider>
  );
}


export default App;
