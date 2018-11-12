(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "https://lukewiwa.com/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = undefined;

var _templateObject = _taggedTemplateLiteral(['\nmargin: 0.5em 0 0 0;\ntext-align: center;\n/* border-bottom-style: solid;\nborder-bottom-width: 1px;\nborder-color: #c9c9c9; */\npadding: 0.5em 0;\n'], ['\nmargin: 0.5em 0 0 0;\ntext-align: center;\n/* border-bottom-style: solid;\nborder-bottom-width: 1px;\nborder-color: #c9c9c9; */\npadding: 0.5em 0;\n']);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Title = exports.Title = _styledComponents2.default.h1(_templateObject);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.media = exports.textColour = exports.headingColour = exports.thirdColour = exports.secondColour = exports.mainColour = exports.maxWidth = exports.colWidth = exports.minWidth = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    @media only screen and (min-width: ', 'em) {\n      ', ';\n    }\n  '], ['\n    @media only screen and (min-width: ', 'em) {\n      ', ';\n    }\n  ']),
    _templateObject2 = _taggedTemplateLiteral(['\n  @media only screen and (min-width: ', 'em) {\n    ', ';\n  }\n'], ['\n  @media only screen and (min-width: ', 'em) {\n    ', ';\n  }\n']);

var _styledComponents = __webpack_require__(2);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var minWidth = exports.minWidth = 42;
var colWidth = exports.colWidth = 50;
var maxWidth = exports.maxWidth = 60;
var mainColour = exports.mainColour = '#04872F';
var secondColour = exports.secondColour = '#FFFFFC';
var thirdColour = exports.thirdColour = '#DBDBDB';
var headingColour = exports.headingColour = '#2C363F';
var textColour = exports.textColour = '#353535';

var media = exports.media = {
  desktop: function desktop() {
    return (0, _styledComponents.css)(_templateObject, minWidth, _styledComponents.css.apply(undefined, arguments));
  },
  column: function column() {
    return (0, _styledComponents.css)(_templateObject2, colWidth, _styledComponents.css.apply(undefined, arguments));
  }
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createElement = exports.findExport = exports.resolveExport = exports.requireById = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading...'
  );
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return _react2.default.createElement(
    'div',
    null,
    'Error: ',
    error && error.message
  );
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return requireById(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {
      console.warn('chunk not available for synchronous require yet: ' + id + ': ' + err.message, err.stack);
    }
  }

  return null;
};

var requireById = exports.requireById = function requireById(id) {
  if (!isWebpack() && typeof id === 'string') {
    return module.require(id);
  }

  return __webpack_require__(id);
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

  var exp = findExport(mod, key);
  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';
    var info = { isServer: _isServer, isSync: isSync };
    onLoad(mod, info, props, context);
  }
  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return _react2.default.isValidElement(Component) ? _react2.default.cloneElement(Component, props) : _react2.default.createElement(Component, props);
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: grid;\n  grid-template-rows: auto auto;\n  grid-template-areas:\n    "hero"\n    "info";\n'], ['\n  display: grid;\n  grid-template-rows: auto auto;\n  grid-template-areas:\n    "hero"\n    "info";\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 100%;\n  background-color: #BBF7CF;\n  padding-bottom: 3em;\n  grid-area: hero;\n'], ['\n  width: 100%;\n  background-color: #BBF7CF;\n  padding-bottom: 3em;\n  grid-area: hero;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  grid-area: info;\n  display: grid;\n  grid-template-areas:\n    "."\n    "."\n    ".";\n  justify-content: center;\n  ', '\n'], ['\n  grid-area: info;\n  display: grid;\n  grid-template-areas:\n    "."\n    "."\n    ".";\n  justify-content: center;\n  ', '\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    grid-template-areas: "." "." ".";\n    grid-template-columns: repeat(3, minmax(14em, ', 'em));\n    grid-template-rows: 1fr;\n  '], ['\n    grid-template-areas: "." "." ".";\n    grid-template-columns: repeat(3, minmax(14em, ', 'em));\n    grid-template-rows: 1fr;\n  ']),
    _templateObject5 = _taggedTemplateLiteral(['\n  margin: 1em;\n'], ['\n  margin: 1em;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactFeather = __webpack_require__(28);

var _variables = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Layout = _styledComponents2.default.div(_templateObject);

var Hero = _styledComponents2.default.div(_templateObject2);

var Info = _styledComponents2.default.div(_templateObject3, _variables.media.column(_templateObject4, _variables.maxWidth / 3));
var InfoBlock = _styledComponents2.default.div(_templateObject5);
var IconLink = _styledComponents2.default.a(_templateObject5);

exports.default = (0, _reactStatic.withSiteData)(function () {
  return _react2.default.createElement(
    Layout,
    null,
    _react2.default.createElement(
      _reactStatic.Head,
      null,
      _react2.default.createElement(
        'title',
        null,
        'Wiwa'
      )
    ),
    _react2.default.createElement(
      Hero,
      null,
      _react2.default.createElement(
        'h1',
        { style: { fontSize: '4rem', fontWeight: 20, textAlign: 'center' } },
        'Luke Wiwatowski'
      ),
      _react2.default.createElement(
        'h2',
        { style: { fontSize: '2rem', fontWeight: 20, textAlign: 'center' } },
        'Gymnastics Engineering Miscellaneous'
      )
    ),
    _react2.default.createElement(
      Info,
      null,
      _react2.default.createElement(
        InfoBlock,
        null,
        _react2.default.createElement(
          'h5',
          null,
          _react2.default.createElement(_reactFeather.Award, null),
          ' Gymnastics'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Australian Representative for 15 years. 2010 Delhi Commonwealth Games Gold Medal winner. Various small projects revolving around ',
          _react2.default.createElement(
            _reactStatic.Link,
            { to: '/gymnastics' },
            'gymnastics'
          ),
          '.'
        )
      ),
      _react2.default.createElement(
        InfoBlock,
        null,
        _react2.default.createElement(
          'h5',
          null,
          _react2.default.createElement(_reactFeather.Settings, null),
          ' Engineering'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Bachelors in mechanical engineering from Swinburne University. Controls engineering at Alerton Australia. Lab Assistant for PV Lab Australia. Software Engineer for WSP Australia.'
        )
      ),
      _react2.default.createElement(
        InfoBlock,
        null,
        _react2.default.createElement(
          'h5',
          null,
          _react2.default.createElement(_reactFeather.Smartphone, null),
          ' Online'
        ),
        _react2.default.createElement(
          'p',
          null,
          'You can connect with me on the line using many different urls.'
        ),
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement(
            IconLink,
            { href: 'https://www.linkedin.com/in/lukewiwa/' },
            _react2.default.createElement(_reactFeather.Linkedin, null)
          ),
          _react2.default.createElement(
            IconLink,
            { href: 'https://github.com/lukewiwa/' },
            _react2.default.createElement(_reactFeather.GitHub, null)
          ),
          _react2.default.createElement(
            IconLink,
            { href: 'https://twitter.com/lukewiwa/' },
            _react2.default.createElement(_reactFeather.Twitter, null)
          )
        )
      )
    )
  );
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _Styled = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = function () {
  return _react2.default.createElement(
    'div',
    { className: 'flex-center' },
    _react2.default.createElement(
      _reactStatic.Head,
      null,
      _react2.default.createElement(
        'title',
        null,
        'Wiwa - Gymnastics'
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'container' },
      _react2.default.createElement(
        _Styled.Title,
        null,
        'Gymnastics Projects.'
      ),
      _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(
          'h4',
          null,
          _react2.default.createElement(
            _reactStatic.Link,
            { to: '/gymnastics/MAG2020' },
            'MAG 2020'
          )
        ),
        _react2.default.createElement(
          'p',
          null,
          'I wanted a machine readable code of points so I created a scraper with python and pulled out the relevant information. The most up to date version is available on github. Feel free to find any faults and send pull requests, due to the fickle nature of pdf scraping and my lack of experience coding there are bound to be errors.'
        )
      ),
      _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(
          'h4',
          null,
          _react2.default.createElement(
            _reactStatic.Link,
            { to: '/gymnastics/markov' },
            'Twitter Bot'
          )
        ),
        _react2.default.createElement(
          'p',
          null,
          'I created a code of points gibberish bot using markov chains. The source code is quite simple and available on github.'
        )
      )
    )
  );
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactTwitterEmbed = __webpack_require__(29);

var _Styled = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = function () {
  return _react2.default.createElement(
    'div',
    { className: 'flex-center' },
    _react2.default.createElement(
      'div',
      { className: 'container' },
      _react2.default.createElement(
        _Styled.Title,
        null,
        'Markov Twitter Bot'
      ),
      _react2.default.createElement(_reactTwitterEmbed.TwitterTimelineEmbed, {
        sourceType: 'profile',
        screenName: 'newcodeofpoints'
      })
    )
  );
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Styled = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

var MagCode = function MagCode() {
  return _react2.default.createElement(
    'table',
    null,
    _react2.default.createElement(
      'thead',
      null,
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'th',
          null,
          'Apparatus'
        ),
        _react2.default.createElement(
          'th',
          null,
          'Element Group'
        ),
        _react2.default.createElement(
          'th',
          null,
          'Value'
        ),
        _react2.default.createElement(
          'th',
          null,
          'Index'
        ),
        _react2.default.createElement(
          'th',
          null,
          'Description'
        )
      )
    ),
    _react2.default.createElement(
      'tbody',
      null,
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'From hdst. lower to L-sit or strad. L-sit (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '7'
        ),
        _react2.default.createElement(
          'td',
          null,
          'From stand, Swiss press to hdst. (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '13'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Rock to hdst. from prone position (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '19'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Handstand (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'V-sit (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '8'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Piked body, str. arm or str. body, bent arm press to hdst. with legs together (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '14'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Swiss press from split, L-sit, strad. L-sit or front sup. (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '20'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Press or lower or swing to Japanese hdst. (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'V-sit with legs horiz. (2 s.).(Manna)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '9'
        ),
        _react2.default.createElement(
          'td',
          null,
          'V-sit (2 s) and press to hdst. (2 s.)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '21'
        ),
        _react2.default.createElement(
          'td',
          null,
          'From split press to Japanese handstand (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '10'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Manna (2 s.) and press to hdst. (2 s.)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '16'
        ),
        _react2.default.createElement(
          'td',
          null,
          'From Manna (2 s.), turn over (dislocation) to handstand (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '25'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Support lever, legs straddle (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '31'
        ),
        _react2.default.createElement(
          'td',
          null,
          '\xBD or 1/1 turn in handstand or to handstand.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '37'
        ),
        _react2.default.createElement(
          'td',
          null,
          'From L-sit, etc., turn over bwd. to stand.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '26'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Support lever (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '32'
        ),
        _react2.default.createElement(
          'td',
          null,
          'From straddled support lever (2 s.) press hdst. (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '44'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Endo roll to handstand (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '27'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Swallow (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '33'
        ),
        _react2.default.createElement(
          'td',
          null,
          'From support lever 2 s. press handstand (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '45'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Endo roll piked to handstand (2 s.). Also final phase with straddle.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '34'
        ),
        _react2.default.createElement(
          'td',
          null,
          'From Swallow 2 s. press to Japanese hdst. (2 s.).(Alvari\xF1o)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '49'
        ),
        _react2.default.createElement(
          'td',
          null,
          'From stand or rear support, push off 1 foot through hdst. or back walkover.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '55'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Forward walkover.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '61'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Cross or side split (stop required).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '67'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Any standing scale (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '68'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Any standing scale with 180\xB0 hold (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '73'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Jump bwd. to front support.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '79'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Butterfly.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '85'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Breakdance variations.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '91'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2 circles or flairs.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '74'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Jump bwd. with pike-stretch or with 1/1 turn to front support.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '80'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Butterfly with 1/1 twist fwd. or bwd.(Tong Fei)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '92'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Circles or flair to handstand.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '81'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Butterfly with 2/1 twist.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '93'
        ),
        _react2.default.createElement(
          'td',
          null,
          '(Gogoladze) Flair or circle to hdst. continue to flair or circle.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '94'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Flair hopping with 360\xB0 t. bwd. thr. hdst and back to flair (2 hops).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '103'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Flair with \xBD spindle.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '115'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Russian wendeswing with 360\xB0 or 540\xB0'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '98'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Lower from hdst. to flair or circle.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '104'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Flair with 1/1 spindle (in 2 circles).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '110'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Flair with \xBD spindle to handstand.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '116'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Russian wendeswing with 720\xB0 or 900\xB0'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '105'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Flair with >270 spindle (in 2 circles) directly to handstand.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '117'
        ),
        _react2.default.createElement(
          'td',
          null,
          '(Fedorchenko)Russian wendeswing with 1080\xB0 or more.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '112'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Flair with > 270\xBA spindle (in 2 circles) directly to handstand and continue to circle or flair.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '121'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Roll bwd. through hdst. with \xBD t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '122'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Roll bwd. with hop 1/1 t. through hdst.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Neck or head spring w. \xBD t. to hdst. or 1/1 t. to rear support.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '7'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Forward handspring or flyspring.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '13'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Dive roll.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '19'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Salto fwd. tucked or piked.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '14'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Jump with 1/1 twist to fwd. hdsp.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '20'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Salto fwd. stretched.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '21'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Salto fwd. str. to front support.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '10'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Handspring salto fwd. tuck (Marinich style).(Morandi)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '22'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double salto fwd. tucked.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '23'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double salto fwd. piked.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '25'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Aerial walkover fwd.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '31'
        ),
        _react2.default.createElement(
          'td',
          null,
          '\xBDSalto tucked and piked \xBD t.\xBD'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '32'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Salto tucked with 1/1 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '38'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Salto fwd. str. with \xBD t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '44'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Salto tucked 3/2 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '39'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Salto fwd. str. with 1/1 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '45'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Salto fwd. str. with 3/2 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '40'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Salto fwd. str. with 2/1 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '29'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double salto fwd. tucked with \xBD t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '41'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Salto fwd. str. with 5/2 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'F'
        ),
        _react2.default.createElement(
          'td',
          null,
          '30'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double salto fwd. piked with \xBD t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'F'
        ),
        _react2.default.createElement(
          'td',
          null,
          '42'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Salto fwd. str. with 3/1 t.(Shirai 2)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '50'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Salto fwd. t. or p. to front support.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '51'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Salto fwd. t., p or str. with 1/1 t. to front support.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '58'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Jump fwd. with \xBD t. to dbl. salto bwd. t. (Deferr)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'F'
        ),
        _react2.default.createElement(
          'td',
          null,
          '54'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double salto fwd. tucked with 1/1 turn.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Salto backwards tucked or piked.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '7'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Salto backwards tucked or piked w. \xBD t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '13'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Back handspring'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Salto backwards stretched.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '8'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Salto backwards str. w. \xBD t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '14'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Tempo salto bwd.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '20'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Salto backwards tucked w. 3/2 t. .'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double salto bwd. tucked.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '15'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double salto bwd. piked.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '21'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Salto bwd. str. with 3/2 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double salto bwd. t. or piked with 1/1 t. Also Arabian double t. or p. \xBD t. (Tsukahara)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '10'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Arabian double tucked or piked or double salto bwd. t. or p. with \xBD t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '22'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Salto bwd. str. with 5/2 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '5'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double salto bwd. tucked with 2/1 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '11'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double salto bwd. t. with 3/2 t. or Salto bwd. str. 3/2 to fwd. salto tucked'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '23'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Salto bwd. str. with 7/2 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'G'
        ),
        _react2.default.createElement(
          'td',
          null,
          '6'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double salto bwd. tucked with 3/1 (Ri Jong Song)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'F'
        ),
        _react2.default.createElement(
          'td',
          null,
          '12'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double salto bwd. tucked with 5/2'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'H'
        ),
        _react2.default.createElement(
          'td',
          null,
          '18'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Triple salto bwd. tucked. (Liukin)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '37'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Jump bwd. with \xBD t. to roll fwd.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '43'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Jump bwd. with \xBD t. to handspring forward.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '26'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Salto bwd. str. with 1/1 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '44'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Jump bwd. with \xBD t. to salto fwd. t. or p. to f. sup.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '27'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Salto bwd. str. with 2/1 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '28'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Salto bwd. str. with 3/1 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '47'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double salto straddled with 1/1 t.(Lou Yun)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'F'
        ),
        _react2.default.createElement(
          'td',
          null,
          '30'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Salto bwd. str. with 4/1 t.(Shirai / Nguyen)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'F'
        ),
        _react2.default.createElement(
          'td',
          null,
          '48'
        ),
        _react2.default.createElement(
          'td',
          null,
          'KolyvanovSalto bwd. str. with 2/1 t and salto bwd piked.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '52'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double salto bwd. stretched.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '53'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Arabian Jump bwd. to dbl. salto fwd. str. or double salto bwd. stretched with \xBD t.Tamayo'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '58'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double salto bwd. stretched with 1/1 t. or arabian Jump bwd. to dbl. salto fwd. str. with \xBD t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'F'
        ),
        _react2.default.createElement(
          'td',
          null,
          '54'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double salto bwd. str. with 3/2 t. or arabian Jump bwd. to dbl. salto fwd. str. with 1/1 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'F'
        ),
        _react2.default.createElement(
          'td',
          null,
          '59'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double salto bwd. str. with 2/1 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'G'
        ),
        _react2.default.createElement(
          'td',
          null,
          '65'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double salto bwd. str. with 5/2 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Floor Exercise'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'H'
        ),
        _react2.default.createElement(
          'td',
          null,
          '71'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double salto bwd. str. with 3/1 t. Shirai 3'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Scissor forward.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '7'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Scissor forward with \xBD t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '13'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Scissor backward.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '19'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Scissor backward with \xBD turn.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '8'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Scissor forward with hop swd.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '14'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double scissor fwd.(\xBC t. fwd. a. \xBC t. bwd.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double Scissor Fwd. with Travel Sideways through Handstand.(Stepanyan)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '9'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Scissor fwd. with hop swd. from one end to the other (3/3).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '15'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double scissor fwd. (\xBC t. fwd. a. \xBC t. bwd.) with travel sdw.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Scissor fwd. w. \xBC t. through hstd. on 1 p., lower to sup. w. strad. legs on the other arm.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '16'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double scissor forward with hop sideways from one end to the other (3/3).(Mikulak)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '22'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Swing bwd. w. \xBC t. through hstd. on 1 p., lower to sup. w. strad. legs on the other arm.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '26'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Scissor bwd.with hop swd.(also with \xBD t.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '32'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double scissor bwd. (\xBC t. fwd. a. \xBC t. bwd).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '44'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Leg cut or undercut bwd. through hdst. and lower to support w. strad. legs.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '27'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Scissor bwd. with hop swd. from one end to the other'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '45'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Leg cut or undercut bwd. through hdst. and lower to flair or circle.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '34'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Scissor fwd. 1/4 t. to hdst., 1/4 t. and straddle down bwd on 1 arm on the other pommel.(Bryan)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '40'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Scissor bwd. \xBC t. to hdst., \xBC t. and straddle down bwd on 1 arm on the other pommel.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Any circle or flair in side support.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '13'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Circles in cross support frontways on end.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '19'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Circles in cross support rearways on end.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Circle in side support on 1 pommel.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '8'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Circle with support outside pommels or between the pommels.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '14'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Circles in cross support on 1 pommel'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '20'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Circles in cross support between the pommels.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '25'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Circle in side sup., \xBC spindle to cross sup.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '31'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Cross support on end, circle with \xBC spindle to side support.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '26'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Side support, \xBD spindle.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '32'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Cross support on end, \xBD spindle.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '38'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Flair or circle through hdst. and lower to sup. w. strad. legs.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '39'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Flair or circle through hdst. (with or without \xBD t.) and lower to flair or circle.(Tippelt)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '45'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Flair with hop travel bwd. through hdst. and lower to sup. w. straddle legs.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '28'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Any side support 1/1 spindle w. legs straddle inside max. 2 circles.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '34'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Any cross support 1/1 spindle within max. 2 circles. (also with ?, \xBD or 2/3 travel).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '46'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Flair with hop travel bwd. through hdst. and lower to circles or flairs.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '29'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Any side support 1/1 spindle with hand support to the other side and return (max. 2 flairs or circles).(Eichorn)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '35'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Cross support, 1/1 spindle with hands between the pommels max. 2 circles. (also with ? travel).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '41'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1/1 spindle w. legs straddle or together on the pommels inside max. 2 circles. (Berki)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'F'
        ),
        _react2.default.createElement(
          'td',
          null,
          '30'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Side support, 1/1 spindle with both pommels between the hands (flair or circle).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '61'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double rear (kehr).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '50'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Direct St\xF6ckli A (DSA).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '56'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Direct St\xF6ckli B (DSB).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '62'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Kehrswing bwd. hop with \xBD t. on the pommels.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '68'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Kehr with 270\xBA t. on 1 p. (Sohn technique) from cross to side support.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '51'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Reverse St\xF6ckli or DSA strad. through hdst. and lower to sup. w. strad. legs or circle.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '69'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Kehr with 270\xBA t. on 1 p. (Sohn technique) from side to cross support.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '65'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Kehr with 1/1 turn on 1 pommel.(Sohn)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'F'
        ),
        _react2.default.createElement(
          'td',
          null,
          '54'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Reverse St\xF6ckli, DSA or pommel circle strad. through hdst., 3/3 travel (fwd.- bwd), 360\xBA turn to flairs.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '79'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Wendeswing fwd. w. \xBD t. to sup. fw. on the end, from side support using 1 or 2 pommels.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '91'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Schwabenflank.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '74'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Direct Tramlot.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '80'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Reverse St\xF6ckli, 180\xB0 or 270\xB0 turn in one circle.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '86'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double Swiss.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '92'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Czechkehre on the leather or pommels.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '81'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Reverse St\xF6ckli with 270\xB0 t. to 1 pommel.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '88'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Czechkehre outside p. (Pinheiro)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '83'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Reverse St\xF6ckli with 360\xB0 t. on 1 pommel.(Bezugo)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '97'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Russian wendeswing with 180'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '103'
        ),
        _react2.default.createElement(
          'td',
          null,
          'On the leather, Russian wendeswing with 180\xB0, also with travel.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '98'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Russian wendeswing with 360'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '104'
        ),
        _react2.default.createElement(
          'td',
          null,
          'On the leather , Russian wendeswing with 360\xB0 or 540\xB0.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '110'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Russian wendeswing with 180\xB0 or 270\xB0 on 1 p. or between the pommels.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '99'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Russian wendeswing with 720'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '105'
        ),
        _react2.default.createElement(
          'td',
          null,
          'On the leather, Russian wendeswing with 720\xB0 or 900\xB0.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '111'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Russian wendeswing with 360\xB0 pommel or between the pommels.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '100'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Russian wendeswing with 1080\xB0 or more.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '106'
        ),
        _react2.default.createElement(
          'td',
          null,
          'On the leather, Russian wendeswing with 1080\xB0 or more.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '112'
        ),
        _react2.default.createElement(
          'td',
          null,
          '720\xB0 mel or between the pommels.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '113'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1080\xBA Russian wendeswing or more on 1 pommel or between the pommels.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Circles with travel fwd. in side support (also with \xBC t.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '13'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Circles with travel bwd. in side support.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Circles with travel fwd. in side support (3/3).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '8'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Circles with hop travel fwd. in side support.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '14'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Circles with travel bwd. in side support (3/3).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '20'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Circles with travel bwd. with hop.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Circles with travel fwd. in side support (3/3), hands between pommels.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '9'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Circles with hop tr. fwd. 2x in side support (3/3).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '15'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Circles with travel bwd. in side support (3/3), hands between pommels.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '21'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Circles with travel bwd. with hop 2x.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'From side sup. on 1 end., travel fwd. over both p. to sup. on other end (3/3) in 1 circle.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '10'
        ),
        _react2.default.createElement(
          'td',
          null,
          'From sup. frontways on one end, travel hop over both p. to sup. frontways on other end.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '16'
        ),
        _react2.default.createElement(
          'td',
          null,
          'From side sup. on 1 end., travel bwd. over both p. to side sup. on the other end (3/3) in 2 circles w.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '22'
        ),
        _react2.default.createElement(
          'td',
          null,
          'From side support on one end, travel hop over both p. to sup. frways on other end (1-2 to 4-5).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '23'
        ),
        _react2.default.createElement(
          'td',
          null,
          'From side sup. beside the p., travel hop o. 2 p. to sup. fwd on other end (1-1 to 5-5).(Yamawaki)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '26'
        ),
        _react2.default.createElement(
          'td',
          null,
          'All travels with \xBD spindle in cross support (1/3 travel).\xBD'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '32'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Travel fwd. or bwd. with \xBC spindle to side support.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '44'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Travel fwd. in cross support (\xBD or 2/3).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '27'
        ),
        _react2.default.createElement(
          'td',
          null,
          'All travels with \xBD spindle in cross support (\xBD or 2/3 travel).\xBD'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '33'
        ),
        _react2.default.createElement(
          'td',
          null,
          'All travels with \xBD spindle in side support. \xBD'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '45'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Travel fwd. in cross support with support on leather, pommel, pommel, leather(3/3) (1-2-4-5).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '34'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Cross travel fwd. 3/3 with \xBD Spindle from one pommel over the other pommel.(Nin Reyes)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '46'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Any other travel fwd. in cross support to other end (3/3).(Magyar)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '29'
        ),
        _react2.default.createElement(
          'td',
          null,
          'From an end side travel with 2x other end.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '35'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Travel 3/3 over both pommels with \xBD Spindle.\xBD p\xEDvot.(Nin Reyes 2)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '41'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3/3 cross support travel fwd. with hop. (Driggs)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '47'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3/3 cross support travel fwd. in flairs.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '55'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Travel bwd. in cross sup. from one horse part or pommel to another (?).?'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '56'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Travel bwd. in cross support (\xBD or 2/3).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '51'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Fr. cr. sup. on end, tr. fwd. in 2 circles to 12nd p., with \xBC turn to side sup. on other end (3/3(Bilozerchev)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '57'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Travel bwd. in cross sup with support on leather, pommel, pommel, leather(3/3) (5-4-2-1).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '63'
        ),
        _react2.default.createElement(
          'td',
          null,
          'From support on end, kehr fwd. around 1St\xF6ckli around 2nd p. to side sup., p. betw. hands. (Urzica)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '58'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Any other travel bwd. in cross support to other end (3/3).(Sivado)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '64'
        ),
        _react2.default.createElement(
          'td',
          null,
          'p., rev. (Moguilny)Kehre fwd., rev. St\xF6ckli, kehre fwd.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '70'
        ),
        _react2.default.createElement(
          'td',
          null,
          '(Belenki)Kehre bwd., kehre fwd., kehre bwd.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '59'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Any other travel bwd. in cross support to other end (3/3) in flairs.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '75'
        ),
        _react2.default.createElement(
          'td',
          null,
          'From sup. on 1 p., Russian wendeswing fwd. to other end without sup. on or btw. the p. (side to side support, side to cross support, cross to side support).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '81'
        ),
        _react2.default.createElement(
          'td',
          null,
          'From side support pommel between hand, rus-sian wendeswing 360\xBA with travel to the other end in side support.(Kroll)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '76'
        ),
        _react2.default.createElement(
          'td',
          null,
          'From sup. on end, Russian wendeswing fwd. to other end without sup. on or btw. the p. (side to side support, side to cross, cross to side, cross to cross) with full circle after.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '82'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Any Russian wend. with 360(Tong Fei)(Roth)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '88'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Reverse St\xF6ckli from cross support on one end to the other.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '83'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Any 3/3 travel in Russian type wendeswing with 720(Wu Guonian)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '89'
        ),
        _react2.default.createElement(
          'td',
          null,
          'On the leather, from cross support, Russian wendeswing with 360\xB0 or 540\xBA over both pom-mels. (Vammen)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Wende (from circle or flair).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Chaguinian to wende.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '8'
        ),
        _react2.default.createElement(
          'td',
          null,
          'On the end, Russian wendeswing with 360\xB0'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '14'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Fr. s. sup. fw., wendeswing fwd. w. \xBD t. to sup. fw. followed by Schwabenflank a. wende off.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '20'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Circle or flair through hdst. (also with \xBE t. with or without travel).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '9'
        ),
        _react2.default.createElement(
          'td',
          null,
          'On the end, Russian wend. with 720\xB0'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '15'
        ),
        _react2.default.createElement(
          'td',
          null,
          'DSA, rev. St\xF6ckli or circle on one pommel through hdst.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '21'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Circle or flair with hop travel bwd. thr. hdst.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'From side sup. on end, circle or flair to hdst. and travel 3/3 with 450\xB0 or more turn.(Kolyvanov)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '10'
        ),
        _react2.default.createElement(
          'td',
          null,
          'On the end, Russian wendeswing with 1080\xBA or more.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '16'
        ),
        _react2.default.createElement(
          'td',
          null,
          'DSA with hop bwd. through hdst.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Pommel Horse'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '5'
        ),
        _react2.default.createElement(
          'td',
          null,
          'DSA to hdst. 3/3 with 450\xBA or more turn.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Uprise fwd. to support.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '7'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Swing bwd in support, fall to bwd swing in hang.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '13'
        ),
        _react2.default.createElement(
          'td',
          null,
          'From hang, underswing w. shoulders above rings.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '8'
        ),
        _react2.default.createElement(
          'td',
          null,
          '#1 and counter salto fwd. to bwd swing in hang. (also from Li Ning).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '20'
        ),
        _react2.default.createElement(
          'td',
          null,
          'From a hang or support, back toss to hang rw. to uprise fwd. to support.(Li Ning)(Li Ning 2)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '25'
        ),
        _react2.default.createElement(
          'td',
          null,
          'From hang, felge upward to support.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '31'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Dislocate bwd. piked or stretched.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '37'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Uprise bwd. to support.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '43'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Inlocate piked or stretched.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '26'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Swing fwd. with straight arms through hdst.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '32'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Felge upward to support with straddled legs supported above the rings (2 s.).(Deltchev)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '38'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Uprise bwd. or giant swing piked or str. through handstand.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '44'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Backward swing to salto fwd. p. to support(Honma)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '27'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Tucked double felge bwd. to hang. (Guczoghy)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '45'
        ),
        _react2.default.createElement(
          'td',
          null,
          '.Honma stretched.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '28'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Piked double felge bwd. to hang.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '29'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Stretched double felge bwd. to hang(O\u2019Neill)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '49'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Slow inlocate from hang.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '55'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Kip to support.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '61'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Back kip to support.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '67'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Fwd. swing to swing bwd. in hang.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '62'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Back kip with straight arms to support.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '68'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Uprise bwd. to straddled L-sit (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '51'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double salto fwd. tucked to hang.(Yamawaki)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '69'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Bwd. swing, salto fwd tuck or piked to support.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '52'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double salto fwd. piked or stretched to hang.(Jonasson)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '73'
        ),
        _react2.default.createElement(
          'td',
          null,
          'From support or cross, felge bwd. piked or stretched to support.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '80'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Back kip or roll bwd str. to handstand (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '92'
        ),
        _react2.default.createElement(
          'td',
          null,
          'From support swing bwd. to handstand (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '81'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Swing fwd. with straight arms to hdst. (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '87'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Uprise bwd. or giant swing to handstand with straight arms (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '93'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Honma and swing bwd. to handstand (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '94'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Honma str. and swing bwd. to handstand (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'L-sit (2 s.) or straddled L-sit (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '7'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Hanging scale rearways (back lever) (2 s.)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '13'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Hanging scale frontways (front lever) (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'V-sit (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '8'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Support scale straddled (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '14'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Any cross (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Inverted cross (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '9'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Support scale (planche)(2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '15'
        ),
        _react2.default.createElement(
          'td',
          null,
          'V cross (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Press from inverted cross to handstand (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '10'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Support scale at ring height (swallow or maltese cross) (2 s.).(Hirondelle)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '22'
        ),
        _react2.default.createElement(
          'td',
          null,
          'V Cross, press to V-sit (2 sec.). De cristo p. vert. subir a \xE1ngulo p. vert. (2 s.)(Tsukahara 3)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '11'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Inverted swallow (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '25'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Press to hdst. with bent body and bent arms (2 s).- Also straddle legs.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '31'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Slow roll fwd. piked to support.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '26'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Press to hdst. with str. body a. bent arms or b. body. a. str. arms, or fr. strad. sup. lever (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '32'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Slow roll fwd. stretched to support.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '38'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Slow roll bwd. slowly with str. arms and str. body to L sit (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '27'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Press to hdst. with str. body and str. arms or from sup. lever (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '33'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Slow roll fwd. stretched with straight arms to handstand (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '39'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Slow roll fwd. stretched (bent or straight arms)to cross or L-cross (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '28'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Press to hdst. with str. body and str. arms from swallow (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '34'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Slow roll fwd. stretched with straight arms to inverted cross (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '40'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Pull with straight arms and body through mo-mentary front lever to cross or L-cross (2 s.).(Pineda)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '46'
        ),
        _react2.default.createElement(
          'td',
          null,
          '(Pham)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '29'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Pineda to inverted Cross (2 s.).(Petrounias)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '41'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Pineda to V cross (2 s.).(Tsukahara 2)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '47'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Pull with straight body and arms through mo-ment. front lever to swallow (2 s.).(Bhavsar)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '50'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Vertical pull up with bent arms to hanging scale rearways (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '56'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Fr. cross or L-cr., turn fwd. to back lever (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '62'
        ),
        _react2.default.createElement(
          'td',
          null,
          'From hdst., lower horiz. to back lever (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '68'
        ),
        _react2.default.createElement(
          'td',
          null,
          'From handstand, lower slowly with straight arms through inverted cross to inverted hang.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '51'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Vertical pull up with straight arms to hanging scale rearways (2 s.)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '57'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Vertical pull up with straight arms to L-sit (2 s.)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '63'
        ),
        _react2.default.createElement(
          'td',
          null,
          'From sup. or cross, lower slowly with str. arms to hang, and pull with str. arms to cross (2 s.).(Li Xiaoshuang)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '52'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Roll bwd. slowly with str. arms and body to cross or L-cross (2 s.).(Azarian)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '58'
        ),
        _react2.default.createElement(
          'td',
          null,
          'From or through hanging scale rearways, with straight arms pull to cross or L-cross (2 s.).(Nakayama)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '64'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Vertical pull up with straight arms to cross or L-cross (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '70'
        ),
        _react2.default.createElement(
          'td',
          null,
          'From swallow, press to support scale (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '53'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Azarian to V Cross (2 s.).(Tay)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '59'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Nakayama to V cross (2 s.).(NG Kiu Chung)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '65'
        ),
        _react2.default.createElement(
          'td',
          null,
          'From planche, lower horiz. and slowly to hang-ing scale rw. and press to swallow (2 s.) or from swallow same to planche or planche to planche.(Van Gelder)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '71'
        ),
        _react2.default.createElement(
          'td',
          null,
          'From swallow , lower slowly to handing scale, press to swallow (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'F'
        ),
        _react2.default.createElement(
          'td',
          null,
          '60'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Through hanging scale rearways (no hold re-quired) pull with str. body through cross to inv. swallow (2 s.). (Zahran)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'F'
        ),
        _react2.default.createElement(
          'td',
          null,
          '72'
        ),
        _react2.default.createElement(
          'td',
          null,
          'From hanging scale rw. press to swallow (also to Support Scale) (2 s.).(Zanetti)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '75'
        ),
        _react2.default.createElement(
          'td',
          null,
          'From L-sit, press to inverted cross (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '81'
        ),
        _react2.default.createElement(
          'td',
          null,
          'From cross or L-cross, press to L-sit (2 s.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '76'
        ),
        _react2.default.createElement(
          'td',
          null,
          'From L-cross, press to inverted cross (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '82'
        ),
        _react2.default.createElement(
          'td',
          null,
          'From support lever, press to inverted cross (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '88'
        ),
        _react2.default.createElement(
          'td',
          null,
          'From cross, press to planche without first going to support (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '94'
        ),
        _react2.default.createElement(
          'td',
          null,
          'From inverted cross lower slowly to inverted hang and felge bwd. slowly to cross (2 s.).(Vorobiov))'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '77'
        ),
        _react2.default.createElement(
          'td',
          null,
          'From cross, press with straight body to inverted cross (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '83'
        ),
        _react2.default.createElement(
          'td',
          null,
          'From swallow, press to inverted cross (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '89'
        ),
        _react2.default.createElement(
          'td',
          null,
          'From cross, press to swallow (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '95'
        ),
        _react2.default.createElement(
          'td',
          null,
          'From inverted cross lower slowly to inverted hang and felge bwd. slowly to swallow (2 s.).(Jotchev)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '106'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Slowly roll fwd. str. w. str. arms through Cross and press to planche without first going to support (2 s.).(Ng Kiu Chung 2)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '112'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Slow roll fwd. with str. body and arms to Cross or L-Cross (2 s.), also from inverted hang.(Davtyan)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '101'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Roll bwd. slowly with str. arms and body to free sup. scale (2 s.)(Yan Mijayoung)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '107'
        ),
        _react2.default.createElement(
          'td',
          null,
          'From hang vertical pull up with straight arms to (Balandin 1)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '119'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Slow roll fwd. with straight body and arms through cross to inverted cross (2 s.).(Wynn)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'F'
        ),
        _react2.default.createElement(
          'td',
          null,
          '102'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Roll bwd. slowly with str. arms and body to swallow (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'F'
        ),
        _react2.default.createElement(
          'td',
          null,
          '108'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Azarian to inverted Swallow (2 s.).(Tulloch)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'F'
        ),
        _react2.default.createElement(
          'td',
          null,
          '114'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Through hang rearways press with straight arms and straight body to inverted cross (2 s.).(Carmona)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'F'
        ),
        _react2.default.createElement(
          'td',
          null,
          '120'
        ),
        _react2.default.createElement(
          'td',
          null,
          'From hang vertical pull up with straight arms to (2 s.).(Balandin 2)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Uprise fwd. to L-sit, (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '8'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Kip to L-sit (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '14'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Backward swing to salto fwd. p. to L-sit (2 s.).(Honma)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Uprise fwd. to V-sit (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '9'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Kip to V-sit (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '16'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Salto fwd. betw. rings direc. to cross / L-cross (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '22'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Bwd. swing, salto fwd p. to cross or L- cross (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '17'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Salto fwd. between rings directly to V cross (2 s.).(Tanaka)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '27'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Uprise fwd. to cross or L-cross (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '33'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Uprise bwd. to cross or L-cross (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '39'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Li Ning or Li Ning 2 to cross or L-cross (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '45'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Felge upward to cross or L-cross (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '40'
        ),
        _react2.default.createElement(
          'td',
          null,
          '(Tsukahara) Li Ning or Li Ning 2 to V Cross (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '46'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Kip to V cross (2 s.).(Molinari)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '47'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Felge upward to sup. scale at ring height (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'F'
        ),
        _react2.default.createElement(
          'td',
          null,
          '48'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Uprise fwd. to inv. swallow w.o. supp. phase (2 s.).(Rodrigues)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '51'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Kip to cross, or L-cross (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '57'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Back kip to cross or L-cross (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '63'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Felge upward to support scale straddled (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '69'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Uprise bwd. to support scale straddled (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '52'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Back Uprise to V Cross (2 s.).(Kato)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '64'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Felge upward to support scale (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '70'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Uprise bwd. to support scale (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '53'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Uprise bwd. to sup. scale at ring height (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '59'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Back kip to support scale at ring height (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'F'
        ),
        _react2.default.createElement(
          'td',
          null,
          '54'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Kip to inverted swallow (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '75'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Back kip to support scale straddled (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '76'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Back kip to support scale (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '82'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Felge bwd. stretched to free sup. scale (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '88'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Felge upward with straight arms to invert. cross (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '94'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Uprise bwd. to inverted cross (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '100'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Back kip to inverted cross (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Salto fwd. piked or stretched.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '19'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Uprise bwd. and salto bwd t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Salto fwd. piked or stretched with \xBD t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '20'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Uprise bwd. and salto bwd p. or str.(K\xF6ste)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Salto fwd. piked or stretched with 1/1 or 3/2 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '9'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double salto fwd. tucked or tucked with \xBD t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '21'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Uprise bwd. and salto bwd str. with 1/1 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Salto fwd. piked or stretched with 2/1 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '10'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double salto fwd. tucked with 3/2 t (also 1/1 t.).(Fischer)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '16'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double salto fwd. piked or piked with \xBD t.(Balabanov)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '17'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double salto fwd. piked with 3/2 t. (also 1/1 t.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '25'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Salto bwd. piked or stretched.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '26'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Salto bwd. stretched with \xBD or 1/1 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '32'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double salto bwd. tucked or piked.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '27'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Salto bwd. stretched with 2/1 t. or 3/2 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '33'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double salto bwd. stretched.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '39'
        ),
        _react2.default.createElement(
          'td',
          null,
          '\xBD ou Double salto bwd. t. with \xBD or 1/1 t.\xBD o'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '45'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Salto bwd. str. with 1/1 t. and salto t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '40'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double salto bwd. t. with 3/2 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '46'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double salto bwd. stretched with \xBD or 1/1 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '29'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Salto bwd. stretched with 3/1 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '41'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double salto bwd. t. with 2/1 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'G'
        ),
        _react2.default.createElement(
          'td',
          null,
          '36'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Triple salto bwd. tucked.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'F'
        ),
        _react2.default.createElement(
          'td',
          null,
          '42'
        ),
        _react2.default.createElement(
          'td',
          null,
          '(Tuuha)Double salto bwd. t. with 5/2 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Rings'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'F'
        ),
        _react2.default.createElement(
          'td',
          null,
          '48'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double salto bwd. stretched with 3/2 or 2/1 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1.6'
        ),
        _react2.default.createElement(
          'td',
          null,
          '101'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Forward handspring.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2.4'
        ),
        _react2.default.createElement(
          'td',
          null,
          '107'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Handspring fwd. and salto fwd. t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3.2'
        ),
        _react2.default.createElement(
          'td',
          null,
          '113'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Hdspr. fwd. and salto fwd. p. w. \xBD t. (Cuervo p.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1.8'
        ),
        _react2.default.createElement(
          'td',
          null,
          '102'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Forward handspring with \xBD t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2.8'
        ),
        _react2.default.createElement(
          'td',
          null,
          '108'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Hdspr. fwd. and salto fwd. t. w. \xBD t. (or Cuervo t.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3.6'
        ),
        _react2.default.createElement(
          'td',
          null,
          '114'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Hdspr. fwd. and salto fwd. p. w. 1/1 t. (Cuervo p. w. \xBD t.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          '103'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Forward handspring with 1/1 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3.2'
        ),
        _react2.default.createElement(
          'td',
          null,
          '109'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Hdspr. fwd. and salto fwd. t. w. 1/1 t. (Cuervo t. w. \xBD t.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          '115'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Hdspr. fwd. and salto fwd. p. w. 3/2 t. (Cuervo p. w. 1/1 t.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2.2'
        ),
        _react2.default.createElement(
          'td',
          null,
          '104'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Forward handspring with 3/2 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          '110'
        ),
        _react2.default.createElement(
          'td',
          null,
          '(Kroll)Hdspr. fwd. and salto fwd. t. w. 3/2 t. (Cuervo t. w. 1/1 t.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          '116'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Hdspr. fwd. w. 1/1 t. a. salto fwd. t.(Behrend)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2.4'
        ),
        _react2.default.createElement(
          'td',
          null,
          '105'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Forward handspring with 2/1 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4.4'
        ),
        _react2.default.createElement(
          'td',
          null,
          '111'
        ),
        _react2.default.createElement(
          'td',
          null,
          '(Canbas)Hdspr. fwd. and salto fwd. t. w. 2/1 t. (or Cuervo t. w. 3/2 t.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4.4'
        ),
        _react2.default.createElement(
          'td',
          null,
          '117'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Hdspr. fwd. w. 1/1 t. and salto fwd. p.(Rehm)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2.6'
        ),
        _react2.default.createElement(
          'td',
          null,
          '106'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Forward handspring with 5/2 t.(Tsygankov)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2.8'
        ),
        _react2.default.createElement(
          'td',
          null,
          '112'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Handspring fwd. and salto fwd. piked.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4.8'
        ),
        _react2.default.createElement(
          'td',
          null,
          '118'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Hdspr. fwd. 1/1 t. and Salto fwd piked \xBD t.\xBD g.(Arican)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3.6'
        ),
        _react2.default.createElement(
          'td',
          null,
          '171'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Handspring fwd. and salto fwd. str.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          '6'
        ),
        _react2.default.createElement(
          'td',
          null,
          '177'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Handspring fwd. and salto fwd. str. w. 3/1 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          '172'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Hdspr. fwd. and salto fwd. str. w. \xBD t. (Cuervo str.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          '5.2'
        ),
        _react2.default.createElement(
          'td',
          null,
          '178'
        ),
        _react2.default.createElement(
          'td',
          null,
          '(Roche)Handspring fwd. and dbl. salto fwd. t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          '5.6'
        ),
        _react2.default.createElement(
          'td',
          null,
          '190'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Handspring fwd. and salto fwd. t. w. \xBD t. and salto bwd. t.(Zimmerman)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4.4'
        ),
        _react2.default.createElement(
          'td',
          null,
          '173'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Hdspr. fwd. and salto fwd. str. w. 1/1 t. (Cuervo str. \xBD t.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          '5.6'
        ),
        _react2.default.createElement(
          'td',
          null,
          '179'
        ),
        _react2.default.createElement(
          'td',
          null,
          '(Dragulescu)Roche with \xBD turn.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          '5.6'
        ),
        _react2.default.createElement(
          'td',
          null,
          '191'
        ),
        _react2.default.createElement(
          'td',
          null,
          '(Blanik)Handspring fwd. and dbl. salto fwd. piked.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4.8'
        ),
        _react2.default.createElement(
          'td',
          null,
          '174'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Hdspr. fwd. and salto fwd. str. w. 3/2 t. (Cuervo str. w. 1/1 t.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          '6'
        ),
        _react2.default.createElement(
          'td',
          null,
          '192'
        ),
        _react2.default.createElement(
          'td',
          null,
          '(RI Se Gwang 2)Dragulescu piked.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          '5.2'
        ),
        _react2.default.createElement(
          'td',
          null,
          '175'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Hdspr. fwd. and salto fwd. str. w. 2/1 t. (Cuervo str. 3/2 t.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          '5.6'
        ),
        _react2.default.createElement(
          'td',
          null,
          '176'
        ),
        _react2.default.createElement(
          'td',
          null,
          '(Yeo 2) Handspring fwd. and salto fwd. str. w. 5/2 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1.6'
        ),
        _react2.default.createElement(
          'td',
          null,
          '220'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Handspring sw. with \xBC t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2.4'
        ),
        _react2.default.createElement(
          'td',
          null,
          '226'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Tsukahara piked.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1.8'
        ),
        _react2.default.createElement(
          'td',
          null,
          '221'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Handspring sw. with 3/4 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2.4'
        ),
        _react2.default.createElement(
          'td',
          null,
          '227'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Tsukahara t. with \xBD t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          '222'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Handspring sw. with 5/4 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2.8'
        ),
        _react2.default.createElement(
          'td',
          null,
          '228'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Hdspr. sw. w. \xBC t. a. salto fwd. t. w. \xBD t. or Tsuk. t. w. 1/1 t.(Kasamatsu)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2.4'
        ),
        _react2.default.createElement(
          'td',
          null,
          '223'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Hdspr. sw. with. \xBC t. a. salto fwd. t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3.2'
        ),
        _react2.default.createElement(
          'td',
          null,
          '229'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Tsukahara t. w. 3/2 t.or Kasamatsu t. \xBD t'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2.8'
        ),
        _react2.default.createElement(
          'td',
          null,
          '224'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Handspring sw. w. \xBC t. a. salto fwd. p.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          '230'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Tsukahara t. with 2/1 t.(Barbieri)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2.2'
        ),
        _react2.default.createElement(
          'td',
          null,
          '225'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Handspring sw. w. \xBC t. a. salto bwd. t.(Tsukahara)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3.2'
        ),
        _react2.default.createElement(
          'td',
          null,
          '270'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Tsukahara stretched.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          '5.6'
        ),
        _react2.default.createElement(
          'td',
          null,
          '276'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Kasamatsu str. with 2/1 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3.6'
        ),
        _react2.default.createElement(
          'td',
          null,
          '271'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Tsukahara str. with \xBD t. or Hdspr. sw \xBC t. salto fwd str.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          '6'
        ),
        _react2.default.createElement(
          'td',
          null,
          '277'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Kasamatsu str. with 5/2 t. or Tsukahara st. with 7/2 t.(L\xF3pez)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          '272'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Tsukahara str. w. 1/1 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4.4'
        ),
        _react2.default.createElement(
          'td',
          null,
          '273'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Kasamatsu str. with \xBD t. or Tsukahara str. w. 3/2 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          '5.2'
        ),
        _react2.default.createElement(
          'td',
          null,
          '285'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Tsukahara with salto bwd. t.(Yeo)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4.8'
        ),
        _react2.default.createElement(
          'td',
          null,
          '274'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Kasamatsu str. w. 1/1 t. or Tsukahara str. w. 2/1 t.(Akopian)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          '5.6'
        ),
        _react2.default.createElement(
          'td',
          null,
          '286'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Tsukahara with salto bwd. piked.(Lu Yu Fu)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          '5.2'
        ),
        _react2.default.createElement(
          'td',
          null,
          '275'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Kasamatsu str. with 3/2 t. (Driggs)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          '6'
        ),
        _react2.default.createElement(
          'td',
          null,
          '287'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double Tsukahara with 1/1 twist.(Ri Se Gwang)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1.6'
        ),
        _react2.default.createElement(
          'td',
          null,
          '335'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Round off, handspring bwd.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3.2'
        ),
        _react2.default.createElement(
          'td',
          null,
          '341'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Yurchenko t. with 3/2 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1.8'
        ),
        _react2.default.createElement(
          'td',
          null,
          '336'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Round off, handspring bwd. with \xBD turn.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          '342'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Yurchenko t. with 2/1 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          '337'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Round off, handspring bwd. with 1/1 turn.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2.4'
        ),
        _react2.default.createElement(
          'td',
          null,
          '343'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Yurchenko piked.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2.2'
        ),
        _react2.default.createElement(
          'td',
          null,
          '338'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Round off, hdspr. bwd. and salto bwd. t.(Yurchenko)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2.4'
        ),
        _react2.default.createElement(
          'td',
          null,
          '339'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Yurchenko t. with \xBD t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2.8'
        ),
        _react2.default.createElement(
          'td',
          null,
          '340'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Yurchenko t. with 1/1 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3.2'
        ),
        _react2.default.createElement(
          'td',
          null,
          '370'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Yurchenko stretched.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          '5.6'
        ),
        _react2.default.createElement(
          'td',
          null,
          '376'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Yurchenko Stretched 3/1 t. (Shirai - KIM Hee Hoon)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3.6'
        ),
        _react2.default.createElement(
          'td',
          null,
          '371'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Yurchenko stretched with \xBD t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          '372'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Yurchenko stretched with 1/1 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4.4'
        ),
        _react2.default.createElement(
          'td',
          null,
          '373'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Yurchenko stretched with 3/2 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          '5.2'
        ),
        _react2.default.createElement(
          'td',
          null,
          '385'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Yurchenko and salto bwd. t.(Melissanidis)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4.8'
        ),
        _react2.default.createElement(
          'td',
          null,
          '374'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Yurchenko stretched with 2/1 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          '5.6'
        ),
        _react2.default.createElement(
          'td',
          null,
          '386'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Melissanidis piked.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          '5.2'
        ),
        _react2.default.createElement(
          'td',
          null,
          '375'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Yurchenko stretched with 5/2 t.(Shewfelt)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3.4'
        ),
        _react2.default.createElement(
          'td',
          null,
          '456'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Round off, \xBD t. and hdspr. fwd. and salto fwd. p. with \xBD t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          '451'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Round off, \xBD t. and hdspr. fwd. with \xBD t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3.4'
        ),
        _react2.default.createElement(
          'td',
          null,
          '456'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Round off, \xBD t. and hdspr. fwd. and salto fwd. p. with \xBD t. (Nemov)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2.2'
        ),
        _react2.default.createElement(
          'td',
          null,
          '452'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Round off, \xBD t. and hdspr. fwd. with 1/1 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2.6'
        ),
        _react2.default.createElement(
          'td',
          null,
          '453'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Round off, \xBD t. and hdspr. fwd. and salto fwd. tucked.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3.8'
        ),
        _react2.default.createElement(
          'td',
          null,
          '471'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Round off, \xBD t. and hdspr. fwd. and salto fwd. str.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          '454'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Round off, \xBD t. and hdspr. fwd. and salto fwd. tucked with \xBD t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4.2'
        ),
        _react2.default.createElement(
          'td',
          null,
          '472'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Round off, \xBD t. and hdspr. fwd. and salto fwd. str. with \xBD t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          '455'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Round off, \xBD t. a. hdspr. fwd. and salto fwd. p.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4.6'
        ),
        _react2.default.createElement(
          'td',
          null,
          '473'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Round off, \xBD t. and hdspr. fwd. and salto fwd. str. with 1/1 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          '5'
        ),
        _react2.default.createElement(
          'td',
          null,
          '474'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Round off, \xBD t. and hdspr. fwd. and salto fwd. stretched with 3/2 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          '5.4'
        ),
        _react2.default.createElement(
          'td',
          null,
          '475'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Round off, \xBD t. and hdspr. fwd. and salto fwd. stretched with 2/1 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          '5.8'
        ),
        _react2.default.createElement(
          'td',
          null,
          '476'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Round off, \xBD t. and hdspr. fwd. and salto fwd. str. with 5/2 t.(Li Xiao Peng)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          '5.4'
        ),
        _react2.default.createElement(
          'td',
          null,
          '478'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Round off, \xBD t. a. hdspr. fwd. and double salto fwd. tucked.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '5'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2.2'
        ),
        _react2.default.createElement(
          'td',
          null,
          '560'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Scherbo entry to back handspring.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '5'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3.4'
        ),
        _react2.default.createElement(
          'td',
          null,
          '566'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Scherbo entry to salto bwd. tucked with 1/1 turn.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '5'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4.6'
        ),
        _react2.default.createElement(
          'td',
          null,
          '572'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Scherbo with 1/1 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '5'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2.4'
        ),
        _react2.default.createElement(
          'td',
          null,
          '561'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Scherbo entry to back handspring with \xBD turn.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '5'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3.8'
        ),
        _react2.default.createElement(
          'td',
          null,
          '567'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Scherbo entry to salto bwd. tucked with 3/2 turn.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '5'
        ),
        _react2.default.createElement(
          'td',
          null,
          '5'
        ),
        _react2.default.createElement(
          'td',
          null,
          '573'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Scherbo with 3/2 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '5'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2.6'
        ),
        _react2.default.createElement(
          'td',
          null,
          '562'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Scherbo entry to back handspring with 1/1 turn.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '5'
        ),
        _react2.default.createElement(
          'td',
          null,
          '5.4'
        ),
        _react2.default.createElement(
          'td',
          null,
          '574'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Scherbo with 2/1 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '5'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2.8'
        ),
        _react2.default.createElement(
          'td',
          null,
          '563'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Scherbo entry to salto bwd. tucked.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '5'
        ),
        _react2.default.createElement(
          'td',
          null,
          '5.8'
        ),
        _react2.default.createElement(
          'td',
          null,
          '575'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Scherbo with 5/2 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '5'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          '564'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Scherbo entry to salto bwd. piked.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '5'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3.8'
        ),
        _react2.default.createElement(
          'td',
          null,
          '570'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Scherbo entry to salto bwd. stretched.(Scherbo)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '5'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          '565'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Scherbo entry to salto bwd. tucked with \xBD turn.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Vault'
        ),
        _react2.default.createElement(
          'td',
          null,
          '5'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4.2'
        ),
        _react2.default.createElement(
          'td',
          null,
          '571'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Scherbo with \xBD t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Any handstand on 1 or 2 rails (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '7'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Any L-sit on 1 or 2 rails (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '13'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Straddle cut fwd. to support or L-sit (2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '19'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Straddle cut bwd. to support.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Bent arm swing fwd. to hop \xBD t. to sup.(Kato)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '8'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Swing fwd. w. 1/1 t. to up. arm hang.(Carminucci)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '14'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Straddle cut bwd. to hdst.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '20'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Strad. cut bwd. and salto fwd. to up. arm hang.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'St\xFCtzkehr fwd. to hdst.(to 1 or 2 bars).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '15'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Diamidov and \xBD turn to upper arms.(Salazar)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '21'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Swing fwd. w. 1/1 t. on 1 arm to hdst.(Diamidov)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '10'
        ),
        _react2.default.createElement(
          'td',
          null,
          'St\xFCtzkehr fwd. or salto bwd. to hdst. sideways on 1 rail (also with additional \xBC or \xBE turn to hdst.).(Bilozerchev - Peters)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '16'
        ),
        _react2.default.createElement(
          'td',
          null,
          '\xBE Diamidov and rear vault to side hang on 1 bar.(De Freitas)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '22'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Diamidov with \xBD'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '26'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Any press w. bent arm str. body, or str. arm bent body to hdst., on 1 or 2 rails (2 s.) also straddled.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '32'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Swing fwd. to hdst., hop to support.(Carballo)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '27'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Makuts to upper arm hang or \xBE Diamidov \xBC Healy to support.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '33'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Salto bwd to handstand. Also to one rail.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '45'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Salto bwd. with \xBD t. to up. arm hang.(Toumilovich)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '28'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Swing forward with 5/4 t. on one arm through-hdst. and healy to up. arm.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '34'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Salto backward with straddle cut to support.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '40'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Salto bwd to handstand 1 rail (connected to Healy type element).(Rumbutis)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '46'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double salto t. to up. arm hang.(Morisue)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '29'
        ),
        _react2.default.createElement(
          'td',
          null,
          '\xBE Diamidov & \xBE Healy on the other hand to supp.(Makuts)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '47'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double salto p. to up. arm hang.(Huang Liping)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'F'
        ),
        _react2.default.createElement(
          'td',
          null,
          '30'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Swing forward with 5/4 t. on one arm through hdst. and healy to support.(Zonderland)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '50'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Hdst. with \xBC t. and fall back to sup. with \xBC t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '62'
        ),
        _react2.default.createElement(
          'td',
          null,
          'St\xFCtzkehr bwd. to support.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '68'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Healy to upper arm hang.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '51'
        ),
        _react2.default.createElement(
          'td',
          null,
          '(Br\xE4ndstr\xF6m)Hdst. with \xBE t. and fall back to sup. with \xBC t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '57'
        ),
        _react2.default.createElement(
          'td',
          null,
          'St\xFCtzkehr bwd. with straddle cut bwd. to sup.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '63'
        ),
        _react2.default.createElement(
          'td',
          null,
          'St\xFCtzkehr bwd. through hdst. to support.(Novikov)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '69'
        ),
        _react2.default.createElement(
          'td',
          null,
          'From hdst. on 1 rail, Healy to upper arm hang.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '52'
        ),
        _react2.default.createElement(
          'td',
          null,
          '(Suarez)3/2 salto bwd. with \xBD t. to up. arm hang.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '70'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Healy to support (also from hdst. on 1 rail).(Healy)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '71'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Following a swing element (min. B) to hdst on 1 rail, Healy (360\xB0 or more) to support.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '79'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Any hdst. with \xBD turn fwd. (also with 2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '85'
        ),
        _react2.default.createElement(
          'td',
          null,
          '\xBD turn bwd. in handstand (also with 2 s.).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '74'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Swing bwd. with \xBD t. hop to hdst.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '80'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Any 1/1 pirouette in hdst. on 2 rails.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '86'
        ),
        _react2.default.createElement(
          'td',
          null,
          'From hdst. on 1 rail, \xBD or \xBE pir. fwd. or bwd. in hdst.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '75'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Swing bwd. with \xBE t. hop to hdst.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '93'
        ),
        _react2.default.createElement(
          'td',
          null,
          'From hdst., salto fwd to support or from hdsd. with rotated grip, inlocate to support.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '76'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Swing bwd. with 1/1 t. hop to hdst. (Gatson 1)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '77'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Gatson 1 with \xBC t to hdst. on 1 rail and \xBC t. hdst. on 2 rails.(Gatson 2)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '95'
        ),
        _react2.default.createElement(
          'td',
          null,
          '5/4 salto fwd. strad. through support to hang or directly to hang.(Lee Chul Hon/Sasaki)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '115'
        ),
        _react2.default.createElement(
          'td',
          null,
          'On end, 1 circle or flair.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '98'
        ),
        _react2.default.createElement(
          'td',
          null,
          '5/4 salto fwd. t. or p. to upper arm hang.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '104'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Salto fwd. t. or p. with \xBC t. to hang on 1 rail.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '116'
        ),
        _react2.default.createElement(
          'td',
          null,
          'In center or on end facing out, 1 circle or flair.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '99'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Salto fwd to support.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '105'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Salto fwd. t. or p. to hang at the end of the bars.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '111'
        ),
        _react2.default.createElement(
          'td',
          null,
          '5/4 salto forward str. to upper arm hang'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '117'
        ),
        _react2.default.createElement(
          'td',
          null,
          'On end, Russian wende swing (360\xB0).(Delesalle)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '100'
        ),
        _react2.default.createElement(
          'td',
          null,
          '5/4 salto fwd. straddled to up. arm hang.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '106'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double salto fwd. t. to up. arm hang.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '101'
        ),
        _react2.default.createElement(
          'td',
          null,
          '5/4 salto fwd. strad. to bent arm sup.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '107'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double salto fwd. p. to up. arm hang.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '113'
        ),
        _react2.default.createElement(
          'td',
          null,
          '(Urzica)Salto fwd. with 1/1 t. to up. arm hang.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '123'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Any flair to hdst.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '129'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Any flair with \xBD t. to hdst.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Forward uprise to support.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '7'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Fwd. uprise with \xBC t. to hang on 1 rail.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Fwd. uprise and straddle cut bwd to handstand.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '8'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Roll bwd. with \xBD t. from up. arm. hang uprise to Kato hop to sup.(Watanabe)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '14'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Roll bwd to handstand with straight arms.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '20'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Salto bwd. with strad. cut to up. arm hang'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '21'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Roll bwd. with strad. cut to support.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '5'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Fwd. uprise with \xBD t. to handstand.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '11'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Fwd. uprise to Makuts to upper arm.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '17'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Fwd. uprise with 1/1 t. to handstand.(Richards)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '23'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Roll bwd with salto bwd tuck to upper arm hang.(Dimitrenko)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'G'
        ),
        _react2.default.createElement(
          'td',
          null,
          '12'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Fwd. uprise to Makuts to support.(Tsolakidis 1)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'F'
        ),
        _react2.default.createElement(
          'td',
          null,
          '18'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Fwd. uprise with 3/2 t. to handstand.(Tsolakidis 2)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'F'
        ),
        _react2.default.createElement(
          'td',
          null,
          '24'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Roll bwd with salto bwd piked to upper arm hang.(Li Xiaopeng)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '32'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Bwd. uprise to handstand (or w. \xBD t).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '38'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Bwd. uprise with \xBD t. and straddle cut bwd to upper arm hang.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '44'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Bwd. uprise with \xBD t. to support.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '33'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Bwd. uprise with \xBD t. hop to handstand.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '39'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Bwd. uprise with \xBD t. a. strad. cut bwd. to sup.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '45'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Bwd. uprise and 5/4 salto fwd. t., p. or strad. to up.arm hang.(Yamawaki)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '28'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Roll bwd. with \xBD t. tuck to upper arm hang.. agrupado al apoyo bra-quial.(Harada)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '34'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Bwd. uprise with \xBE t. hop to hdst. on 1 rail.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '46'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Bwd. uprise and salto fwd. p. to sup.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '29'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Roll bwd. with \xBD t. tuck to hang.. agrupado a la suspensi\xF3n.(Dalton)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '47'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Bwd. uprise and double salto fwd. t. to up arm hang.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '55'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Bwd. uprise and strad. cut or flank over to sup.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '56'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Bwd. uprise and strad. cut or flank over to sup.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '53'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Bwd. uprise and 5/4 salto fwd. straddled to up. Arm hang.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '8'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Moy piked with stradd. cut bwd. and \xBD t. to up. arm hang (also legs together).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '14'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Moy to support bent legs (also without grip release).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Swing forward, straddle cut backward, and regrasp with straight body at horizontal to bent and upper arm.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '9'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Moy piked with 1/1 t. to up. arm hang.(Nolet)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '15'
        ),
        _react2.default.createElement(
          'td',
          null,
          '(Moy)Moy to support str. legs (also without grip release).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '21'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Giant swing bwd. to hdst. or with inlocation fwd. (also with \xBC or \xBD turn and to one rail).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Moy piked with straddle bwd to hdst.(Tippelt)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '10'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Moy and salto fwd. T., p. Or strad. To upper arm hang. (Giraldo)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '22'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Giant swing bwd. to hdst. on one rail (connected to Healy type element).(Piasecky)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '5'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Swing forward, straddle cut backward, and regrasp with straight body at horizontal.(Bhavsar)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '32'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Swing down with salto bwd. str. to hang.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '44'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Giant swing bwd. w. strad. cut to up. arm hang.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '33'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Giant swing bwd. with \xBD t. to up. arm hang.\xBD (Gushiken)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '28'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Giant swg. bwd. with Diamidov to hdst., also to one rail.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '34'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Giant swing bwd. with \xBD t. to support.\xBD (Marinitch)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '40'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Giant swing bwd. with Makuts to upper hang.(Dauser)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '46'
        ),
        _react2.default.createElement(
          'td',
          null,
          '(Korolev)Giant swing bwd. with straddle cut to support or bent arms support.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '29'
        ),
        _react2.default.createElement(
          'td',
          null,
          'or \xBD Giant swg. Diamidov with \xBC or \xBD t. to hdst. or \xBD'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '35'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Giant swg. bwd. with Diamidov to hdst. one rail (connected to Healy type element).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '47'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Giant swing bwd. with \xBD t. and str. cut bwd. to up. arms.(Sosa)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'G'
        ),
        _react2.default.createElement(
          'td',
          null,
          '36'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Belle with 1/1 turn.(Quintero)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '61'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Glide kip'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '62'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Glide kip. with 1/2 t. to support.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '68'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Glide kip to strad. cut bwd. hdst. on 1 or 2 r.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '57'
        ),
        _react2.default.createElement(
          'td',
          null,
          '(Chartrand)Giant swing bwd. and salto with \xBD t to hang on the end.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '63'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Glide kip bwd. to hdst.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '52'
        ),
        _react2.default.createElement(
          'td',
          null,
          '(Belle)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '58'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Giant swing bwd. and salto with \xBD t or p. to up. arm hang or hang.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '53'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Belle piked.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '59'
        ),
        _react2.default.createElement(
          'td',
          null,
          '(Torres)Giant swing bwd. and salto with \xBD t or p. to support.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '65'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Giant swing bwd. and salto with \xBD str to up. arm hang.(Fokin)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'F'
        ),
        _react2.default.createElement(
          'td',
          null,
          '60'
        ),
        _react2.default.createElement(
          'td',
          null,
          '(Tanaka)Giant swing bwd. with \xBD t. and 3/2 salto fwd to up arm hang.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '74'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Glide kip one rail through L-sit strad. to hdst.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '80'
        ),
        _react2.default.createElement(
          'td',
          null,
          '(Li Donghua)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '75'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Glide kip through L-sit p. to hdst.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '76'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Glide kip through L-sit p.to hdst. and hop with 3/4 t or more.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '97'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Cast to upper arm hang.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '115'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Basket with travel to hang'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '98'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Cast to support.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '104'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Cast with \xBD t. to up. arm hang.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '116'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Basket to support'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '99'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Felge with \xBD t. to upper arm hang.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '105'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Cast with \xBD t. to support.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '111'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Cast to straddle cut backward to handstand.(Arican)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '117'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Basket with immed. straddle cut to support.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '100'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Felge with \xBD t. to rear support.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '106'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Basket to handstand or with inlocation (el-grip) and hop to hdst. Also to one rail.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '107'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Basket with \xBC, \xBE or \xBD t. to handstand.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '119'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Basket to one rail hdst. (connected to Healy type element).(Chiarlo)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'F'
        ),
        _react2.default.createElement(
          'td',
          null,
          '114'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Basket with 1/1 t. to handstand.(Teng Hai Bin)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'G'
        ),
        _react2.default.createElement(
          'td',
          null,
          '108'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Basket with 5/4 t. to handstand.(Zhou Shixiong)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'G'
        ),
        _react2.default.createElement(
          'td',
          null,
          '120'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Basket through handstand to Makuts. (Yamamuro)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '121'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Basket forward to support.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '122'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Basket forward with \xBD t. to support.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '128'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Shoot up to hdst. and hop to other rail.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '130'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Shoot up with \xBC t. to hdst.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '136'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Straddled shoot to hdst on 1 rail.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '125'
        ),
        _react2.default.createElement(
          'td',
          null,
          '(Tejada)Basket with salto bwd t. to up. arm hang.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Salto fwd. piked or stretched.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '19'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Salto bwd. piked or str.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Salto fwd. piked or str. with \xBD t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '20'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Salto bwd. piked or str. with \xBD t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Salto fwd. piked or str. with 1/1 or 3/2 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '9'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double salto fwd. t. from end.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '21'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Salto bwd. piked or str. with 1/1 or 3/2 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Salto fwd. piked or str. with 2/1 or 5/2 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '22'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Salto bwd. str. with 2/1 t.(Kan)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '5'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double salto fwd. t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'F'
        ),
        _react2.default.createElement(
          'td',
          null,
          '6'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double salto fwd. piked.(Belyavskiy)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'F'
        ),
        _react2.default.createElement(
          'td',
          null,
          '12'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double salto fwd. t. w. \xBD t. or \xBD t. doub. salt. bwd.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'G'
        ),
        _react2.default.createElement(
          'td',
          null,
          '18'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double salto fwd. piked with \xBD t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'G'
        ),
        _react2.default.createElement(
          'td',
          null,
          '24'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double salto fwd. tucked with 1/1 t.(Larduet)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '43'
        ),
        _react2.default.createElement(
          'td',
          null,
          'From hang on end, salto bwd. stretched.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '32'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double salto bwd. t. from end.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '44'
        ),
        _react2.default.createElement(
          'td',
          null,
          'From hang on end, double salto bwd. t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '33'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double salto bwd. t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '45'
        ),
        _react2.default.createElement(
          'td',
          null,
          'From hang on end, dbl. salto bwd. piked.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '28'
        ),
        _react2.default.createElement(
          'td',
          null,
          'High wende and salto bwd t.or p.(Roethlisberger)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '34'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double salto bwd. pike.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '40'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double salto bwd. t. with \xBD t. or salto bwd. \xBD t. to salto fwd. tucked.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '46'
        ),
        _react2.default.createElement(
          'td',
          null,
          'From hang on end, dbl. salto bwd. t. with 1/1 or \xBD'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'G'
        ),
        _react2.default.createElement(
          'td',
          null,
          '36'
        ),
        _react2.default.createElement(
          'td',
          null,
          '(Hiroyuki Kato)Double salto bwd. t. with 1/1 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Parallel Bars'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'F'
        ),
        _react2.default.createElement(
          'td',
          null,
          '48'
        ),
        _react2.default.createElement(
          'td',
          null,
          'From hang on end, dbl. salto bwd. t. with 2/1 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Back uprise to handstand.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '7'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Back uprise to handstand with \xBD turn.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '13'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Giant swing fwd.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '19'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Giant swing fwd. with \xBD t. thr. hdst.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Back uprise to hdst. with 1/1 turn also to mixt.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '8'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Swing bwd. and pirouette to hang.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '14'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Giant swing fwd. with 1/1 turn in mixt grip.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '20'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Flying giant swing fwd. or with\xBD turn.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '9'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Swing bwd. and pirouette to support.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '15'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Giant swing fwd. with 1/1 turn in double elgrip.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '21'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Flying giant swing fwd. with 1/1 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '31'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Giant swing bwd.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '37'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Giant swing bwd. with \xBD turn.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '43'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Giant swing bwd. with hop to undergrip.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '26'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Giant swing fwd. with one arm in ungr. (360\xB0).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '32'
        ),
        _react2.default.createElement(
          'td',
          null,
          'One arm giant swing bwd. (360'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '44'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Flying giant swing bwd.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '27'
        ),
        _react2.default.createElement(
          'td',
          null,
          '(Zou Li Min)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '45'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Flying giant swing bwd. with 1/1 t. (Quast)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '46'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Flying giant swing bwd. with 2/1 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '50'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Giant swing bwd. with hop \xBD t. to el-grip.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '56'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Giant swing bwd. with \xBD t. to el-grip.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '62'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Long swing fwd. with hop to el-grip.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '68'
        ),
        _react2.default.createElement(
          'td',
          null,
          'El-grip giant swing.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '51'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Giant swing bwd. with hop 3/2 t. to undergrip, mixed el-grip.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '69'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Giant swing rearways fwd. (Russian giant).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '52'
        ),
        _react2.default.createElement(
          'td',
          null,
          '(Rybalko)Giant swing bwd. with hop 3/2 t. to double el- grip.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '70'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Giant swing rw. bwd. (Czech giant swing).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '73'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Giant swing bwd. with inlocation during swing and dislocate to hdst.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '74'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Steineman uprise w. \xBD t. to support.(Ono)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '75'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Elgrip giant swg. with 1/1 t. thr. hdst. in mx. gr.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '76'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Giant swing rw. bwd. (Czech giant swing) with \xBD turn to fwd giant swing.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Back uprise and straddle over to hang rw.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '20'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Back uprise and piked vault with \xBD t. to hang.(Voronin)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Back uprise and strad. hecht with \xBD t. to hang(Markelov)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '9'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Swing fwd. and vault bwd. strad. or piked to hang.(Tkatchev)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Markelov stretched with legs together.(Yamawaki)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '10'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Tkatchev stretched.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '16'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Tkatchev straddled with \xBD t. to mix el-grip into back uprise to hdst.(Lynch)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '22'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Stalder, stoop circle or free hip circle bwd to Tkatchev straddle.(Piatti)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '11'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Tkatchev stretched with \xBD t. to mix el-grip into back uprise to hdst.(Moznik)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '17'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Tkatchev straddled \xBD t. to double elgrip.(Kulesza)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '23'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Piatti stretched.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'F'
        ),
        _react2.default.createElement(
          'td',
          null,
          '6'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Back uprise and hecht stretched with 3/2 t. to hang.(Walstrom)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'F'
        ),
        _react2.default.createElement(
          'td',
          null,
          '12'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Tkatchev stretched with 1/1 t.(Liukin)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'F'
        ),
        _react2.default.createElement(
          'td',
          null,
          '24'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Piatti stretched with \xBD t. to mix el-grip into back uprise to hdst.(Kierzkowski)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '26'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Back uprise and rear vault with \xBC t. to hang.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '33'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Swing bwd. and salto fwd. t., p. or strad. to hg. also from el-grip.(J\xE4ger)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '28'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Piatti piked.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '34'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Salto fwd. stretched, also from el-grip.(Balabanov)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '46'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Swing fwd. and counter salto fwd. strad. to hg.(Xiao Ruizhi)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '29'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Piatti with \xBD t. to mix el-grip into back up. to hdst.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '47'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Yamawaki \xBD t. stretched to mixed grip into back uprise to hdst.(Mu\xF1oz - Pozzo)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'G'
        ),
        _react2.default.createElement(
          'td',
          null,
          '30'
        ),
        _react2.default.createElement(
          'td',
          null,
          '(Suarez)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'F'
        ),
        _react2.default.createElement(
          'td',
          null,
          '36'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Salto fwd. stretched with 1/1 t. also from el grip.(Winkler - Pogorelev)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'G'
        ),
        _react2.default.createElement(
          'td',
          null,
          '42'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Salto fwd. stretched with 2/1 t. also from el grip.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '57'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Czech giant and vault bwd. strad. to hang.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '63'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Swing fwd. and salto bwd. strad. w. \xBD t. to hg.(Deltchev)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '69'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Swing fwd. and salto bwd. piked w. \xBD t. to hang.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '52'
        ),
        _react2.default.createElement(
          'td',
          null,
          '(Gaylord) Salto fwd, tuck or strad. over the bar, also from el-grip.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '59'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Gaylord piked.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'F'
        ),
        _react2.default.createElement(
          'td',
          null,
          '54'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Gaylord with \xBD t.(Pegan)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'G'
        ),
        _react2.default.createElement(
          'td',
          null,
          '60'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Pegan Pike.(Maras)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'G'
        ),
        _react2.default.createElement(
          'td',
          null,
          '66'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Kovacs stretched or piked with 1/1 turn.(Cassina)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'F'
        ),
        _react2.default.createElement(
          'td',
          null,
          '72'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Swing fwd. and salto bwd. w. 3/2 t. to hang.(Deff)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '75'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Stalder \xBD t. to rear vault with \xBC t. to hang.(Jansen)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '76'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Salto bwd. \xBD t.tucked over the bar.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '82'
        ),
        _react2.default.createElement(
          'td',
          null,
          '(Kovacs)Double salto bwd. t. over the bar.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '77'
        ),
        _react2.default.createElement(
          'td',
          null,
          '(Gaylord 2)Salto bwd. \xBD t.piked over the bar.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '83'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Kovacs piked or stretched.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '89'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Kovacs with 1/1 t.(Kolman)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'H'
        ),
        _react2.default.createElement(
          'td',
          null,
          '84'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Kovacs with 2/1 t.(Bretschneider)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'G'
        ),
        _react2.default.createElement(
          'td',
          null,
          '96'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Kovacs with 3/2 t. to mix grip.(Shaham)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Kip to hdst. or from mixed grip to hdst w. \xBD t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '13'
        ),
        _react2.default.createElement(
          'td',
          null,
          'From hang or from support, free hip circle through handstand.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '19'
        ),
        _react2.default.createElement(
          'td',
          null,
          'From hang or from support, free hip circle through handstand with \xBD turn.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Kip to hdst. in under or mixed grip w. 1/1 t. to mixed grip.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '8'
        ),
        _react2.default.createElement(
          'td',
          null,
          '(Weiler)From hdst., free hip circle fwd. thr. hdst.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '14'
        ),
        _react2.default.createElement(
          'td',
          null,
          'tourWeiler with \xBD turn. giro'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '20'
        ),
        _react2.default.createElement(
          'td',
          null,
          'From hang or from support, free hip circle-through handstand with \xBD turn to el grip.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Kip to hdst. in under or mixed grip w. 1/1 t. to el-grip.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '9'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Weiler with 1/1 turn to mixed - grip.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '10'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Weiler with 1/1 turn to double el - grip.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '25'
        ),
        _react2.default.createElement(
          'td',
          null,
          'From hang or from support, free hip circle hop to handstand.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '32'
        ),
        _react2.default.createElement(
          'td',
          null,
          '(Endo)Free circle fwd. straddled or legs together thr. hdst.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '38'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Endo with \xBD t. thr. hdst.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '44'
        ),
        _react2.default.createElement(
          'td',
          null,
          '(Stalder)Free circle bwd. straddle or legs together thr. hdst.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '27'
        ),
        _react2.default.createElement(
          'td',
          null,
          'From hang or from support, free hip circle hop through handstand with 1/1 turn'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '39'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Endo. with 1/1 t. thr. hdst. in mixt grip.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '45'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Stalder with hop 1/1 t. through hdst.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '40'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Endo with 1/1 t. thr. hdst. in el-grip.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '46'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Stalder with hop 3/2 turn through hdst. in mix el-grip.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '47'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Stalder with hop 3/2 turn through hdst. in el-grip.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '50'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Stalder with \xBD turn through hdst.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '56'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Stalder with hop through hdst.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '51'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Stalder with \xBD turn through hdst. in el-grip.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '57'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Stalder with hop through hdst. in el-grip.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '63'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Stoop circle rearward fwd. through hdst. (Adler).'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '64'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Adler with \xBD t. through hdst. in ovgr.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '70'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Adler hop to hdst. in ungr. or ovgr. or mixed grip.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '65'
        ),
        _react2.default.createElement(
          'td',
          null,
          '(Fuentes)Adler and 1/1 t. through hdst. in ungr.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '79'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Back toss to dorsal hang.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '80'
        ),
        _react2.default.createElement(
          'td',
          null,
          'From dorsal hang, uprise fwd. to support rw.(Steineman)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '92'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Steineman uprise w. flank bwd. to sup'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '81'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Stoop in and free back toss to dorsal hang.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '87'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Steineman uprise w. stoop or to hdst.(Koste)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '93'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Endo in el-grip thr. hdst.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '76'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Adler and 1/1 t. thr. hdst. in mixed grip, also with hop.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '94'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Endo in el-grip and 1/1 t. to mixed grip or under-grip.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '103'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Stoop circle fwd. to straddle cut to hang or sup.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '104'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Stoop circle fwd. to straddle cut through hdst.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '105'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Stoop circle fwd. to straddle cut with \xBD t. (Carballo)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '100'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Koste \xBD turn to elgrip. Koste con \xBD giro a cubital.(Likhovitskiy)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '106'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Carballo with \xBD turn to mixed el-grip.(Quintero)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '107'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Quintero to el-grip.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '1'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Salto fwd. piked or stretched, also with \xBD t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '2'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Salto fwd. str. with 1/1 or 3/2 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '3'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Salto fwd. str. with 2/1 or 5/2 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '9'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double salto fwd. t. or p.or with'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '21'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double salto fwd. t. or p. or with \xBD turn over the bar.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '10'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double salto fwd. t. or p. with 1/1 or 3/2 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '16'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double salto fwd. str. or with'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '22'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Dbl. salto fwd. t. or p. w. 1/1 or 3/2 t. over the bar.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '11'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double salto fwd. t. or p. with 2/1 or 5/2 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '17'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double salto fwd. str. with 1/1 or 3/2 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'G'
        ),
        _react2.default.createElement(
          'td',
          null,
          '6'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Triple salto fwd. t. (Rumbutis)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '25'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Salto bwd. piked or str. also with \xBD or 1/1 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '26'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Salto bwd. str. with 3/2 or 2/1 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '32'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double salto bwd. tuck or pike.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '27'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Salto bwd. str. with 5/2 or 3/1 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '33'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double salto bwd. t. or pike with 1/1 t.(Tsukahara)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '39'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double salto bwd. str.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '34'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double salto bwd. t. or p. with 2/1 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '40'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double salto bwd. str. with 1/1 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'E'
        ),
        _react2.default.createElement(
          'td',
          null,
          '41'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double salto bwd. str. with 2/1 t.(Watanabe)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'F'
        ),
        _react2.default.createElement(
          'td',
          null,
          '42'
        ),
        _react2.default.createElement(
          'td',
          null,
          '(Fedorchenko)Double salto bwd. str. with 3/1 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'F'
        ),
        _react2.default.createElement(
          'td',
          null,
          '48'
        ),
        _react2.default.createElement(
          'td',
          null,
          '(Andrianov)(Hoffmann)Triple salto bwd. t. or over the bar.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'A'
        ),
        _react2.default.createElement(
          'td',
          null,
          '61'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Hecht strad., hecht or hecht w. \xBD t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '50'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double salto bwd. t. or p. over the bar.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'B'
        ),
        _react2.default.createElement(
          'td',
          null,
          '62'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Hecht w. 1/1 or 3/2 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '51'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Dbl. salto bwd. t. or p. with 1/1 t. over the bar.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'C'
        ),
        _react2.default.createElement(
          'td',
          null,
          '57'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double salto bwd. str over the bar.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '52'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double salto bwd. t. or p. with 2/1 t. over the bar'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '58'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Double salto bwd. str. w. 1/1 t. over the bar.(Hayden)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'D'
        ),
        _react2.default.createElement(
          'td',
          null,
          '64'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Hecht w. 2/1 t.'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'G'
        ),
        _react2.default.createElement(
          'td',
          null,
          '54'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Triple salto bwd. p.(Fardan)'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Horizontal Bar'
        ),
        _react2.default.createElement(
          'td',
          null,
          '4'
        ),
        _react2.default.createElement(
          'td',
          null,
          'G'
        ),
        _react2.default.createElement(
          'td',
          null,
          '60'
        ),
        _react2.default.createElement(
          'td',
          null,
          'Triple salto bwd. t. with 1/1 t.(Belle)'
        )
      )
    )
  );
};

exports.default = function () {
  return _react2.default.createElement(
    'div',
    { className: 'flex-center' },
    _react2.default.createElement(
      'div',
      { className: 'container-wider' },
      _react2.default.createElement(
        _Styled.Title,
        null,
        'MAG 2020'
      ),
      _react2.default.createElement(MagCode, null)
    )
  );
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _Styled = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
  var posts = _ref.posts;
  return _react2.default.createElement(
    'div',
    { className: 'flex-center' },
    _react2.default.createElement(
      _reactStatic.Head,
      null,
      _react2.default.createElement(
        'title',
        null,
        'Wiwa - Blog'
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'container' },
      _react2.default.createElement(
        _Styled.Title,
        null,
        'Ramblings'
      ),
      posts.map(function (post) {
        return _react2.default.createElement(
          'span',
          { key: post.data.slug },
          _react2.default.createElement(
            'h4',
            null,
            _react2.default.createElement(
              _reactStatic.Link,
              { to: '/blog/' + post.data.slug + '/' },
              post.data.title
            )
          ),
          _react2.default.createElement(
            'small',
            null,
            post.data.date
          ),
          _react2.default.createElement(
            'p',
            null,
            post.data.teaser
          )
        );
      })
    )
  );
});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _withHtml = __webpack_require__(30);

var _withHtml2 = _interopRequireDefault(_withHtml);

var _Styled = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//


exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
  var post = _ref.post;
  return _react2.default.createElement(
    'div',
    { className: 'flex-center' },
    _react2.default.createElement(
      _reactStatic.Head,
      null,
      _react2.default.createElement(
        'title',
        null,
        'Wiwa - ',
        post.data.title
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'container' },
      _react2.default.createElement(
        _Styled.Title,
        null,
        post.data.title
      ),
      _react2.default.createElement(_withHtml2.default, { source: post.content, escapeHtml: false })
    )
  );
});

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = function () {
  return _react2.default.createElement(
    'div',
    { className: 'flex-center' },
    _react2.default.createElement(
      _reactStatic.Head,
      null,
      _react2.default.createElement(
        'title',
        null,
        'Wiwa - Splat'
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'container' },
      _react2.default.createElement(
        'h1',
        null,
        '404 - Oh no\'s! We couldn\'t find that page :('
      )
    )
  );
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(16);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(17);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)
exports.default = _App2.default;

// Render your app


// Your top level component

if (typeof document !== 'undefined') {
  var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate || _reactDom2.default.render;
  var render = function render(Comp) {
    renderMethod(_react2.default.createElement(Comp, null), document.getElementById('root'));
  };

  // Render!
  render(_App2.default);
}

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactHotLoader = __webpack_require__(18);

var _reactStaticRoutes = __webpack_require__(19);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

var _Nav = __webpack_require__(31);

var _Nav2 = _interopRequireDefault(_Nav);

var _GlobalStyle = __webpack_require__(32);

var _GlobalStyle2 = _interopRequireDefault(_GlobalStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return _react2.default.createElement(
    _reactStatic.Router,
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_Nav2.default, {
        title: 'Wiwa',
        headings: [{ link: 'blog', title: 'Blog' }, { link: 'gymnastics', title: 'Gymnastics' }]
      }),
      _react2.default.createElement(_reactStaticRoutes2.default, null),
      _react2.default.createElement(_GlobalStyle2.default, null)
    )
  );
};
//
exports.default = (0, _reactHotLoader.hot)(module)(App);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(20);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(21);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(22);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(23);

var _reactUniversalComponent = __webpack_require__(24);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

var _reactStatic = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _reactUniversalComponent.setHasBabelPlugin)();

var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return _react2.default.createElement(
      'div',
      null,
      'An error occurred loading this page\'s template. More information is available in the console.'
    );
  }
};

var t_0 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Home',
  file: '/home/lukewiwa/repos/lukewiwa.github.io/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 8)), (0, _importCss3.default)('src/containers/Home', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Home');
  },
  resolve: function resolve() {
    return /*require.resolve*/(8);
  },
  chunkName: function chunkName() {
    return 'src/containers/Home';
  }
}), universalOptions);
var t_1 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Gymnastics',
  file: '/home/lukewiwa/repos/lukewiwa.github.io/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 9)), (0, _importCss3.default)('src/containers/Gymnastics', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Gymnastics');
  },
  resolve: function resolve() {
    return /*require.resolve*/(9);
  },
  chunkName: function chunkName() {
    return 'src/containers/Gymnastics';
  }
}), universalOptions);
var t_2 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/gymnastics/Markov',
  file: '/home/lukewiwa/repos/lukewiwa.github.io/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 10)), (0, _importCss3.default)('src/gymnastics/Markov', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/gymnastics/Markov');
  },
  resolve: function resolve() {
    return /*require.resolve*/(10);
  },
  chunkName: function chunkName() {
    return 'src/gymnastics/Markov';
  }
}), universalOptions);
var t_3 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/gymnastics/MAG2020',
  file: '/home/lukewiwa/repos/lukewiwa.github.io/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 11)), (0, _importCss3.default)('src/gymnastics/MAG2020', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/gymnastics/MAG2020');
  },
  resolve: function resolve() {
    return /*require.resolve*/(11);
  },
  chunkName: function chunkName() {
    return 'src/gymnastics/MAG2020';
  }
}), universalOptions);
var t_4 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Blog',
  file: '/home/lukewiwa/repos/lukewiwa.github.io/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 12)), (0, _importCss3.default)('src/containers/Blog', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Blog');
  },
  resolve: function resolve() {
    return /*require.resolve*/(12);
  },
  chunkName: function chunkName() {
    return 'src/containers/Blog';
  }
}), universalOptions);
var t_5 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Post',
  file: '/home/lukewiwa/repos/lukewiwa.github.io/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 13)), (0, _importCss3.default)('src/containers/Post', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Post');
  },
  resolve: function resolve() {
    return /*require.resolve*/(13);
  },
  chunkName: function chunkName() {
    return 'src/containers/Post';
  }
}), universalOptions);
var t_6 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/404',
  file: '/home/lukewiwa/repos/lukewiwa.github.io/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 14)), (0, _importCss3.default)('src/containers/404', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(14);
  },
  chunkName: function chunkName() {
    return 'src/containers/404';
  }
}), universalOptions);

// Template Map
global.componentsByTemplateID = global.componentsByTemplateID || [t_0, t_1, t_2, t_3, t_4, t_5, t_6];

// Template Tree
global.templateIDsByPath = global.templateIDsByPath || {
  '404': 6

  // Get template for given path
};var getComponentForPath = function getComponentForPath(path) {
  path = (0, _reactStatic.cleanPath)(path);
  return global.componentsByTemplateID[global.templateIDsByPath[path]];
};

global.reactStaticGetComponentForPath = getComponentForPath;
global.reactStaticRegisterTemplateIDForPath = function (path, id) {
  global.templateIDsByPath[path] = id;
};

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Comp = _props.component,
          render = _props.render,
          children = _props.children;


      var getFullComponentForPath = function getFullComponentForPath(path) {
        var Comp = getComponentForPath(path);
        var is404 = path === '404';
        if (!Comp) {
          is404 = true;
          Comp = getComponentForPath('404');
        }
        return function (newProps) {
          return Comp ? _react2.default.createElement(Comp, _extends({}, newProps, is404 ? { is404: true } : {})) : null;
        };
      };

      var renderProps = {
        componentsByTemplateID: global.componentsByTemplateID,
        templateIDsByPath: global.templateIDsByPath,
        getComponentForPath: getFullComponentForPath
      };

      if (Comp) {
        return _react2.default.createElement(Comp, renderProps);
      }

      if (render || children) {
        return (render || children)(renderProps);
      }

      // This is the default auto-routing renderer
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Comp = getFullComponentForPath(props.location.pathname);
          // If Comp is used as a component here, it triggers React to re-mount the entire
          // component tree underneath during reconciliation, losing all internal state.
          // By unwrapping it here we keep the real, static component exposed directly to React.
          return Comp && Comp(_extends({}, props, { key: props.location.pathname }));
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(25);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(26);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(27);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (
    // $FlowIgnore
    module.hot && (module.hot.data || module.hot.status() === 'apply')
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(component) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.modCache = {};
  options.promCache = {};

  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(component, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var Component = void 0;

        try {
          Component = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (Component) return Component;
          return requireAsync(props, context);
        }).then(function (Component) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });
          return Component;
        });
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (!_this._mounted) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = { error: null };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req2 = (0, _requireUniversalModule2.default)(component, options, this.props),
            addModule = _req2.addModule,
            requireSync = _req2.requireSync,
            requireAsync = _req2.requireAsync,
            asyncOnly = _req2.asyncOnly;

        var Component = void 0;

        try {
          Component = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({ error: error });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (Component || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({ Component: Component }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req3 = (0, _requireUniversalModule2.default)(component, options, nextProps, this.props),
              requireSync = _req3.requireSync,
              requireAsync = _req3.requireAsync,
              shouldUpdate = _req3.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var Component = void 0;

            try {
              Component = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({ error: error });
            }

            this.handleBefore(false, !!Component);

            if (!Component) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = { Component: Component };

            if (alwaysDelay) {
              if (loadingTransition) this.update({ Component: null }); // display `loading` during componentWillReceiveProps
              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _Component = requireSync(nextProps, this.context);
            this.setState({ Component: function Component() {
                return null;
              } }); // HMR /w Redux and HOCs can be finicky, so we
            setTimeout(function () {
              return _this2.setState({ Component: _Component });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.Component && loadingTransition) {
          this.update({ Component: null }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (Component) {
          var state = { Component: Component };

          var timeLapsed = new Date() - time;
          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({ error: error });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;

          var info = { isMount: isMount, isSync: isSync, isServer: isServer };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var Component = state.Component,
            error = state.error;


        if (Component && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;

            var info = { isMount: isMount, isSync: isSync, isServer: isServer };
            onAfter(info, Component);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            error = _state.error,
            Component = _state.Component;

        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        // user-provided props (e.g. for data-fetching loading):


        if (isLoading) {
          return (0, _utils.createElement)(Loading, props);
        } else if (userError) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: userError }));
        } else if (error) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: error }));
        } else if (Component) {
          // primary usage (for async import loading + errors):
          return (0, _utils.createElement)(Component, props);
        }

        return (0, _utils.createElement)(Loading, props);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}
exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(6);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache;


  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;

  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);

    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;

    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);
        if (onError) {
          var _isServer = typeof window === 'undefined';
          var info = { isServer: _isServer };
          onError(error, info);
        }
        rej(error);
      };

      // const timer = timeout && setTimeout(reject, timeout)
      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);

        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);

        reject(new Error('export not found'));
      };

      var request = load(props, { resolve: resolve, reject: reject });

      // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.
      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });

    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);
        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);

    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);

    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    return typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };

  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("react-feather");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("react-twitter-embed");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("react-markdown/with-html");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  background-color: ', ';\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 3em 3em;\n  grid-template-areas:\n    "brand"\n    "menu";\n  align-items: center;\n  justify-items: center;\n  @media only screen and (min-width : ', 'em) {\n  grid-template-columns: minmax(1em, 1fr) ', 'em minmax(auto, ', 'em) ', 'em minmax(1em, 1fr);\n    grid-template-rows: 4em;\n    grid-template-areas: ". brand . menu .";\n  }\n\n  a {\n    color: ', ';\n  }\n'], ['\n  background-color: ', ';\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 3em 3em;\n  grid-template-areas:\n    "brand"\n    "menu";\n  align-items: center;\n  justify-items: center;\n  @media only screen and (min-width : ', 'em) {\n  grid-template-columns: minmax(1em, 1fr) ', 'em minmax(auto, ', 'em) ', 'em minmax(1em, 1fr);\n    grid-template-rows: 4em;\n    grid-template-areas: ". brand . menu .";\n  }\n\n  a {\n    color: ', ';\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  margin: 1em;\n  grid-area: brand;\n  font-size: 1.2rem;\n  @media only screen and (min-width : ', 'em) {\n    justify-self: start;\n\n  }\n'], ['\n  margin: 1em;\n  grid-area: brand;\n  font-size: 1.2rem;\n  @media only screen and (min-width : ', 'em) {\n    justify-self: start;\n\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  grid-area: menu;\n  @media only screen and (min-width : ', 'em) {\n    justify-self: end;\n  }\n'], ['\n  grid-area: menu;\n  @media only screen and (min-width : ', 'em) {\n    justify-self: end;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  padding: 0.5em 0;\n  margin: 0 0.5em;\n  &:hover {\n    text-decoration: none;\n    color: ', ';\n  }\n  &.active {\n    border-bottom-style: solid;\n    border-bottom-width: 2px;\n    border-color: ', ';\n  }\n'], ['\n  padding: 0.5em 0;\n  margin: 0 0.5em;\n  &:hover {\n    text-decoration: none;\n    color: ', ';\n  }\n  &.active {\n    border-bottom-style: solid;\n    border-bottom-width: 2px;\n    border-color: ', ';\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _variables = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var section = _variables.maxWidth / 3;

var Container = _styledComponents2.default.nav(_templateObject, _variables.mainColour, _variables.minWidth, section, section, section, _variables.secondColour);

var Brand = _styledComponents2.default.div(_templateObject2, _variables.minWidth);

var Menu = _styledComponents2.default.div(_templateObject3, _variables.minWidth);

var Item = (0, _styledComponents2.default)(_reactStatic.Link)(_templateObject4, _variables.thirdColour, _variables.secondColour);

exports.default = function (props) {
  return _react2.default.createElement(
    Container,
    null,
    _react2.default.createElement(
      Brand,
      null,
      _react2.default.createElement(
        Item,
        { exact: true, to: '/' },
        props.title
      )
    ),
    _react2.default.createElement(
      Menu,
      null,
      props.headings.map(function (heading, i) {
        return _react2.default.createElement(
          Item,
          { key: i, to: '/' + heading.link },
          heading.title
        );
      })
    )
  );
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  html {\n    -moz-text-size-adjust: 100%;\n    -webkit-text-size-adjust: 100%;\n    box-sizing: border-box;\n    text-size-adjust: 100%;\n  }\n\n  *,\n  :after,\n  :before {\n    box-sizing: inherit;\n  }\n\n  body {\n    background-color: #fff;\n    color: ', ';\n    font-size: 1rem;\n    line-height: 1.5;\n    margin: 0;\n  }\n\n  body,\n  button,\n  input,\n  select,\n  textarea {\n    font-family: -apple-system,BlinkMacSystemFont,Hiragino Sans GB,Roboto,Segoe UI,Microsoft Yahei,\u5FAE\u8F6F\u96C5\u9ED1,Oxygen-Sans,Ubuntu,Cantarell,Helvetica,Arial,STHeiti,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin: 1.875rem 0 0;\n  }\n\n  address,\n  blockquote,\n  dl,\n  figure,\n  hr,\n  ol,\n  p,\n  pre,\n  table,\n  ul {\n    margin: 0.9375rem 0 0;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-weight: 600;\n  }\n\n  h1 {\n    font-size: 2rem;\n  }\n\n  h2 {\n    font-size: 1.625rem;\n  }\n\n  h3 {\n    font-size: 1.375rem;\n  }\n\n  h4 {\n    font-size: 1.25rem;\n  }\n\n  h5 {\n    font-size: 1.125rem;\n  }\n\n  h6 {\n    font-size: 1rem;\n  }\n\n  a {\n    -webkit-text-decoration-skip: objects;\n    color: ', ';\n    text-decoration: none;\n  }\n\n  a:active,\n  a:hover {\n    text-decoration: underline;\n  }\n\n  b,\n  dt,\n  strong {\n    font-weight: 600;\n  }\n\n  code,\n  kbd,\n  samp {\n    background-color: #f2f2f2;\n    font-size: 85%;\n    padding: 0.2em 0.3em;\n  }\n\n  code,\n  kbd,\n  pre,\n  samp {\n    font-family: Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;\n  }\n\n  pre {\n    -webkit-overflow-scrolling: touch;\n    background-color: #f2f2f2;\n    line-height: 1.2;\n    overflow: auto;\n    padding: 0.9375rem;\n  }\n\n  pre,\n  pre code {\n    font-size: 0.8125rem;\n  }\n\n  pre code {\n    background-color: transparent;\n    padding: 0;\n  }\n\n  blockquote {\n    border-left: 5px solid #ddd;\n    color: #777;\n    padding-left: 0.9375rem;\n  }\n\n  ol,\n  ul {\n    padding-left: 1.875rem;\n  }\n\n  dd,\n  dt,\n  ol ol,\n  ol ul,\n  ul ol,\n  ul ul {\n    margin: 0;\n  }\n\n  hr {\n    border: 0;\n    border-top: 1px solid #ddd;\n  }\n\n  small,\n  sub,\n  sup {\n    font-size: 85%;\n  }\n\n  sub,\n  sup {\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n\n  sub {\n    bottom: -.2em;\n  }\n\n  sup {\n    top: -.4em;\n  }\n\n  address,\n  time {\n    font-style: normal;\n  }\n\n  mark {\n    background-color: #ff0;\n    color: #333;\n    padding: 0 0.2em;\n  }\n\n  rt {\n    font-size: 60%;\n  }\n\n  abbr[title] {\n    -webkit-text-decoration: underline dotted;\n    border-bottom: 0;\n    text-decoration: underline;\n    text-decoration: underline dotted;\n  }\n\n  audio:not([controls]) {\n    display: none;\n    height: 0;\n  }\n\n  img {\n    border-style: none;\n    display: block;\n    max-width: 90%;\n    min-width: 20em;\n    margin-left: auto;\n    margin-right: auto;\n\n  }\n\n  audio,\n  img,\n  video {\n    max-width: 90%;\n  }\n\n  figcaption {\n    color: #777;\n    font-size: 85%;\n  }\n\n  [role=button] {\n    cursor: pointer;\n  }\n\n  [role=button],\n  a,\n  area,\n  button,\n  input,\n  label,\n  select,\n  summary,\n  textarea {\n    -ms-touch-action: manipulation;\n    touch-action: manipulation;\n  }\n\n  ::-webkit-file-upload-button,\n  [type=reset],\n  [type=submit],\n  button,\n  html [type=button] {\n    -webkit-appearance: button;\n    appearance: button;\n  }\n\n  [type=search] {\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    appearance: none;\n  }\n\n  ::-webkit-file-upload-button {\n    font: inherit;\n  }\n\n  [hidden] {\n    display: none;\n  }\n\n  fieldset {\n    border: 1px solid #ddd;\n    margin: 0.9375rem 0 0;\n    padding: 0 0.9375rem 0.9375rem;\n  }\n\n  legend {\n    padding: 0 0.2em;\n  }\n\n  optgroup {\n    color: #777;\n    font-style: normal;\n    font-weight: 400;\n  }\n\n  option {\n    color: #333;\n  }\n\n  progress {\n    max-width: 100%;\n  }\n\n  .container,\n  .container-fluid,\n  .container-wider {\n    -ms-flex-positive: 1;\n    -webkit-box-flex: 1;\n    -webkit-flex-grow: 1;\n    flex-grow: 1;\n    overflow: hidden;\n    padding: 0 0.9375rem 4em 0.9375rem;\n  }\n\n  .container {\n    max-width: 50rem;\n  }\n\n  .container-wider {\n    max-width: 75rem;\n  }\n\n  .flex-bottom,\n  .flex-center,\n  .flex-left,\n  .flex-middle,\n  .flex-right,\n  .flex-top,\n  .flex-vertical {\n    -ms-flex-flow: row nowrap;\n    -webkit-box-direction: normal;\n    -webkit-box-orient: horizontal;\n    -webkit-flex-flow: row nowrap;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    flex-flow: row nowrap;\n  }\n\n  .flex-bottom,\n  .flex-center,\n  .flex-left,\n  .flex-middle,\n  .flex-right,\n  .flex-top,\n  .flex-vertical.flex-bottom,\n  .flex-vertical.flex-center,\n  .flex-vertical.flex-left,\n  .flex-vertical.flex-middle,\n  .flex-vertical.flex-right,\n  .flex-vertical.flex-top {\n    -ms-flex-align: stretch;\n    -ms-flex-pack: start;\n    -webkit-align-items: stretch;\n    -webkit-box-align: stretch;\n    -webkit-box-pack: start;\n    -webkit-justify-content: flex-start;\n    align-items: stretch;\n    justify-content: flex-start;\n  }\n\n  .flex-center,\n  .flex-vertical.flex-middle {\n    -ms-flex-pack: center;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n    justify-content: center;\n  }\n\n  .flex-right,\n  .flex-vertical.flex-bottom {\n    -ms-flex-pack: end;\n    -webkit-box-pack: end;\n    -webkit-justify-content: flex-end;\n    justify-content: flex-end;\n  }\n\n  .flex-top,\n  .flex-vertical.flex-left {\n    -ms-flex-align: start;\n    -webkit-align-items: flex-start;\n    -webkit-box-align: start;\n    align-items: flex-start;\n  }\n\n  .flex-middle,\n  .flex-vertical.flex-center {\n    -ms-flex-align: center;\n    -webkit-align-items: center;\n    -webkit-box-align: center;\n    align-items: center;\n  }\n\n  .flex-bottom,\n  .flex-vertical.flex-right {\n    -ms-flex-align: end;\n    -webkit-align-items: flex-end;\n    -webkit-box-align: end;\n    align-items: flex-end;\n  }\n\n  .units-gap {\n    margin-left: -.46875rem;\n    margin-right: -.46875rem;\n  }\n\n  .units-gap > .unit,\n  .units-gap > .unit-0,\n  .units-gap > .unit-1,\n  .units-gap > .unit-1-2,\n  .units-gap > .unit-1-3,\n  .units-gap > .unit-1-4,\n  .units-gap > .unit-1-on-mobile,\n  .units-gap > .unit-2-3,\n  .units-gap > .unit-3-4 {\n    padding-left: 0.46875rem;\n    padding-right: 0.46875rem;\n  }\n\n  .units-gap-big {\n    margin-left: -.9375rem;\n    margin-right: -.9375rem;\n  }\n\n  .units-gap-big > .unit,\n  .units-gap-big > .unit-0,\n  .units-gap-big > .unit-1,\n  .units-gap-big > .unit-1-2,\n  .units-gap-big > .unit-1-3,\n  .units-gap-big > .unit-1-4,\n  .units-gap-big > .unit-1-on-mobile,\n  .units-gap-big > .unit-2-3,\n  .units-gap-big > .unit-3-4 {\n    padding-left: 0.9375rem;\n    padding-right: 0.9375rem;\n  }\n\n  .unit {\n    -ms-flex-positive: 1;\n    -ms-flex-preferred-size: 0;\n    -webkit-box-flex: 1;\n    -webkit-flex-basis: 0;\n    -webkit-flex-grow: 1;\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n\n  .unit-1,\n  .unit-1-2,\n  .unit-1-3,\n  .unit-1-4,\n  .unit-1-on-mobile,\n  .unit-2-3,\n  .unit-3-4 {\n    -ms-flex-negative: 0;\n    -webkit-flex-shrink: 0;\n    flex-shrink: 0;\n  }\n\n  .unit-1 {\n    -ms-flex-preferred-size: 100%;\n    -webkit-flex-basis: 100%;\n    flex-basis: 100%;\n    max-width: 100%;\n  }\n\n  .unit-1-2 {\n    -ms-flex-preferred-size: 50%;\n    -webkit-flex-basis: 50%;\n    flex-basis: 50%;\n    max-width: 50%;\n  }\n\n  .unit-1-3 {\n    -ms-flex-preferred-size: 33.33%;\n    -webkit-flex-basis: 33.33%;\n    flex-basis: 33.33%;\n    max-width: 33.33%;\n  }\n\n  .unit-2-3 {\n    -ms-flex-preferred-size: 66.67%;\n    -webkit-flex-basis: 66.67%;\n    flex-basis: 66.67%;\n    max-width: 66.67%;\n  }\n\n  .unit-1-4 {\n    -ms-flex-preferred-size: 25%;\n    -webkit-flex-basis: 25%;\n    flex-basis: 25%;\n    max-width: 25%;\n  }\n\n  .unit-3-4 {\n    -ms-flex-preferred-size: 75%;\n    -webkit-flex-basis: 75%;\n    flex-basis: 75%;\n    max-width: 75%;\n  }\n\n  .flex-vertical {\n    -ms-flex-direction: column;\n    -webkit-box-direction: normal;\n    -webkit-box-orient: vertical;\n    -webkit-flex-direction: column;\n    flex-direction: column;\n  }\n\n  .flex-vertical > .unit,\n  .flex-vertical > .unit-0,\n  .flex-vertical > .unit-1,\n  .flex-vertical > .unit-1-2,\n  .flex-vertical > .unit-1-3,\n  .flex-vertical > .unit-1-4,\n  .flex-vertical > .unit-1-on-mobile,\n  .flex-vertical > .unit-2-3,\n  .flex-vertical > .unit-3-4 {\n    max-width: none;\n  }\n\n  .flex-vertical > .unit-1 {\n    max-height: 100%;\n  }\n\n  .flex-vertical > .unit-1-2 {\n    max-height: 50%;\n  }\n\n  .flex-vertical > .unit-1-3 {\n    max-height: 33.33%;\n  }\n\n  .flex-vertical > .unit-2-3 {\n    max-height: 66.67%;\n  }\n\n  .flex-vertical > .unit-1-4 {\n    max-height: 25%;\n  }\n\n  .flex-vertical > .unit-3-4 {\n    max-height: 75%;\n  }\n\n  .flex-wrap {\n    -ms-flex-wrap: wrap;\n    -webkit-flex-wrap: wrap;\n    flex-wrap: wrap;\n  }\n\n  @media (max-width: 767px) {\n    .unit-1-on-mobile {\n        -ms-flex-preferred-size: 100%;\n        -webkit-flex-basis: 100%;\n        flex-basis: 100%;\n        max-width: 100%;\n    }\n\n    .flex-vertical > .unit-1-on-mobile {\n        max-height: 100%;\n    }\n  }\n\n  .top-gap-big {\n    margin-top: 1.875rem !important;\n  }\n\n  .top-gap {\n    margin-top: 0.9375rem !important;\n  }\n\n  .top-gap-0 {\n    margin-top: 0 !important;\n  }\n\n  @media (max-width: 767px) {\n    .hide-on-mobile {\n        display: none !important;\n    }\n  }\n\n  @media (min-width: 768px) {\n    .show-on-mobile {\n        display: none !important;\n    }\n  }\n\n  table {\n    background-color: #fff;\n    border: 0;\n    border-collapse: collapse;\n    border-spacing: 0;\n    width: 100%;\n  }\n\n  table caption {\n    caption-side: bottom;\n    color: #777;\n    font-size: 85%;\n  }\n\n  table caption,\n  table td,\n  table th {\n    padding: 0.3125rem;\n    text-align: left;\n  }\n\n  table td,\n  table th {\n    border: 0;\n    border-bottom: 1px solid #ddd;\n  }\n\n  table th {\n    background-color: #f2f2f2;\n    font-weight: 600;\n  }\n\n  .btn {\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    appearance: none;\n    background-color: #fff;\n    border: 1px solid #ddd;\n    border-radius: 0.1875rem;\n    color: #333;\n    cursor: pointer;\n    display: inline-block;\n    font-family: -apple-system,BlinkMacSystemFont,Hiragino Sans GB,Roboto,Segoe UI,Microsoft Yahei,\u5FAE\u8F6F\u96C5\u9ED1,Oxygen-Sans,Ubuntu,Cantarell,Helvetica,Arial,STHeiti,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\n    font-size: 1rem;\n    line-height: 1.25;\n    margin: 0.9375rem 0 0;\n    padding: 0.3125rem 0.625rem;\n    text-align: center;\n  }\n\n  .btn:active,\n  .btn:hover {\n    background-color: #f2f2f2;\n    text-decoration: none;\n  }\n\n  .btn[disabled] {\n    cursor: default;\n    opacity: 0.5;\n    pointer-events: none;\n  }\n\n  .btn-primary {\n    background-color: #267fd9;\n    border-color: #267fd9;\n    color: #fff;\n  }\n\n  .btn-primary:active,\n  .btn-primary:hover {\n    background-color: #2273c3;\n  }\n\n  .btn-primary[disabled] {\n    cursor: default;\n    opacity: 0.5;\n    pointer-events: none;\n  }\n\n  .btn-danger {\n    background-color: #db5757;\n    border-color: #db5757;\n    color: #fff;\n  }\n\n  .btn-danger:active,\n  .btn-danger:hover {\n    background-color: #d74242;\n  }\n\n  .btn-danger[disabled] {\n    cursor: default;\n    opacity: 0.5;\n    pointer-events: none;\n  }\n\n  .btn-block {\n    display: block;\n    width: 100%;\n  }\n\n  .form {\n    margin: 0;\n  }\n\n  .form label {\n    border: 1px solid transparent;\n    cursor: pointer;\n    display: block;\n    line-height: 1.25;\n    margin-top: 0.9375rem;\n    padding-bottom: 0.3125rem;\n    padding-top: 0.3125rem;\n  }\n\n  .form [type=email],\n  .form [type=number],\n  .form [type=password],\n  .form [type=search],\n  .form [type=tel],\n  .form [type=text],\n  .form [type=url],\n  .form select,\n  .form textarea {\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    appearance: none;\n    background-color: #fff;\n    border: 1px solid #ddd;\n    border-radius: 0.1875rem;\n    color: #333;\n    display: block;\n    font-family: -apple-system,BlinkMacSystemFont,Hiragino Sans GB,Roboto,Segoe UI,Microsoft Yahei,\u5FAE\u8F6F\u96C5\u9ED1,Oxygen-Sans,Ubuntu,Cantarell,Helvetica,Arial,STHeiti,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\n    font-size: 1rem;\n    line-height: 1.25;\n    margin: 0.9375rem 0 0;\n    padding: 0.3125rem;\n    width: 100%;\n  }\n\n  .form [type=email]:focus,\n  .form [type=number]:focus,\n  .form [type=password]:focus,\n  .form [type=search]:focus,\n  .form [type=tel]:focus,\n  .form [type=text]:focus,\n  .form [type=url]:focus,\n  .form select:focus,\n  .form textarea:focus {\n    border-color: #267fd9;\n    outline: 0;\n  }\n\n  @media (max-width: 767px) {\n    .form [type=date],\n    .form [type=datetime-local],\n    .form [type=month],\n    .form [type=time],\n    .form [type=week] {\n        -moz-appearance: none;\n        -webkit-appearance: none;\n        appearance: none;\n        background-color: #fff;\n        border: 1px solid #ddd;\n        border-radius: 0.1875rem;\n        color: #333;\n        display: block;\n        font-family: -apple-system,BlinkMacSystemFont,Hiragino Sans GB,Roboto,Segoe UI,Microsoft Yahei,\u5FAE\u8F6F\u96C5\u9ED1,Oxygen-Sans,Ubuntu,Cantarell,Helvetica,Arial,STHeiti,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\n        font-size: 1rem;\n        line-height: 1.25;\n        margin: 0.9375rem 0 0;\n        padding: 0.3125rem;\n        width: 100%;\n    }\n  }\n\n  @media (max-width: 767px) {\n    .form [type=date]:focus,\n    .form [type=datetime-local]:focus,\n    .form [type=month]:focus,\n    .form [type=time]:focus,\n    .form [type=week]:focus {\n        border-color: #267fd9;\n        outline: 0;\n    }\n  }\n\n  .form [type=checkbox],\n  .form [type=radio] {\n    cursor: pointer;\n    margin: 0 0.3125rem 0 0;\n  }\n\n  .form select {\n    cursor: pointer;\n  }\n\n  .form [type=file],\n  .form [type=range] {\n    border-bottom: 1px solid transparent;\n    border-top: 1px solid transparent;\n    line-height: 1.25;\n    padding-bottom: 0.3125rem;\n    padding-top: 0.3125rem;\n    width: 100%;\n  }\n\n  .form [type=color],\n  .form [type=file],\n  .form [type=image],\n  .form [type=range] {\n    cursor: pointer;\n    display: block;\n    margin: 0.9375rem 0 0;\n  }\n\n  .form [disabled] {\n    cursor: default;\n    opacity: 0.5;\n    pointer-events: none;\n  }\n\n  .form [readonly] {\n    background-color: #f2f2f2;\n  }\n\n  .scroll-view {\n    -webkit-overflow-scrolling: touch;\n    overflow: auto;\n  }\n\n  .text-left {\n    text-align: left;\n  }\n\n  .text-center {\n    text-align: center;\n  }\n\n  .text-right {\n    text-align: right;\n  }\n\n  .text-muted {\n    color: #777;\n  }\n\n  .text-primary {\n    color: #267fd9;\n  }\n\n  .text-danger {\n    color: #db5757;\n  }\n\n  a.text-danger,\n  a.text-muted,\n  a.text-primary {\n    text-decoration: underline;\n  }\n\n  .text-small {\n    font-size: 85%;\n  }\n'], ['\n  html {\n    -moz-text-size-adjust: 100%;\n    -webkit-text-size-adjust: 100%;\n    box-sizing: border-box;\n    text-size-adjust: 100%;\n  }\n\n  *,\n  :after,\n  :before {\n    box-sizing: inherit;\n  }\n\n  body {\n    background-color: #fff;\n    color: ', ';\n    font-size: 1rem;\n    line-height: 1.5;\n    margin: 0;\n  }\n\n  body,\n  button,\n  input,\n  select,\n  textarea {\n    font-family: -apple-system,BlinkMacSystemFont,Hiragino Sans GB,Roboto,Segoe UI,Microsoft Yahei,\u5FAE\u8F6F\u96C5\u9ED1,Oxygen-Sans,Ubuntu,Cantarell,Helvetica,Arial,STHeiti,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin: 1.875rem 0 0;\n  }\n\n  address,\n  blockquote,\n  dl,\n  figure,\n  hr,\n  ol,\n  p,\n  pre,\n  table,\n  ul {\n    margin: 0.9375rem 0 0;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-weight: 600;\n  }\n\n  h1 {\n    font-size: 2rem;\n  }\n\n  h2 {\n    font-size: 1.625rem;\n  }\n\n  h3 {\n    font-size: 1.375rem;\n  }\n\n  h4 {\n    font-size: 1.25rem;\n  }\n\n  h5 {\n    font-size: 1.125rem;\n  }\n\n  h6 {\n    font-size: 1rem;\n  }\n\n  a {\n    -webkit-text-decoration-skip: objects;\n    color: ', ';\n    text-decoration: none;\n  }\n\n  a:active,\n  a:hover {\n    text-decoration: underline;\n  }\n\n  b,\n  dt,\n  strong {\n    font-weight: 600;\n  }\n\n  code,\n  kbd,\n  samp {\n    background-color: #f2f2f2;\n    font-size: 85%;\n    padding: 0.2em 0.3em;\n  }\n\n  code,\n  kbd,\n  pre,\n  samp {\n    font-family: Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;\n  }\n\n  pre {\n    -webkit-overflow-scrolling: touch;\n    background-color: #f2f2f2;\n    line-height: 1.2;\n    overflow: auto;\n    padding: 0.9375rem;\n  }\n\n  pre,\n  pre code {\n    font-size: 0.8125rem;\n  }\n\n  pre code {\n    background-color: transparent;\n    padding: 0;\n  }\n\n  blockquote {\n    border-left: 5px solid #ddd;\n    color: #777;\n    padding-left: 0.9375rem;\n  }\n\n  ol,\n  ul {\n    padding-left: 1.875rem;\n  }\n\n  dd,\n  dt,\n  ol ol,\n  ol ul,\n  ul ol,\n  ul ul {\n    margin: 0;\n  }\n\n  hr {\n    border: 0;\n    border-top: 1px solid #ddd;\n  }\n\n  small,\n  sub,\n  sup {\n    font-size: 85%;\n  }\n\n  sub,\n  sup {\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n\n  sub {\n    bottom: -.2em;\n  }\n\n  sup {\n    top: -.4em;\n  }\n\n  address,\n  time {\n    font-style: normal;\n  }\n\n  mark {\n    background-color: #ff0;\n    color: #333;\n    padding: 0 0.2em;\n  }\n\n  rt {\n    font-size: 60%;\n  }\n\n  abbr[title] {\n    -webkit-text-decoration: underline dotted;\n    border-bottom: 0;\n    text-decoration: underline;\n    text-decoration: underline dotted;\n  }\n\n  audio:not([controls]) {\n    display: none;\n    height: 0;\n  }\n\n  img {\n    border-style: none;\n    display: block;\n    max-width: 90%;\n    min-width: 20em;\n    margin-left: auto;\n    margin-right: auto;\n\n  }\n\n  audio,\n  img,\n  video {\n    max-width: 90%;\n  }\n\n  figcaption {\n    color: #777;\n    font-size: 85%;\n  }\n\n  [role=button] {\n    cursor: pointer;\n  }\n\n  [role=button],\n  a,\n  area,\n  button,\n  input,\n  label,\n  select,\n  summary,\n  textarea {\n    -ms-touch-action: manipulation;\n    touch-action: manipulation;\n  }\n\n  ::-webkit-file-upload-button,\n  [type=reset],\n  [type=submit],\n  button,\n  html [type=button] {\n    -webkit-appearance: button;\n    appearance: button;\n  }\n\n  [type=search] {\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    appearance: none;\n  }\n\n  ::-webkit-file-upload-button {\n    font: inherit;\n  }\n\n  [hidden] {\n    display: none;\n  }\n\n  fieldset {\n    border: 1px solid #ddd;\n    margin: 0.9375rem 0 0;\n    padding: 0 0.9375rem 0.9375rem;\n  }\n\n  legend {\n    padding: 0 0.2em;\n  }\n\n  optgroup {\n    color: #777;\n    font-style: normal;\n    font-weight: 400;\n  }\n\n  option {\n    color: #333;\n  }\n\n  progress {\n    max-width: 100%;\n  }\n\n  .container,\n  .container-fluid,\n  .container-wider {\n    -ms-flex-positive: 1;\n    -webkit-box-flex: 1;\n    -webkit-flex-grow: 1;\n    flex-grow: 1;\n    overflow: hidden;\n    padding: 0 0.9375rem 4em 0.9375rem;\n  }\n\n  .container {\n    max-width: 50rem;\n  }\n\n  .container-wider {\n    max-width: 75rem;\n  }\n\n  .flex-bottom,\n  .flex-center,\n  .flex-left,\n  .flex-middle,\n  .flex-right,\n  .flex-top,\n  .flex-vertical {\n    -ms-flex-flow: row nowrap;\n    -webkit-box-direction: normal;\n    -webkit-box-orient: horizontal;\n    -webkit-flex-flow: row nowrap;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    flex-flow: row nowrap;\n  }\n\n  .flex-bottom,\n  .flex-center,\n  .flex-left,\n  .flex-middle,\n  .flex-right,\n  .flex-top,\n  .flex-vertical.flex-bottom,\n  .flex-vertical.flex-center,\n  .flex-vertical.flex-left,\n  .flex-vertical.flex-middle,\n  .flex-vertical.flex-right,\n  .flex-vertical.flex-top {\n    -ms-flex-align: stretch;\n    -ms-flex-pack: start;\n    -webkit-align-items: stretch;\n    -webkit-box-align: stretch;\n    -webkit-box-pack: start;\n    -webkit-justify-content: flex-start;\n    align-items: stretch;\n    justify-content: flex-start;\n  }\n\n  .flex-center,\n  .flex-vertical.flex-middle {\n    -ms-flex-pack: center;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n    justify-content: center;\n  }\n\n  .flex-right,\n  .flex-vertical.flex-bottom {\n    -ms-flex-pack: end;\n    -webkit-box-pack: end;\n    -webkit-justify-content: flex-end;\n    justify-content: flex-end;\n  }\n\n  .flex-top,\n  .flex-vertical.flex-left {\n    -ms-flex-align: start;\n    -webkit-align-items: flex-start;\n    -webkit-box-align: start;\n    align-items: flex-start;\n  }\n\n  .flex-middle,\n  .flex-vertical.flex-center {\n    -ms-flex-align: center;\n    -webkit-align-items: center;\n    -webkit-box-align: center;\n    align-items: center;\n  }\n\n  .flex-bottom,\n  .flex-vertical.flex-right {\n    -ms-flex-align: end;\n    -webkit-align-items: flex-end;\n    -webkit-box-align: end;\n    align-items: flex-end;\n  }\n\n  .units-gap {\n    margin-left: -.46875rem;\n    margin-right: -.46875rem;\n  }\n\n  .units-gap > .unit,\n  .units-gap > .unit-0,\n  .units-gap > .unit-1,\n  .units-gap > .unit-1-2,\n  .units-gap > .unit-1-3,\n  .units-gap > .unit-1-4,\n  .units-gap > .unit-1-on-mobile,\n  .units-gap > .unit-2-3,\n  .units-gap > .unit-3-4 {\n    padding-left: 0.46875rem;\n    padding-right: 0.46875rem;\n  }\n\n  .units-gap-big {\n    margin-left: -.9375rem;\n    margin-right: -.9375rem;\n  }\n\n  .units-gap-big > .unit,\n  .units-gap-big > .unit-0,\n  .units-gap-big > .unit-1,\n  .units-gap-big > .unit-1-2,\n  .units-gap-big > .unit-1-3,\n  .units-gap-big > .unit-1-4,\n  .units-gap-big > .unit-1-on-mobile,\n  .units-gap-big > .unit-2-3,\n  .units-gap-big > .unit-3-4 {\n    padding-left: 0.9375rem;\n    padding-right: 0.9375rem;\n  }\n\n  .unit {\n    -ms-flex-positive: 1;\n    -ms-flex-preferred-size: 0;\n    -webkit-box-flex: 1;\n    -webkit-flex-basis: 0;\n    -webkit-flex-grow: 1;\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n\n  .unit-1,\n  .unit-1-2,\n  .unit-1-3,\n  .unit-1-4,\n  .unit-1-on-mobile,\n  .unit-2-3,\n  .unit-3-4 {\n    -ms-flex-negative: 0;\n    -webkit-flex-shrink: 0;\n    flex-shrink: 0;\n  }\n\n  .unit-1 {\n    -ms-flex-preferred-size: 100%;\n    -webkit-flex-basis: 100%;\n    flex-basis: 100%;\n    max-width: 100%;\n  }\n\n  .unit-1-2 {\n    -ms-flex-preferred-size: 50%;\n    -webkit-flex-basis: 50%;\n    flex-basis: 50%;\n    max-width: 50%;\n  }\n\n  .unit-1-3 {\n    -ms-flex-preferred-size: 33.33%;\n    -webkit-flex-basis: 33.33%;\n    flex-basis: 33.33%;\n    max-width: 33.33%;\n  }\n\n  .unit-2-3 {\n    -ms-flex-preferred-size: 66.67%;\n    -webkit-flex-basis: 66.67%;\n    flex-basis: 66.67%;\n    max-width: 66.67%;\n  }\n\n  .unit-1-4 {\n    -ms-flex-preferred-size: 25%;\n    -webkit-flex-basis: 25%;\n    flex-basis: 25%;\n    max-width: 25%;\n  }\n\n  .unit-3-4 {\n    -ms-flex-preferred-size: 75%;\n    -webkit-flex-basis: 75%;\n    flex-basis: 75%;\n    max-width: 75%;\n  }\n\n  .flex-vertical {\n    -ms-flex-direction: column;\n    -webkit-box-direction: normal;\n    -webkit-box-orient: vertical;\n    -webkit-flex-direction: column;\n    flex-direction: column;\n  }\n\n  .flex-vertical > .unit,\n  .flex-vertical > .unit-0,\n  .flex-vertical > .unit-1,\n  .flex-vertical > .unit-1-2,\n  .flex-vertical > .unit-1-3,\n  .flex-vertical > .unit-1-4,\n  .flex-vertical > .unit-1-on-mobile,\n  .flex-vertical > .unit-2-3,\n  .flex-vertical > .unit-3-4 {\n    max-width: none;\n  }\n\n  .flex-vertical > .unit-1 {\n    max-height: 100%;\n  }\n\n  .flex-vertical > .unit-1-2 {\n    max-height: 50%;\n  }\n\n  .flex-vertical > .unit-1-3 {\n    max-height: 33.33%;\n  }\n\n  .flex-vertical > .unit-2-3 {\n    max-height: 66.67%;\n  }\n\n  .flex-vertical > .unit-1-4 {\n    max-height: 25%;\n  }\n\n  .flex-vertical > .unit-3-4 {\n    max-height: 75%;\n  }\n\n  .flex-wrap {\n    -ms-flex-wrap: wrap;\n    -webkit-flex-wrap: wrap;\n    flex-wrap: wrap;\n  }\n\n  @media (max-width: 767px) {\n    .unit-1-on-mobile {\n        -ms-flex-preferred-size: 100%;\n        -webkit-flex-basis: 100%;\n        flex-basis: 100%;\n        max-width: 100%;\n    }\n\n    .flex-vertical > .unit-1-on-mobile {\n        max-height: 100%;\n    }\n  }\n\n  .top-gap-big {\n    margin-top: 1.875rem !important;\n  }\n\n  .top-gap {\n    margin-top: 0.9375rem !important;\n  }\n\n  .top-gap-0 {\n    margin-top: 0 !important;\n  }\n\n  @media (max-width: 767px) {\n    .hide-on-mobile {\n        display: none !important;\n    }\n  }\n\n  @media (min-width: 768px) {\n    .show-on-mobile {\n        display: none !important;\n    }\n  }\n\n  table {\n    background-color: #fff;\n    border: 0;\n    border-collapse: collapse;\n    border-spacing: 0;\n    width: 100%;\n  }\n\n  table caption {\n    caption-side: bottom;\n    color: #777;\n    font-size: 85%;\n  }\n\n  table caption,\n  table td,\n  table th {\n    padding: 0.3125rem;\n    text-align: left;\n  }\n\n  table td,\n  table th {\n    border: 0;\n    border-bottom: 1px solid #ddd;\n  }\n\n  table th {\n    background-color: #f2f2f2;\n    font-weight: 600;\n  }\n\n  .btn {\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    appearance: none;\n    background-color: #fff;\n    border: 1px solid #ddd;\n    border-radius: 0.1875rem;\n    color: #333;\n    cursor: pointer;\n    display: inline-block;\n    font-family: -apple-system,BlinkMacSystemFont,Hiragino Sans GB,Roboto,Segoe UI,Microsoft Yahei,\u5FAE\u8F6F\u96C5\u9ED1,Oxygen-Sans,Ubuntu,Cantarell,Helvetica,Arial,STHeiti,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\n    font-size: 1rem;\n    line-height: 1.25;\n    margin: 0.9375rem 0 0;\n    padding: 0.3125rem 0.625rem;\n    text-align: center;\n  }\n\n  .btn:active,\n  .btn:hover {\n    background-color: #f2f2f2;\n    text-decoration: none;\n  }\n\n  .btn[disabled] {\n    cursor: default;\n    opacity: 0.5;\n    pointer-events: none;\n  }\n\n  .btn-primary {\n    background-color: #267fd9;\n    border-color: #267fd9;\n    color: #fff;\n  }\n\n  .btn-primary:active,\n  .btn-primary:hover {\n    background-color: #2273c3;\n  }\n\n  .btn-primary[disabled] {\n    cursor: default;\n    opacity: 0.5;\n    pointer-events: none;\n  }\n\n  .btn-danger {\n    background-color: #db5757;\n    border-color: #db5757;\n    color: #fff;\n  }\n\n  .btn-danger:active,\n  .btn-danger:hover {\n    background-color: #d74242;\n  }\n\n  .btn-danger[disabled] {\n    cursor: default;\n    opacity: 0.5;\n    pointer-events: none;\n  }\n\n  .btn-block {\n    display: block;\n    width: 100%;\n  }\n\n  .form {\n    margin: 0;\n  }\n\n  .form label {\n    border: 1px solid transparent;\n    cursor: pointer;\n    display: block;\n    line-height: 1.25;\n    margin-top: 0.9375rem;\n    padding-bottom: 0.3125rem;\n    padding-top: 0.3125rem;\n  }\n\n  .form [type=email],\n  .form [type=number],\n  .form [type=password],\n  .form [type=search],\n  .form [type=tel],\n  .form [type=text],\n  .form [type=url],\n  .form select,\n  .form textarea {\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    appearance: none;\n    background-color: #fff;\n    border: 1px solid #ddd;\n    border-radius: 0.1875rem;\n    color: #333;\n    display: block;\n    font-family: -apple-system,BlinkMacSystemFont,Hiragino Sans GB,Roboto,Segoe UI,Microsoft Yahei,\u5FAE\u8F6F\u96C5\u9ED1,Oxygen-Sans,Ubuntu,Cantarell,Helvetica,Arial,STHeiti,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\n    font-size: 1rem;\n    line-height: 1.25;\n    margin: 0.9375rem 0 0;\n    padding: 0.3125rem;\n    width: 100%;\n  }\n\n  .form [type=email]:focus,\n  .form [type=number]:focus,\n  .form [type=password]:focus,\n  .form [type=search]:focus,\n  .form [type=tel]:focus,\n  .form [type=text]:focus,\n  .form [type=url]:focus,\n  .form select:focus,\n  .form textarea:focus {\n    border-color: #267fd9;\n    outline: 0;\n  }\n\n  @media (max-width: 767px) {\n    .form [type=date],\n    .form [type=datetime-local],\n    .form [type=month],\n    .form [type=time],\n    .form [type=week] {\n        -moz-appearance: none;\n        -webkit-appearance: none;\n        appearance: none;\n        background-color: #fff;\n        border: 1px solid #ddd;\n        border-radius: 0.1875rem;\n        color: #333;\n        display: block;\n        font-family: -apple-system,BlinkMacSystemFont,Hiragino Sans GB,Roboto,Segoe UI,Microsoft Yahei,\u5FAE\u8F6F\u96C5\u9ED1,Oxygen-Sans,Ubuntu,Cantarell,Helvetica,Arial,STHeiti,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\n        font-size: 1rem;\n        line-height: 1.25;\n        margin: 0.9375rem 0 0;\n        padding: 0.3125rem;\n        width: 100%;\n    }\n  }\n\n  @media (max-width: 767px) {\n    .form [type=date]:focus,\n    .form [type=datetime-local]:focus,\n    .form [type=month]:focus,\n    .form [type=time]:focus,\n    .form [type=week]:focus {\n        border-color: #267fd9;\n        outline: 0;\n    }\n  }\n\n  .form [type=checkbox],\n  .form [type=radio] {\n    cursor: pointer;\n    margin: 0 0.3125rem 0 0;\n  }\n\n  .form select {\n    cursor: pointer;\n  }\n\n  .form [type=file],\n  .form [type=range] {\n    border-bottom: 1px solid transparent;\n    border-top: 1px solid transparent;\n    line-height: 1.25;\n    padding-bottom: 0.3125rem;\n    padding-top: 0.3125rem;\n    width: 100%;\n  }\n\n  .form [type=color],\n  .form [type=file],\n  .form [type=image],\n  .form [type=range] {\n    cursor: pointer;\n    display: block;\n    margin: 0.9375rem 0 0;\n  }\n\n  .form [disabled] {\n    cursor: default;\n    opacity: 0.5;\n    pointer-events: none;\n  }\n\n  .form [readonly] {\n    background-color: #f2f2f2;\n  }\n\n  .scroll-view {\n    -webkit-overflow-scrolling: touch;\n    overflow: auto;\n  }\n\n  .text-left {\n    text-align: left;\n  }\n\n  .text-center {\n    text-align: center;\n  }\n\n  .text-right {\n    text-align: right;\n  }\n\n  .text-muted {\n    color: #777;\n  }\n\n  .text-primary {\n    color: #267fd9;\n  }\n\n  .text-danger {\n    color: #db5757;\n  }\n\n  a.text-danger,\n  a.text-muted,\n  a.text-primary {\n    text-decoration: underline;\n  }\n\n  .text-small {\n    font-size: 85%;\n  }\n']);

var _styledComponents = __webpack_require__(2);

var _variables = __webpack_require__(5);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = (0, _styledComponents.createGlobalStyle)(_templateObject, _variables.textColour, _variables.mainColour);

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.77abf598.js.map