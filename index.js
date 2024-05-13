/* eslint-disable prettier/prettier */
/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

console.log('hello,word');
// GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;

AppRegistry.registerComponent(appName, () => App);
