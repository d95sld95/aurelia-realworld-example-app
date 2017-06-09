import constants from '../config/app.constants';
import { HttpClient } from 'aurelia-fetch-client';

import {inject} from 'aurelia-framework';

@inject(constants, HttpClient)
export default class Tags {
  constructor(AppConstants, $http) {
    this._AppConstants = AppConstants;
    this._$http = $http;
  }

  getAll() {
    return this._$http({
      url: this._AppConstants.api + '/tags',
      method: 'GET'
    }).then((res) => res.data.tags);
  }
}
