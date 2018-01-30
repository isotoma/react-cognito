(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("amazon-cognito-identity-js"), require("aws-sdk/global"), require("react"), require("react-redux"));
	else if(typeof define === 'function' && define.amd)
		define(["amazon-cognito-identity-js", "aws-sdk/global", "react", "react-redux"], factory);
	else if(typeof exports === 'object')
		exports["ReactCognito"] = factory(require("amazon-cognito-identity-js"), require("aws-sdk/global"), require("react"), require("react-redux"));
	else
		root["ReactCognito"] = factory(root["AmazonCognitoIdentity"], root["aws-sdk/global"], root["React"], root["ReactRedux"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_13__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reducers = __webpack_require__(/*! ./reducers */ 1);
	
	Object.keys(_reducers).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _reducers[key];
	    }
	  });
	});
	
	var _actions = __webpack_require__(/*! ./actions */ 4);
	
	Object.keys(_actions).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _actions[key];
	    }
	  });
	});
	
	var _states = __webpack_require__(/*! ./states */ 3);
	
	Object.keys(_states).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _states[key];
	    }
	  });
	});
	
	var _utils = __webpack_require__(/*! ./utils */ 5);
	
	Object.keys(_utils).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _utils[key];
	    }
	  });
	});
	
	var _guard = __webpack_require__(/*! ./guard */ 7);
	
	Object.keys(_guard).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _guard[key];
	    }
	  });
	});
	
	var _auth = __webpack_require__(/*! ./auth */ 8);
	
	Object.keys(_auth).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _auth[key];
	    }
	  });
	});
	
	var _attributes = __webpack_require__(/*! ./attributes */ 9);
	
	Object.keys(_attributes).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _attributes[key];
	    }
	  });
	});
	
	var _policy = __webpack_require__(/*! ./policy */ 10);
	
	Object.keys(_policy).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _policy[key];
	    }
	  });
	});
	
	var _Login = __webpack_require__(/*! ./Login.jsx */ 11);
	
	Object.keys(_Login).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _Login[key];
	    }
	  });
	});
	
	var _Logout = __webpack_require__(/*! ./Logout.jsx */ 14);
	
	Object.keys(_Logout).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _Logout[key];
	    }
	  });
	});
	
	var _NewPasswordRequired = __webpack_require__(/*! ./NewPasswordRequired.jsx */ 23);
	
	Object.keys(_NewPasswordRequired).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _NewPasswordRequired[key];
	    }
	  });
	});
	
	var _EmailVerification = __webpack_require__(/*! ./EmailVerification.jsx */ 24);
	
	Object.keys(_EmailVerification).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _EmailVerification[key];
	    }
	  });
	});
	
	var _PasswordReset = __webpack_require__(/*! ./PasswordReset.jsx */ 25);
	
	Object.keys(_PasswordReset).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _PasswordReset[key];
	    }
	  });
	});
	
	var _Confirm = __webpack_require__(/*! ./Confirm.jsx */ 26);
	
	Object.keys(_Confirm).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _Confirm[key];
	    }
	  });
	});

/***/ }),
/* 1 */
/*!*************************!*\
  !*** ./src/reducers.js ***!
  \*************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.cognito = undefined;
	
	var _amazonCognitoIdentityJs = __webpack_require__(/*! amazon-cognito-identity-js */ 2);
	
	var _states = __webpack_require__(/*! ./states */ 3);
	
	/* global AWS */
	
	var initial = {
	  user: null,
	  cache: { // cached for post register login
	    userName: null,
	    email: null
	  },
	  state: _states.CognitoState.LOGGED_OUT,
	  error: '',
	  userPool: null,
	  attributes: {},
	  creds: null,
	  groups: [],
	  config: {
	    region: null,
	    userPool: null,
	    clientId: null,
	    identityPool: null
	  }
	};
	
	var configure = function configure(state, action) {
	  // surprise side-effect!
	  AWS.config.region = action.config.region;
	  var pool = new _amazonCognitoIdentityJs.CognitoUserPool({
	    UserPoolId: action.config.userPool,
	    ClientId: action.config.clientId
	  });
	  var user = pool.getCurrentUser();
	  return Object.assign({}, state, {
	    config: action.config,
	    userPool: pool,
	    user: user
	  });
	};
	
	// sometimes we don't get the attributes in later parts of the login flow
	// but lets not clobber the ones we've got if we've not got them
	var addAttributes = function addAttributes(s, attributes) {
	  var s2 = Object.assign({}, s);
	  if (attributes) {
	    s2.attributes = attributes;
	  }
	  return s2;
	};
	
	/**
	 * reducer function to be passed to redux combineReducers
	 * @param {object} state
	 * @param {object} action
	*/
	
	var cognito = exports.cognito = function cognito() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial;
	  var action = arguments[1];
	
	  switch (action.type) {
	
	    case 'COGNITO_CONFIGURE':
	      return configure(state, action);
	
	    case 'COGNITO_AUTHENTICATED':
	      return Object.assign({}, state, {
	        user: action.user,
	        cache: {
	          userName: null,
	          email: null
	        },
	        error: '',
	        state: _states.CognitoState.AUTHENTICATED
	      });
	
	    case 'COGNITO_CLEAR_CACHE':
	      return Object.assign({}, state, {
	        cache: {
	          userName: null,
	          email: null
	        }
	      });
	
	    case 'COGNITO_LOGGING_IN':
	      return Object.assign({}, state, {
	        state: _states.CognitoState.LOGGING_IN,
	        attributes: action.attributes
	      });
	
	    case 'COGNITO_LOGIN':
	      return Object.assign({}, state, addAttributes({
	        error: '',
	        creds: action.creds,
	        groups: action.groups,
	        state: _states.CognitoState.LOGGED_IN
	      }, action.attributes));
	
	    case 'COGNITO_LOGOUT':
	      return Object.assign({}, state, {
	        user: null,
	        attributes: {},
	        error: '',
	        creds: null,
	        groups: [],
	        state: _states.CognitoState.LOGGED_OUT
	      });
	
	    case 'COGNITO_PARTIAL_LOGOUT':
	      return Object.assign({}, state, {
	        user: null,
	        userName: state.user.username,
	        error: '',
	        creds: null,
	        groups: [],
	        state: _states.CognitoState.LOGGED_OUT
	      });
	
	    case 'COGNITO_LOGIN_FAILURE':
	      return Object.assign({}, state, {
	        user: action.user,
	        state: _states.CognitoState.LOGGED_OUT,
	        error: action.error
	      });
	
	    case 'COGNITO_LOGIN_MFA_REQUIRED':
	      return Object.assign({}, state, {
	        user: action.user,
	        error: '',
	        state: _states.CognitoState.MFA_REQUIRED
	      });
	
	    case 'COGNITO_LOGIN_NEW_PASSWORD_REQUIRED':
	      return Object.assign({}, state, {
	        user: action.user,
	        error: '',
	        state: _states.CognitoState.NEW_PASSWORD_REQUIRED
	      });
	
	    case 'COGNITO_USER_UNCONFIRMED':
	      return Object.assign({}, state, {
	        user: action.user,
	        state: _states.CognitoState.CONFIRMATION_REQUIRED,
	        cache: {
	          userName: action.user.username,
	          email: action.email ? action.email : state.cache.email
	        }
	      });
	
	    case 'COGNITO_USER_CONFIRM_FAILED':
	      return Object.assign({}, state, {
	        user: action.user,
	        state: _states.CognitoState.CONFIRMATION_REQUIRED,
	        error: action.error
	      });
	
	    case 'COGNITO_NEW_PASSWORD_REQUIRED_FAILURE':
	      return Object.assign({}, state, {
	        error: action.error,
	        state: _states.CognitoState.NEW_PASSWORD_REQUIRED
	      });
	
	    case 'COGNITO_EMAIL_VERIFICATION_REQUIRED':
	      return Object.assign({}, state, addAttributes({
	        error: '',
	        state: _states.CognitoState.EMAIL_VERIFICATION_REQUIRED
	      }, action.attributes));
	
	    case 'COGNITO_EMAIL_VERIFICATION_FAILED':
	      return Object.assign({}, state, addAttributes({
	        error: action.error,
	        state: _states.CognitoState.EMAIL_VERIFICATION_REQUIRED
	      }, action.attributes));
	
	    case 'COGNITO_BEGIN_PASSWORD_RESET_FLOW':
	      return Object.assign({}, state, {
	        error: action.error
	      });
	
	    case 'COGNITO_CONTINUE_PASSWORD_RESET_FLOW':
	      return state;
	
	    case 'COGNITO_FINISH_PASSWORD_RESET_FLOW':
	      return state;
	
	    // this moves us into the AUTHENTICATED state, potentially causing
	    // a number of side-effects. this is so we can re-verify the email
	    // address if we have to
	    case 'COGNITO_UPDATE_USER_ATTRIBUTES':
	      return Object.assign({}, state, {
	        attributes: Object.assign({}, state.attributes, action.attributes),
	        state: _states.CognitoState.AUTHENTICATED
	      });
	
	    default:
	      return state;
	  }
	};

/***/ }),
/* 2 */
/*!*********************************************************************************************************************************************************************!*\
  !*** external {"root":"AmazonCognitoIdentity","commonjs2":"amazon-cognito-identity-js","commonjs":"amazon-cognito-identity-js","amd":"amazon-cognito-identity-js"} ***!
  \*********************************************************************************************************************************************************************/
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/*!***********************!*\
  !*** ./src/states.js ***!
  \***********************/
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/** states stored in store.cognito.state */
	var CognitoState = exports.CognitoState = {
	  LOGGED_OUT: 'LOGGED_OUT',
	  AUTHENTICATED: 'AUTHENTICATED',
	  LOGGING_IN: 'LOGGING_IN',
	  LOGGED_IN: 'LOGGED_IN',
	  NEW_PASSWORD_REQUIRED: 'NEW_PASSWORD_REQUIRED',
	  MFA_REQUIRED: 'MFA_REQUIRED',
	  EMAIL_VERIFICATION_REQUIRED: 'EMAIL_VERIFICATION_REQUIRED',
	  CONFIRMATION_REQUIRED: 'CONFIRMATION_REQUIRED'
	};

/***/ }),
/* 4 */
/*!************************!*\
  !*** ./src/actions.js ***!
  \************************/
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * container for all the actions
	*/
	var Action = {
	
	  configure: function configure(config) {
	    return {
	      type: 'COGNITO_CONFIGURE',
	      config: config
	    };
	  },
	
	  authenticated: function authenticated(user) {
	    return {
	      type: 'COGNITO_AUTHENTICATED',
	      user: user
	    };
	  },
	
	  loggingIn: function loggingIn(attributes) {
	    return {
	      type: 'COGNITO_LOGGING_IN',
	      attributes: attributes
	    };
	  },
	
	  login: function login(creds, attributes, groups) {
	    return {
	      type: 'COGNITO_LOGIN',
	      creds: creds,
	      groups: groups,
	      attributes: attributes
	    };
	  },
	
	  logout: function logout() {
	    return {
	      type: 'COGNITO_LOGOUT'
	    };
	  },
	
	  partialLogout: function partialLogout() {
	    return {
	      type: 'COGNITO_PARTIAL_LOGOUT'
	    };
	  },
	
	  loginFailure: function loginFailure(user, error) {
	    return {
	      type: 'COGNITO_LOGIN_FAILURE',
	      user: user,
	      error: error
	    };
	  },
	
	  mfaRequired: function mfaRequired(user) {
	    return {
	      type: 'COGNITO_LOGIN_MFA_REQUIRED',
	      user: user
	    };
	  },
	
	  newPasswordRequired: function newPasswordRequired(user) {
	    return {
	      type: 'COGNITO_LOGIN_NEW_PASSWORD_REQUIRED',
	      user: user
	    };
	  },
	
	  newPasswordRequiredFailure: function newPasswordRequiredFailure(user, error) {
	    return {
	      type: 'COGNITO_NEW_PASSWORD_REQUIRED_FAILURE',
	      user: user,
	      error: error
	    };
	  },
	
	  emailVerificationRequired: function emailVerificationRequired(attributes) {
	    return {
	      type: 'COGNITO_EMAIL_VERIFICATION_REQUIRED',
	      attributes: attributes
	    };
	  },
	
	  emailVerificationFailed: function emailVerificationFailed(user, error) {
	    return {
	      type: 'COGNITO_EMAIL_VERIFICATION_FAILED',
	      user: user,
	      error: error
	    };
	  },
	
	  beginPasswordResetFlow: function beginPasswordResetFlow(user, error) {
	    return {
	      type: 'COGNITO_BEGIN_PASSWORD_RESET_FLOW',
	      user: user,
	      error: error
	    };
	  },
	
	  continuePasswordResetFlow: function continuePasswordResetFlow(user) {
	    return {
	      type: 'COGNITO_CONTINUE_PASSWORD_RESET_FLOW',
	      user: user
	    };
	  },
	
	  finishPasswordResetFlow: function finishPasswordResetFlow(error) {
	    return {
	      type: 'COGNITO_FINISH_PASSWORD_RESET_FLOW',
	      error: error
	    };
	  },
	
	  updateAttributes: function updateAttributes(attributes) {
	    return {
	      type: 'COGNITO_UPDATE_USER_ATTRIBUTES',
	      attributes: attributes
	    };
	  },
	
	  confirmationRequired: function confirmationRequired(user, email) {
	    return {
	      type: 'COGNITO_USER_UNCONFIRMED',
	      user: user,
	      email: email
	    };
	  },
	
	  confirmFailed: function confirmFailed(user, error) {
	    return {
	      type: 'COGNITO_USER_CONFIRM_FAILED',
	      user: user,
	      error: error
	    };
	  },
	
	  clearCache: function clearCache() {
	    return {
	      type: 'COGNITO_CLEAR_CACHE'
	    };
	  }
	};
	
	exports.Action = Action;

/***/ }),
/* 5 */
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getGroups = exports.buildLogins = exports.changePassword = undefined;
	
	var _global = __webpack_require__(/*! aws-sdk/global */ 6);
	
	/**
	 * Change a user's password
	 * @param {object} user - the cognito user object
	 * @param {string} oldPassword - the current password
	 * @param {string} newPassword - the new password
	*/
	var changePassword = function changePassword(user, oldPassword, newPassword) {
	  return new Promise(function (resolve, reject) {
	    return user.changePassword(oldPassword, newPassword, function (err, result) {
	      if (err) {
	        reject(err.message);
	      } else {
	        resolve(result);
	      }
	    });
	  });
	};
	
	/**
	 * builds the federated identity pool login structure
	 * @param {string} username - the username of the user
	 * @param {string} jwtToken - a JWT Token from the session
	 * @param {object} config - the cognito react config object
	*/
	var buildLogins = function buildLogins(username, jwtToken, config) {
	  var loginDomain = 'cognito-idp.' + config.region + '.amazonaws.com';
	  var loginUrl = loginDomain + '/' + config.userPool;
	  var creds = {
	    IdentityPoolId: config.identityPool,
	    Logins: {},
	    LoginId: username // https://github.com/aws/aws-sdk-js/issues/609
	  };
	  creds.Logins[loginUrl] = jwtToken;
	  return creds;
	};
	
	/**
	 * Decode a jwtToken to check for cognito:groups
	 * @param {string} jwtToken - a JWT Token from the session
	 */
	var getGroups = function getGroups(jwtToken) {
	  var payload = jwtToken.split('.')[1];
	  var decodedToken = JSON.parse(_global.util.base64.decode(payload).toString('utf8'));
	  // decodedToken['cognito:groups'] can be undefined if user is in no groups
	  if (!decodedToken['cognito:groups']) {
	    return [];
	  }
	  return decodedToken['cognito:groups'];
	};
	
	exports.changePassword = changePassword;
	exports.buildLogins = buildLogins;
	exports.getGroups = getGroups;

/***/ }),
/* 6 */
/*!*********************************!*\
  !*** external "aws-sdk/global" ***!
  \*********************************/
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/*!**********************!*\
  !*** ./src/guard.js ***!
  \**********************/
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/*
	 Default behaviour is to restrict access to only logged in users
	*/
	
	var testLoggedIn = function testLoggedIn(state, wantLoggedIn) {
	  var isLoggedIn = state.cognito.user !== null;
	  if (isLoggedIn && wantLoggedIn) {
	    return true;
	  }
	  if (!isLoggedIn && !wantLoggedIn) {
	    return true;
	  }
	  return false;
	};
	
	var permitted = function permitted(state, expr) {
	  return new Promise(function (resolve) {
	    if (expr.loggedIn !== undefined) {
	      resolve(testLoggedIn(state, expr.loggedIn));
	    } else {
	      resolve(testLoggedIn(state, true));
	    }
	  });
	};
	
	var guard = function guard(store, forbiddenUrl) {
	  var expr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  var routeState = arguments[3];
	  var replace = arguments[4];
	  var callback = arguments[5];
	
	  var state = store.getState();
	  var dest = forbiddenUrl;
	
	  if (expr.forbiddenUrl !== undefined) {
	    dest = expr.forbiddenUrl;
	  }
	  permitted(state, expr).then(function (allow) {
	    if (!allow) {
	      replace(dest);
	    }
	    callback();
	  });
	};
	
	/**
	 * creates a guard function you can use in <Route> tags
	 * @param {object} store - the redux store
	 * @param {string} forbiddenUrl - the default url to navigate to if forbidden
	 * @returns {function} - a function that can be provided to onEnter
	*/
	var createGuard = function createGuard(store, forbiddenUrl) {
	  return function (expr) {
	    return function (state, replace, callback) {
	      return guard(store, forbiddenUrl, expr, state, replace, callback);
	    };
	  };
	};
	
	exports.createGuard = createGuard;

/***/ }),
/* 8 */
/*!*********************!*\
  !*** ./src/auth.js ***!
  \*********************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.emailVerificationFlow = exports.registerUser = exports.performLogin = exports.authenticate = undefined;
	
	var _amazonCognitoIdentityJs = __webpack_require__(/*! amazon-cognito-identity-js */ 2);
	
	var _global = __webpack_require__(/*! aws-sdk/global */ 6);
	
	var _actions = __webpack_require__(/*! ./actions */ 4);
	
	var _attributes = __webpack_require__(/*! ./attributes */ 9);
	
	var _utils = __webpack_require__(/*! ./utils */ 5);
	
	/**
	 * sends the email verification code and transitions to the correct state
	 * @param {object} user - the CognitoUser object
	 * @param {object} attributes - the attributes dictionary
	 * @return {Promise<object>} a promise that resolves to a redux action
	*/
	var emailVerificationFlow = function emailVerificationFlow(user, attributes) {
	  return new Promise(function (resolve) {
	    return (0, _attributes.sendAttributeVerificationCode)(user, 'email').then(function (required) {
	      if (required) {
	        resolve(_actions.Action.emailVerificationRequired(attributes));
	      } else {
	        // dead end?
	        resolve(_actions.Action.loggingIn(attributes));
	      }
	    }, function (error) {
	      // some odd classes of error here
	      resolve(_actions.Action.emailVerificationFailed(error, attributes));
	    });
	  });
	};
	
	/**
	 * logs in to the federated identity pool with a JWT
	 * @param {string} username - the username
	 * @param {string} jwtToken - a token from the session
	 * @param {object} config - the react-cognito config
	 * @return {Promise<object>} a promise that resolves to the federated identity credentials
	*/
	var refreshIdentityCredentials = function refreshIdentityCredentials(username, jwtToken, config) {
	  return new Promise(function (resolve, reject) {
	    var logins = (0, _utils.buildLogins)(username, jwtToken, config);
	    var creds = new _global.CognitoIdentityCredentials(logins, { region: config.region });
	    creds.refresh(function (error) {
	      if (error) {
	        reject(error.message);
	      } else {
	        resolve(creds);
	      }
	    });
	  });
	};
	
	/**
	 * establishes a session with the user pool, and optionally logs into the federated identity
	 * pool using a token from the session.
	 * @param {object} user - the CognitoUser object
	 * @param {object} config -the react-cognito config
	 * @return {Promise<object>} an action to be dispatched
	*/
	var performLogin = function performLogin(user, config, group) {
	  return new Promise(function (resolve, reject) {
	    if (user === null) {
	      resolve(_actions.Action.logout());
	    } else {
	      user.getSession(function (err, session) {
	        if (err) {
	          resolve(_actions.Action.loginFailure(user, err.message));
	        } else {
	          var jwtToken = session.getIdToken().getJwtToken();
	          var groups = (0, _utils.getGroups)(jwtToken);
	          if (group && !groups.includes(group)) {
	            return resolve(_actions.Action.loginFailure(user, 'Insufficient privilege'));
	          }
	
	          if (config.identityPool) {
	            var username = user.getUsername();
	            refreshIdentityCredentials(username, jwtToken, config).then(function (creds) {
	              (0, _attributes.getUserAttributes)(user).then(function (attributes) {
	                resolve(_actions.Action.login(creds, attributes, groups));
	              });
	            }, function (message) {
	              return resolve(_actions.Action.loginFailure(user, message));
	            });
	          } else {
	            (0, _attributes.getUserAttributes)(user).then(function (attributes) {
	              resolve(_actions.Action.login(null, attributes, groups));
	            });
	          }
	        }
	      });
	    }
	  });
	};
	
	/**
	 *
	 * Authenticates with a user pool, and handles responses.
	 * if the authentication is successful it then logs in to the
	 * identity pool if provided in config.
	 *
	 * returns an action depending on the outcome.  Possible actions returned
	 * are:
	 *
	 * - login - valid user who is logged in
	 * - loginFailure - failed to authenticate with user pool or identity pool
	 * - mfaRequired - user now needs to enter MFA
	 * - newPasswordRequired - user must change password on first login
	 * - emailVerificationRequired - user must verify their email address
	 * - emailVerificationFailed - email verification is required, but won't work
	 *
	 * Dispatch the resulting action, e.g.:
	 *
	 * ```
	 * const { userPool, config } = state.cognito;
	 * authenticate(username, password, userPool, config).then(dispatch);
	 * ```
	 *
	 * @param {string} username - the username provided by the user
	 * @param {string} password - the password provided by the user
	 * @param {object} userPool - a Cognito User Pool object
	 * @return {Promise<object>} - a promise that resolves an action to be dispatched
	 *
	*/
	var authenticate = function authenticate(username, password, userPool, config, dispatch) {
	  return new Promise(function (resolve, reject) {
	    var creds = new _amazonCognitoIdentityJs.AuthenticationDetails({
	      Username: username,
	      Password: password
	    });
	
	    var user = new _amazonCognitoIdentityJs.CognitoUser({
	      Username: username,
	      Pool: userPool
	    });
	
	    user.authenticateUser(creds, {
	      onSuccess: function onSuccess() {
	        dispatch(_actions.Action.authenticated(user));
	        resolve();
	      },
	      onFailure: function onFailure(error) {
	        if (error.code === 'UserNotConfirmedException') {
	          dispatch(_actions.Action.confirmationRequired(user));
	          resolve();
	        } else {
	          dispatch(_actions.Action.loginFailure(user, error.message));
	          reject(error);
	        }
	      },
	      mfaRequired: function mfaRequired() {
	        dispatch(_actions.Action.mfaRequired(user));
	        resolve();
	      },
	      newPasswordRequired: function newPasswordRequired() {
	        dispatch(_actions.Action.newPasswordRequired(user));
	        resolve();
	      }
	    });
	  });
	};
	
	/**
	 * sign up this user with the user pool provided
	 * @param {object} userPool - a Cognito userpool (e.g. state.cognito.userPool)
	 * @param {object} config - the react-cognito config object
	 * @param {string} username - the username
	 * @param {string} password - the password
	 * @param {object} attributes - an attributes dictionary
	 * @return {Promise<object>} a promise that resolves a redux action
	*/
	var registerUser = function registerUser(userPool, config, username, password, attributes) {
	  return new Promise(function (resolve, reject) {
	    return userPool.signUp(username, password, (0, _attributes.mkAttrList)(attributes), null, function (err, result) {
	      if (err) {
	        reject(err.message);
	      } else if (result.userConfirmed === false) {
	        resolve(_actions.Action.confirmationRequired(result.user, attributes.email));
	      } else {
	        resolve(authenticate(username, password, userPool));
	      }
	    });
	  });
	};
	
	exports.authenticate = authenticate;
	exports.performLogin = performLogin;
	exports.registerUser = registerUser;
	exports.emailVerificationFlow = emailVerificationFlow;

/***/ }),
/* 9 */
/*!***************************!*\
  !*** ./src/attributes.js ***!
  \***************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.mkAttrList = exports.updateAttributes = exports.getUserAttributes = exports.sendAttributeVerificationCode = undefined;
	
	var _actions = __webpack_require__(/*! ./actions */ 4);
	
	/**
	 * Request that a verification code is sent by email or SMS to verify
	 * an attribute
	 * @param {object} user - the cognito user object
	 * @param {string} attribute - the attribute name
	*/
	var sendAttributeVerificationCode = function sendAttributeVerificationCode(user, attribute) {
	  return new Promise(function (resolve, reject) {
	    user.getAttributeVerificationCode(attribute, {
	      onSuccess: function onSuccess() {
	        return resolve(false);
	      },
	      inputVerificationCode: function inputVerificationCode() {
	        return resolve(true);
	      },
	      onFailure: function onFailure(error) {
	        return reject(error.message);
	      }
	    });
	  });
	};
	
	/**
	 * Fetches the user attributes from Cognito, and turns them into
	 * an object
	 * @param {object} user - the cognito user object
	 * @returns {Promise} resolves with the attributes or rejects with an error message
	*/
	var getUserAttributes = function getUserAttributes(user) {
	  return new Promise(function (resolve, reject) {
	    return user.getUserAttributes(function (error, result) {
	      if (error) {
	        reject(error.message);
	      } else {
	        var attributes = {};
	        for (var i = 0; i < result.length; i += 1) {
	          var name = result[i].getName();
	          var value = result[i].getValue();
	          attributes[name] = value;
	        }
	        resolve(attributes);
	      }
	    });
	  });
	};
	
	/**
	 * convert an attribute dictionary to an attribute list
	 * @param {object} attributes - a dictionary of attributes
	 * @return {array} AWS expected attribute list
	*/
	var mkAttrList = function mkAttrList(attributes) {
	  return Object.keys(attributes).map(function (key) {
	    return {
	      Name: key,
	      Value: attributes[key]
	    };
	  });
	};
	
	/**
	 * update the attributes in Cognito
	 * @param {object} user - the CognitoUser object
	 * @param {object} attributes - an attributes dictionary with the attributes to be updated
	 * @return {Promise<object>} a promise that resolves to a redux action
	*/
	var updateAttributes = function updateAttributes(user, attributes) {
	  return new Promise(function (resolve, reject) {
	    var attributeList = mkAttrList(attributes);
	    user.updateAttributes(attributeList, function (err) {
	      if (err) {
	        reject(err.message);
	      } else {
	        resolve(_actions.Action.updateAttributes(attributes));
	      }
	    });
	  });
	};
	
	exports.sendAttributeVerificationCode = sendAttributeVerificationCode;
	exports.getUserAttributes = getUserAttributes;
	exports.updateAttributes = updateAttributes;
	exports.mkAttrList = mkAttrList;

/***/ }),
/* 10 */
/*!***********************!*\
  !*** ./src/policy.js ***!
  \***********************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.identityPoolLogin = exports.emailVerificationRequired = exports.fetchAttributes = exports.direct = exports.enable = exports.setupCognito = undefined;
	
	var _actions = __webpack_require__(/*! ./actions */ 4);
	
	var _attributes = __webpack_require__(/*! ./attributes */ 9);
	
	var _auth = __webpack_require__(/*! ./auth */ 8);
	
	var _states = __webpack_require__(/*! ./states */ 3);
	
	/**
	 * subscribes a "policy" function to the store, and calls it
	 * with the state and the dispatch function
	 * @param {object} store - the redux store
	 * @param {function} f - f(state, dispatch)
	*/
	var enable = function enable(store, f, params) {
	  store.subscribe(function () {
	    var state = store.getState();
	    var dispatch = store.dispatch;
	    f(state, dispatch, params);
	  });
	};
	
	/**
	 * requires email verification before transitioning from AUTHENTICATED
	 * @param {object} state - the redux store state
	 * @param {function} dispatch - the dispatch function
	*/
	var emailVerificationRequired = function emailVerificationRequired(state, dispatch) {
	  if (state.cognito.state === _states.CognitoState.AUTHENTICATED) {
	    var user = state.cognito.user;
	    (0, _attributes.getUserAttributes)(user).then(function (attributes) {
	      if (attributes.email_verified !== 'true') {
	        (0, _auth.emailVerificationFlow)(user, attributes).then(dispatch);
	      } else {
	        dispatch(_actions.Action.loggingIn(attributes));
	      }
	    });
	  }
	};
	
	/**
	 * fetches and stores attributes before transitioning from AUTHENTICATED
	 * @param {object} state - the redux store state
	 * @param {function} dispatch - the dispatch function
	*/
	var fetchAttributes = function fetchAttributes(state, dispatch) {
	  if (state.cognito.state === _states.CognitoState.AUTHENTICATED) {
	    var user = state.cognito.user;
	    (0, _attributes.getUserAttributes)(user).then(function (attributes) {
	      dispatch(_actions.Action.loggingIn(attributes));
	    });
	  }
	};
	
	/**
	 * transitions directly from AUTHENTICATED to LOGGING_IN
	 * @param {object} state - the redux store state
	 * @param {function} dispatch - the dispatch function
	*/
	var direct = function direct(state, dispatch) {
	  if (state.cognito.state === _states.CognitoState.AUTHENTICATED) {
	    dispatch(_actions.Action.loggingIn());
	  }
	};
	
	/**
	 * logs into the single federated identity pool to transition from LOGGING_IN
	 * to LOGGED_IN
	 * @param {object} state - the redux store state
	 * @param {function} dispatch - the dispatch function
	*/
	var identityPoolLogin = function identityPoolLogin(state, dispatch, group) {
	  if (state.cognito.state === _states.CognitoState.LOGGING_IN) {
	    (0, _auth.performLogin)(state.cognito.user, state.cognito.config, group).then(dispatch);
	  }
	};
	
	/**
	 * sets up react-cognito with default policies.
	*/
	var setupCognito = function setupCognito(store, config) {
	  var listeners = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [emailVerificationRequired, identityPoolLogin];
	
	  store.dispatch(_actions.Action.configure(config));
	  listeners.forEach(function (f) {
	    enable(store, f, config.group);
	  });
	  store.dispatch(_actions.Action.loggingIn({}));
	};
	
	exports.setupCognito = setupCognito;
	exports.enable = enable;
	exports.direct = direct;
	exports.fetchAttributes = fetchAttributes;
	exports.emailVerificationRequired = emailVerificationRequired;
	exports.identityPoolLogin = identityPoolLogin;

/***/ }),
/* 11 */
/*!***********************!*\
  !*** ./src/Login.jsx ***!
  \***********************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Login = undefined;
	
	var _react = __webpack_require__(/*! react */ 12);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 13);
	
	var _auth = __webpack_require__(/*! ./auth */ 8);
	
	var _actions = __webpack_require__(/*! ./actions */ 4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var BaseLogin = function BaseLogin(props) {
	  return _react2.default.cloneElement(props.children, {
	    username: props.username,
	    email: props.email,
	    onSubmit: props.onSubmit,
	    clearCache: props.clearCache,
	    error: props.error
	  });
	};
	
	var mapStateToProps = function mapStateToProps(state) {
	  var username = '';
	  if (state.cognito.user) {
	    username = state.cognito.user.getUsername();
	  } else if (state.cognito.userName) {
	    username = state.cognito.cache.userName;
	  }
	  return {
	    username: username,
	    email: state.cognito.cache.email,
	    config: state.cognito.config,
	    userPool: state.cognito.userPool,
	    error: state.cognito.error
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    authenticator: function authenticator(username, password, userPool, config) {
	      return (0, _auth.authenticate)(username, password, userPool, config, dispatch);
	    },
	    clearCache: function clearCache() {
	      return dispatch(_actions.Action.clearCache());
	    }
	  };
	};
	
	var mergeProps = function mergeProps(stateProps, dispatchProps, ownProps) {
	  return Object.assign({}, ownProps, stateProps, {
	    onSubmit: function onSubmit(username, password) {
	      return dispatchProps.authenticator(username, password, stateProps.userPool, stateProps.config);
	    },
	    clearCache: dispatchProps.clearCache
	  });
	};
	
	/**
	 * Container for login behaviour, wrapping a login form.
	 *
	 * Magically provides the following props to the wrapped form:
	 *
	 *  * username
	 *  * onSubmit
	 *
	 * @example
	 * <Login>
	 *   <LoginForm />
	 * </Login>
	 */
	var Login = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, mergeProps)(BaseLogin);
	
	exports.Login = Login;

/***/ }),
/* 12 */
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),
/* 13 */
/*!*************************************************************************************************************!*\
  !*** external {"root":"ReactRedux","commonjs":"react-redux","commonjs2":"react-redux","amd":"react-redux"} ***!
  \*************************************************************************************************************/
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ }),
/* 14 */
/*!************************!*\
  !*** ./src/Logout.jsx ***!
  \************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Logout = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 12);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(/*! prop-types */ 15);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _actions = __webpack_require__(/*! ./actions */ 4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * Container for logout behaviour.
	 * @example
	 * <Logout onLogout={handler}>
	 *   <LogoutForm />
	 * </Logout>
	 */
	var Logout = exports.Logout = function (_React$Component) {
	  _inherits(Logout, _React$Component);
	
	  function Logout() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Logout);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Logout.__proto__ || Object.getPrototypeOf(Logout)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (event) {
	      var store = _this.context.store;
	
	      var state = store.getState();
	      state.cognito.user.signOut();
	      event.preventDefault();
	      store.dispatch(_actions.Action.logout());
	      _this.props.onLogout();
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  /**
	   * Passed to child element as onClick prop.
	   * Signs the user out, and then dispatches the logout action
	   * If you want to take further actions (like reloading UI) then add an
	   * onLogout property to the Logout element
	   */
	
	
	  _createClass(Logout, [{
	    key: 'render',
	
	
	    /**
	     * renders the child element, adding an onClick property
	     */
	    value: function render() {
	      return _react2.default.cloneElement(this.props.children, {
	        onClick: this.onClick
	      });
	    }
	  }]);
	
	  return Logout;
	}(_react2.default.Component);
	
	Logout.contextTypes = {
	  store: _propTypes2.default.object
	};
	Logout.propTypes = {
	  children: _propTypes2.default.any.isRequired,
	  onLogout: _propTypes2.default.func
	};
	Logout.defaultProps = {
	  onLogout: function onLogout() {}
	};

/***/ }),
/* 15 */
/*!*******************************!*\
  !*** ./~/prop-types/index.js ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	if (true) {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;
	
	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };
	
	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ 16)(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = require('./factoryWithThrowingShims')();
	}


/***/ }),
/* 16 */
/*!*************************************************!*\
  !*** ./~/prop-types/factoryWithTypeCheckers.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(/*! fbjs/lib/emptyFunction */ 17);
	var invariant = __webpack_require__(/*! fbjs/lib/invariant */ 18);
	var warning = __webpack_require__(/*! fbjs/lib/warning */ 19);
	var assign = __webpack_require__(/*! object-assign */ 20);
	
	var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ 21);
	var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ 22);
	
	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
	
	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }
	
	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */
	
	  var ANONYMOUS = '<<anonymous>>';
	
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),
	
	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };
	
	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/
	
	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;
	
	  function createChainableTypeChecker(validate) {
	    if (true) {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;
	
	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          invariant(
	            false,
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	        } else if (("development") !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            warning(
	              false,
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `%s` prop on `%s`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
	              propFullName,
	              componentName
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }
	
	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);
	
	    return chainedCheckType;
	  }
	
	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);
	
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
	  }
	
	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	       true ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }
	
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }
	
	      var valuesString = JSON.stringify(expectedValues);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	       true ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }
	
	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        warning(
	          false,
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received %s at index %s.',
	          getPostfixForTypeWarning(checker),
	          i
	        );
	        return emptyFunction.thatReturnsNull;
	      }
	    }
	
	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }
	
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from
	      // props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	
	    return createChainableTypeChecker(validate);
	  }
	
	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }
	
	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }
	
	        return true;
	      default:
	        return false;
	    }
	  }
	
	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }
	
	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }
	
	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }
	
	    return false;
	  }
	
	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }
	
	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }
	
	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }
	
	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }
	
	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.PropTypes = ReactPropTypes;
	
	  return ReactPropTypes;
	};


/***/ }),
/* 17 */
/*!*************************************!*\
  !*** ./~/fbjs/lib/emptyFunction.js ***!
  \*************************************/
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}
	
	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};
	
	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};
	
	module.exports = emptyFunction;

/***/ }),
/* 18 */
/*!*********************************!*\
  !*** ./~/fbjs/lib/invariant.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	
	'use strict';
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var validateFormat = function validateFormat(format) {};
	
	if (true) {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}
	
	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}
	
	module.exports = invariant;

/***/ }),
/* 19 */
/*!*******************************!*\
  !*** ./~/fbjs/lib/warning.js ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(/*! ./emptyFunction */ 17);
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var warning = emptyFunction;
	
	if (true) {
	  var printWarning = function printWarning(format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }
	
	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	
	  warning = function warning(condition, format) {
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }
	
	    if (format.indexOf('Failed Composite propType: ') === 0) {
	      return; // Ignore CompositeComponent proptype check.
	    }
	
	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }
	
	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}
	
	module.exports = warning;

/***/ }),
/* 20 */
/*!**********************************!*\
  !*** ./~/object-assign/index.js ***!
  \**********************************/
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	
	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ }),
/* 21 */
/*!**************************************************!*\
  !*** ./~/prop-types/lib/ReactPropTypesSecret.js ***!
  \**************************************************/
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
	
	module.exports = ReactPropTypesSecret;


/***/ }),
/* 22 */
/*!****************************************!*\
  !*** ./~/prop-types/checkPropTypes.js ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	if (true) {
	  var invariant = __webpack_require__(/*! fbjs/lib/invariant */ 18);
	  var warning = __webpack_require__(/*! fbjs/lib/warning */ 19);
	  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ 21);
	  var loggedTypeFailures = {};
	}
	
	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (true) {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;
	
	          var stack = getStack ? getStack() : '';
	
	          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
	        }
	      }
	    }
	  }
	}
	
	module.exports = checkPropTypes;


/***/ }),
/* 23 */
/*!*************************************!*\
  !*** ./src/NewPasswordRequired.jsx ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.NewPasswordRequired = undefined;
	
	var _react = __webpack_require__(/*! react */ 12);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 13);
	
	var _actions = __webpack_require__(/*! ./actions */ 4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var BaseNewPasswordRequired = function BaseNewPasswordRequired(props) {
	  return _react2.default.cloneElement(props.children, {
	    error: props.error,
	    onSubmit: props.onSubmit
	  });
	};
	
	var setNewPassword = function setNewPassword(password, user, config, userAttributes, dispatch) {
	  return new Promise(function (resolve, reject) {
	    user.completeNewPasswordChallenge(password, userAttributes, {
	      onSuccess: function onSuccess() {
	        dispatch(_actions.Action.authenticated(user));
	        resolve();
	      },
	      onFailure: function onFailure(error) {
	        dispatch(_actions.Action.newPasswordRequiredFailure(user, error.message));
	        reject(error);
	      },
	      mfaRequired: function mfaRequired() {
	        dispatch(_actions.Action.mfaRequired(user));
	        resolve();
	      },
	      newPasswordRequired: function newPasswordRequired() {
	        dispatch(_actions.Action.newPasswordRequired(user));
	        resolve();
	      }
	    });
	  });
	};
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    error: state.cognito.error,
	    user: state.cognito.user,
	    config: state.cognito.config
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    setNewPasswordPartial: function setNewPasswordPartial(password, user, config, userAttributes) {
	      return setNewPassword(password, user, config, userAttributes, dispatch);
	    }
	  };
	};
	
	var mergeProps = function mergeProps(stateProps, dispatchProps, ownProps) {
	  return Object.assign({}, ownProps, stateProps, {
	    onSubmit: function onSubmit(password, userAttributes) {
	      return dispatchProps.setNewPasswordPartial(password, stateProps.user, stateProps.config, userAttributes);
	    }
	  });
	};
	
	/**
	 * Wrapper for a New Password Required form
	 *
	 * Magically provides the following props to the wrapped element:
	 *
	 * * user - the Cognito user
	 * * error - the persistent react-cognito error message
	 * * onSubmit - a handler that calls the Set New Password API
	 *
	 * @example
	 *
	 * <NewPasswordRequired>
	 *   <NewPasswordRequiredForm />
	 * </NewPasswordRequired>
	 */
	var NewPasswordRequired = exports.NewPasswordRequired = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, mergeProps)(BaseNewPasswordRequired);

/***/ }),
/* 24 */
/*!***********************************!*\
  !*** ./src/EmailVerification.jsx ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.EmailVerification = exports.verifyEmail = undefined;
	
	var _react = __webpack_require__(/*! react */ 12);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 13);
	
	var _actions = __webpack_require__(/*! ./actions */ 4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var BaseEmailVerification = function BaseEmailVerification(props) {
	  return _react2.default.cloneElement(props.children, {
	    error: props.error,
	    onSubmit: props.onSubmit,
	    onCancel: props.onCancel
	  });
	};
	
	var verifyEmail = exports.verifyEmail = function verifyEmail(verificationCode, user, dispatch) {
	  return new Promise(function (resolve, reject) {
	    user.verifyAttribute('email', verificationCode, {
	      onSuccess: function onSuccess() {
	        dispatch(_actions.Action.login(user));
	        resolve();
	      },
	      inputVerificationCode: function inputVerificationCode() {
	        dispatch(_actions.Action.emailVerificationRequired(user));
	        reject();
	      },
	      onFailure: function onFailure(error) {
	        dispatch(_actions.Action.emailVerificationFailed(user, error.message));
	        reject();
	      }
	    });
	  });
	};
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    error: state.cognito.error,
	    user: state.cognito.user
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    verifyPartial: function verifyPartial(verificationCode, user) {
	      return verifyEmail(verificationCode, user, dispatch);
	    },
	    onCancel: function onCancel() {
	      return dispatch(_actions.Action.logout());
	    }
	  };
	};
	
	var mergeProps = function mergeProps(stateProps, dispatchProps, ownProps) {
	  return Object.assign({}, ownProps, stateProps, dispatchProps, {
	    onSubmit: function onSubmit(verificationCode) {
	      return dispatchProps.verifyPartial(verificationCode, stateProps.user);
	    }
	  });
	};
	
	/**
	 * Wrapper for an Email Verification Form.
	 * Magically adds the following props to the contained form:
	 *
	 *  * user - the Cognito user from the Redux store
	 *  * error - the persisted error from the Redux store
	 *  * onSubmit - a handler that calls the Cognito verification API
	 *
	 * @example
	 * <EmailVerification>
	 *   <EmailVerificationForm />
	 * </EmailVerification>
	 *
	 */
	var EmailVerification = exports.EmailVerification = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, mergeProps)(BaseEmailVerification);

/***/ }),
/* 25 */
/*!*******************************!*\
  !*** ./src/PasswordReset.jsx ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PasswordReset = undefined;
	
	var _react = __webpack_require__(/*! react */ 12);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 13);
	
	var _amazonCognitoIdentityJs = __webpack_require__(/*! amazon-cognito-identity-js */ 2);
	
	var _actions = __webpack_require__(/*! ./actions */ 4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var BasePasswordReset = function BasePasswordReset(props) {
	  return _react2.default.cloneElement(props.children, {
	    username: props.username,
	    sendVerificationCode: props.sendVerificationCode,
	    setPassword: props.setPassword
	  });
	};
	
	var getUser = function getUser(username, userPool) {
	  var user = new _amazonCognitoIdentityJs.CognitoUser({
	    Username: username,
	    Pool: userPool
	  });
	  return user;
	};
	
	var setPassword = function setPassword(username, userPool, code, password, dispatch) {
	  return new Promise(function (resolve, reject) {
	    var user = getUser(username, userPool);
	    user.confirmPassword(code, password, {
	      onSuccess: function onSuccess() {
	        dispatch(_actions.Action.finishPasswordResetFlow()), resolve();
	      },
	      onFailure: function onFailure(err) {
	        dispatch(_actions.Action.beginPasswordResetFlow(user, err.message)), reject(err);
	      }
	    });
	  });
	};
	
	var sendVerificationCode = function sendVerificationCode(username, userPool, dispatch) {
	  return new Promise(function (resolve, reject) {
	    var user = getUser(username, userPool);
	    user.forgotPassword({
	      onSuccess: function onSuccess() {
	        dispatch(_actions.Action.continuePasswordResetFlow(user));
	        resolve();
	      },
	      onFailure: function onFailure(err) {
	        dispatch(_actions.Action.beginPasswordResetFlow(user, err.message));
	        reject(err);
	      }
	    });
	  });
	};
	
	var mapStateToProps = function mapStateToProps(state) {
	  var props = {
	    user: state.cognito.user,
	    username: '',
	    userPool: state.cognito.userPool
	  };
	  if (state.cognito.user != null) {
	    props.username = state.cognito.user.getUsername();
	  }
	  return props;
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    sendVerificationCodePartial: function sendVerificationCodePartial(username, userPool) {
	      return sendVerificationCode(username, userPool, dispatch);
	    },
	    setPasswordPartial: function setPasswordPartial(user, userPool, code, password) {
	      return setPassword(user, userPool, code, password, dispatch);
	    }
	  };
	};
	
	var mergeProps = function mergeProps(stateProps, dispatchProps, ownProps) {
	  return Object.assign({}, ownProps, stateProps, {
	    sendVerificationCode: function sendVerificationCode(username) {
	      return dispatchProps.sendVerificationCodePartial(username, stateProps.userPool);
	    },
	    setPassword: function setPassword(username, code, password) {
	      return dispatchProps.setPasswordPartial(username, stateProps.userPool, code, password);
	    }
	  });
	};
	
	/**
	 * Container for a Password Reset form
	 *
	 * Magically provides the following props to the wrapped element:
	 *
	 *  * user
	 *  * username
	 *  * sendVerificationCode
	 *  * setPassword
	 *
	 * @example
	 * <PasswordReset>
	 *   <PasswordResetForm />
	 * </PasswordReset>
	 */
	var PasswordReset = exports.PasswordReset = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, mergeProps)(BasePasswordReset);

/***/ }),
/* 26 */
/*!*************************!*\
  !*** ./src/Confirm.jsx ***!
  \*************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Confirm = undefined;
	
	var _react = __webpack_require__(/*! react */ 12);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 13);
	
	var _actions = __webpack_require__(/*! ./actions */ 4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var BaseConfirm = function BaseConfirm(props) {
	  return _react2.default.cloneElement(props.children, {
	    error: props.error,
	    onSubmit: props.onSubmit,
	    onResend: props.onResend,
	    onCancel: props.onCancel
	  });
	};
	
	var confirm = function confirm(verificationCode, user, dispatch) {
	  return new Promise(function (resolve, reject) {
	    user.confirmRegistration(verificationCode, true, function (error) {
	      if (error) {
	        dispatch(_actions.Action.confirmFailed(user));
	        reject(error.message);
	      } else {
	        dispatch(_actions.Action.partialLogout());
	        resolve(user);
	      }
	    });
	  });
	};
	
	var resend = function resend(user, dispatch) {
	  return new Promise(function (resolve, reject) {
	    user.resendConfirmationCode(function (err) {
	      if (err) {
	        dispatch(_actions.Action.confirmationRequired(user));
	        reject(err.message);
	      } else {
	        dispatch(_actions.Action.confirmationRequired(user));
	        resolve(user);
	      }
	    });
	  });
	};
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    error: state.cognito.error,
	    user: state.cognito.user
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    confirmPartial: function confirmPartial(verificationCode, user) {
	      return confirm(verificationCode, user, dispatch);
	    },
	    onCancel: function onCancel() {
	      return dispatch(_actions.Action.logout());
	    },
	    onResendPartial: function onResendPartial(user) {
	      return resend(user, dispatch);
	    }
	  };
	};
	
	var mergeProps = function mergeProps(stateProps, dispatchProps, ownProps) {
	  return Object.assign({}, ownProps, stateProps, dispatchProps, {
	    onSubmit: function onSubmit(verificationCode) {
	      return dispatchProps.confirmPartial(verificationCode, stateProps.user);
	    },
	    onResend: function onResend() {
	      return dispatchProps.onResendPartial(stateProps.user);
	    }
	  });
	};
	
	/**
	 * Container for a confirmation form.  Magically adds the following props to the 
	 * contained form:
	 *
	 *  * user - the Cognito User from the redux store
	 *  * error - the persisted error from the redux store
	 *  * onSubmit - a handler that calls the Cognito confirm API
	 *  * onResend - a handler that calls the Cognito resend request API
	 *  * onCancel - Logs the user out completely
	 *
	 * @example
	 * <Confirm>
	 *   <ConfirmForm />
	 * </Confirm>
	 *
	 */
	var Confirm = exports.Confirm = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, mergeProps)(BaseConfirm);

/***/ })
/******/ ])
});
;
//# sourceMappingURL=react-cognito.js.map