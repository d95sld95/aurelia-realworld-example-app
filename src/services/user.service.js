import jwt from './jwt.service';
import constants from '../config/app.constants';
import { HttpClient, json } from 'aurelia-fetch-client';

import {inject} from 'aurelia-framework';

@inject(jwt, constants, HttpClient)
export default class User {

  constructor(JWT, AppConstants, httpClient, $state) {
    this.JWT = JWT;
    this.AppConstants = AppConstants;
    this.httpClient = httpClient;

    this.current = null;

    // TODO move to central place
    this.httpClient.configure(config => {
      config
        .withBaseUrl(this.AppConstants.api)
        .withDefaults({
          credentials: 'same-origin',
          headers: {
            'Accept': 'application/json',
            'X-Requested-With': 'Fetch'
          }
        })
        .withInterceptor({
          request(request) {
            console.log(`Requesting ${request.method} ${request.url}`);
            return request; // you can return a modified Request, or you can short-circuit the request by returning a Response
          },
          response(response) {
            console.log(`Received ${response.status} ${response.url}`);

            if (response.status > 299) {
              let error = new Error("HTTPClient Error");
              error.response = response;
              throw error;
            } else {
              return response; // you can return a modified Response
            }
          }
        });
    });
  }

  attemptAuth(type, credentials) {
    let route = (type === 'login') ? '/login' : '';
    return this.httpClient.fetch(`users${route}`, {
      method: 'POST',
      body: json({
        user: credentials
      })
    })
    .then(res => res.json())
    .then(data => {
      this.JWT.save(data.user.token);
      this.current = data.user;
    });
  }

  update(fields) {
    return this._$http({
      url: this._AppConstants.api + '/user',
      method: 'PUT',
      data: { user: fields }
    }).then(
      (res) => {
        this.current = res.data.user;
        return res.data.user;
      }
    );
  }

  logout() {
    this.current = null;
    this._JWT.destroy();
    this._$state.go(this._$state.$current, null, { reload: true });
  }

  verifyAuth() {
    let deferred = this._$q.defer();

    // check for JWT token
    if (!this._JWT.get()) {
      deferred.resolve(false);
      return deferred.promise;
    }

    if (this.current) {
      deferred.resolve(true);
    } else {
      this._$http({
        url: this._AppConstants.api + '/user',
        method: 'GET',
        headers: {
          Authorization: 'Token ' + this._JWT.get()
        }
      }).then(
        (res) => {
          this.current = res.data.user;
          deferred.resolve(true);
        },

        (err) => {
          this._JWT.destroy();
          deferred.resolve(false);
        }
      );
    }

    return deferred.promise;
  }


  ensureAuthIs(bool) {
    let deferred = this._$q.defer();

    this.verifyAuth().then((authValid) => {
      if (authValid !== bool) {
        this._$state.go('app.home');
        deferred.resolve(false);
      } else {
        deferred.resolve(true);
      }
    });

    return deferred.promise;
  }

}
