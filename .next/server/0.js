exports.ids = [0];
exports.modules = {

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
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! google-map-react */ "google-map-react");
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Logo */ "./components/Logo/index.jsx");
var _jsxFileName = "C:\\Users\\pa160\\Desktop\\projects\\website_3N\\components\\Map\\index.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var styles = {
  backgroundColor: "rgb(237, 205, 31)",
  width: '130px',
  height: '50px',
  display: 'flex',
  justifyContent: "center",
  alignItems: "center",
  borderTopLeftRadius: "40px",
  borderTopRightRadius: "30px",
  borderBottomRightRadius: "30px"
};

var AnyReactComponent = function AnyReactComponent() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: styles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Logo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }));
};

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
          style: {
            height: '600px',
            width: '100%'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(google_map_react__WEBPACK_IMPORTED_MODULE_1___default.a, {
          bootstrapURLKeys: {
            key: 'AIzaSyBGTv9kQmJjzdshxaBdaqZFj6HqKKL81nE'
          },
          defaultCenter: this.props.center,
          defaultZoom: this.props.zoom,
          options: this.props.option,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AnyReactComponent, {
          lat: 55.643421,
          lng: 37.850379,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        })))
      );
    }
  }]);

  return SimpleMap;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(SimpleMap, "defaultProps", {
  center: {
    lat: 55.643421,
    lng: 37.850379
  },
  zoom: 15,
  option: {
    styles: [{
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#1e2d3b"
      }, {
        "visibility": "on"
      }]
    }, {
      "elementType": "labels.text",
      "stylers": [{
        "color": "#edcd75"
      }, {
        "visibility": "simplified"
      }, {
        "weight": 2.5
      }]
    }]
  }
});

/* harmony default export */ __webpack_exports__["default"] = (SimpleMap);

/***/ })

};;
//# sourceMappingURL=0.js.map