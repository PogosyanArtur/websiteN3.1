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

/***/ "./components/AboutUs/index.jsx":
/*!**************************************!*\
  !*** ./components/AboutUs/index.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ "./components/AboutUs/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Title */ "./components/Title/index.jsx");
var _jsxFileName = "C:\\Users\\pa160\\Desktop\\projects\\websiteN3.1\\components\\AboutUs\\index.jsx";




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

/***/ "./components/AboutUs/styles.module.scss":
/*!***********************************************!*\
  !*** ./components/AboutUs/styles.module.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"AboutUs": "AboutUs_3ENAB",
	"Content": "Content_3Djav",
	"Title": "Title_sJwS8",
	"Context": "Context_3SoC0",
	"Image": "Image_rILse"
};

/***/ }),

/***/ "./components/Achievement/index.jsx":
/*!******************************************!*\
  !*** ./components/Achievement/index.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ "./components/Achievement/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\pa160\\Desktop\\projects\\websiteN3.1\\components\\Achievement\\index.jsx";



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

/***/ "./components/Achievement/styles.module.scss":
/*!***************************************************!*\
  !*** ./components/Achievement/styles.module.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"Achievement": "Achievement_1bRwX",
	"Item": "Item_1GFoU",
	"Title": "Title_13jYi",
	"Text": "Text_ZdEVy"
};

/***/ }),

/***/ "./components/Banner/index.jsx":
/*!*************************************!*\
  !*** ./components/Banner/index.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styels_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styels.module.scss */ "./components/Banner/styels.module.scss");
/* harmony import */ var _styels_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styels_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\pa160\\Desktop\\projects\\websiteN3.1\\components\\Banner\\index.jsx";



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

/***/ "./components/Banner/styels.module.scss":
/*!**********************************************!*\
  !*** ./components/Banner/styels.module.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"Banner": "Banner_1l6Dn",
	"Title": "Title_AsU-9"
};

/***/ }),

/***/ "./components/Card/index.jsx":
/*!***********************************!*\
  !*** ./components/Card/index.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ "./components/Card/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\pa160\\Desktop\\projects\\websiteN3.1\\components\\Card\\index.jsx";



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

/***/ "./components/Card/styles.module.scss":
/*!********************************************!*\
  !*** ./components/Card/styles.module.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"Card": "Card_1gkYo",
	"ImageBox": "ImageBox_2JHue",
	"Image": "Image_3VBtk",
	"Content": "Content_tZmig",
	"Label": "Label_1kcVQ",
	"Context": "Context_3FTbx",
	"Price": "Price_3QWXB"
};

/***/ }),

/***/ "./components/ContactItem/index.jsx":
/*!******************************************!*\
  !*** ./components/ContactItem/index.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_no_ssr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-no-ssr */ "react-no-ssr");
/* harmony import */ var react_no_ssr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_no_ssr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.scss */ "./components/ContactItem/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\pa160\\Desktop\\projects\\websiteN3.1\\components\\ContactItem\\index.jsx";





var ContactItem = function ContactItem(props) {
  var label = props.label,
      href = props.href,
      icon = props.icon,
      rotation = props.rotation,
      size = props.size;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, href ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: href,
    className: "".concat(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Link),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, icon && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_no_ssr__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: icon,
    size: size,
    rotation: rotation,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "".concat(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Label),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, label)) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "".concat(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Link),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, icon && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_no_ssr__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: icon,
    size: size,
    rotation: rotation,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "".concat(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Label),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, " ", label)));
};

/* harmony default export */ __webpack_exports__["default"] = (ContactItem);

/***/ }),

/***/ "./components/ContactItem/styles.module.scss":
/*!***************************************************!*\
  !*** ./components/ContactItem/styles.module.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"Link": "Link_2Umcl",
	"Label": "Label_3xLaH"
};

/***/ }),

/***/ "./components/HamburgerIcon/index.jsx":
/*!********************************************!*\
  !*** ./components/HamburgerIcon/index.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ "./components/HamburgerIcon/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\pa160\\Desktop\\projects\\websiteN3.1\\components\\HamburgerIcon\\index.jsx";



var MenuBar = function MenuBar(props) {
  var active = props.active,
      onClicked = props.onClicked,
      className = props.className;
  var MenuBarContainerStatus = active && _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Active;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "".concat(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.MenuBarContainer, " ").concat(MenuBarContainerStatus, " ").concat(className),
    onClick: onClicked,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "".concat(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.MenuBar, " ").concat(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.TopBar),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "".concat(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.MenuBar, " ").concat(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.MiddleBar),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "".concat(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.MenuBar, " ").concat(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.BottomBar),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (MenuBar);

/***/ }),

/***/ "./components/HamburgerIcon/styles.module.scss":
/*!*****************************************************!*\
  !*** ./components/HamburgerIcon/styles.module.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"MenuBarContainer": "MenuBarContainer_y4OYI",
	"MenuBar": "MenuBar_ARpca",
	"TopBar": "TopBar_18zJa",
	"topDwon-reverse": "topDwon-reverse_IxKKe",
	"MiddleBar": "MiddleBar_3Z5yb",
	"unvisiable-reverse": "unvisiable-reverse_38iTV",
	"BottomBar": "BottomBar_NQrIM",
	"bottomUp-reverse": "bottomUp-reverse_1tlhz",
	"Active": "Active_EZweA",
	"topDwon": "topDwon_2p7Za",
	"unvisiable": "unvisiable_1OnDm",
	"bottomUp": "bottomUp_1ywqk"
};

/***/ }),

/***/ "./components/Logo/index.jsx":
/*!***********************************!*\
  !*** ./components/Logo/index.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ "./components/Logo/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\pa160\\Desktop\\projects\\websiteN3.1\\components\\Logo\\index.jsx";



var Logo = function Logo() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    to: "/",
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Logo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Sinarxia");
};

/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./components/Logo/styles.module.scss":
/*!********************************************!*\
  !*** ./components/Logo/styles.module.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"Logo": "Logo_2Df94"
};

/***/ }),

/***/ "./components/Map/index.jsx":
/*!**********************************!*\
  !*** ./components/Map/index.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\pa160\\Desktop\\projects\\websiteN3.1\\components\\Map\\index.jsx";

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
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
          src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2251.6150908963155!2d37.8454563162219!3d55.64350998052426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDM4JzM2LjYiTiAzN8KwNTAnNTEuNSJF!5e0!3m2!1sen!2sru!4v1546531559497",
          width: "100%",
          height: "600",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          },
          __self: this
        }))
      );
    }
  }]);

  return SimpleMap;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SimpleMap);

/***/ }),

/***/ "./components/Navigation/index.jsx":
/*!*****************************************!*\
  !*** ./components/Navigation/index.jsx ***!
  \*****************************************/
/*! exports provided: Navigation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navigation", function() { return Navigation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_transition_group_CSSTransition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-transition-group/CSSTransition */ "react-transition-group/CSSTransition");
/* harmony import */ var react_transition_group_CSSTransition__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_transition_group_CSSTransition__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hoc_widthScreen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hoc/widthScreen */ "./hoc/widthScreen/index.jsx");
/* harmony import */ var react_no_ssr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-no-ssr */ "react-no-ssr");
/* harmony import */ var react_no_ssr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_no_ssr__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _NavigationLinks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../NavigationLinks */ "./components/NavigationLinks/index.jsx");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Logo */ "./components/Logo/index.jsx");
/* harmony import */ var _HamburgerIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../HamburgerIcon */ "./components/HamburgerIcon/index.jsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles.module.scss */ "./components/Navigation/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\pa160\\Desktop\\projects\\websiteN3.1\\components\\Navigation\\index.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var Navigation =
/*#__PURE__*/
function (_Component) {
  _inherits(Navigation, _Component);

  function Navigation() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Navigation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Navigation)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      showNavigation: false,
      items: [{
        label: "главная",
        to: "home",
        active: true
      }, {
        label: "продукты",
        to: "products",
        active: ''
      }, {
        label: "о нас",
        to: "aboutUs",
        active: ''
      }, {
        label: "контакты",
        to: "contacts",
        active: ''
      }]
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleMenuBarToggle", function () {
      _this.setState(function (prevState) {
        return {
          showNavigation: !prevState.showNavigation
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "closeNavigation", function () {
      _this.setState({
        showNavigation: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSetActive", function (e, to) {
      var items = _toConsumableArray(_this.state.items);

      items.forEach(function (item) {
        return item.active = "";
      });
      var itemIndex = items.findIndex(function (item) {
        return item.to === to;
      });
      items[itemIndex].active = true;

      _this.setState({
        items: items
      });
    });

    return _this;
  }

  _createClass(Navigation, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("resize", this.closeNavigation);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.closeNavigation);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var isMobile = this.props.screen.mdDown;
      var _this$state = this.state,
          showNavigation = _this$state.showNavigation,
          items = _this$state.items;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.Navbar),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.Container),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.LogoBox, " "),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, !showNavigation && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Logo__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      })), !isMobile && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_no_ssr__WEBPACK_IMPORTED_MODULE_3___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavigationLinks__WEBPACK_IMPORTED_MODULE_4__["default"], {
        items: items,
        onSetActive: function onSetActive(e, to) {
          return _this2.handleSetActive(e, to);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }))), isMobile && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HamburgerIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
        active: showNavigation,
        onClicked: this.handleMenuBarToggle,
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.Navbar__HamburgerIcon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_transition_group_CSSTransition__WEBPACK_IMPORTED_MODULE_1___default.a, {
        in: showNavigation,
        timeout: 400,
        mountOnEnter: true,
        unmountOnExit: true,
        classNames: {
          enter: _styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a['FadeOut-enter'],
          enterActive: _styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a['FadeOut-enter-active'],
          exitActive: _styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a['FadeOut-exit-active']
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.Navbar__Backdrop),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavigationLinks__WEBPACK_IMPORTED_MODULE_4__["default"], {
        items: items,
        view: "murky",
        className: " ".concat(_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.Navbar__Navigation, " "),
        onSetActive: function onSetActive(e, to) {
          return _this2.handleSetActive(e, to);
        },
        click: this.closeNavigation,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }))));
    }
  }]);

  return Navigation;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Object(_hoc_widthScreen__WEBPACK_IMPORTED_MODULE_2__["default"])(Navigation));

/***/ }),

/***/ "./components/Navigation/styles.module.scss":
/*!**************************************************!*\
  !*** ./components/Navigation/styles.module.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"Navbar": "Navbar_rK5rw",
	"Navbar__Backdrop": "Navbar__Backdrop_yfY_m",
	"Navbar__HamburgerIcon": "Navbar__HamburgerIcon_1nZ9R",
	"Navbar__Navigation": "Navbar__Navigation_1odtQ",
	"Container": "Container_1LEXp",
	"LogoBox": "LogoBox_2rYBP",
	"FadeOut-enter": "FadeOut-enter_1th9O",
	"FadeOut-enter-active": "FadeOut-enter-active__GGw6",
	"FadeOut-exit-active": "FadeOut-exit-active_2CEE-"
};

/***/ }),

/***/ "./components/NavigationLink/index.jsx":
/*!*********************************************!*\
  !*** ./components/NavigationLink/index.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.scss */ "./components/NavigationLink/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\pa160\\Desktop\\projects\\websiteN3.1\\components\\NavigationLink\\index.jsx";




var NavigationLink = function NavigationLink(props) {
  var label = props.label,
      to = props.to,
      view = props.view,
      active = props.active,
      onSetActive = props.onSetActive,
      click = props.click;
  var viewStatus = view ? _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a["Link_view_".concat(view)] : '';
  var activeLinkState = active ? _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Link_active : '';
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "".concat(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Link, " ").concat(viewStatus, " ").concat(activeLinkState),
    to: to,
    spy: true,
    smooth: true,
    offset: -90,
    duration: 500,
    onSetActive: onSetActive,
    delay: 10,
    onClick: click,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, label));
};

NavigationLink.defaultProps = {
  to: '/'
};
/* harmony default export */ __webpack_exports__["default"] = (NavigationLink);

/***/ }),

/***/ "./components/NavigationLink/styles.module.scss":
/*!******************************************************!*\
  !*** ./components/NavigationLink/styles.module.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"Link": "Link_3lL6O",
	"Link_active": "Link_active_yJIOP",
	"Link_view_murky": "Link_view_murky_14EcZ"
};

/***/ }),

/***/ "./components/NavigationLinks/index.jsx":
/*!**********************************************!*\
  !*** ./components/NavigationLinks/index.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ "./components/NavigationLinks/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NavigationLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../NavigationLink */ "./components/NavigationLink/index.jsx");
var _jsxFileName = "C:\\Users\\pa160\\Desktop\\projects\\websiteN3.1\\components\\NavigationLinks\\index.jsx";




var Links = function Links(props) {
  var view = props.view,
      className = props.className,
      style = props.style,
      items = props.items,
      _onSetActive = props.onSetActive,
      click = props.click;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "".concat(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.NavigationLinks, " ").concat(className),
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, items.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavigationLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: item.label,
      active: item.active,
      onSetActive: function onSetActive(e) {
        return _onSetActive(e, item.to);
      },
      to: item.to,
      key: index,
      view: view,
      click: click,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Links);

/***/ }),

/***/ "./components/NavigationLinks/styles.module.scss":
/*!*******************************************************!*\
  !*** ./components/NavigationLinks/styles.module.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"NavigationLinks": "NavigationLinks_1vYTy"
};

/***/ }),

/***/ "./components/Products/index.jsx":
/*!***************************************!*\
  !*** ./components/Products/index.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ "./components/Products/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Card */ "./components/Card/index.jsx");
var _jsxFileName = "C:\\Users\\pa160\\Desktop\\projects\\websiteN3.1\\components\\Products\\index.jsx";




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
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Cards,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, cards.map(function (card) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
      imageSrc: "/static/images/".concat(card.imageSrc),
      imageAlt: card.imageAlt,
      label: card.label,
      context: card.context,
      price: card.price,
      key: card.imageAlt,
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Card,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Products);

/***/ }),

/***/ "./components/Products/styles.module.scss":
/*!************************************************!*\
  !*** ./components/Products/styles.module.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"Title": "Title_3QJMI",
	"Cards": "Cards_2_94g",
	"Card": "Card_2Mjij"
};

/***/ }),

/***/ "./components/Title/index.jsx":
/*!************************************!*\
  !*** ./components/Title/index.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ "./components/Title/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\pa160\\Desktop\\projects\\websiteN3.1\\components\\Title\\index.jsx";



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

/***/ "./components/Title/styles.module.scss":
/*!*********************************************!*\
  !*** ./components/Title/styles.module.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"Container": "Container_15DwJ",
	"Title": "Title_a7A3e",
	"Line": "Line_5baWg",
	"Line_left": "Line_left_dcumK"
};

/***/ }),

/***/ "./components/TopLine/index.jsx":
/*!**************************************!*\
  !*** ./components/TopLine/index.jsx ***!
  \**************************************/
/*! exports provided: TopLine, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopLine", function() { return TopLine; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hoc_widthScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hoc/widthScreen */ "./hoc/widthScreen/index.jsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.scss */ "./components/TopLine/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ContactItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ContactItem */ "./components/ContactItem/index.jsx");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_contacts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/contacts */ "./data/contacts.js");
var _jsxFileName = "C:\\Users\\pa160\\Desktop\\projects\\websiteN3.1\\components\\TopLine\\index.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var TopLine =
/*#__PURE__*/
function (_Component) {
  _inherits(TopLine, _Component);

  function TopLine() {
    _classCallCheck(this, TopLine);

    return _possibleConstructorReturn(this, _getPrototypeOf(TopLine).apply(this, arguments));
  }

  _createClass(TopLine, [{
    key: "render",
    value: function render() {
      var isMobile = this.props.screen.smDown;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.TopLine,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Container,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ContactItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
        label: _data_contacts__WEBPACK_IMPORTED_MODULE_5__["default"].tel1.name,
        href: _data_contacts__WEBPACK_IMPORTED_MODULE_5__["default"].tel1.href,
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPhone"],
        size: "lg",
        rotation: 90,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), !isMobile && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ContactItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
        label: _data_contacts__WEBPACK_IMPORTED_MODULE_5__["default"].mail1.name,
        href: _data_contacts__WEBPACK_IMPORTED_MODULE_5__["default"].mail1.href,
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faEnvelope"],
        size: "lg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      })));
    }
  }]);

  return TopLine;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Object(_hoc_widthScreen__WEBPACK_IMPORTED_MODULE_1__["default"])(TopLine));

/***/ }),

/***/ "./components/TopLine/styles.module.scss":
/*!***********************************************!*\
  !*** ./components/TopLine/styles.module.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"TopLine": "TopLine_2IRm-",
	"Container": "Container_3aHX6"
};

/***/ }),

/***/ "./data/contacts.js":
/*!**************************!*\
  !*** ./data/contacts.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var contacts = {
  tel1: {
    name: "+7 (968) 3 903 903",
    href: "tel:+79683903903"
  },
  mail1: {
    name: "pa160290@yandex.ru",
    href: "mailto:pa160290@yandex.ru"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (contacts);

/***/ }),

/***/ "./hoc/widthScreen/index.jsx":
/*!***********************************!*\
  !*** ./hoc/widthScreen/index.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\pa160\\Desktop\\projects\\websiteN3.1\\hoc\\widthScreen\\index.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var WidthScreen = function WidthScreen(WrappedComponent) {
  return (
    /*#__PURE__*/
    function (_Component) {
      _inherits(_class2, _Component);

      function _class2() {
        var _getPrototypeOf2;

        var _this;

        _classCallCheck(this, _class2);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_class2)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
          smDown: false,
          mdDown: false,
          lgDown: false,
          xlDown: false,
          hdDown: false,
          xsUp: false,
          smUp: false,
          mdUp: false,
          lgUp: false,
          xlUp: false,
          hdUp: false
        });

        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleWindowResize", function () {
          _this.setState({
            smDown: window.innerWidth < 600,
            mdDown: window.innerWidth < 960,
            lgDown: window.innerWidth < 1280,
            xlDown: window.innerWidth < 1920,
            hdDown: window.innerWidth < 2400,
            xsUp: window.innerWidth > 0,
            smUp: window.innerWidth > 600,
            mdUp: window.innerWidth > 960,
            lgUp: window.innerWidth > 1280,
            xlUp: window.innerWidth > 1920,
            hdUp: window.innerWidth > 2400
          });
        });

        return _this;
      }

      _createClass(_class2, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.handleWindowResize();
          window.addEventListener("resize", this.handleWindowResize);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          window.removeEventListener("resize", this.handleWindowResize);
        }
      }, {
        key: "render",
        value: function render() {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, _extends({
            screen: this.state
          }, this.props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            },
            __self: this
          }));
        }
      }]);

      return _class2;
    }(react__WEBPACK_IMPORTED_MODULE_0__["Component"])
  );
};

/* harmony default export */ __webpack_exports__["default"] = (WidthScreen);

/***/ }),

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
/* harmony import */ var react_no_ssr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-no-ssr */ "react-no-ssr");
/* harmony import */ var react_no_ssr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_no_ssr__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Banner */ "./components/Banner/index.jsx");
/* harmony import */ var _components_Products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Products */ "./components/Products/index.jsx");
/* harmony import */ var _components_AboutUs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/AboutUs */ "./components/AboutUs/index.jsx");
/* harmony import */ var _components_Achievement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Achievement */ "./components/Achievement/index.jsx");
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Navigation */ "./components/Navigation/index.jsx");
/* harmony import */ var _components_TopLine__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/TopLine */ "./components/TopLine/index.jsx");
/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Title */ "./components/Title/index.jsx");
/* harmony import */ var _components_Map__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Map */ "./components/Map/index.jsx");
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




var Layout = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(function () {
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
        lineNumber: 7
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
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TopLine__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navigation__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Banner__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Title__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "\u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Products__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AboutUs__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Achievement__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Title__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "\u043A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_no_ssr__WEBPACK_IMPORTED_MODULE_1___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Map__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      })));
    }
  }]);

  return index;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (index);

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