module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static\\development\\pages\\index.js": 0
/******/ 	};
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_Banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Banner */ "./src/components/Banner/index.jsx");
/* harmony import */ var _src_components_Products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Products */ "./src/components/Products/index.jsx");
/* harmony import */ var _src_components_AboutUs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/AboutUs */ "./src/components/AboutUs/index.jsx");
/* harmony import */ var _src_components_Contacts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/Contacts */ "./src/components/Contacts/index.jsx");
/* harmony import */ var _src_components_Achievement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/Achievement */ "./src/components/Achievement/index.jsx");
var _jsxFileName = "C:\\Users\\pa160\\Desktop\\projects\\websiteN3.1\\pages\\index.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Layout = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(function () {
  return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../layout */ "./layout/index.jsx"));
}, {
  loading: function loading() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      style: {
        fontSize: '50px',
        color: 'red',
        textAlign: 'center'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, "Art jan privet");
  },
  ssr: true,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../layout */ "./layout/index.jsx")];
    },
    modules: ['../layout']
  }
});






var index =
/*#__PURE__*/
function (_Component) {
  _inherits(index, _Component);

  function index() {
    _classCallCheck(this, index);

    return _possibleConstructorReturn(this, _getPrototypeOf(index).apply(this, arguments));
  }

  _createClass(index, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Layout, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_Banner__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_Products__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_AboutUs__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_Achievement__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_Contacts__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }));
    }
  }]);

  return index;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./src/components/AboutUs/index.jsx":
/*!******************************************!*\
  !*** ./src/components/AboutUs/index.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/AboutUs/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Title */ "./src/components/Title/index.jsx");
var _jsxFileName = "C:\\Users\\pa160\\Desktop\\projects\\websiteN3.1\\src\\components\\AboutUs\\index.jsx";




var AboutUs = function AboutUs() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    id: "aboutUs",
    className: "".concat(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.AboutUs),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "".concat(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Content),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Title__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "".concat(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Title),
    lineLeft: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "\u043E \u043D\u0430\u0441"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "".concat(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Context),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "\u042D\u0442\u043E \u0442\u0435\u043A\u0441\u0442. \u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043E\u0434\u0438\u043D \u0440\u0430\u0437 \u0438 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \xAB\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0442\u0435\u043A\u0441\u0442\xBB \u0438\u043B\u0438 \u043F\u0440\u043E\u0441\u0442\u043E \u043A\u043B\u0438\u043A\u043D\u0438\u0442\u0435 \u0434\u0432\u0430\u0436\u0434\u044B, \u0447\u0442\u043E\u0431\u044B \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0432\u043E\u0439 \u0442\u0435\u043A\u0441\u0442 \u0438 \u043D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u0448\u0440\u0438\u0444\u0442. \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u0435\u0433\u043E \u0432 \u043B\u044E\u0431\u043E\u0435 \u043C\u0435\u0441\u0442\u043E \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435. \u0420\u0430\u0441\u0441\u043A\u0430\u0436\u0438\u0442\u0435 \u043F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u044F\u043C \u0441\u0430\u0439\u0442\u0430 \u043E \u0441\u0435\u0431\u0435. \u0417\u0434\u0435\u0441\u044C \u0431\u0443\u0434\u0435\u0442 \u0443\u0434\u0430\u0447\u043D\u043E \u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C\u0441\u044F \u0442\u0435\u043A\u0441\u0442 \u043E \u0432\u0430\u0448\u0435\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0438 \u0443\u0441\u043B\u0443\u0433\u0430\u0445. \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u044D\u0442\u0443 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C, \u0447\u0442\u043E\u0431\u044B \u0432\u044B\u0433\u043E\u0434\u043D\u043E \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0441\u0435\u0431\u044F \u0438 \u0441\u0432\u043E\u044E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044E \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C. \u0420\u0430\u0441\u0441\u043A\u0430\u0436\u0438\u0442\u0435 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u0443\u044E \u0438\u0441\u0442\u043E\u0440\u0438\u044E, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u043A\u0430\u043A \u0432\u0430\u043C \u0432 \u0433\u043E\u043B\u043E\u0432\u0443 \u043F\u0440\u0438\u0448\u043B\u0430 \u0438\u0434\u0435\u044F \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u0434\u0435\u043B\u0430, \u0438 \u043E\u0431\u044A\u044F\u0441\u043D\u0438\u0442\u0435, \u0432 \u0447\u0435\u043C \u0437\u0430\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F \u0432\u0430\u0448\u0435 \u043F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u043E \u043F\u0435\u0440\u0435\u0434 \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u0430\u043C\u0438.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "".concat(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Image),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (AboutUs);

/***/ }),

/***/ "./src/components/AboutUs/styles.module.scss":
/*!***************************************************!*\
  !*** ./src/components/AboutUs/styles.module.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"AboutUs": "AboutUs_eMe8p",
	"Content": "Content_mAOE9",
	"Title": "Title_1xEgE",
	"Context": "Context_3Qjin",
	"Image": "Image_1e_nn"
};

/***/ }),

/***/ "./src/components/Achievement/index.jsx":
/*!**********************************************!*\
  !*** ./src/components/Achievement/index.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/Achievement/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\pa160\\Desktop\\projects\\websiteN3.1\\src\\components\\Achievement\\index.jsx";



var Achievement = function Achievement() {
  var items = [{
    title: '2003',
    text: 'Год основания'
  }, {
    title: '100 000',
    text: 'Продажи в год'
  }];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "".concat(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Achievement),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, items.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "".concat(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Item),
      key: item.text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "".concat(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Title),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, item.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
      className: "".concat(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Text),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, item.text));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Achievement);

/***/ }),

/***/ "./src/components/Achievement/styles.module.scss":
/*!*******************************************************!*\
  !*** ./src/components/Achievement/styles.module.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"Achievement": "Achievement_77XBQ",
	"Item": "Item_1Ghbo",
	"Title": "Title_1p4Ax",
	"Text": "Text_u42Fs"
};

/***/ }),

/***/ "./src/components/Banner/index.jsx":
/*!*****************************************!*\
  !*** ./src/components/Banner/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styels_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styels.module.scss */ "./src/components/Banner/styels.module.scss");
/* harmony import */ var _styels_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styels_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\pa160\\Desktop\\projects\\websiteN3.1\\src\\components\\Banner\\index.jsx";



var Banner = function Banner() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: "".concat(_styels_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Banner),
    id: "home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "".concat(_styels_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Title),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "\u043B\u0438\u0434\u0435\u0440\u044B \u0432 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u0430\u0441\u0444\u0430\u043B\u044C\u0442\u043E\u0431\u0435\u0442\u043E\u043D\u043E\u0439 \u043A\u0440\u043E\u0448\u043A\u0438"));
};

/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ }),

/***/ "./src/components/Banner/styels.module.scss":
/*!**************************************************!*\
  !*** ./src/components/Banner/styels.module.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"Banner": "Banner_1OkaK",
	"Title": "Title_38YA2"
};

/***/ }),

/***/ "./src/components/Card/index.jsx":
/*!***************************************!*\
  !*** ./src/components/Card/index.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/Card/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\pa160\\Desktop\\projects\\websiteN3.1\\src\\components\\Card\\index.jsx";



var Card = function Card(props) {
  var imageSrc = props.imageSrc,
      imageAlt = props.imageAlt,
      label = props.label,
      context = props.context,
      price = props.price,
      className = props.className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "".concat(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Card, " ").concat(className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "".concat(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.ImageBox),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "".concat(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Image),
    src: imageSrc,
    alt: imageAlt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "".concat(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Content),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "".concat(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Label),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, " ", label, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "".concat(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Context),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, " ", context, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "".concat(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Price),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, price, " \u0440\u0443\u0431.")));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./src/components/Card/styles.module.scss":
/*!************************************************!*\
  !*** ./src/components/Card/styles.module.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"Card": "Card_3afk8",
	"ImageBox": "ImageBox_1NmOc",
	"Image": "Image_3F2oV",
	"Content": "Content_3G91V",
	"Label": "Label_1p9Jh",
	"Context": "Context_3wUmG",
	"Price": "Price_2c2xI"
};

/***/ }),

/***/ "./src/components/Contacts/index.jsx":
/*!*******************************************!*\
  !*** ./src/components/Contacts/index.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Title */ "./src/components/Title/index.jsx");
/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Map */ "./src/components/Map/index.jsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/Contacts/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\pa160\\Desktop\\projects\\websiteN3.1\\src\\components\\Contacts\\index.jsx";





var Contacts = function Contacts() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    id: "contacts",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Title__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "\u041A\u041E\u041D\u0422\u0410\u041A\u0422\u042B"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Map__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "".concat(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Map),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Contacts);

/***/ }),

/***/ "./src/components/Contacts/styles.module.scss":
/*!****************************************************!*\
  !*** ./src/components/Contacts/styles.module.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"Map": "Map_2ljEU"
};

/***/ }),

/***/ "./src/components/Map/index.jsx":
/*!**************************************!*\
  !*** ./src/components/Map/index.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\pa160\\Desktop\\projects\\websiteN3.1\\src\\components\\Map\\index.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var SimpleMap =
/*#__PURE__*/
function (_Component) {
  _inherits(SimpleMap, _Component);

  function SimpleMap() {
    _classCallCheck(this, SimpleMap);

    return _possibleConstructorReturn(this, _getPrototypeOf(SimpleMap).apply(this, arguments));
  }

  _createClass(SimpleMap, [{
    key: "render",
    value: function render() {
      return (// Important! Always set the container height explicitly
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: this.props.className,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 7
          },
          __self: this
        })
      );
    }
  }]);

  return SimpleMap;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SimpleMap);

/***/ }),

/***/ "./src/components/Products/index.jsx":
/*!*******************************************!*\
  !*** ./src/components/Products/index.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/Products/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Title */ "./src/components/Title/index.jsx");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Card */ "./src/components/Card/index.jsx");
var _jsxFileName = "C:\\Users\\pa160\\Desktop\\projects\\websiteN3.1\\src\\components\\Products\\index.jsx";





var Products = function Products() {
  var cards = [{
    imageSrc: 'kroshka.jpg',
    imageAlt: 'асфальтобетонная крошка',
    label: 'асфальтобетонная крошка',
    context: 'Это текст. Нажмите один раз и выберите «Редактировать текст» или просто дважды кликните, чтобы добавить свой текст и настроить шрифт.',
    price: '600'
  }, {
    imageSrc: 'skol.jpg',
    imageAlt: 'асфальтобетонный скол',
    label: 'асфальтобетонный скол',
    context: 'Это текст. Нажмите один раз и выберите «Редактировать текст» или просто дважды кликните, чтобы добавить свой текст и настроить шрифт.',
    price: '400'
  }];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    id: "products",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Title__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "\u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Cards,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, cards.map(function (card) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
      imageSrc: "/static/images/".concat(card.imageSrc),
      imageAlt: card.imageAlt,
      label: card.label,
      context: card.context,
      price: card.price,
      key: card.imageAlt,
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Card,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Products);

/***/ }),

/***/ "./src/components/Products/styles.module.scss":
/*!****************************************************!*\
  !*** ./src/components/Products/styles.module.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"Title": "Title_2Eke5",
	"Cards": "Cards_uzctF",
	"Card": "Card_2oNfe"
};

/***/ }),

/***/ "./src/components/Title/index.jsx":
/*!****************************************!*\
  !*** ./src/components/Title/index.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/Title/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\pa160\\Desktop\\projects\\websiteN3.1\\src\\components\\Title\\index.jsx";



var Title = function Title(props) {
  var children = props.children,
      className = props.className,
      lineLeft = props.lineLeft;
  var lineToLeft = lineLeft && _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Line_left;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "".concat(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Container, " ").concat(className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "".concat(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Title),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "".concat(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Line, " ").concat(lineToLeft),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ }),

/***/ "./src/components/Title/styles.module.scss":
/*!*************************************************!*\
  !*** ./src/components/Title/styles.module.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"Container": "Container_3uZSH",
	"Title": "Title_PcmJ9",
	"Line": "Line_1Mey8",
	"Line_left": "Line_left_AVYYZ"
};

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.jsx */"./pages/index.jsx");


/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-no-ssr":
/*!*******************************!*\
  !*** external "react-no-ssr" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-no-ssr");

/***/ }),

/***/ "react-scroll":
/*!*******************************!*\
  !*** external "react-scroll" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scroll");

/***/ }),

/***/ "react-transition-group/CSSTransition":
/*!*******************************************************!*\
  !*** external "react-transition-group/CSSTransition" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-transition-group/CSSTransition");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map