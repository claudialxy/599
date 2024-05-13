/* eslint-disable prettier/prettier */
'use strict';

import Request from '../../util/Request';
export default class ShopcartService {

    static getArticleList(requestUrl){
        return Request.get(requestUrl);
    }
}