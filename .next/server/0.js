exports.ids = [0];
exports.modules = {

/***/ "./layout/index.jsx":
/*!**************************!*\
  !*** ./layout/index.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./layout/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_components_Navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Navigation */ "./src/components/Navigation/index.jsx");
/* harmony import */ var _src_components_TopLine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/TopLine */ "./src/components/TopLine/index.jsx");
var _jsxFileName = "C:\\Users\\pa160\\Desktop\\projects\\websiteN3.1\\layout\\index.jsx";






var Layout = function Layout(props) {
  var children = props.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Dancing+Script:700|PT+Sans:400,400i,700",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "React App")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_TopLine__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_Navigation__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./layout/style.scss":
/*!***************************!*\
  !*** ./layout/style.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/ContactItem/index.jsx":
/*!**********************************************!*\
  !*** ./src/components/ContactItem/index.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/ContactItem/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\pa160\\Desktop\\projects\\websiteN3.1\\src\\components\\ContactItem\\index.jsx";




var ContactItem = function ContactItem(props) {
  var label = props.label,
      href = props.href,
      icon = props.icon,
      rotation = props.rotation,
      size = props.size;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, href ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: href,
    className: "".concat(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Link),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, icon && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: icon,
    size: size,
    rotation: rotation,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "".concat(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Label),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, label)) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "".concat(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Link),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, icon && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: icon,
    size: size,
    rotation: rotation,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "".concat(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Label),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, label)));
};

/* harmony default export */ __webpack_exports__["default"] = (ContactItem);

/***/ }),

/***/ "./src/components/ContactItem/styles.module.scss":
/*!*******************************************************!*\
  !*** ./src/components/ContactItem/styles.module.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"Link": "Link_Rm16z",
	"Label": "Label_1pHCq"
};

/***/ }),

/***/ "./src/components/ContactMail/index.jsx":
/*!**********************************************!*\
  !*** ./src/components/ContactMail/index.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ContactItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ContactItem */ "./src/components/ContactItem/index.jsx");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\pa160\\Desktop\\projects\\websiteN3.1\\src\\components\\ContactMail\\index.jsx";




var index = function index(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ContactItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: 'pog0290@gmail.com',
    href: "mailto:pog0290@gmail.com",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEnvelope"],
    size: "lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./src/components/ContactTelephone/index.jsx":
/*!***************************************************!*\
  !*** ./src/components/ContactTelephone/index.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ContactItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ContactItem */ "./src/components/ContactItem/index.jsx");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\pa160\\Desktop\\projects\\websiteN3.1\\src\\components\\ContactTelephone\\index.jsx";




var index = function index() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ContactItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: '+7 (968) 3 907 907',
    href: "tel:+79683907907",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPhone"],
    size: "lg",
    rotation: 90,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./src/components/HamburgerIcon/index.jsx":
/*!************************************************!*\
  !*** ./src/components/HamburgerIcon/index.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/HamburgerIcon/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\pa160\\Desktop\\projects\\websiteN3.1\\src\\components\\HamburgerIcon\\index.jsx";



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

/***/ "./src/components/HamburgerIcon/styles.module.scss":
/*!*********************************************************!*\
  !*** ./src/components/HamburgerIcon/styles.module.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"MenuBarContainer": "MenuBarContainer_2pRv9",
	"MenuBar": "MenuBar_1Xz8C",
	"TopBar": "TopBar_8YrJM",
	"topDwon-reverse": "topDwon-reverse_VyOxT",
	"MiddleBar": "MiddleBar_3sb_U",
	"unvisiable-reverse": "unvisiable-reverse_1ZGgN",
	"BottomBar": "BottomBar_1MzxQ",
	"bottomUp-reverse": "bottomUp-reverse_1_3tg",
	"Active": "Active_2IHbw",
	"topDwon": "topDwon_sMmgq",
	"unvisiable": "unvisiable_33k6M",
	"bottomUp": "bottomUp_vzqtV"
};

/***/ }),

/***/ "./src/components/Logo/index.jsx":
/*!***************************************!*\
  !*** ./src/components/Logo/index.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/Logo/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\pa160\\Desktop\\projects\\websiteN3.1\\src\\components\\Logo\\index.jsx";



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

/***/ "./src/components/Logo/styles.module.scss":
/*!************************************************!*\
  !*** ./src/components/Logo/styles.module.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"Logo": "Logo_auwYB"
};

/***/ }),

/***/ "./src/components/Navigation/index.jsx":
/*!*********************************************!*\
  !*** ./src/components/Navigation/index.jsx ***!
  \*********************************************/
/*! exports provided: Navbar, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navbar", function() { return Navbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_transition_group_CSSTransition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-transition-group/CSSTransition */ "react-transition-group/CSSTransition");
/* harmony import */ var react_transition_group_CSSTransition__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_transition_group_CSSTransition__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _WidthScreen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../WidthScreen */ "./src/components/WidthScreen/index.jsx");
/* harmony import */ var _NavigationLinks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../NavigationLinks */ "./src/components/NavigationLinks/index.jsx");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Logo */ "./src/components/Logo/index.jsx");
/* harmony import */ var _HamburgerIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../HamburgerIcon */ "./src/components/HamburgerIcon/index.jsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/Navigation/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\pa160\\Desktop\\projects\\websiteN3.1\\src\\components\\Navigation\\index.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var Navbar =
/*#__PURE__*/
function (_Component) {
  _inherits(Navbar, _Component);

  function Navbar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Navbar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Navbar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      showNavigation: false,
      items: [{
        label: "главная",
        to: "/",
        active: true
      }, {
        label: "продукты",
        to: "/",
        active: false
      }, {
        label: "о нас",
        to: "/",
        active: false
      }, {
        label: "контакты",
        to: "/",
        active: false
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

    return _this;
  }

  _createClass(Navbar, [{
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
      var isMobile = this.props.screen.mdDown;
      var _this$state = this.state,
          showNavigation = _this$state.showNavigation,
          items = _this$state.items;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Navbar),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Container),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.LogoBox, " "),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, !showNavigation && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Logo__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      })), !isMobile && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavigationLinks__WEBPACK_IMPORTED_MODULE_3__["default"], {
        items: items,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      })), isMobile && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HamburgerIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
        active: showNavigation,
        onClicked: this.handleMenuBarToggle,
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Navbar__HamburgerIcon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_transition_group_CSSTransition__WEBPACK_IMPORTED_MODULE_1___default.a, {
        in: showNavigation,
        timeout: 400,
        mountOnEnter: true,
        unmountOnExit: true,
        classNames: {
          enter: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a['FadeOut-enter'],
          enterActive: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a['FadeOut-enter-active'],
          exitActive: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a['FadeOut-exit-active']
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Navbar__Backdrop),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavigationLinks__WEBPACK_IMPORTED_MODULE_3__["default"], {
        items: items,
        view: "murky",
        className: " ".concat(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Navbar__Navigation, " "),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }))));
    }
  }]);

  return Navbar;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Object(_WidthScreen__WEBPACK_IMPORTED_MODULE_2__["default"])(Navbar));

/***/ }),

/***/ "./src/components/Navigation/styles.module.scss":
/*!******************************************************!*\
  !*** ./src/components/Navigation/styles.module.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"Navbar": "Navbar_23D1J",
	"Navbar__Backdrop": "Navbar__Backdrop_1CxUS",
	"Navbar__HamburgerIcon": "Navbar__HamburgerIcon_D9SfB",
	"Navbar__Navigation": "Navbar__Navigation_2a00D",
	"Container": "Container_9n1mS",
	"LogoBox": "LogoBox_3kTZA",
	"FadeOut-enter": "FadeOut-enter_2kxhW",
	"FadeOut-enter-active": "FadeOut-enter-active_31S7C",
	"FadeOut-exit-active": "FadeOut-exit-active_1YA7V"
};

/***/ }),

/***/ "./src/components/NavigationLink/index.jsx":
/*!*************************************************!*\
  !*** ./src/components/NavigationLink/index.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/NavigationLink/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\pa160\\Desktop\\projects\\websiteN3.1\\src\\components\\NavigationLink\\index.jsx";



var NavigationLink = function NavigationLink(props) {
  var label = props.label,
      to = props.to,
      view = props.view,
      active = props.active;
  var viewStatus = view && _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["Link_view_".concat(view)];
  var activeLinkState = active && _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Link_active;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "".concat(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Link, " ").concat(viewStatus, " ").concat(activeLinkState),
    to: to,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, label));
};

NavigationLink.defaultProps = {
  to: '/'
};
/* harmony default export */ __webpack_exports__["default"] = (NavigationLink);

/***/ }),

/***/ "./src/components/NavigationLink/styles.module.scss":
/*!**********************************************************!*\
  !*** ./src/components/NavigationLink/styles.module.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"Link": "Link_29Yi-",
	"Link_active": "Link_active_QO1bB",
	"Link_view_murky": "Link_view_murky_2TJI2"
};

/***/ }),

/***/ "./src/components/NavigationLinks/index.jsx":
/*!**************************************************!*\
  !*** ./src/components/NavigationLinks/index.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/NavigationLinks/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NavigationLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../NavigationLink */ "./src/components/NavigationLink/index.jsx");
var _jsxFileName = "C:\\Users\\pa160\\Desktop\\projects\\websiteN3.1\\src\\components\\NavigationLinks\\index.jsx";




var Links = function Links(props) {
  var view = props.view,
      className = props.className,
      style = props.style,
      items = props.items;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "".concat(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.NavigationLinks, " ").concat(className),
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, items.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavigationLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: item.label,
      active: item.active,
      to: item.to,
      key: index,
      view: view,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Links);

/***/ }),

/***/ "./src/components/NavigationLinks/styles.module.scss":
/*!***********************************************************!*\
  !*** ./src/components/NavigationLinks/styles.module.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"NavigationLinks": "NavigationLinks_1Z1mE"
};

/***/ }),

/***/ "./src/components/TopLine/index.jsx":
/*!******************************************!*\
  !*** ./src/components/TopLine/index.jsx ***!
  \******************************************/
/*! exports provided: TopLine, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopLine", function() { return TopLine; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _WidthScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../WidthScreen */ "./src/components/WidthScreen/index.jsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/TopLine/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ContactTelephone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ContactTelephone */ "./src/components/ContactTelephone/index.jsx");
/* harmony import */ var _ContactMail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ContactMail */ "./src/components/ContactMail/index.jsx");
var _jsxFileName = "C:\\Users\\pa160\\Desktop\\projects\\websiteN3.1\\src\\components\\TopLine\\index.jsx";

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
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Container,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ContactTelephone__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }), !isMobile && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ContactMail__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      })));
    }
  }]);

  return TopLine;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Object(_WidthScreen__WEBPACK_IMPORTED_MODULE_1__["default"])(TopLine));

/***/ }),

/***/ "./src/components/TopLine/styles.module.scss":
/*!***************************************************!*\
  !*** ./src/components/TopLine/styles.module.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"TopLine": "TopLine_1oZuV",
	"Container": "Container_iZtLR"
};

/***/ }),

/***/ "./src/components/WidthScreen/index.jsx":
/*!**********************************************!*\
  !*** ./src/components/WidthScreen/index.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\pa160\\Desktop\\projects\\websiteN3.1\\src\\components\\WidthScreen\\index.jsx";

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

/***/ })

};;
//# sourceMappingURL=0.js.map