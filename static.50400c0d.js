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

var _reactStatic = __webpack_require__(1);

var _reactTable = __webpack_require__(30);

var _reactTable2 = _interopRequireDefault(_reactTable);

__webpack_require__(31);

var _Styled = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

var headers = [{ Header: 'Apparatus', accessor: 'app', maxWidth: 150 }, {
  Header: 'EG', accessor: 'eg', maxWidth: 40, style: { textAlign: 'right' }
}, { Header: 'Value', accessor: 'value', maxWidth: 70 }, { Header: 'Description', accessor: 'description', minWidth: 1400 }];

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
  var magTable = _ref.magTable;
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
      _react2.default.createElement(_reactTable2.default, { data: magTable, columns: headers })
    )
  );
});

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

var _withHtml = __webpack_require__(32);

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

var _Nav = __webpack_require__(33);

var _Nav2 = _interopRequireDefault(_Nav);

var _GlobalStyle = __webpack_require__(34);

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
  file: '/Users/lukewiwatowski/repos/lukewiwa.github.io/dist/react-static-routes.js',
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
  file: '/Users/lukewiwatowski/repos/lukewiwa.github.io/dist/react-static-routes.js',
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
  file: '/Users/lukewiwatowski/repos/lukewiwa.github.io/dist/react-static-routes.js',
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
  file: '/Users/lukewiwatowski/repos/lukewiwa.github.io/dist/react-static-routes.js',
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
  file: '/Users/lukewiwatowski/repos/lukewiwa.github.io/dist/react-static-routes.js',
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
  file: '/Users/lukewiwatowski/repos/lukewiwa.github.io/dist/react-static-routes.js',
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
  file: '/Users/lukewiwatowski/repos/lukewiwa.github.io/dist/react-static-routes.js',
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

module.exports = require("react-table");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("react-table/react-table.css");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("react-markdown/with-html");

/***/ }),
/* 33 */
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
/* 34 */
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
//# sourceMappingURL=static.50400c0d.js.map