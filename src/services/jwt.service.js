import constants from '../config/app.constants';

import {inject} from 'aurelia-framework';

@inject(constants)
export default class JWT {

  constructor(AppConstants, $window) {
    this._AppConstants = AppConstants;
    this._$window = $window;
  }

  save(token) {
    this._$window.localStorage[this._AppConstants.jwtKey] = token;
  }

  get() {
    return this._$window.localStorage[this._AppConstants.jwtKey];
  }

  destroy() {
    this._$window.localStorage.removeItem(this._AppConstants.jwtKey);
  }

}
