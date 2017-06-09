define('app',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function () {
    function App() {
      _classCallCheck(this, App);
    }

    App.prototype.configureRouter = function configureRouter(config, router) {
      config.title = 'Contacts';
      config.map([{ route: '', moduleId: 'home/home', name: 'home', title: 'Home' }, { route: 'editor/:slug', moduleId: 'editor/editor', name: 'editor', title: 'Editor', settings: { authenticated: true } }, { route: 'auth', moduleId: 'auth/index', name: 'auth' }]);

      this.router = router;
    };

    return App;
  }();
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('article/index',[], function () {
  "use strict";
});
define('auth/index',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var authIndex = exports.authIndex = function () {
    function authIndex() {
      _classCallCheck(this, authIndex);
    }

    authIndex.prototype.configureRouter = function configureRouter(config, router) {
      config.title = 'Login/Register';
      config.map([{ route: ['', 'login'], moduleId: 'auth/login', name: 'login', title: 'Sign in' }, { route: 'register', moduleId: 'auth/register', name: 'register', title: 'Sign up' }]);

      this.router = router;
    };

    return authIndex;
  }();
});
define('auth/login',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Login = exports.Login = function Login() {
    _classCallCheck(this, Login);
  };
});
define('auth/register',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Register = exports.Register = function Register() {
    _classCallCheck(this, Register);
  };
});
define('editor/editor',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Editor = exports.Editor = function () {
    function Editor() {
      _classCallCheck(this, Editor);

      this.message = 'Editor';
    }

    Editor.prototype.activate = function activate(params) {
      this.slug = params.slug;
    };

    return Editor;
  }();
});
define('config/app.constants',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var AppConstants = {
    api: 'https://conduit.productionready.io/api',

    jwtKey: 'jwtToken',
    appName: 'Conduit'
  };

  exports.default = AppConstants;
});
define('home/home',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Home = exports.Home = function Home() {
    _classCallCheck(this, Home);

    this.text = 'Home';
  };
});
define('layout/app-footer',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var AppFooter = exports.AppFooter = function AppFooter() {
    _classCallCheck(this, AppFooter);

    this.appName = 'App name';

    this.date = new Date();
  };
});
define('layout/app-header',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var AppHeader = exports.AppHeader = function AppHeader() {
    _classCallCheck(this, AppHeader);

    this.text = 'Header';
  };
});
define('profile/profile',[], function () {
  "use strict";
});
define('services/articles.service',['exports', '../config/app.constants', 'aurelia-fetch-client', 'aurelia-framework'], function (exports, _app, _aureliaFetchClient, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;

  var _app2 = _interopRequireDefault(_app);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var Articles = (_dec = (0, _aureliaFramework.inject)(_app2.default, _aureliaFetchClient.HttpClient), _dec(_class = function () {
    function Articles(AppConstants, $http, $q) {
      _classCallCheck(this, Articles);

      this._AppConstants = AppConstants;
      this._$http = $http;
      this._$q = $q;
    }

    Articles.prototype.query = function query(config) {
      var request = {
        url: this._AppConstants.api + '/articles' + (config.type === 'feed' ? '/feed' : ''),
        method: 'GET',
        params: config.filters ? config.filters : null
      };
      return this._$http(request).then(function (res) {
        return res.data;
      });
    };

    Articles.prototype.get = function get(slug) {
      var deferred = this._$q.defer();

      if (!slug.replace(' ', '')) {
        deferred.reject('Article slug is empty');
        return deferred.promise;
      }

      this._$http({
        url: this._AppConstants.api + '/articles/' + slug,
        method: 'GET'
      }).then(function (res) {
        return deferred.resolve(res.data.article);
      }, function (err) {
        return deferred.reject(err);
      });

      return deferred.promise;
    };

    Articles.prototype.destroy = function destroy(slug) {
      return this._$http({
        url: this._AppConstants.api + '/articles/' + slug,
        method: 'DELETE'
      });
    };

    Articles.prototype.save = function save(article) {
      var request = {};

      if (article.slug) {
        request.url = this._AppConstants.api + '/articles/' + article.slug;
        request.method = 'PUT';
        delete article.slug;
      } else {
        request.url = this._AppConstants.api + '/articles';
        request.method = 'POST';
      }

      request.data = { article: article };

      return this._$http(request).then(function (res) {
        return res.data.article;
      });
    };

    Articles.prototype.favorite = function favorite(slug) {
      return this._$http({
        url: this._AppConstants.api + '/articles/' + slug + '/favorite',
        method: 'POST'
      });
    };

    Articles.prototype.unfavorite = function unfavorite(slug) {
      return this._$http({
        url: this._AppConstants.api + '/articles/' + slug + '/favorite',
        method: 'DELETE'
      });
    };

    return Articles;
  }()) || _class);
  exports.default = Articles;
});
define('services/comments.service',['exports', '../config/app.constants', 'aurelia-fetch-client', 'aurelia-framework'], function (exports, _app, _aureliaFetchClient, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;

  var _app2 = _interopRequireDefault(_app);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var Comments = (_dec = (0, _aureliaFramework.inject)(_app2.default, _aureliaFetchClient.HttpClient), _dec(_class = function () {
    function Comments(AppConstants, $http) {
      _classCallCheck(this, Comments);

      this._AppConstants = AppConstants;
      this._$http = $http;
    }

    Comments.prototype.add = function add(slug, payload) {
      return this._$http({
        url: this._AppConstants.api + '/articles/' + slug + '/comments',
        method: 'POST',
        data: { comment: { body: payload } }
      }).then(function (res) {
        return res.data.comment;
      });
    };

    Comments.prototype.getAll = function getAll(slug) {
      return this._$http({
        url: this._AppConstants.api + '/articles/' + slug + '/comments',
        method: 'GET'
      }).then(function (res) {
        return res.data.comments;
      });
    };

    Comments.prototype.destroy = function destroy(commentId, articleSlug) {
      return this._$http({
        url: this._AppConstants.api + '/articles/' + articleSlug + '/comments/' + commentId,
        method: 'DELETE'
      });
    };

    return Comments;
  }()) || _class);
  exports.default = Comments;
});
define('services/jwt.service',['exports', '../config/app.constants', 'aurelia-framework'], function (exports, _app, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;

  var _app2 = _interopRequireDefault(_app);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var JWT = (_dec = (0, _aureliaFramework.inject)(_app2.default), _dec(_class = function () {
    function JWT(AppConstants, $window) {
      _classCallCheck(this, JWT);

      this._AppConstants = AppConstants;
      this._$window = $window;
    }

    JWT.prototype.save = function save(token) {
      this._$window.localStorage[this._AppConstants.jwtKey] = token;
    };

    JWT.prototype.get = function get() {
      return this._$window.localStorage[this._AppConstants.jwtKey];
    };

    JWT.prototype.destroy = function destroy() {
      this._$window.localStorage.removeItem(this._AppConstants.jwtKey);
    };

    return JWT;
  }()) || _class);
  exports.default = JWT;
});
define('services/profile.service',['exports', '../config/app.constants', 'aurelia-fetch-client', 'aurelia-framework'], function (exports, _app, _aureliaFetchClient, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;

  var _app2 = _interopRequireDefault(_app);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var Profile = (_dec = (0, _aureliaFramework.inject)(_app2.default, _aureliaFetchClient.HttpClient), _dec(_class = function () {
    function Profile(AppConstants, $http) {
      _classCallCheck(this, Profile);

      this._AppConstants = AppConstants;
      this._$http = $http;
    }

    Profile.prototype.get = function get(username) {
      return this._$http({
        url: this._AppConstants.api + '/profiles/' + username,
        method: 'GET'
      }).then(function (res) {
        return res.data.profile;
      });
    };

    Profile.prototype.follow = function follow(username) {
      return this._$http({
        url: this._AppConstants.api + '/profiles/' + username + '/follow',
        method: 'POST'
      }).then(function (res) {
        return res.data;
      });
    };

    Profile.prototype.unfollow = function unfollow(username) {
      return this._$http({
        url: this._AppConstants.api + '/profiles/' + username + '/follow',
        method: 'DELETE'
      }).then(function (res) {
        return res.data;
      });
    };

    return Profile;
  }()) || _class);
  exports.default = Profile;
});
define('services/tags.service',['exports', '../config/app.constants', 'aurelia-fetch-client', 'aurelia-framework'], function (exports, _app, _aureliaFetchClient, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;

  var _app2 = _interopRequireDefault(_app);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var Tags = (_dec = (0, _aureliaFramework.inject)(_app2.default, _aureliaFetchClient.HttpClient), _dec(_class = function () {
    function Tags(AppConstants, $http) {
      _classCallCheck(this, Tags);

      this._AppConstants = AppConstants;
      this._$http = $http;
    }

    Tags.prototype.getAll = function getAll() {
      return this._$http({
        url: this._AppConstants.api + '/tags',
        method: 'GET'
      }).then(function (res) {
        return res.data.tags;
      });
    };

    return Tags;
  }()) || _class);
  exports.default = Tags;
});
define('services/user.service',['exports', './jwt.service', '../config/app.constants', 'aurelia-fetch-client', 'aurelia-framework'], function (exports, _jwt, _app, _aureliaFetchClient, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;

  var _jwt2 = _interopRequireDefault(_jwt);

  var _app2 = _interopRequireDefault(_app);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var User = (_dec = (0, _aureliaFramework.inject)(_jwt2.default, _app2.default, _aureliaFetchClient.HttpClient), _dec(_class = function () {
    function User(JWT, AppConstants, $http, $state, $q) {
      _classCallCheck(this, User);

      this._JWT = JWT;
      this._AppConstants = AppConstants;
      this._$http = $http;
      this._$state = $state;
      this._$q = $q;

      this.current = null;
    }

    User.prototype.attemptAuth = function attemptAuth(type, credentials) {
      var _this = this;

      var route = type === 'login' ? '/login' : '';
      return this._$http({
        url: this._AppConstants.api + '/users' + route,
        method: 'POST',
        data: {
          user: credentials
        }
      }).then(function (res) {
        _this._JWT.save(res.data.user.token);
        _this.current = res.data.user;

        return res;
      });
    };

    User.prototype.update = function update(fields) {
      var _this2 = this;

      return this._$http({
        url: this._AppConstants.api + '/user',
        method: 'PUT',
        data: { user: fields }
      }).then(function (res) {
        _this2.current = res.data.user;
        return res.data.user;
      });
    };

    User.prototype.logout = function logout() {
      this.current = null;
      this._JWT.destroy();
      this._$state.go(this._$state.$current, null, { reload: true });
    };

    User.prototype.verifyAuth = function verifyAuth() {
      var _this3 = this;

      var deferred = this._$q.defer();

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
        }).then(function (res) {
          _this3.current = res.data.user;
          deferred.resolve(true);
        }, function (err) {
          _this3._JWT.destroy();
          deferred.resolve(false);
        });
      }

      return deferred.promise;
    };

    User.prototype.ensureAuthIs = function ensureAuthIs(bool) {
      var _this4 = this;

      var deferred = this._$q.defer();

      this.verifyAuth().then(function (authValid) {
        if (authValid !== bool) {
          _this4._$state.go('app.home');
          deferred.resolve(false);
        } else {
          deferred.resolve(true);
        }
      });

      return deferred.promise;
    };

    return User;
  }()) || _class);
  exports.default = User;
});
define('resources/index',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {
    config.globalResources(['resources/value-converters/date-format', 'resources/value-converters/lowercase', 'resources/value-converters/number-format']);
  }
});
define('settings/settings',[], function () {
  "use strict";
});
define('resources/value-converters/date-format',['exports', 'moment'], function (exports, _moment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.DateFormatValueConverter = undefined;

  var _moment2 = _interopRequireDefault(_moment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var DateFormatValueConverter = exports.DateFormatValueConverter = function () {
    function DateFormatValueConverter() {
      _classCallCheck(this, DateFormatValueConverter);
    }

    DateFormatValueConverter.prototype.toView = function toView(value, format) {
      return (0, _moment2.default)(value).format(format);
    };

    return DateFormatValueConverter;
  }();
});
define('resources/value-converters/lowercase',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var LowercaseValueConverter = exports.LowercaseValueConverter = function () {
    function LowercaseValueConverter() {
      _classCallCheck(this, LowercaseValueConverter);
    }

    LowercaseValueConverter.prototype.toView = function toView(value) {
      return ('' + value).toLowerCase();
    };

    return LowercaseValueConverter;
  }();
});
define('resources/value-converters/number-format',['exports', 'numeral'], function (exports, _numeral) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.NumberFormatValueConverter = undefined;

  var _numeral2 = _interopRequireDefault(_numeral);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var NumberFormatValueConverter = exports.NumberFormatValueConverter = function () {
    function NumberFormatValueConverter() {
      _classCallCheck(this, NumberFormatValueConverter);
    }

    NumberFormatValueConverter.prototype.toView = function toView(value, format) {
      return (0, _numeral2.default)(value).format(format);
    };

    return NumberFormatValueConverter;
  }();
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n\n  <require from=\"layout/app-header\"></require>\n  <require from=\"layout/app-footer\"></require>\n\n  <app-header></app-header>\n\n  <router-view></router-view>\n\n  <app-footer></app-footer>\n\n</template>\n"; });
define('text!article/index.html', ['module'], function(module) { module.exports = ""; });
define('text!auth/index.html', ['module'], function(module) { module.exports = "<template>\n  <router-view></router-view>\n</template>\n"; });
define('text!auth/login.html', ['module'], function(module) { module.exports = "<template>\n  <div class=\"auth-page\">\n    <div class=\"container page\">\n      <div class=\"row\">\n\n        <div class=\"col-md-6 offset-md-3 col-xs-12\">\n          <h1 class=\"text-xs-center\">Sign up</h1>\n          <p class=\"text-xs-center\">\n            <a href=\"\">Have an account?</a>\n          </p>\n\n          <ul class=\"error-messages\">\n            <li>That email is already taken</li>\n          </ul>\n\n          <form>\n            <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\" type=\"text\" placeholder=\"Your Name\">\n            </fieldset>\n            <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\" type=\"text\" placeholder=\"Email\">\n            </fieldset>\n            <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\" type=\"password\" placeholder=\"Password\">\n            </fieldset>\n            <button class=\"btn btn-lg btn-primary pull-xs-right\">\n              Sign up\n            </button>\n          </form>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</template>\n"; });
define('text!auth/register.html', ['module'], function(module) { module.exports = "<template>\n  <div class=\"auth-page\">\n    <div class=\"container page\">\n      <div class=\"row\">\n\n        <div class=\"col-md-6 offset-md-3 col-xs-12\">\n          <h1 class=\"text-xs-center\">Sign up</h1>\n          <p class=\"text-xs-center\">\n            <a href=\"\">Have an account?</a>\n          </p>\n\n          <ul class=\"error-messages\">\n            <li>That email is already taken</li>\n          </ul>\n\n          <form>\n            <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\" type=\"text\" placeholder=\"Your Name\">\n            </fieldset>\n            <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\" type=\"text\" placeholder=\"Email\">\n            </fieldset>\n            <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\" type=\"password\" placeholder=\"Password\">\n            </fieldset>\n            <button class=\"btn btn-lg btn-primary pull-xs-right\">\n              Sign up\n            </button>\n          </form>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</template>\n"; });
define('text!editor/editor.html', ['module'], function(module) { module.exports = "<template>\n  Editor ${message} ${slug}\n</template>\n"; });
define('text!home/home.html', ['module'], function(module) { module.exports = "<template>\n  <div class=\"home-page\">\n\n    <!-- Splash banner that only shows when not logged in -->\n    <div class=\"banner\" show-authed=\"false\">\n      <div class=\"container\">\n        <h1 class=\"logo-font\" ng-bind=\"::$ctrl.appName | lowercase\"></h1>\n        <p>A place to share your knowledge.</p>\n      </div>\n    </div>\n\n    <div class=\"container page\">\n      <div class=\"row\">\n\n\n        <!-- Main view - contains tabs & article list -->\n        <div class=\"col-md-9\">\n          <!-- Tabs for toggling between feed, article lists -->\n          <div class=\"feed-toggle\">\n            <ul class=\"nav nav-pills outline-active\">\n\n              <li class=\"nav-item\" show-authed=\"true\">\n                <a href=\"\" class=\"nav-link\"\n                   ng-class=\"{ active: $ctrl.listConfig.type === 'feed' }\"\n                   ng-click=\"$ctrl.changeList({ type: 'feed' })\">\n                  Your Feed\n                </a>\n              </li>\n\n              <li class=\"nav-item\">\n                <a href=\"\" class=\"nav-link\"\n                   ng-class=\"{ active: $ctrl.listConfig.type === 'all' && !$ctrl.listConfig.filters }\"\n                   ng-click=\"$ctrl.changeList({ type: 'all' })\">\n                  Global Feed\n                </a>\n              </li>\n\n              <li class=\"nav-item\" ng-show=\"$ctrl.listConfig.filters.tag\">\n                <a href=\"\" class=\"nav-link active\">\n                  <i class=\"ion-pound\"></i> {{$ctrl.listConfig.filters.tag}}\n                </a>\n              </li>\n\n            </ul>\n          </div>\n\n          <!-- List the current articles -->\n          <article-list limit=\"10\" list-config=\"$ctrl.listConfig\"></article-list>\n\n        </div>\n\n        <!-- Sidebar where popular tags are listed -->\n        <div class=\"col-md-3\">\n          <div class=\"sidebar\">\n\n            <p>Popular Tags</p>\n\n            <div class=\"tag-list\" ng-show=\"$ctrl.tags\">\n              <a href=\"\" class=\"tag-default tag-pill\"\n                 ng-click=\"$ctrl.changeList({ type: 'all', filters: { tag: tagName } })\"\n                 ng-repeat=\"tagName in $ctrl.tags\"\n                 ng-bind=\"tagName\">\n              </a>\n            </div>\n\n            <div ng-show=\"!$ctrl.tagsLoaded\">\n              Loading tags...\n            </div>\n\n            <div class=\"post-preview\"\n                 ng-show=\"$ctrl.tagsLoaded && !$ctrl.tags.length\">\n              No tags are here... yet.\n            </div>\n\n          </div>\n        </div>\n\n        <!-- End the row & container divs -->\n      </div>\n    </div>\n\n  </div>\n</template>\n"; });
define('text!layout/app-footer.html', ['module'], function(module) { module.exports = "<template>\n  <footer>\n    <div class=\"container\">\n      <a class=\"logo-font\" route-href=\"route: home\">${appName | lowercase}</a>\n      <span class=\"attribution\">\n      &copy; ${date | dateFormat:'YYYY'}.\n      An interactive learning project from <a href=\"https://thinkster.io\">Thinkster</a>.\n      Code licensed under MIT.\n    </span>\n    </div>\n  </footer>\n</template>\n"; });
define('text!layout/app-header.html', ['module'], function(module) { module.exports = "<template>\n  <nav class=\"navbar navbar-light\">\n    <div class=\"container\">\n\n      <a class=\"navbar-brand\"\n         ui-sref=\"app.home\"\n         ng-bind=\"::$ctrl.appName | lowercase\">\n      </a>\n\n      <!-- Show this for logged out users -->\n      <ul show-authed=\"false\"\n          class=\"nav navbar-nav pull-xs-right\">\n\n        <li class=\"nav-item\">\n          <a class=\"nav-link\"\n             ui-sref-active=\"active\"\n             ui-sref=\"app.home\">\n            Home\n          </a>\n        </li>\n\n        <li class=\"nav-item\">\n          <a class=\"nav-link\"\n             ui-sref-active=\"active\"\n             ui-sref=\"app.login\">\n            Sign in\n          </a>\n        </li>\n\n        <li class=\"nav-item\">\n          <a class=\"nav-link\"\n             ui-sref-active=\"active\"\n             ui-sref=\"app.register\">\n            Sign up\n          </a>\n        </li>\n\n      </ul>\n\n      <!-- Show this for logged in users -->\n      <ul show-authed=\"true\"\n          class=\"nav navbar-nav pull-xs-right\">\n\n        <li class=\"nav-item\">\n          <a class=\"nav-link\"\n             ui-sref-active=\"active\"\n             ui-sref=\"app.home\">\n            Home\n          </a>\n        </li>\n\n        <li class=\"nav-item\">\n          <a class=\"nav-link\"\n             ui-sref-active=\"active\"\n             ui-sref=\"app.editor\">\n            <i class=\"ion-compose\"></i>&nbsp;New Article\n          </a>\n        </li>\n\n        <li class=\"nav-item\">\n          <a class=\"nav-link\"\n             ui-sref-active=\"active\"\n             ui-sref=\"app.settings\">\n            <i class=\"ion-gear-a\"></i>&nbsp;Settings\n          </a>\n        </li>\n\n        <li class=\"nav-item\">\n          <a class=\"nav-link\"\n             ui-sref-active=\"active\"\n             ui-sref=\"app.profile.main({ username: $ctrl.currentUser.username})\">\n            <img ng-src=\"{{$ctrl.currentUser.image}}\" class=\"user-pic\" />\n            {{ $ctrl.currentUser.username }}\n          </a>\n        </li>\n\n      </ul>\n\n\n    </div>\n  </nav>\n</template>\n"; });
define('text!profile/profile.html', ['module'], function(module) { module.exports = "<template>\n  <router-view></router-view>\n</template>\n"; });
define('text!settings/settings.html', ['module'], function(module) { module.exports = ""; });
//# sourceMappingURL=app-bundle.js.map