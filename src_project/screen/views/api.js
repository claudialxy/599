import { Alert } from 'react-native';
import { ARTICLE_LIST, BASE_HOST } from '../../util/path';

export const getArticleList = async () => {
  const url = BASE_HOST + ARTICLE_LIST;
  try {
    const response = await (await fetch(url)).json();
    console.log('response:', response);
    // Alert.alert('api--请求成功', JSON.stringify(response.data));
    return response.data;
    // if (response.code === '200') {
    //   console.log('response:', response);
    //   Alert.alert('api--请求成功', JSON.stringify(response));
    //   return response.data;
    // } else {
    //   Alert.alert('api--请求失败');
    //   return [];
    // }

    //原始请求
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
  } catch (error) {
    Alert.alert('api--catch');
    console.log('fetch error:', error);
  }
};
