// @flow

'use strict';

export default class NetUtil {
  /*
   *  get请求
   *  url:请求地址
   *  data:参数
   *  callback:回调函数
   * */
  static get(url, params) {
    this.preHandleParamsForGetRequest(url, params);

    return fetch(url, {
      method: 'GET',
      headers: {
        'User-Agent': global.UA,
        ChannelId: global.ChannelId,
        Token: global.Token,
      },
    })
      .then(response => {
        return response.json();
      })
      .catch(error => {
        // console.log(error)
      });
  }

  //之后都用这个方法来做get请求
  static getNew(url, params) {
    this.preHandleParamsForGetRequest(url, params);

    return fetch(url, {
      method: 'GET',
      headers: {
        'User-Agent': global.UA,
        ChannelId: global.ChannelId,
        Token: global.Token,
      },
    })
      .then(response => {
        if (response.status === 200) {
          var resp = response.json();
          return resp;
        }
        return null;
      })
      .then(data => {
        if (data != null && data.status === 0) {
          return data.results;
        }
        return null;
      })
      .catch(error => {
        // console.log(error)
      });
  }

  static post(url, params) {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'User-Agent': global.UA,
        ChannelId: global.ChannelId,
        Token: global.Token,
      },
      body: JSON.stringify(params),
    })
      .then(response => {
        if (response.status === 200) {
          var resp = response.json();
          return resp;
        }
        return null;
      })
      .then(data => {
        if (data != null && data.status === 0) {
          return data.results;
        }
        return null;
      })
      .catch(error => {
        console.log(error);
      });
  }

  //get请求的入参预处理
  static preHandleParamsForGetRequest(url, params) {
    if (params && params.count > 0) {
      var paramsArray = [];
      // 拼接参数
      Object.keys(params).forEach(key =>
        paramsArray.push(key + '=' + params[key]),
      );
      if (url.search(/\?/) === -1) {
        url += '?' + paramsArray.join('&');
      } else {
        url += '&' + paramsArray.join('&');
      }
    }
    return url;
  }
}
