// eslint-disable-next-line prettier/prettier
import { Alert } from 'react-native';

export const getArticleList = async () => {
  const url = 'https://www.wanandroid.com/article/list/0/json';
  try {
    const response = await (await fetch(url)).json();
    console.log('response:', response);
    Alert.alert('api--请求成功', JSON.stringify(response.data));
    return response.data;
    // if (response.code === '200') {
    //   console.log('response:', response);
    //   Alert.alert('api--请求成功', JSON.stringify(response));
    //   return response.data;
    // } else {
    //   Alert.alert('api--请求失败');
    //   return [];
    // }
  } catch (error) {
    Alert.alert('api--catch');
    console.log('fetch error:', error);
  }
};
