import constants from '../config/app.constants';

import {inject} from 'aurelia-framework';

@inject(constants)
export default class JWT {

  constructor(AppConstants) {
    this.AppConstants = AppConstants;
  }

  save(token) {
    localStorage[this.AppConstants.jwtKey] = token;
  }

  get() {
    return localStorage[this.AppConstants.jwtKey];
  }

  destroy() {
    localStorage.removeItem(this.AppConstants.jwtKey);
  }

}
